<template>
	<view class="projectDetail"><!-- B端项目阶段 -->
		<view class="tips">等待开发者提交阶段划分方案</view>
		<view>
			<!-- 步骤条 -->
			<view class="step">
				<!-- <u-steps :list="numList" current="0" mode="number" @click="test"></u-steps> -->
				<step />
			</view>
			<view class="middleContent">
				<view class="projectInfo">
					<view class="imageB">
						<image :src="taskImg"></image>
					</view>
					
					<view class="projectCon">
						<view class="projectTitle">小程序小程序小程序小程序小程序小程序小程序小程序</view>
						<view class="projectBox">
							<text class="projectB">人力资源</text>
						</view>
						
						<view class="projectX">招募人数：500人 项目周期：30天</view>
					</view>
				</view>
				<view class="money">
					<text>项目金额</text>
					<view class="moneyNum">￥<text>1000.00</text></view>
				</view>
			</view>
			<view class="emandInf">
				<view class="emand">
					<view class="titleH">开发者信息</view>
					<view class="details">查看详情></view>
				</view>
				<view class="projectPeople">
					<view class="people"><image :src="peopleImg"></image></view>
					<view class="peopleName">
						<text class="name">张三</text>
						<view class="phone">
							<text>手机号：156****1562</text>
							<text>邮箱：********@qq.com</text>
						</view>
					</view>
				</view>
			</view>
			<view class="emandInf">
				<view class="emand" style="border-bottom:none;">
					<view class="titleH">我的合同</view>
					<view class="details">已签约</view>
				</view>
			</view>
			<view class="stageInf emandInf">
				<view class="stage emand">
					<view class="titleH">阶段信息({{stageNum}})</view>
				</view>
				<!-- 0、暂无阶段信息 -->
				<view class="stageProject" v-if="statusB==0">
					<image :src="stageW"></image>
					<text class="stageTips">暂无阶段信息</text>
					<text class="stageDivide">等待开发者提交阶段划分方案</text>
				</view>
				<!-- 1、阶段划分方案，待同意 -->
				<view  v-if="statusB==1">
					<view class="stageProjectInf">
						<view>
							<view>P1阶段
								
							</view>
						</view>
						<view>
							<text>阶段名称</text>
							<text>P1阶段功能初稿设计</text>
						</view>
						<view>
							<text>交付日期</text>
							<text>2019.08.18</text>
						</view>
						<view>
							<text>阶段金额</text>
							<text>100.00</text>
						</view>
						<view class="explain">
							<text>交付说明</text>
							<text class="explainT">初稿功能和设计，初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计</text>
						</view>
					</view>
					<view class="stageProjectInf">
						<view>
							<text>P2阶段</text>
						</view>
						<view>
							<text>阶段名称</text>
							<text>P1阶段功能初稿设计</text>
						</view>
						<view>
							<text>交付日期</text>
							<text>2019.08.18</text>
						</view>
						<view>
							<text>阶段金额</text>
							<text>100.00</text>
						</view>
						<view class="explain">
							<text>交付说明</text>
							<text class="explainT">初稿功能和设计，初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计</text>
						</view>
					</view>
					<view class="agreeBox">
						<button class="agree">同意</button>
						<button class="agreeNo">不同意</button>
					</view>
				</view>
				
			</view>
		</view>
	</view>
</template>

