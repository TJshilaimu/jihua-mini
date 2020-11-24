<template>
	<view class="inputNewPwd">
		<view>
			<u-form ref="resetPwdForm" :model="resetPwdForm">
				<u-form-item prop="password" label="设置密码" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.password" placeholder="请输入新密码" @blur="checkLegal"
					 @input="changeBtnStatus"></u-input>
				</u-form-item>
				<u-form-item prop="newpassword" label="确认密码" label-position='top'>
					<u-input type="text" v-model="resetPwdForm.newpassword" placeholder="请再次输入新密码" @blur="checkLegal"
					 @input="changeBtnStatus"></u-input>
				</u-form-item>
			</u-form>
			<view class="safeTip">
				密码必须为6-18字符,包含数字和字母
			</view>
		</view>
		<view class="submitBtn">
			<button class="btnItem" :disabled="btnStatus" @click="submitBtn">下一步</button>
		</view>
	</view>
</template>

<script>
	import {
		checkCard
	} from '../../../util/util.js'
	export default {
		data() {
			return {
				resetPwdForm: {
					password: "",
					newpassword: "",

				},
				btnStatus: true,
				isOk: false
			}
		},
		// onReady: function() {
		// 	this.$refs.resetPwdForm.rules = this.rules
		// },
		onLoad: function(data) {
			// 获取到用户的手机号
			// this.resetPwdForm.phone = data.phone
		},
		methods: {
			submitBtn() {
				console.log(this.isOk)
				if (this.isOk) {
					this.$u.api.rePassword(this.resetPwdForm).then(res => {
						this.$u.toast(res.meta.msg)
						if (res.meta.code == 0) {
							uni.switchTab({
								url: "../../user/index"
							})
						}
					})
				}
			},
			// 校验是否输入了账号和密码
			changeBtnStatus() {
				let flag = false
				for (var k in this.resetPwdForm) {
					if (this.resetPwdForm[k] == "") {
						flag = true
					}
				}
				this.btnStatus = flag
			},
			checkLegal() {
				let obj = this.resetPwdForm;
				let status = true
				for (let i in obj) {
					if (obj[i] == null || obj[i] == '') {
						status = false;
						return
					}
				}
				if (status) { //校验
					let reg = /^[a-zA-Z0-9]{6,18}$/
					let str1 = this.resetPwdForm.password;
					let str2 = this.resetPwdForm.newpassword;
					let status1 = checkCard(str1, reg);
					let status2 = checkCard(str2, reg);
					if (status1 && status2 && str1 == str2) {
						this.isOk = true
					} else if(status1 && status2 && str1 != str2) {	
						uni.showToast({
							title: '两次密码不一样',
							icon: "none"
						})
						this.isOk = false
					}else{
						uni.showToast({
							title: '密码不符合要求',
							icon: "none"
						})
						this.isOk = false
					}

				}
			}

		}

	}
</script>

<style lang="scss">
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
