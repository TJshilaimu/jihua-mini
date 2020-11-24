<template>
	<view class="inputNewPwd">
		<view>
			<u-form ref="resetPwdForm" :model="resetPwdForm">
				<u-form-item prop="name" label="姓名" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.name" placeholder="请输入与身份证一致的真实姓名" @blur="checkLegal" @input="changeBtnStatus"></u-input>
				</u-form-item>
				<u-form-item prop="idCard" label="身份证号" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.idCard" placeholder="请输入与身份证一致的身份证号" @blur="checkLegal" @input="changeBtnStatus"></u-input>
				</u-form-item>
			</u-form>
			<view class="item1">
				请填写真实的身份信息
			</view>
		</view>
		<view class="submitBtn">
			<button class="btnItem" :disabled="btnStatus" @click="submitBtn">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				resetPwdForm: {
					name: '',
					idCard: ''
				}
			}
		},
		methods: {
			submitBtn() {

			}
		}
	}
</script>

<style lang="scss">
	.item1 {
		padding-left: 30rpx;
		width: 630rpx;
		height: 80rpx;
		margin-top: 30rpx;
		margin-bottom: 78rpx;
		line-height: 80rpx;
		margin-left: 60rpx;
		color: #f68e36;
		font-size: 28rpx;
		background-color: #FFF7F1;
	}

	page {
		background-color: white;
	}

	.inputNewPwd {
		margin: 0 auto;

		.submitBtn {
			margin: 60rpx 60rpx;

			.btnItem {
				height: 90rpx;
				border-radius: 46rpx;
				background-color: #00D3BD !important;
				color: white;
				font-size: 16px;
			}
		}

		.u-form {
			padding-left: 60rpx !important;
			padding-right: 60rpx !important;
		}

		.u-input {
			color: #333333 !important;
			font-size: 16px !important;
		}

		.u-form-item {
			font-size: 32rpx !important;
			color: #333333;
		}

		.u-border-bottom::after {
			border-bottom-width: 2px;
			border-bottom-color: #e6e6e6;
		}

		.u-form-item__message.data-v-2d68573a {
			padding: 0px !important;
		}

		.safeTip {
			margin-left: 60rpx;
			font-size: 24rpx;
			color: #999999;
			line-height: 18px;
			padding-top: 20rpx;
		}
	}
</style>