<script>
	import step from '../../release/proComponents/step.vue'
	export default {
		components:{
			step
		},
		data() {
			return {
				statusB:1,
				stageNum:2,
				taskImg: this.baseImgUrl + '/static/logo1.png',
				peopleImg: this.baseImgUrl + '/static/1.jpg',
				stageW:  this.baseImgUrl + '/static/invoice/pic_zanwujieduan.png',
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			console.log(ops)
		},
		methods: {
			askTask() {
				//判断是否登录
				if (false) { //没有登录
					uni.showModal({
						title: '提示',
						content: '你还未认证成为开发者，请先去完善信息',
						success(e) {
							if (e.confirm) {
								console.log('点击了确认按钮')
							}
							if (e.cancel) {
								console.log('点击了取消按钮')
							}
						}
					})
				} else if (true) { //已登录，点击取消,展示取消sheet
					this.show = true
				}
			},
			scrollItem(e) { //滚动时动态显示导航栏
				console.log('滚动', e.target.scrollTop)
				if (e.target.scrollTop >= 70) {
					uni.setNavigationBarTitle({
						title: '小程序'
					})
				}
				if (e.target.scrollTop < 70) {
					uni.setNavigationBarTitle({
						title: ''
					})
				}
			}

		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		background: #f8f8f8;
	}
	//修改步骤条颜色
	.u-steps__item__num{
		background-color: #00D3BD !important;
		color:#fff !important ;
	}
	.u-icon__icon{
		color:#fff !important ;
	}
	.projectDetail {
		width: 100%;
		height: 100%;
		.tips{
			color:#999;
			line-height: 40px;
			font-size: 12px;
			background: url(http://47.108.128.22:8081/static/icon_tishi.png) no-repeat left center;
			background-size: 16px 16px;
			padding-left: 18px;
			margin-left: 5px;
		}
		.step{
			height:100rpx;
			padding:0px 0 80px 0;
			background-color: #fff;
		}
		.middleContent{
			display: flex;
			flex-direction: column;
			background: #fff;
			padding:20px 10px 0;
			margin-top:10px;
			.projectInfo{
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #E6E6E6;
				padding-bottom: 10px;;
				.imageB{
					width:80px;
					height:80px;
					border-radius: 10px;
					border:1px solid #ccc;
					image{
						width:80px;
						height:80px;	
					}
				}
				.projectCon{
					padding-left:10px;
					.projectTitle{
						font-weight: bold;
						line-height: 20px;
						font-size: 15px;
					}
					.projectBox{
						margin:5px 0;
						.projectB{
							border:1px solid #00D3BD;
							color:#00D3BD;
							font-size: 12px;
							padding:0px 5px;
							border-radius: 3px;
						}
					}
					.projectX{
						color:#666;
					}
				}
			}
			.money{
				display: flex;
				justify-content: space-between;
				color:#999;
				line-height: 40px;
			}
			.moneyNum{
				color:#C40000;
				font-size: 12px;
				font-weight: bold;
				text{
					font-size: 14px;
				}
			}
		}
		.emandInf{
			
			margin-top:10px;
			.emand{
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				padding:0 10px;
				border-bottom: 1px solid #E6E6E6;
				.titleH{
					display: flex;
					font-size: 15px;
					padding-left:8px;
					align-items: center;
					position: relative;
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
				.details{
					line-height: 40px;
					color:#999;
				}
			}
			.projectPeople{
				background-color: #fff;
				display: flex;
				flex-direction: row;
				padding:10px 10px;
				image{
					margin: 0 8px 0 0;
					width: 40px;
					height: 40px;
					border-radius: 50%;
				}
				.name{
					color:#333;
				}
				.phone{
					color:#666;
					font-size: 12px;
					text{
						margin-right:10px;
					}
				}
			}
			
				
		}
		.stageInf{
			.stageProject{
				display: flex;
				flex-direction: column;
				text-align: center;
				background-color: #fff;
				image{
					width:150px;
					height:150px;
					margin:25px auto;
				}
				.stageTips{
					color:#333;
					line-height: 27px;;
					font-size: 16px;
				}
				.stageDivide{
					color:#999;
					font-size: 12px;
					margin-bottom: 20px;
				}
				.generate{
					background-color: #00D3BD;
					color:#fff;
					border: none;
					line-height: 36px;
					margin:20px auto 40px;
					border-radius: 40px;
					font-size: 14px;;
					padding:0 40px;
				}
			}
			.stageProjectInf{
				background-color: #fff;
				display: flex;
				flex-direction: column;
				padding:0 10px 15px;
				margin-bottom: 10px;
				.stageStatus{
					border:1px solid #F3C96F;
					color:#F3C96F;
					font-size: 12px;
					padding:0 5px;
					line-height: 20px;
				}
				view{
					display: flex;
					justify-content: space-between;
					line-height: 50px;
					border-bottom: 1px solid #E6E6E6;
					color: #333;
				}
				.explain{
					display: flex;
					flex-direction: column;
					justify-content:initial;
					border:none;
					.explainT{
						line-height: 25px;
					}
					
				}
			}
			.agreeBox{
				display: flex;
				justify-content: space-between;
				margin-bottom: 20px;
				.agree{
					width:50%;
					background-color: #00D3BD;
					border:none;
					color:#fff;
					line-height: 40px;
					height:40px;
					border-radius: 40px;
				}
				.agreeNo{
					width:40%;
					border:1px solid #00D3BD;
					background:none;
					color:#00D3BD;
					line-height: 40px;
					height:40px;
					border-radius: 40px;
				}
			}
		}
	}
</style>
