<template>
	<view class="changeEmailInputCode">
		<u-form>
			<u-form-item>
				<view>验证码</view>
				<view class="phoneCode">
					<u-input placeholder="请输入验证码" v-model="emailForm.code"></u-input>
					<u-toast ref="uToast"></u-toast>
					<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
					<text class="codeText" @click="getCode">{{tips}}</text>
				</view>
				<view class="info">验证码已经发送到你尾号<text>{{phoneEndCode}}</text>的手机上，注意查收</view>
			</u-form-item>
			<u-form-item>
				<button class="confirmBtn" @click="nextAddEmail">下一步</button>
			</u-form-item>
		</u-form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tips: '',
				// refCode: null,
				seconds: 60,
				emailForm: {
					email: "",
					code: "",
					phone: ""
				},
				phoneEndCode:""
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
					this.phoneEndCode = res.data.substr(7, 4)
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
			nextAddEmail(){
				
			}
		}
	}
</script>

<style lang="scss">
	.changeEmailInputCode {
		padding: 20px;

		.u-input {
			border-bottom: 1px solid #eaeaea;

		}
		.info{
			font-size: 12px;
			color: #999999;
			text{
				color: $u-m-color;
			}
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
