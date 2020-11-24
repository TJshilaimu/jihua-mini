<template>
	<view>
		<view class="empty" v-if="empty">
			<image :src="evaluateW" mode=""></image>
			<text class="comment">暂无评论</text>
			<text class="commentN">这家伙，暂无评价内容，去看看他的个人介绍把</text>
		</view>
		<view class="comment" v-if="!empty">
			<view class="commentBox">
				<view class="boxTop">
					<view class="companyImg">
						<image :src="companyImg" mode=""></image>
						<view class="companyTitle">
							<view class="companyName">
								新谭物资科技有限公司
							</view>
							<view class="commentTime">
								2020-10-05 10:20
							</view>
						</view>
					</view>
					<view class="rate">
						<u-rate :count="count" :current="current" active-color="#ff9800" :disabled="true"></u-rate>
					</view>
				</view>
				<view class="boxContent">
					我的多行消息我,的多行消息我的多行消息我的多行消息我的多行消息
				</view>
				<view class="boxProject">
					项目：小程序开发>
				</view>
			</view>
			<view class="commentBox">
				<view class="boxTop">
					<view class="companyImg">
						<image :src="companyImg" mode=""></image>
						<view class="companyTitle">
							<view class="companyName">
								新谭物资科技有限公司
							</view>
							<view class="commentTime">
								2020-10-05 10:20
							</view>
						</view>
					</view>
					<view class="rate">
						<u-rate :count="count" :current="current" active-color="#ff9800" :disabled="true"></u-rate>
					</view>
				</view>
				<view class="boxContent">
					我的多行消息我,的多行消息我的多行消息我的多行消息我的多行消息
				</view>
				<view class="boxProject">
					项目：小程序开发>
				</view>
			</view>
			<view class="commentBox">
				<view class="boxTop">
					<view class="companyImg">
						<image :src="companyImg" mode=""></image>
						<view class="companyTitle">
							<view class="companyName">
								新谭物资科技有限公司
							</view>
							<view class="commentTime">
								2020-10-05 10:20
							</view>
						</view>
					</view>
					<view class="rate">
						<u-rate :count="count" :current="current" active-color="#ff9800" :disabled="true"></u-rate>
					</view>
				</view>
				<view class="boxContent">
					我的多行消息我,的多行消息我的多行消息我的多行消息我的多行消息
				</view>
				<view class="boxProject">
					项目：小程序开发>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				count: 5,
				current: 3.7,
				empty: false,
				evaluateW: this.baseImgUrl + '/static/company/pic_zanwupingjia.png',
				companyImg: this.baseImgUrl + '/static/center-selected.png',
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
		border-top: 1px solid #f0f0f0;
		height: 100%;
	}
	.empty {
		display: flex;
		flex-direction: column;
		text-align: center;
		align-items: center;
		height: 100%;
		width: 100%;
		image {
			display: inline-block;
			margin: 50px auto 20px;
			width: 130px;
			height: 130px;
		}
		.comment {
			color: #333;
			font-size: 17px;
			font-weight: bold;
		}
		.commentN {
			text-align: center;
			color: #999;
			font-size: 24rpx;
			display: inline-block;
			margin-top:16rpx;
			width: 360rpx;
		}
	}
	.comment {
		.commentBox {
			background-color: white;
			padding-left: 28rpx;
			padding-right: 30rpx;
			padding-top: 24rpx;
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid #f0f0f0;
			.boxTop {
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				.companyImg {
					display: flex;
					image {
						width: 74rpx;
						height: 74rpx;
						margin-right: 20rpx;
						border-radius: 100rpx;
						box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.09);
					}
					.companyTitle {
						.companyName {
							color: #333333;
							font-size: 28rpx;
							max-width: 178px;
							white-space: nowrap;
							text-overflow: ellipsis;
							overflow: hidden;
						}
						.commentTime {
							color: #999999;
							font-size: 24rpx;
							margin-top: 8rpx;
						}
					}
				}
				.rate {}
			}
			.boxContent {
				width: 100%;
				padding: 0;
				margin: 0;
				padding-top: 28rpx;
				padding-bottom: 20rpx;
				color: #666666;
				font-size: 26rpx;
			}
			.boxProject {
				color: #999999;
				font-size: 22rpx;
				margin-bottom: 24rpx;
			}
		}
	}
</style>
