<template>
	<view class="skillDisplay">
		<view class="middleContent">
			<scroll-view scroll-y="true" class="scrollY" @scroll="scrollItem">
				<!-- 公司介绍 -->
				<view class="introduce goodSkill">
					<view class="goodSkillD">
						<view class="titleH">公司介绍</view>
						<u-icon name="edit-pen" class="u-margin-right-20" size="48" @click="introductionInput"></u-icon>
					</view>
					<view class="introduceEmpty" v-if="companyEmpty" @click="introductionInput">
						<view class="introduceAdd">
							<text class="introduceAdd1">添加公司介绍</text>
							<text class="understand">让开发者尽快了解公司</text>
							<u-icon name="plus-circle" class="u-margin-right-20" size="48"></u-icon>
						</view>
						<view class="imgBox">
						</view>
						
					</view>
					<view class="contentBox" v-if="!companyEmpty">
						<scroll-view scroll-y="true" >
							{{introduce}}
						</scroll-view>
					</view>
				</view>
				<!-- 项目案例 -->
				<view class="workExperience goodSkill">
					<view class="goodSkillD">
						<view class="titleH">项目案例</view>
						<u-icon name="plus-circle" class="u-margin-right-20" size="50" @click="projectAdd"></u-icon>
					</view>
					<view class="introduceEmpty" v-if="projectCases" @click="projectAdd">
						<view class="introduceAdd">
							<text class="introduceAdd1">添加项目案例</text>
							<text class="understand">了解公司过往的案例作品</text>
							<u-icon name="plus-circle" class="u-margin-right-20" size="48"></u-icon>
						</view>
						<view class="imgBox1">
						</view>
						
					</view>
					<view v-if="!projectCases">
						<view class="workDetail" v-for="(item,index) in projectExperience" :key="index">
							<view class="company">
								<text class="companyName">{{item.projectName}}</text>
								<text class="edit" @click="projectEdit(item.projectId)">编辑</text>
							</view>
							<text class="workType">开发周期：{{item.leadTime}}</text>
							<view class="contentBox">
								<scroll-view scroll-y="true" >
									{{item.projects}}
								</scroll-view>
							</view>
							<text class="screenshot">项目截图</text>
							<view class="imageBox">
								<view>
									<image :src="src"></image>
								</view>
								<view>
									<image :src="src1"></image>
								</view>
								<view>
									<image :src="src1"></image>
								</view>
								<view>
									<image :src="src1"></image>
								</view>
							</view>
							<text class="address">项目演示地址：{{item.url}}</text>
							
							
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
				companyEmpty:true,
				projectCases:false,
				src: this.baseImgUrl +'/static/company/pic_tianjiagongsi.png',
				src1:this.baseImgUrl +'/static/company/pic_tianjiagongsi.png',
				introduceAdd:this.baseImgUrl +'/static/company/pic_tianjiagongsi.png',
				introduce:'',
				phone:'',
				projectExperience:''
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			console.log(ops)
		},
		// 页面展示生命周期
		onShow: function() {
			let that = this;
			console.log(0)
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.phone = res.data
					this.$u.api.selectFindPersonal({
						phone:this.phone
					}).then(res =>{
						this.introduce = res.data
						let length = res.data.length
						if(length>0){
							that.companyEmpty = false
						}else{
							that.companyEmpty = true
						}
						console.log('phone', res)
					}),
					this.$u.api.findProjectEditor({//查询项目案例
						phone:this.phone
					}).then(res =>{
						this.projectExperience=res.data
						let length = res.data.length
						if(length>0){
							that.projectCases = false
						}else{
							that.projectCases = true
						}
						console.log('findProjectEditor', res)
					})
				}
			})
		},
		methods: {
			introductionInput(){//公司介绍跳转
				uni.navigateTo({
					url:'./contentEdit/introductionInput?introduce='+this.introduce,
				})
			},
			projectAdd(){//项目案例添加跳转
				uni.navigateTo({
					url:'./contentEdit/projectEdit'
				})
			},
			projectEdit(projectId){//项目案例修改跳转
				uni.navigateTo({
					url:`./contentEdit/projectEdit?projectId=${projectId}`
				})
			},
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
					background:url(http://47.108.128.22:8081/static/company/pic_tianjiagongsi.png) no-repeat;
					background-size: 100% auto;
					height:120px;	
				}
				.imgBox1{
					width:50%;
					background:url(http://47.108.128.22:8081/static/company/pic_tianjiaxiangmu.png) no-repeat;
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
				font-size: 13px;
			}
			.workDetail{
				line-height: 20px;
				padding-bottom: 20px;;
				.company{
					display: flex;
					justify-content: space-between;
					color:#333;
					font-size:14px;
					.edit{
						color:#00D3BD;
						margin-right: 10px;;
					}
					.companyName{
						font-size: 15px;;
					}
				}
				.workType{
					color:#666;
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
				.screenshot{
					line-height: 30px;
					color:#666;
					margin-top:10px;
				}
				.imageBox{
					display: flex;
					flex-flow:row wrap;
					view{
						width:30%;
						background-color: #F7F7F7;
						margin-right:5px;
						margin-bottom:10px;
						image{
							width:100%;
							display: inline-block;
							height:60px;
						}
					}
				}
			}
			
			
		}
	}
</style>
