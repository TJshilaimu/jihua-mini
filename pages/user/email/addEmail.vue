<template>
	<view class="eamilContent">
		<view v-if="isEmail">

		</view>
		<view v-if="!isEmail">
			<u-form>
				<u-form-item>
					<view>邮箱地址</view>
					<view>
						<u-input placeholder="请输入邮箱验证码且格式正确的邮箱" v-model="emailForm.email"></u-input>
					</view>
				</u-form-item>
				<u-form-item>
					<view>验证码</view>
					<view class="phoneCode">
						<u-input placeholder="请输入验证码" v-model="emailForm.code"></u-input>
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
						<text class="codeText" type="primary" @click="getCode">{{tips}}</text>
					</view>
				</u-form-item>
				<u-form-item>
					<button class="confirmBtn" @click="submitEmail">确定</button>
				</u-form-item>
			</u-form>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isEmail: true,
				btnStatus: true,
				tips: '',
				// refCode: null,
				seconds: 60,
				formRules: [],
				emailForm: {
					email: "",
					code: "",
					phone: ""
				}
			}
		},
		onReady: function() {
			this.refCode = this.$refs.uCode;
		},
		onShow: function() {
			// 获取到邮件信息，判断是否有邮箱地址
			uni.getStorage({
				key: "email",
				success: (res) => {
					if (res.data == null) {
						this.isEmail = false
					} else {
						this.isEmail = true
					}
				}
			})
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.emailForm.phone = res.data
				}
			})
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$u.api.sendEmailSms({
						phone: this.emailForm.phone
					}).then(res => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					})
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			submitEmail() {
				this.$u.api.addEmail(this.emailForm).then(res => {
					this.$u.toast(res.meta.msg)
					if (res.meta.code == 0) {
						uni.navigateBack()
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.eamilContent {
		padding: 20px;

		.u-input {
			border-bottom: 1px solid #eaeaea;

		}

		.u-form-item__message.data-v-2d68573a {
			padding: 0 !important;
		}

		.phoneCode {
			display: flex;
			justify-content: space-between;
			position: relative;
			width: 100%;

			u-input {
				width: 100%;
			}
		}

		.codeText {
			position: absolute;
			right: 0;
			line-height: 35px;
			color: $u-m-color;
			z-index: 999;
		}

		.confirmBtn {
			height: 90rpx;
			margin-top: 10px;
			background-color: $u-m-color;
			color: white;
			font-size: 16px;
			line-height: 90rpx;
			border-radius: 45px;
		}
	}
</style>
