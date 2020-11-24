<template>
	<view class="noData">

			<image src="../../static/information/icon_kaipiaoxiaoxi.png" mode=""></image>
			<text class="title">暂无数据</text>
			<text class="content">没有搜到你想到的内容</text>
			<text class="btn" @click="again">刷新重试</text>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			//刷新重试
			again(){
				
			}
		}
	}
</script>

<style lang="scss">
	page{
		border-top:1rpx solid $u-b-color;
	}
	.noData{
		height: 100vh;
		width: 100vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		image{
			width:316rpx;
			height: 316rpx;
			margin-bottom: 11px;
		}
		.title{
			color: #333333;
			font-size: 16px;
			margin-bottom: 8px;
		}
		.content{
			font-size: 13px;
			color: #999999;
			margin-bottom: 22px;
		}
		.btn{
			width: 212rpx;
			height:70rpx;
			background-color: $u-m-color;
			color:white;
			line-height: 70rpx;
			font-size: 13px;
			border-radius: 70rpx;
		}
	}
</style>
