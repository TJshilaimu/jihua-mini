<template>
	<view class="inputNewPwd">
		<view>
			<u-form ref="resetPwdForm" :model="resetPwdForm">
				<view class="information">身份信息</view>
				<u-form-item prop="name" label="姓名" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.name" placeholder="请输入与身份证一致的真实姓名" @blur="checkLegal" @input="changeBtnStatus"></u-input>
				</u-form-item>
				<u-form-item prop="idCard" label="身份证号" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.idCard" placeholder="请输入与身份证一致的身份证号" @blur="checkLegal" @input="changeBtnStatus"></u-input>
				</u-form-item>
				<view class="information">公司信息</view>
				<u-form-item prop="legalPerson" label="法人姓名" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.legalPerson" placeholder="请输入公司法人姓名" @blur="checkLegal" @input="changeBtnStatus"></u-input>
				</u-form-item>
				<u-form-item prop="enterprise" label="公司名称" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.enterprise" placeholder="请输入公司名称" @blur="checkLegal" @input="changeBtnStatus"></u-input>
				</u-form-item>
				<u-form-item prop="creditCode" label="信用代码" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.creditCode" placeholder="请输入与公司营业执照一致的信用代码" @blur="checkLegal" @input="changeBtnStatus"></u-input>
				</u-form-item>
				
			</u-form>
			<view class="item1">
				请仔细核对身份信息是否正确，提交之后不能更改
			</view>
		</view>
		<view class="submitBtn">
			<button class="btnItem" :disabled="btnStatus" @click="submitBtn">保存</button>
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
		font-size: 24rpx;
		background-color: #FFF7F1;
	}

	page {
		background-color: white;
		border-top: 1px solid #f0f0f0;
	}

	.inputNewPwd {
		margin: 0 auto;
		.information {
			width: 100%;
			height: 80rpx;
			line-height: 80rpx;
			background-color: white;
			font-weight: bolder;
			color: $u-m-color;
			position: relative;
			border-bottom: 2px solid #f5f5f9;
			margin-top:10px;
			&::after {
				content: '';
				display: inline-block;
				width: 20px;
				position: absolute;
				bottom: -2px;
				left: 40rpx;
				border-bottom: 2px solid $u-m-color;
				z-index: 999;
			}
		}

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
