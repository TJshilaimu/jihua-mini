<template>
	<view class="content">
		<view class="menuList">
			<view class="menuItem">
				<view class="itemContent">
					<text class="text">实名认证</text>
				</view>
				<view class="arrowIcon" @click="toVerify">
					<text class="arrowText">{{auditStatus}}</text>
					<u-icon name="arrow-right" color="#999999" ></u-icon>
				</view>
			</view>
			<view class="menuItem">
				<view class="itemContent">
					<text class="text">公司介绍</text>
				</view>
				<view class="arrowIcon" @click="toCompanyProfile">
					<text class="arrowText">{{stateProcess}}</text>
					<u-icon name="arrow-right" color="#999999" ></u-icon>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				auditStatus:"审核中",
				stateProcess:"共两项，已完成一项，继续完善"
			}
		},
		methods: {
		//实名认证
			toVerify(){
				uni.navigateTo({
					url:'./companyProfile/verifiedEmand/verified'
				})
			},
			// 跳转到公司介绍
			toCompanyProfile() {
				uni.navigateTo({
					url: "./companyProfile/companyProfile"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
	.menuList {
		border-top:1px solid #f0f0f0;
		background-color: white;
		.menuItem {
			margin-left: 30rpx;
			height: 114rpx;
			border-bottom: 3rpx solid $u-b-color;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right:42rpx;
			.itemContent {
				display: flex;
				align-items: center;
				color: #333333;
				font-weight: bold;
				text{
					font-size: 30rpx;
				}
			
			}
			.arrowIcon{
				display: flex;
				align-items: center;
				.arrowText{
					font-size: 12px;
					color:#999;
					margin-right:2px;
				}
			}
			&:last-of-type{
				border:none;
			}
		}
	}
</style>
