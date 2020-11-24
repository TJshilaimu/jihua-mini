<template>
	<view class="successCom">
		<image :src="success" mode=""></image>
		<text class="tips1">提交成功</text>
		<text class="tips2">发票将在3个工作日内开出，请在发票界面注意查看</text>
		<button type="default">完成</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 提交成功图片
				success: this.baseImgUrl + '/static/invoice/pic_tijiaochenggong.png',
			}
		}
	}
</script>

<style lang="scss">
	page{
		border-top:1px solid $u-b-color;
		height: 100%;
		width: 100%;
		.successCom{
			height: 100%;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			image{
				width:180rpx;
				height: 260rpx;
				margin-bottom: 54rpx;
			}
			.tips1{
				font-size: 32rpx;
				color:#333333;
			}
			.tips2{
				font-size: 24rpx;
				color:#999999;
				width:396rpx;
				height:52rpx;
				text-align: center;
				display: inline-block;
				margin-top:18rpx;
			}
			button{
				margin-top:76rpx;
				width:410rpx;
				height: 90rpx;
				line-height: 90rpx;
				background-color: $u-m-color;
				color: white;
				font-size: 32rpx;
				border-radius:90rpx;
				box-shadow: 0 0 6rpx #00d3bd;
			}
		}
	}
</style>
