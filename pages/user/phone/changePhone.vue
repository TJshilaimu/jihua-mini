<template>
	<view class="changePhone">
		<u-form>
			<u-form-item>
				<view>验证码</view>
				<view class="phoneCode">
					<u-input placeholder="请输入验证码" v-model="code"></u-input>
					<u-toast ref="uToast"></u-toast>
					<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
					<text class="codeText" @click="getCode">{{tips}}</text>
				</view>
				<view class="info">验证码已经发送到你尾号<text>{{phoneEndCode}}</text>的手机上，注意查收</view>
			</u-form-item>
			<u-form-item>
				<button class="confirmBtn" @click="changePhone">下一步</button>
			</u-form-item>
		</u-form>
		<!-- 		<u-form>
			<u-form-item>
				<view class="inputPhone">
					<view>
						<u-input placeholder="请输入验证码" v-model="code" :border="true" @input="changeBtnStatus"></u-input>
					</view>
					<view class="code">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
						<u-button type="primary" size="medium" @click="getCode">{{tips}}</u-button>
					</view>
				</view>
			</u-form-item>
		</u-form>
		<view class="nextBtn">
			<u-button type="primary" :disabled="btnStatus" @click="changePhone">下一步</u-button>
		</view> -->
	</view>
</template>

<script>
	import {
		checkCard
	} from "../../../util/util.js"
	export default {
		data() {
			return {
				phoneEndCode: '',
				tips: '',
				// refCode: null,
				seconds: 60,
				btnStatus: true,
				code: '',
				phone: ''
			}
		},
		onLoad: function() {
			uni.getStorage({
				key: 'phone',
				success: (res) => {
					this.phone = res.data
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
					this.$u.api.changePhoneSms({
						phone: this.phone
					}).then(res => {
						if (res.meta.code == 0) {
							uni.hideLoading();
							// 这里此提示会被this.start()方法中的提示覆盖
							this.$u.toast('验证码已发送');
							// 通知验证码组件内部开始倒计时
							this.$refs.uCode.start();
						}
						this.$u.toast(res.meta.msg)
					})

				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			changeBtnStatus() {
				if (this.code == '') {
					this.btnStatus = true
				} else {
					this.btnStatus = false
				}
			},
			changePhone() {
				// 验证码校验规则
				if (checkCard(this.code, /^[0-9]{4}$/)) {
					// 验证码校验
					this.$u.api.updataPhoneSmsCheck({
						phone: this.phone,
						code: this.code
					}).then(res => {
						console.log(res)
						if (res.meta.code == 0) {
							console.log(123456)
							uni.navigateTo({
								url: `./newPhone?phone=${this.phone}`
							})
						}
						this.$u.toast(res.meta.msg)
					})

				} else {
					this.$u.toast('验证码格式不正确')
				}
			}
		}
	}
</script>

<style lang="scss">
	.changePhone {
		padding: 20px;

		.u-input {
			border-bottom: 1px solid #eaeaea;

		}

		.info {
			font-size: 12px;
			color: #999999;

			text {
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
