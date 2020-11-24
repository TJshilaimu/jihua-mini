<template>
	<view class="skillDisplay">
		<view class="middleContent">
			<scroll-view scroll-y="true" class="scrollY" @scroll="scrollItem">
				<view class="goodSkill">
					<view class="goodSkillD">
						<view class="titleH">擅长技术</view>
					</view>
					<view>
						<text class="tagText"  v-for="(item,index) in goodSkill" :key="index">{{item.goodatName}}</text>
					</view>
				</view>
				<!-- 个人介绍 -->
				<view class="introduce goodSkill">
					<view class="goodSkillD">
						<view class="titleH">个人介绍</view>
					</view>
					<view class="contentBox">
						<scroll-view scroll-y="true" >
							{{introduce}}
						</scroll-view>
					</view>
				</view>
				<!-- 工作经历 -->
				<view class="workExperience goodSkill">
					<view class="goodSkillD">
						<view class="titleH">工作经历</view>
					</view>
					<view class="">
						<view v-for="(item,index) in workExperience" :key="index">
							<view class="workDetail" v-show="isOpen || index < max">
								<view class="company">
									<text class="companyName">{{item.companyName}}</text>
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
					</view>
					
					<view class="openOut" v-show="!isOpen && workExperience.length > max" @click="isOpen = !isOpen">展开全部<image :src="open"></image></view>
					<view class="openOut" v-show="isOpen && workExperience.length > max" @click="isOpen = !isOpen">收起<image :src="close"></image></view>
					
				</view>
				<!-- 教育经历 -->
				<view class="educationExperience goodSkill">
					<view class="goodSkillD">
						<view class="titleH">教育经历</view>
					</view>
					<view>
						<view class="workDetail" v-for="(item1,index1) in educationExperience" :key="index1">
							<view class="company">
								<text class="companyName">{{item1.schoolName}}</text>
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
		props:{
			'workExperience':{
				type:Array,
				required:true
			},
			'goodSkill':{
				type:Array,
				required:true
			},
			'introduce':{
				type:String,
				required:true
			},
			'educationExperience':{
				type:Array,
				required:true
			},
		},
		data() {
			return {
				max: 2, // 默认最多显示的个数；最大行数*每行显示的个数 Number 
				isOpen: false, // 是否展开全部信息的标识 Boolean 默认false
				open: this.baseImgUrl + '/static/company/icon_zhankai.png',
				close: this.baseImgUrl + '/static/company/icon_shouqi.png',
				/* list:[
					{
						companyName:'上海光明传媒信息科技有限公司',
						workType:'ios开发',
						workTime:'2018.08-2019.07',
						contentBox:'应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介'
					},{
						companyName:'上海光明传媒信息科技有限公司2',
						workType:'ios开发',
						workTime:'2018.08-2019.07',
						contentBox:'应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介'
					},{
						companyName:'上海光明传媒信息科技有限公司3',
						workType:'ios开发',
						workTime:'2018.08-2019.07',
						contentBox:'应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介应用简介'
					}
				] */
			}
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
		border-top:1px solid #f0f0f0;
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
					color:#333;
					font-size:14px;
					.edit{
						color:#00D3BD;
						margin-right: 10px;;
					}
				}
				.workType{
					color:#888;
					font-size:13px;
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
