<template>
	<view class="rechargeSuccess">
		<image :src="img"></image>
		<view class="text1">签约完成</view>
		<view class="text2">恭喜你！合同签约已完成！</view>
		<view class="btn">查看合同</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:this.baseImgUrl + '/static/wallet/pic_chenggong.png',
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
			color:#333333;
			font-size: 32rpx;
			margin: 26px 0 9px;
		}
		.text2{
			margin-bottom:20px;
			font-size: 12px;
			color: #999999;
		}
		.btn{
			margin-top: 78rpx;
			width: 205px;
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
