<template>
	<view>
		<view class="infoCard">
			<view class="content">
				<text class="title">交易金额</text>
				<text class="amount">{{orderInfo.aomunt}}</text>
				<text class="status">{{orderInfo.status=='1'?'已取消':orderInfo.status=='2'?'已成功':'其他'}}</text>
			</view>
			<image :src="img"></image>
		</view>
		<view class="items">
			<view class="item"><text>订单号</text><text>{{orderInfo.orderNum}}</text></view>
			<view class="item"><text>创建时间</text><text>{{orderInfo.time}}</text></view>
			<view class="item"><text>交易类型</text><text>{{orderInfo.type=='1'?'微信支付':''}}</text></view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				orderInfo: {
					orderNum: "1231564897846483",
					time: "2012-10-02 12:23:55",
					type: "1",
					aomunt: "+100.00",
					status: "1",
					img: this.baseImgUrl + '/static/wallet/pic_xiangqingbeijing.png'
				}
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	page{
		background: #F6F6F6;
	}
	.infoCard {
		width: 100%;
		height: 120px;
		position: relative;
		margin-bottom: 6px;
		.content{
			z-index: 999;
			position: absolute;
			top:50%;
			left: 50%;
			transform: translate(-50%,-50%);
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			color: white;
			font-size: 14px;
			font-weight: lighter;
			.amount{
				font-weight: bold;
				font-size:20px;
			}
			.status{
				margin-top: 6px;
				border: 1px solid white;
				padding: 0 4px;
				font-size: 10px;
				border-radius: 4px;
			}
		}
		image {
			width: 100%;
			height: 120px;
			position: absolute;
			top: 0;
			left: 0;
			z-index: 9;
		}
	}
	.items{
		background: #FFFFFF;
		padding: 0 10px;
		.item{
			display: flex;
			justify-content: space-between;
			padding: 10px 10px;
			background: white;
			border-bottom: 1px solid #F6F6F6;
		}
	}
</style>
