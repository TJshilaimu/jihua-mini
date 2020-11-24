<template>
	<view class="newPhone">
		<u-form>
			<u-form-item>
				<view>新的手机号</view>
				<view>
					<u-input placeholder="请输入新手机号" v-model="phoneForm.newphone" @input="changeBtnStatus"></u-input>
				</view>
			</u-form-item>
			<u-form-item>
				<view>验证码</view>
				<view class="phoneCode">
					<u-input placeholder="请输入验证码" v-model="phoneForm.code" @input="changeBtnStatus"></u-input>
					<u-toast ref="uToast"></u-toast>
					<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
					<text class="codeText" size="medium" @click="getCode">{{tips}}</text>
				</view>
			</u-form-item>
		</u-form>
		<view class="Btn">
			<button @click="confirmPhone">确认</button>
		</view>
	</view>
</template>

<script>
	import {
		checkCard
	} from "../../../util/util.js"
	export default {
		data() {
			return {
				phoneForm: {
					phone: "",
					code: "",
					newphone: "",
				},
				tips: '',
				code: 60,
				btnStatus: true
			}
		},
		onLoad: function(res) {
			console.log(res)
			this.phoneForm.phone = res.phone
		},
		methods: {
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					console.log(this.phoneForm.newphone)
					if (!checkCard(this.phoneForm.newphone, /^1\d{10}$/)) {
						this.$u.toast("手机号格式不正确请重新输入")
						return
					}
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$u.api.changePhoneSms({
						phone: this.phoneForm.newphone
					}).then(res => {
						this.$u.toast(res.meta.msg)
						if (res.meta.code == 0) {
							uni.hideLoading();
							// 这里此提示会被this.start()方法中的提示覆盖
							this.$u.toast('验证码已发送');
							// 通知验证码组件内部开始倒计时
							this.$refs.uCode.start();
						}
					})

				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			changeBtnStatus() {
				let flag = false
				for (var k in this.phoneForm) {
					if (this.phoneForm[k] == "") {
						flag = true
					}
				}
				this.btnStatus = flag
			},
			confirmPhone() {
				console.log(this.phoneForm)
				this.$u.api.updataPhone(this.phoneForm).then(res => {
					this.$u.toast(res.meta.msg)
					if (res.meta.code == 0) {
						uni.navigateTo({
							url: "../index"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.newPhone {
		width: 80%;
		margin: 0 auto;

		.inputPhone {
			display: flex;
		}

		.u-input {
			border-bottom: 1px solid #eaeaea;
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

		.Btn {
			margin-top: 20px;

			button {
				width: 100%;
				height: 90rpx;
				background-color: $u-m-color;
				border-radius: 45px;
				line-height: 90rpx;
				color: white;
			}
		}
	}
</style>
