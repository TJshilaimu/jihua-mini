<template>
	<view class="involiceDetail">
		<view class="boxTitle">
			<view class="involiceStatus">
				电子发票
			</view>
			<view class="statusIcon">
				<text class="statusTitle">已开票</text>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>

		<view class="boxContent">
			<view class="detailTitle">
				发票详情
			</view>
			<view class="itemContent">
				<text class="itemLeft">公司名称</text>
				<text class="itemRight">{{dataObj.companyName}}</text>
			</view>
			<view class="itemContent">
				<text class="itemLeft">公司税号</text>
				<text class="itemRight">{{dataObj.companyTax}}</text>
			</view>
			<view class="itemContent" v-if="isOpen">
				<text class="itemLeft">注册地址</text>
				<text class="itemRight">{{dataObj.bankAccount}}</text>
			</view>
			<view class="itemContent" v-if="isOpen">
				<text class="itemLeft">注册电话</text>
				<text class="itemRight">{{dataObj.regTelephone}}</text>
			</view>
			<view class="itemContent" v-if="isOpen">
				<text class="itemLeft">开户行</text>
				<text class="itemRight">{{dataObj.regAddr}}</text>
			</view>
			<view class="itemContent">
				<text class="itemLeft">公司税号</text>
				<text class="itemRight">{{dataObj.companyTax}}</text>
			</view>
			<view class="itemContent">
				<text class="itemLeft">发票金额</text>
				<text class="itemRight">{{dataObj.totalAmount}}</text>
			</view>
			<view class="itemContent">
				<text class="itemLeft">开票时间</text>
				<text class="itemRight">{{dataObj.createTime}}</text>
			</view>
			
			<view class="openAll" @click="openAll">
				<text class="" v-if="!isOpen" >展开全部</text>
				<u-icon class="myIcon" name="arrow-down" v-if="!isOpen"></u-icon>
				<text class="" v-if="isOpen">收起全部</text>
				<u-icon class="myIcon" name="arrow-up" v-if="isOpen"></u-icon>
			</view>
		</view>
		<view class="boxContent">
			<view class="detailTitle">
				接受信息
			</view>
			<view class="itemContent">
				<text class="itemLeft">电子邮箱</text>
				<text class="itemRight">{{dataObj.email}}</text>
			</view>
	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
			isOpen:true,
			dataObj: {}
			};
		},
		onLoad(opts) {
			//获取数据渲染

			this.dataObj = JSON.parse(opts.opts);
			this.isOpen = opts.opts['type'] == 1?true:false 
		},
		methods:{
			openAll(){
				this.isOpen = !this.isOpen;
				console.log('pp')
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding: 0;
		margin: 0;
		background-color: #f8f8f8;

		.boxTitle {
			padding-left: 32rpx;
			padding-right: 32rpx;
			background-color: white;
			height: 114rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 20rpx;
			.involiceStatus {
				color: #333333;
				font-size: 30rpx;
			}
			.statusIcon {
				font-size: 26rpx;
				text {
					color: #999999;
				}
				.statusTitle {
					color: $u-m-color;
					display: inline-block;
					margin-right: 13rpx;
				}
			}
		}

		.boxContent {
			background-color: white;
			margin-bottom: 20rpx;
			.detailTitle {
				background-color: white;
				height: 90rpx;
				padding: 0rpx 30rpx 0 50rpx;
				line-height: 90rpx;
				padding-left: 50rpx;
				font-size: 30rpx;
				color: #333333;
				// margin-bottom: 30rpx;
				border-bottom: 1px solid $u-b-color;
				position: relative;

				&::before {
					position: absolute;
					content: '';
					display: inline-block;
					width: 6rpx;
					height: 30rpx;
					background-color: $u-m-color;
					bottom: 29rpx;
					left: 30rpx;
				}
			}
			.itemContent{
				margin-left:30rpx;
				padding-right: 30rpx;
				border-bottom:1px solid $u-b-color;
				height: 114rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.itemLeft{
					font-size: 30rpx;
					color: #333333;
				}
				.itemRight{
					font-size: 26rpx;
					color: #999999;
				}
			}
			.openAll{
				height: 80rpx;
				color: #999999;
				display: flex;
				justify-content: center;
				align-items: center;
				.myIcon{
					font-size: 20rpx;
					margin-left:13rpx;
				}
			}

		}
	}
</style>
