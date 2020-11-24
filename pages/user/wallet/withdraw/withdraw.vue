<template>
	<view>
		<view class="withdraw">
			<view class="formTitle">
				<view>提现金额</view>
			</view>
			<view class="form">
				<view class="formLabel">金额</view>
				<view class="formInput">
					￥<u-input v-model="withdrawForm.amount" placeholder="1-50000" type="number" :clearable="false"></u-input>
				</view>
				<view class="info">可提现余额50000.00</view>
			</view>
			<view class="formTitle" style="padding-top: 30px;">
				<view>转出信息</view>
			</view>
			<view class="form">
				<view class="to">
					<view>转出到</view>
					<view>
						<u-radio-group v-model="withdrawForm.to" activeColor="#00D3DB">
							<u-radio name="wx">微信</u-radio>
							<u-radio name="ipay">支付宝</u-radio>
						</u-radio-group>
					</view>
				</view>
				<view class="formLabel" style="margin-top: 20px;">账号</view>
				<view class="formInput">
					<u-input :clearable="false" v-model="withdrawForm.account" placeholder="请输入账号信息"></u-input>
				</view>
				<view class="formLabel" style="margin-top: 20px;">真实姓名</view>
				<view class="formInput">
					<u-input :clearable="false" v-model="withdrawForm.name" placeholder="请输入真实姓名"></u-input>
				</view>
			</view>
			<u-alert-tips type="warning" :description="description"></u-alert-tips>

		</view>
		<view class="btnOpt">
			<view class="amount">提现金额：<text>￥{{withdrawForm.amount}}</text></view>
			<view class="btn">申请提现</view>
		</view>
		<!-- 输入密码 -->
		<u-popup v-model="show" :closeable="false" mode="center" border-radius="14" @finish="finish">
			<view class="inputPwd">
				<view class="text1">请输入支付密码</view>
				<view class="text2">提现金额<text>￥{{withdrawForm.amount}}</text></view>
				<view class="input">
					<u-message-input :maxlength="6"></u-message-input>
				</view>
			</view>
		</u-popup>
		<u-modal v-model="showErrPwd" :content="content" cancel-text="忘记密码" confirm-text="重试"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				withdrawForm: {
					to: "",
					account: "",
					name: "",
					amount: ""
				},
				description: "申请提现将会在1-7个工作日到账",
				show:true,
				content:"您的支付密码输入错误，请重试",
				showErrPwd:false
			}
		},
		onReady: () => {
			uni.setNavigationBarColor({
				backgroundColor: "#FFFFFFF",
				frontColor: "#000000",
				fail: (res) => {
					console.log(res)
				}
			})
		},
		methods: {
			finish(v){
				console.log(v)
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: whiteF;

		&>view {
			height: 100vh;
			position: relative;
		}
	}

	.withdraw {
		padding: 0 20px;

		.formTitle {
			padding-top: 10px;
			padding-bottom: 10px;
			font-size: 16px;
			color: $u-m-color;
			border-bottom: 2px solid #E6E6E6;
			position: relative;

			&:after {
				content: "";
				bottom: -2px;
				left: 20px;
				width: 16px;
				height: 2px;
				background-color: $u-m-color;
				position: absolute;
			}
		}

		.form {
			padding-top: 10px;

			.formLabel {
				font-size: 14px;
			}

			.to {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding-bottom: 10px;
				border-bottom: 1px solid #E6E6E6;
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

		.u-alert-tips {
			margin-top: 10px;
			padding: 6px !important;
			border: none !important;
			border-radius: none !important;

			.u-alert-desc {
				color: #F68E36 !important;
			}
		}
	}

	.btnOpt {
		position: absolute;
		bottom: 0;
		width: 100%;
		height: 40px;
		justify-content: space-between;
		align-items: center;
		display: flex;

		.amount {
			text-indent: 20px;

			text {
				color: #C40000;
			}
		}

		.btn {
			width: 100px;
			height: 40px;
			color: white;
			line-height: 40px;
			text-align: center;
			background-color: $u-m-color;
		}
	}
	.inputPwd{
		padding: 20px;
		.text1{
			padding-bottom: 10px;
		}
		.text2{
			padding-bottom: 10px;
			font-size: 12px;
			color: #999999;
			text{
				color: #C40000;
			}
		}
		.u-char-box{
			border-radius: 15px !important;
			box-sizing: border-box !important;
			padding: 0 15px !important;
			background-color: #F8F8F8;
		}
		.u-char-item{
			width: 30px !important;
			margin: 0 !important;
			height: 30px !important;
			line-height: 30px !important;
			border:none !important;
		}
	}
</style>
