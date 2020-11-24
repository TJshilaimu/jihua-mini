<template>
	<view>
		<view class="introductionBox">
			<view v-for="(item,index) in tabLists" :key="index">
				<view :class="current==index?'selectColor':'normalColor'" @click="tabs(index)">
					{{item.label}}
				</view>
			</view>	
		</view>
		<!-- 我的合同 -->
		<view class="agreeInfo">
			<view class="needTitle">
				<!-- 遍历循环此处 -->
				<view class="contractBox">
					<view class="itemBox">
						<view class="itemImg">
							<image src="../../../../static/1.jpg" mode=""></image>
						</view>
						<view class="itemInfo">
							<view class="name">
								张三
							</view>
							<view class="phone">
								<text>手机号：156****678</text>
								<text>邮箱：********@qq.com</text>
							</view>
						</view>
					</view>
					<view class="agreeInfoItemC">
						<text class="getTimeC">发送时间：2020-1-23 12:23</text>
						<text class="getTimeC">作废时间：2020-1-23 12:23</text>
						<text class="getTimeC">作废原因：你拒绝了该合同</text>
						<text class="deadLineC">合同将在<text class="toRedC">23:36</text>分后过期</text>
						<view class="confirmTitleC">
							合同将在发出后的48小时后过期，请您尽快确认
						</view>
						
					</view>
					<view class="contractBtn">
						<text class="secBtn refuse" @click="refuse">取消合同</text>
						<text class="secBtn see" @click="seeFile">查看合同</text>
					</view>
					<image class="statusImg" src="../../../../static/b-recruit/pic_daiqianyue.png" mode=""></image>
					<image class="okIcon" src="../../../../static/b-recruit/pic_shengxiaozhong.png" mode=""></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabLists: [
					{
						label: '全部',
						value:1,
					},
					{
						label: '待签约',
						value:2,
					},
					{
						label: '已签约',
						value:3,
					},
					{
						label: '已作废',
						value:4,
					}
				],
				current:0
			};
		},
		methods:{
			seeFile(){
				uni.navigateTo({
					url:'../seeContract/seeContract'
				})
			}
		}
	}
</script>

<style lang="scss">
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
	
	.agreeInfo {
		border-bottom: 20rpx solid #f8f8f8;
		.needTop {
			padding: 28rpx 30rpx 24rpx 30rpx;
			display: flex;
	
			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid $u-b-color;
	
			.needTopLeft {
				display: flex;
				align-items: center;
	
				text {
					color: #333333;
					font-size: 28rpx;
					font-weight: bold;
				}
	
				.line {
					display: inline-block;
					width: 6rpx;
					height: 30rpx;
					background-color: $u-m-color;
					margin-right: 13rpx;
				}
			}
	
			.needTopRight {
				color: #999999;
	
				text {
					display: inline-block;
					margin-right: 11rpx;
				}
			}
		}
	
		.secStatus {}
	}
	
	// 合同
	.agreeInfo {
		background-color: white;
		border-bottom: 20rpx solid #f8f8f8;
	
		.contractBox {
			position: relative;
	
			.itemBox {
				padding: 30rpx 26rpx;
	
				display: flex;
				align-items: center;
	
				.itemImg {
					width: 37px;
					height: 37px;
	
					image {
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}
	
				.itemInfo {
					margin-left: 18rpx;
	
					.name {
						color: #333333;
						font-size: 26rpx;
						font-weight: bold;
					}
	
					.phone {
						padding-top: 4px;
						color: #666666;
						font-size: 22rpx;
	
						text {
							display: inline-block;
							margin-right: 36rpx;
						}
					}
	
					.itemTag {
						display: flex;
						position: relative;
	
						.sureBtn {
							width: 166rpx;
							height: 46rpx;
							line-height: 46rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: $u-m-color;
							border-radius: 46rpx;
							color: 24rpx;
							color: white;
						}
					}
	
				}
			}
	
			.agreeInfoItemC {
				color: #666666;
				font-size: 22rpx;
				padding-left: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;
	
				text {
					height: 12px;
					display: inline-block;
					margin-bottom: 10rpx;
				}
	
				.confirmTitleC {
					color: #c40000;
				}
	
				.toRedC {
					color: #c40000;
				}
			}
	
			.contractBtn {
				display: flex;
				justify-content: flex-end;
				padding-bottom: 13px;
				padding-top: 13px;
	
				.secBtn {
					margin-right: 30rpx;
					width: 142rpx;
					height: 50rpx;
					font-size: 24rpx;
					line-height: 50rpx;
					text-align: center;
					border-radius: 50rpx;
	
					&.refuse {
						margin-right: 20rpx;
						color: #ffffff;
						background-color: $u-m-color;
	
					}
	
					&.see {
						color: $u-m-color;
						border: 1rpx solid $u-m-color;
					}
				}
			}
	
			.statusImg {
				width: 50px;
				height: 50px;
				position: absolute;
				top: 0;
				right: 0;
			}
			.okIcon{
				position: absolute;
				top:28px;
				right:60rpx;
				width:61px;
				height:61px;
			}
		}
	
		.needTop {
			padding: 28rpx 30rpx 24rpx 30rpx;
			display: flex;
	
			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid $u-b-color;
	
			.needTopLeft {
				display: flex;
				align-items: center;
	
				text {
					color: #333333;
					font-size: 28rpx;
					font-weight: bold;
				}
	
				.line {
					display: inline-block;
					width: 6rpx;
					height: 30rpx;
					background-color: $u-m-color;
					margin-right: 13rpx;
				}
			}
	
			.needTopRight {
				color: #999999;
	
				text {
					display: inline-block;
					margin-right: 11rpx;
				}
			}
		}
	}
</style>
