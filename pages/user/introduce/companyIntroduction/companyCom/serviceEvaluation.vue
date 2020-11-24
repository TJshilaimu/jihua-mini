<template>
	<view class="">
		<view class="empty" v-if="estimateCount==0">
			<view class="emptyImg">
				<image :src="evaluateW" mode=""></image>
			</view>
			<text class="comment">暂无评论</text>
			<text class="commentN">这家伙，暂无评价内容，去看看他的个人介绍把</text>
		</view>
		<view class="comment" v-if="estimateCount>0">
			<view class="commentBox" v-for="(item,index) in estimateList" :key="index">
				<view class="boxTop">
					<view class="companyImg">
						<image :src="companyImg" mode=""></image>
						<view class="companyTitle">
							<view class="companyName">
								{{item.name}}
							</view>
							<view class="commentTime">
								{{item.addTime}}
							</view>
						</view>
					</view>
					<view class="rate">
						<u-rate :count="count" v-model="item.score" active-color="#ff9800" :disabled="true"></u-rate>
					</view>
				</view>
				<view class="boxContent">
					{{item.details}}
				</view>
				<view class="boxProject">
					项目：{{item.projectName}}>
				</view>
			</view>
		</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			'estimateList':{
				type:Array,
				required:true
			},
			'estimateCount':{
				type:String,
				required:true
			},
		},
		data() {
			return {
				count: 5,
				current:3.7,
				empty:false,
				evaluateW: this.baseImgUrl + '/static/company/pic_zanwupingjia.png',
				companyImg: this.baseImgUrl + '/static/center-selected.png',
				
			}
		},
		methods:{
			
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #fff;
		border-top: 1px solid #f0f0f0;
	}
	.empty{
		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: center;
		height:100%;
		.emptyImg{
			margin:50px auto 20px;
			width:270rpx;
			height: 270rpx;
			box-shadow: 0px 2px 15px 5px #f3f3f4;
		}
		image{
			display: inline-block;
			width:270rpx;
			height:270rpx;
		}
		.comment{
			color:#333;
			font-size: 12px;
			
		}
		.commentN{
			text-align: center;
			margin-top:17rpx;
			color:#999;
			width:360rpx;
			font-size: 24rpx;
			
		}
	}
	.comment {
		.commentBox{
			background-color: white;
			padding-left:28rpx;
			padding-right: 30rpx;
			padding-top:24rpx;
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid #f0f0f0;
			.boxTop{
				display: flex;
				justify-content: space-between;
				align-items:flex-start;
				.companyImg{
					display: flex;
					image{
						width:74rpx;
						height:74rpx;
						margin-right:20rpx;
					}
					.companyTitle{
						.companyName{
							color: #333333;
							font-size: 28rpx;
							max-width:178px;
							white-space: nowrap;
							text-overflow: ellipsis;	
							overflow: hidden;
						}
						.commentTime{
						color: #999999;
						font-size: 24rpx;
						margin-top:8rpx;
						}
					}
				}
				.rate{
					
				}
			}
			.boxContent{
				width: 100%;
				padding:0;
				margin: 0;
				padding-top:28rpx;
				padding-bottom: 20rpx;
				color: #666666;
				font-size: 26rpx;
			}
			.boxProject{
				color: #999999;
				font-size: 22rpx;
				margin-bottom:24rpx;
			}
		}
	}
</style>
