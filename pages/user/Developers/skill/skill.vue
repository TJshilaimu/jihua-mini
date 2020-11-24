<template>
	<view class="skillDisplay">
		<view class="middleContent">
			<scroll-view scroll-y="true" class="scrollY" @scroll="scrollItem">
				<view class="goodSkill">
					<view class="goodSkillD">
						<view class="titleH">擅长技术</view>
						<u-icon name="plus-circle" class="u-margin-right-20" size="50" @click="skillAdd"></u-icon>
					</view>
					<view v-if="tabEmpty">
						<text class="tagText tagAdd" @click="skillAdd">添加标签</text>
					</view>
					<view v-if="!tabEmpty">
						<text class="tagText"  v-for="(item,index) in goodSkill" :key="index">{{item}}</text>
					</view>
				</view>
				<!-- 个人介绍 -->
				<view class="introduce goodSkill">
					<view class="goodSkillD">
						<view class="titleH">个人介绍</view>
						<u-icon name="edit-pen" class="u-margin-right-20" size="48" @click="personalUpdata"></u-icon>
					</view>
					<view class="introduceEmpty" v-if="introduceEmpty">
						<view class="introduceAdd">
							<text class="introduceAdd1">添加个人介绍</text>
							<text class="understand">让大家尽快了解你</text>
							<u-icon name="plus-circle" class="u-margin-right-20" size="48" @click="personalUpdata"></u-icon>
						</view>
						<view class="imgBox">
						</view>
						
					</view>
					<view class="contentBox" v-if="!introduceEmpty">
						<scroll-view scroll-y="true" >
							{{introduce}}
						</scroll-view>
					</view>
				</view>
				<!-- 工作经历 -->
				<view class="workExperience goodSkill" >
					<view class="goodSkillD">
						<view class="titleH">工作经历</view>
						<u-icon name="plus-circle" class="u-margin-right-20" size="50" @click="workAdd"></u-icon>
					</view>
					<view class="introduceEmpty" v-if="workEmpty">
						<view class="introduceAdd">
							<text class="introduceAdd1">添加工作经历</text>
							<text class="understand">让大家尽快知道你的能力</text>
							<u-icon name="plus-circle" class="u-margin-right-20" size="48" @click="workAdd"></u-icon>
						</view>
						<view class="imgBox1">
						</view>
						
					</view>
					<view v-if="!workEmpty">
						<view v-for="(item,index) in workExperience" :key="index">
							<view class="workDetail" v-show="isOpen || index < max">
								<view class="company">
									<text class="companyName">{{item.companyName}}</text>
									<text class="update" @click="update(item.workId)">编辑</text>
								</view>
								<text class="workType">{{item.jobtitle}}</text>
								<view class="workTime">{{item.startTime}}-{{item.endTime}}</view>
								<view class="contentBox">
									<scroll-view scroll-y="true" >
										{{item.jubduties}}
									</scroll-view>
								</view>
							</view>	
						</view>
						<view class="openOut" v-show="!isOpen && workExperience.length > max" @click="isOpen = !isOpen">展开全部<image :src="open"></image></view>
						<view class="openOut" v-show="isOpen && workExperience.length > max" @click="isOpen = !isOpen">收起<image :src="close"></image></view>
					</view>
					
				</view>
				<!-- 教育经历 -->
				<view class="educationExperience goodSkill">
					<view class="goodSkillD">
						<view class="titleH">教育经历</view>
						<u-icon name="plus-circle" class="u-margin-right-20" size="50" @click="educationAdd"></u-icon>
					</view>
					<view class="introduceEmpty" v-if="educationEmpty">
						<view class="introduceAdd">
							<text class="introduceAdd1">添加教育经历</text>
							<text class="understand">让大家尽快知道你的能力</text>
							<u-icon name="plus-circle" class="u-margin-right-20" size="48" @click="educationAdd"></u-icon>
						</view>
						<view class="imgBox1">
						</view>
						
					</view>
					<view v-if="!educationEmpty">
						<view class="workDetail" v-for="(item1,index1) in educationExperience" :key="index1">
							<view class="company">
								<text class="companyName">{{item1.schoolName}}</text>
								<text class="update" @click="updateEdu(item1.id)">编辑</text>
							</view>
							<view  class="workType">
								<text>{{item1.education}}</text>
								<text>{{item1.major}}</text>
							</view>
							<view class="workTime">{{item1.startTime}}-{{item1.endTime}}</view>
							<view class="contentBox">
								<scroll-view scroll-y="true" >
									{{item1.synopsis}}
								</scroll-view>
							</view>
							
						</view>
					</view>			
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				max: 2, // 默认最多显示的个数；最大行数*每行显示的个数 Number
				isOpen: false, // 是否展开全部信息的标识 Boolean 默认false
				tabEmpty:true,
				introduceEmpty:true,
				workEmpty:true,
				educationEmpty:true,
				workExperience:"",
				goodSkill:'',
				introduce:'',
				educationExperience:''
				
			}
		},
		// 页面展示生命周期
		onShow: function() {
			let that = this;
			console.log(0)
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.phone = res.data
					this.$u.api.selectFindSkills({
						phone:this.phone
					}).then(res =>{
						this.goodSkill = res.data
						let length = res.data.length
						if(length>0){
							that.tabEmpty = false
						}else{
							that.tabEmpty = true
						}
						console.log('goodSkill', res)
					})
					this.$u.api.selectFindWork({
						phone:this.phone
					}).then(res =>{
						this.workExperience = res.data
						let length = res.data.length
						console.log(length,'1')
						if(length>0){
							that.workEmpty = false
						}else{
							that.workEmpty = true
						}
						console.log('workExperience', res)
					})
					this.$u.api.selectFindPersonal({
						phone:this.phone
					}).then(res =>{
						this.introduce = res.data
						let length = res.data.length
						if(length>0){
							that.introduceEmpty = false
						}else{
							that.introduceEmpty = true
						}
						console.log('phone', res)
					})
					this.$u.api.selectFindEducational({
						phone:this.phone
					}).then(res =>{
						this.educationExperience = res.data
						let length = res.data.length
						if(length>0){
							that.educationEmpty = false
						}else{
							that.educationEmpty = true
						}
						console.log('educationExperience', res)
					})
				}
			})
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			console.log(ops)
		},
		methods: {
			scrollItem(e){ //滚动时动态显示导航栏
				// console.log('滚动',e.target.scrollTop)
				if(e.target.scrollTop >= 70){
					uni.setNavigationBarTitle({
						title:'小程序'
					})
				}
				if(e.target.scrollTop < 70){
					uni.setNavigationBarTitle({
						title:'技能展示'
					})
				}
			},
			skillAdd(){//添加技能展示
				uni.navigateTo({
					url: "skilltag/skilltag",
				})
			},
			personalUpdata(){//个人介绍修改
				uni.navigateTo({
					url: `skilltag/personalIntroduction?introduce=`+this.introduce,
				})
			},
			workAdd(){//添加工作经历
				uni.navigateTo({
					url: "../experience/experience",
				})
			},
			educationAdd(){//添加教育经历
				uni.navigateTo({
					url: "skilltag/educationExperience",
				})
			},
			update(workId){//编辑工作经历
				console.log(workId,1111)
				uni.navigateTo({
					url: `../experience/experience?workId1=${workId}`,
				})
			},
			updateEdu(id){//编辑教育经历
				console.log(id,1111)
				uni.navigateTo({
					url: `./skilltag/educationExperience?id=${id}`,
				})
			}
		
		}
	}
