<template>
	<view class="recharge">
		<view class="form">
			<view class="formLabel">充值金额</view>
			<view class="formInput">
				￥<u-input v-model="rechargeForm.amount" placeholder="1-50000" @input="valueChange"></u-input>
			</view>
			<view class="info">本次最多充值50000元</view>
		</view>
		<view :class="inputStatus?'btn':'btn1'" @click="recharge">确认充值</view>
		<u-popup v-model="show" :closeable="false" mode="center" border-radius="14">
			<view class="inputPwd">
				<view class="text1">请输入支付密码</view>
				<view class="text2">充值金额<text>￥{{rechargeForm.amount}}</text></view>
				<view class="input">
					<u-message-input type="password" :maxlength="6" v-model="rechargeForm.password" @finish="finish"></u-message-input>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		recharge
	} from "../../../../util/util.js"
	export default {
		data() {
			return {
				inputStatus: false,
				rechargeForm: {
					amount: "",
					password: ""
				},
				show: false
			}
		},
		methods: {
			// 修改
			valueChange() {
				this.inputStatus = true
			},
			// 提交充值
			recharge() {
				this.show = true

				// uni.navigateTo({
				// 	url:"success/success"
				// })
			},
			finish() {
				console.log(1234)
				recharge(this.rechargeForm).then(res => {
					console.log(res)
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.recharge {
		width: 90%;
		margin: 0 auto;

		.form {
			padding-top: 20px;

			.formLabel {
				font-size: 16px;
			}

			.formInput {
				padding: 6px 0;
				display: flex;
				align-items: center;
				border-bottom: 1px solid #E6E6E6;
			}

			.info {
				font-size: 12px;
				margin-top: 6px;
				color: #999999;
			}
		}

		.btn {
			width: 90%;
			height: 90rpx;
			line-height: 90rpx;
			background-color: $u-m-color;
			color: white;
			margin: 0 auto;
			margin-top: 60px;
			border-radius: 45rpx;
			text-align: center;
			font-size: 16px;
		}

		.btn1 {
			width: 90%;
			height: 90rpx;
			line-height: 90rpx;
			background-color: $u-m-color;
			color: white;
			margin: 0 auto;
			margin-top: 60px;
			border-radius: 45rpx;
			text-align: center;
			font-size: 16px;
			opacity: 0.5;
		}

		.inputPwd {
			padding: 20px;

			.text1 {
				padding-bottom: 10px;
			}

			.text2 {
				padding-bottom: 10px;
				font-size: 12px;
				color: #999999;

				text {
					color: #C40000;
				}
			}

			.u-char-box {
				border-radius: 15px !important;
				box-sizing: border-box !important;
				padding: 0 15px !important;
				background-color: #F8F8F8;
			}

			.u-char-item {
				width: 30px !important;
				margin: 0 !important;
				height: 30px !important;
				line-height: 30px !important;
				border: none !important;
			}
		}

	}
</style>
