<template>
	<view class="messageInput content">
		<view class="logo">
			<img :src="logo">
		</view>
		<view class="logoTitle">
			威选
		</view>
		<view class="msgInfo">请输入发送至 <text class="phoneColor">+86{{phone}}</text> 的4位验证码,有效期2分钟。如未收到,请尝试重新获取验证码。</view>
		<!-- <u-message-input :maxlength="4" :breathe="false" @finish="finish"></u-message-input> -->
		<u-message-input mode="bottomLine" :focus="true" :breathe="false" @finish="finish" active-color="#999999"
		 inactive-color="#999999"></u-message-input>
		<u-toast ref="uToast"></u-toast>
		<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange" :focus="true"></u-verification-code>
		<text @click="getCode" class="smsTitle">{{tips}}</text>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				tips: '',
				// refCode: null,
				seconds: 60,
				phoneCode: "",
				codeTime: 60,
				phone: "",
				logo: this.baseImgUrl + '/static/login/icon_denglu_logo.png'
			}
		},
		onLoad: function() {
			this.$u.api.sendLoginSms({
				phone: uni.getStorageSync("phone")
			}).then(res => {
				if (res.meta.code == 0) {
					this.$u.toast('验证码已发送');
					this.$refs.uCode.start();
				} else {
					this.$u.toast(res.meta.msg)
				}
			})
		},
		methods: {
			// 提交验证码验证
			finish(e) {
				this.phoneCode = e;
				uni.navigateTo({
					url:"../transcationPwd"
				})
				// 验证码校验
				// 提交验证码校验
				// 跳转到密码设置界面
				
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$u.api.sendLoginSms({
						phone: this.phone
					}).then(res => {
						uni.hideLoading();
						console.log('res', res)
						if (res.meta.code == 0) {
							this.$u.toast('验证码已发送');
							this.$refs.uCode.start();
						} else {
							console.log('else', res.meta.msg)
							this.$u.toast(res.meta.msg)
						}
					})
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			}
		}
	}
</script>

<style lang="scss">
	.u-placeholder-line {
		background-color: $u-m-color !important;
	}

	page {
		background-color: white;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;
		padding-top: 120rpx;
		position: relative;

		.logo {
			border-radius: 20rpx;
			box-shadow: 0 4px 15px -8px #00d3bd;

			img {
				width: 90px;
				height: 90px;
			}

		}

		.logoTitle {
			padding-bottom: 80rpx;
			font-size: 16px;
			padding-top: 20rpx;
		}

		.smsTitle {
			// border: 1px solid red;
			position: absolute;
			left: 30rpx;
			bottom: 0;
			color: #999999;
		}
	}

	.messageInput {
		width: 95%;
		;
		margin: 0 auto;

		// .logo {
		// 	width: 100%;
		// 	display: flex;
		// 	align-items: center;
		// 	justify-content: space-around;

		// 	img {
		// 		width: 120px;
		// 		height: 120px;
		// 	}
		// }
		.msgInfo {
			font-size: 12px;
			margin-bottom: 10px;
			letter-spacing: 2rpx;
			color: #999999;

			.phoneColor {
				color: #00D3BD !important;
			}
		}
	}
</style>