</script>

<style lang="scss">
	page{
		height: 100vh;
	}
	.skillDisplay{
		width: 100%;
		height:100%;
		padding:0 15px;
		.goodSkill{
			border-bottom: 1px solid #f1f1f1;
			padding-bottom: 15px;;
			.goodSkillD{
				display: flex;
				justify-content: space-between;
				.titleH{
					display: flex;
					font-size: 15px;
					padding-left:12px;
					align-items: center;
					position: relative;
					width:100%;
					color:#333;
					line-height: 40px;
					font-weight: bold;
					&:before {
						position: absolute;
						left: 0px;;
						content: "";
						display: block;
						margin-right: 4px;
						width: 3px;
						height: 18px;
						background-color: #00D3BD;
					}				
				}	
			}
			.introduceEmpty{
				display: flex;
				justify-content: space-between;
				width:95%;
				box-shadow: 0px 0px 11px #f1f1f1;
				border-radius: 10px;
				margin:0 auto;
				padding:20px 10px 0;
				.introduceAdd{
					display: flex;
					flex-direction: column;
					width:50%;
					.introduceAdd1{
						color:#333;
						line-height: 20px;
						font-size: 14px;
						margin-top:10px;
						font-weight: bold;
					}
					.understand{
						color:#999;
						line-height: 20px;
						font-size: 13px;
						margin-bottom: 30px;
					}
				}
				.imgBox{
					width:50%;
					background:url(http://47.108.128.22:8081/static/idCard/pic_gerenjieshao.png) no-repeat;
					background-size: 100% auto;
					height:120px;	
				}
				.imgBox1{
					width:50%;
					background:url(http://47.108.128.22:8081/static/idCard/pic_gongzuojingli.png) no-repeat;
					background-size: 100% auto;
					height:120px;	
				}
				.imgBox2{
					width:50%;
					background:url(http://47.108.128.22:8081/static/idCard/pic_jiaoyujingli.png) no-repeat;
					background-size: 100% auto;
					height:120px;	
				}
			}
			.tagText{
				border-radius:8rpx;
				border:none;
				padding:8rpx 24rpx;
				background-color: #f8f8f8;
				font-size: 24rpx;
				margin-right:5px;
				margin-top:10px;
				color:#999;
			}
			.tagAdd{
				background-color: #E0FAF7;
				color:#00D3BD;
			}
			.contentBox{
				width: 100%;
				background-color: white;
				border:none;
				max-height:200rpx;
				padding:2px 2px 0;
				overflow-y: scroll;
				line-height: 25px;
				color:#999;
			}
			.workDetail{
				line-height: 20px;
				padding-bottom: 20px;;
				.company{
					display: flex;
					justify-content: space-between;
					color:#666;
					font-size:14px;
					.edit{
						color:#00D3BD;
						margin-right: 10px;;
					}
					.update{
						color:#00D3BD;
						padding-right: 13px;;
					}
				}
				.workType{
					color:#888;
					font-size:14px;
					line-height: 25px;
					text{
						margin-right: 5px;;
					}
				}
				.workTime{
					color:#999;
					font-size:12px;
				}
			}
			
			
		}
	}
	.openOut{
		background-color: none;
		border:none;
		width:76px;
		margin:0 auto;
		text-align: center;
		color:#999;
		display: flex;
		flex-direction: row;
		image{
			width:10px;
			height:10px;
			margin-top:5px;
			margin-right:2px;
		}
	}
</style>
