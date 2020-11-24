<template>
	<view>
		<view class="introductionBox">
			<view v-for="(item,index) in tabLists" :key="index">
				<view :class="current==index?'selectColor':'normalColor'" @click="tabs(index)">
					{{item.label}}
				</view>
			</view>	
		</view>
		<view>
			<view class="contentItem" @click="toDetail">
				<view class="taskNumber">
					<text class="number">NO.17000014000037</text>
					<text class="numberStatus">已申请</text>
				</view>
				<view class="projectInfo">
					<view class="imageB">
						<image :src="taskImg"></image>
					</view>
					<view class="projectCon">
						<view class="projectTitle">小程序小程序小程序小程序小程序小程序小程序小程序</view>
						<view class="projectBox">
							<text class="projectB">人力资源</text>
							<text class="projectB">周期30天</text>
						</view>
						<view class="projectX">
							<text>招募人数:200人|已报名10人</text>
							<text class="money">￥1000.00</text>
						</view>
					</view>
				</view>
				<view class="releaseTime">
					<text class="time">2天前发布</text>
					<text class="releaseStatus">需求方给你发来一份合同，请您尽快处理</text>
				</view>
			</view>
			<view class="contentItem" @click="toDetail">
				<view class="taskNumber">
					<text class="number">NO.17000014000037</text>
					<text class="numberStatus">已申请</text>
				</view>
				<view class="projectInfo">
					<view class="imageB">
						<image :src="taskImg"></image>
					</view>
					<view class="projectCon">
						<view class="projectTitle">小程序小程序小程序小程序小程序小程序小程序小程序</view>
						<view class="projectBox">
							<text class="projectB">人力资源</text>
							<text class="projectB">周期30天</text>
						</view>
						<view class="projectX">
							<text>招募人数:200人|已报名10人</text>
							<text class="money">￥1000.00</text>
						</view>
					</view>
				</view>
				<view class="releaseTime">
					<text class="time">2天前发布</text>
					<text class="releaseStatus">需求方给你发来一份合同，请您尽快处理</text>
				</view>
			</view>
			<view class="contentItem" @click="toDetail">
				<view class="taskNumber">
					<text class="number">NO.17000014000037</text>
					<text class="numberStatus">已申请</text>
				</view>
				<view class="projectInfo">
					<view class="imageB">
						<image :src="taskImg"></image>
					</view>
					<view class="projectCon">
						<view class="projectTitle">小程序小程序小程序小程序小程序小程序小程序小程序</view>
						<view class="projectBox">
							<text class="projectB">人力资源</text>
							<text class="projectB">周期30天</text>
						</view>
						<view class="projectX">
							<text>招募人数:200人|已报名10人</text>
							<text class="money">￥1000.00</text>
						</view>
					</view>
				</view>
				<view class="releaseTime">
					<text class="time">2天前发布</text>
					<text class="releaseStatus">需求方给你发来一份合同，请您尽快处理</text>
				</view>
			</view>
			<view class="contentItem" @click="toDetail">
				<view class="taskNumber">
					<text class="number">NO.17000014000037</text>
					<text class="numberStatus">已申请</text>
				</view>
				<view class="projectInfo">
					<view class="imageB">
						<image :src="taskImg"></image>
					</view>
					<view class="projectCon">
						<view class="projectTitle">小程序小程序小程序小程序小程序小程序小程序小程序</view>
						<view class="projectBox">
							<text class="projectB">人力资源</text>
							<text class="projectB">周期30天</text>
						</view>
						<view class="projectX">
							<text>招募人数:200人|已报名10人</text>
							<text class="money">￥1000.00</text>
						</view>
					</view>
				</view>
				<view class="releaseTime">
					<text class="time">2天前发布</text>
					<text class="releaseStatus">需求方给你发来一份合同，请您尽快处理</text>
				</view>
			</view>
			<view class="baseline">我也是有底线的~</view>
		</view>
		
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value1: 1,
				value2: 1,
				title1:'所有类型',
				current:0,
				tabLists: [
					{
						label: '全部',
						value:1,
					},
					{
						label: '已申请',
						value:2,
					},
					{
						label: '待处理',
						value:3,
					},
					{
						label: '进行中',
						value:4,
					},
					{
						label: '已完成',
						value:5,
					},
					{
						label: '已关闭',
						value:6,
					},
				],
				taskImg: this.baseImgUrl + '/static/logo1.png',
			}
		},
		onLoad(){
			let userId = uni.getStorageSync('userId')
			this.$u.api.findMyProject({//查找任务
				userId:userId,
			}).then(res =>{
				if(res.meta.code==0){
					
				}else{
					uni.showToast({
						title:res.meta.msg,
						icon:'none'
					})
				}
				console.log('findMyProject', res)
			})
		},
		methods: {

			//点击跳转到详情页
			toDetail(){
				uni.navigateTo({
					url: "./taskProgress/taskProgress"
				})
			},
			//tab切换
			tabs(num){
				this.current=num
			}
		}
	}
</script>

<style lang="scss">
	page{
		background: #f8f8f8;
	}
	.baseline{
		color:#CCCCCC;
		text-align: center;
		line-height: 80rpx;
		font-size: 26rpx;
	}
	.contentItem{
		background:#fff;
		display: flex;
		flex-direction: column;
		background: #fff;
		padding:0 30rpx 0;
		margin-bottom: 10px;
		.taskNumber{
			display: flex;
			justify-content: space-between;
			line-height: 76rpx;
			border-bottom: 1px solid #E6E6E6;
			color:#999;
			font-size: 28rpx;
			.numberStatus{
				color:#00D3BD;
			}
		}
		.projectInfo{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #E6E6E6;
			padding: 20rpx 0;
			.imageB{
				width:150rpx;
				height:150rpx;
				border-radius: 10px;
				border:1px solid #ccc;
				image{
					width:150rpx;
					height:150rpx;	
				}
			}
			.projectCon{
				padding-left:10px;
				.projectTitle{
					font-weight: bold;
					line-height: 40rpx;
					font-size: 30rpx;
				}
				.projectBox{
					margin:10rpx 0;
					.projectB{
						border:1px solid #00D3BD;
						color:#00D3BD;
						font-size: 20rpx;
						padding:2rpx 10rpx;
						border-radius: 3px;
						margin-right:5px;
					}
				}
				.projectX{
					display: flex;
					justify-content: space-between;
					color:#666;
					font-size: 24rpx;
					.money{
						color:#C40000;
						font-weight: bold;
					}
				}
			}
		}
		.releaseTime{
			display: flex;
			justify-content: space-between;
			color:#999;
			line-height: 76rpx;
			font-size: 25rpx;
		}
	}
	/* qiehuan */
	.introductionBox{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #f0f0f0;
		background: #fff;
		font-size: 28rpx;
		line-height: 80rpx;
		padding:0 20rpx;
		.selectColor{
			padding:0 5rpx ;
			display: inline-block;
			text-align: center;
			color:#00D3BD;
			font-weight: bold;
			border-bottom: 1px solid #00D3BD;
		}
		.normalColor{
			padding:0 5rpx ;
			display: inline-block;
			text-align: center;
			color:#333333;
			font-weight: bold;
		}
	}
</style>
