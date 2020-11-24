<template>
	<view class="wallet">
		<view class="totalAmount">
			<view class="walletCard">
				<view class="totalAmount">
					<view>
						<view class="title">总金额(元):</view>
						<view>￥<text>{{walletForm.totalMount}}</text></view>
					</view>
					<image @click="resetTranPwd" :src="transactionImg"></image>
				</view>
				<view class="unableAmount">
					<view class="amount1">
						<view class="title">冻结金额(元):</view>
						<view>￥<text>{{walletForm.unableMount}}</text></view>
					</view>
					<view class="amount2">
						<view class="title">可提现金额(元):</view>
						<view>￥<text>{{walletForm.pullMount}}</text></view>
					</view>
				</view>
			</view>
			<view class="amountOpt">
				<view @click="Recharge">充值</view>
				<view @click="Withdraw">提现</view>
			</view>
		</view>
		<view class="transactionRecord">
			<view class="head">
				<view class="title">交易记录</view>
				<view class="more">查看更多<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="content">
				<view class="contentItem" v-for="(v,i) in transactionRecord" :key="i">
					<view class="contentItemContent">
						<image :src="v.type=='1'?typeImg1:v.type=='2'?typeImg2:v.type=='3'?typeImg3:''">
							<view>
								<view class="itemTitle">
									<view class="text">{{v.title}}</view>
									<view class="tag">{{v.status=='1'?'已取消':v.status=='2'?'已失败':v.status=='3'?'已成功':''}}</view>
								</view>
								<view class="itemTime">{{v.time}}</view>
							</view>
					</view>
					<view class="itemAmount">{{v.amount}}</view>
				</view>
			</view>
		</view>
		<view class="info">
			所有交易信息，请点击查看更多哦
		</view>
		<u-modal @confirm="setTranPwd" :show-title="true" :show-cancel-button="true" confirm-text="去设置" cancel-color="#666666"
		 confirm-color="#00D3BD" title="你还未设置交易密码" v-model="transactionPwdModalShow">
			<view class="slot-content">
				<rich-text :nodes="content1"></rich-text>
			</view>
		</u-modal>
		<u-modal @confirm="resetTranPwd" :show-title="true" :show-cancel-button="true" confirm-text="去设置" cancel-color="#666666"
		 confirm-color="#00D3BD" title="提示" v-model="pwdRiskModalShow">
			<view class="slot-content">
				<rich-text :nodes="content2"></rich-text>
			</view>
		</u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeImg1: this.baseImgUrl + '/static/wallet/icon_xiangmukuan.png',
				typeImg2: this.baseImgUrl + '/static/wallet/icon_chongzhi.png',
				typeImg3: this.baseImgUrl + '/static/wallet/icon_tixian.png',
				transactionImg: this.baseImgUrl + '/static/wallet/btn_shezhijiaoyimima.png',
				walletForm: {
					totalMount: 5000,
					unableMount: 1000,
					pullMount: 1000,
				},
				transactionRecord: [{
						type: "1",
						status: "1",
						time: "今天 08:12",
						title: "项目款收入",
						amount: "+2000"
					}, {
						type: "2",
						status: "2",
						time: "昨天 08:12",
						title: "微信充值",
						amount: "+200"
					}, {
						type: "1",
						status: "1",
						time: "08-08 08:12",
						title: "设计开发-p1阶段",
						amount: "+2000"
					},
					{
						type: "2",
						status: "1",
						time: "09-08 08:12",
						title: "名字笔记的哇哈杜瓦蝴蝶瓦好了哈完蛋啦",
						amount: "+3200"
					}, {
						type: "3",
						status: "1",
						time: "2020-09-08 08:12",
						title: "提现",
						amount: "+2000"
					}, {
						type: "3",
						status: "2",
						time: "2020-09-08 08:12",
						title: "提现",
						amount: "+2000"
					}, {
						type: "3",
						status: "3",
						time: "2020-09-08 08:12",
						title: "提现",
						amount: "+2000"
					}
				],
				transactionPwdModalShow: true,
				pwdRiskModalShow: true,
				content1: `请先设置交易密码<br/>才能申请提现`,
				content2: `你的交易密码存在风险<br/>请重新设置密码`
			}
		},
		methods: {
			// 跳转充值界面
			Recharge() {
				console.log(uni.getStorageSync("transactionPwdStatus"))
				// if (!uni.getStorageSync("transactionPwdStatus")) {
				// 	this.transactionPwdModalShow = true
				// }
				uni.navigateTo({
					url:"recharge/recharge"
				})
			},
			// 跳转提现界面
			Withdraw() {
				// if (!uni.getStorageSync("transactionPwdStatus")) {
				// 	this.transactionPwdModalShow = true
				// }
				uni.navigateTo({
					url:"withdraw/withdraw"
				})
			},
			// 跳转到设置密码界面
			setTranPwd() {
				uni.navigateTo({
					url: "transcationPwd/inputCode/inputCode"
				})
			},
			// 重置交易密码
			resetTranPwd() {
				uni.navigateTo({
					url: "transcationPwd/inputCode/inputCode"
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background: #F8F8F8;
	}

	.wallet {

		.totalAmount {
			background-color: white;

			.walletCard {
				width: 90%;
				margin: 20px auto;
				box-shadow: 0px 2px 6px #c1c1c1;

				.totalAmount {
					display: flex;
					align-items: center;
					justify-content: space-between;

					&>view {
						font-size: 12px;
						padding-top: 12px;
						padding-left: 12px;

						& text {
							font-size: 16px;
							font-weight: bold;
						}
					}

					& .title {
						color: #999
					}

					image {
						height: 23px;
						width: 103px;
					}
				}

				.unableAmount {
					display: flex;
					align-items: center;
					justify-content: space-between;

					.amount1 {
						font-size: 12px;
						padding: 12px;

						& text {
							font-size: 16px;
							font-weight: bold;
						}

						& .title {
							color: #999
						}
					}

					.amount2 {
						font-size: 12px;
						padding: 12px;
						position: relative;
						right: 60px;

						& text {
							font-size: 16px;
							font-weight: bold;
						}

						& .title {
							color: #999
						}
					}
				}

			}

			.amountOpt {
				width: 90%;
				margin: 0 auto;
				display: flex;
				justify-content: center;

				&>view {
					width: 50%;
					text-align: center;
					margin-bottom: 10px;
				}
			}

		}

		.transactionRecord {
			margin-top: 6px;
			width: 100%;
			background-color: white;

			.head {
				width: 90%;
				margin: 0 auto;
				align-items: center;
				justify-content: space-between;
				display: flex;
				padding: 10px 0;

				.title {
					position: relative;
					display: flex;
					align-items: center;

					// padding-left: 10px;
					&:before {
						// position: absolute;
						content: "";
						width: 3px;
						height: 16px;
						margin-right: 4px;
						background-color: $u-m-color;
					}
				}

				.more {
					font-size: 12px;
					color: #999999;
					// padding-right: 10px;
				}
			}

			.content {
				width: 90%;
				margin: 0 auto;

				.contentItem {
					padding: 10px 0;
					display: flex;
					justify-content: space-between;
					align-items: center;

					.contentItemContent {
						display: flex;

						&>view {
							margin-left: 6px;
							display: flex;
							flex-direction: column;
							justify-content: space-between;

							.itemTitle {
								height: 20px;
								line-height: 20px;
								display: flex;
								align-items: center;

								.text {
									font-size: 14px;
									max-width: 200px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

								.tag {
									border-radius: 4px;
									margin-left: 4px;
									color: $u-m-color;
									border: 1px solid $u-m-color;
									box-sizing: border-box;
									padding: 0 2px;
									font-size: 10px !important;
								}

							}

							.itemTime {
								font-size: 12px;
								color: #999999;
							}
						}

						&>image {
							width: 36px;
							height: 36px;
						}
					}

				}
			}
		}

		.info {
			width: 100%;
			margin: 10px 0;
			text-align: center;
			color: #999999;
		}

		.slot-content {
			padding: 20px;
			font-size: 28rpx;
			text-align: center;
			color: $u-content-color;
		}
	}
</style>
