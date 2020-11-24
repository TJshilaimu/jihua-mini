<template>
	<view class="rechargeSuccess">
		<image :src="img"></image>
		<view class="text1">充值失败</view>
		<view class="text2">很抱歉，充值出现问题，请重新充值</view>
		<view class="btn">重新支付</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: this.baseImgUrl + '/static/wallet/pic_shibai.png'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	page{
		height: 100vh;
		position: relative;
	}
	.rechargeSuccess{
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
		top:50%;
		transform: translate(0,-50%);
		image{
			width: 68px;
			height: 90px;
		}
		.text1{
			margin: 6px 0;
		}
		.text2{
			margin-bottom:20px;
			font-size: 12px;
			color: #999999;
		}
		.btn{
			width: 180px;
			height: 90rpx;
			background: $u-m-color;
			color: white;
			text-align: center;
			font-size: 16px;
			line-height: 90rpx;
			border-radius: 45rpx;
		}
	}
</style>
