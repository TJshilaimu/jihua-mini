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
			<view class="item"><text>交易类型</text><text>{{orderInfo.type=='2'?'提现':''}}</text></view>
			<view class="item"><text>提现账号</text><text>{{orderInfo.account}}</text></view>
			<view class="item"><text>提现进度</text>
				<view class="phase">
					<u-time-line>
							<u-time-line-item nodeTop="2">
								<!-- 此处自定义了左边内容，用一个图标替代 -->
								<template v-slot:node>
									<view class="u-node">
										<!-- 此处为uView的icon组件 -->
										<u-icon name="checkmark-circle-fill" color="#00D3DB" :size="36"></u-icon>
									</view>
								</template>
								<template v-slot:content>
									<view>
										<view class="u-order-title">提现申请</view>	
										<view class="u-order-time">2020-02-02 12:30</view>
									</view>
								</template>
							</u-time-line-item>
							<u-time-line-item>
								<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
								<template v-slot:node>
									<view class="u-node">
										<!-- 此处为uView的icon组件 -->
										<u-icon name="checkmark-circle-fill" :color="orderInfo.phase>=2?'#00D3DB':'#999'" :size="36"></u-icon>
									</view>
								</template>
								<template v-slot:content>
									<view>
										<view class="u-order-title">提现中</view>
										<view class="u-order-time">2020-02-03 12:30</view>
									</view>
								</template>
							</u-time-line-item>
							<u-time-line-item>
								<!-- 此处没有自定义左边的内容，会默认显示一个点 -->
								<template v-slot:node>
									<view class="u-node">
										<!-- 此处为uView的icon组件 -->
										<u-icon name="checkmark-circle-fill" :color="orderInfo.phase==3?'#00D3DB':'#999'" :size="36"></u-icon>
									</view>
								</template>
								<template v-slot:content>
									<view>
										<view class="u-order-title">提现完成</view>
									</view>
								</template>
							</u-time-line-item>
						</u-time-line>
				</view>
			</view>
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
					account:"17612889069",
					phase:2,
					phases:[{
						type:"1",
						title:"提现申请",
						time:"2020-02-02 12:20"
					},{
						type:"2",
						title:"提现申请",
						time:"2020-02-02 12:20"
					},{
						type:"3",
						title:"提现申请",
						time:"2020-02-02 12:20"
					}]
				},
				img: this.baseImgUrl + '/static/wallet/pic_xiangqingbeijing.png'
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
			.phase{
				width: 70%;
				.u-order-time{
					font-size: 12px;
					color: #999;
				}
			}
		}
	}
</style>
