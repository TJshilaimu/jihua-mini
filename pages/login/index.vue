<template>
	<view class="content">
		<view class="logo">
			<img :src="logo">
		</view>
		<view class="logoTitle">
			威选
		</view>
		<view style="width:80%" class="text-area">
			<u-form style="width:100%" :model="loginForm" ref="loginForm">
				<u-form-item prop="userName" @click="test">
					<u-input ref="userName" class="userName" :class="[isFocus1?'beFocus':'']" @focus="changeBorder1" @blur="changeBorder1"
					 v-model="loginForm.userName" @click="getFoucus" :clearable="false" placeholder="请输入手机号码" :border="false" @input="changeBtnStatus"></u-input>
				</u-form-item>
				<u-form-item prop="password" @click="test">
					<u-input ref="password" v-model="loginForm.password" :class="[isFocus2?'beFocus':'']" @focus="changeBorder2" @blur="changeBorder2"
					 @click="getFoucus" :clearable="false" class="password" placeholder="请输入登陆密码" type="password" :border="false"
					 @input="changeBtnStatus"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<button class="loginBtn" @click="login" :disabled="btnStatus">登陆</button>
		<button class="registerBtn" @click="register">注册</button>
		<view class="otherMethod">
			<view @click="msgLogin">验证码登陆</view>
			<view @click="forgetPwd">忘记密码</view>
		</view>

		<view class="userFile">登录代表同意威选<text class="file">《用户协议》</text></view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import {
		getUserInfo
	} from "../../util/util.js"
	export default {
		data() {
			return {
				title: 'Hello',
				loginForm: {
					userName: "",
					password: ""
				},
				borderColor: "",
				btnStatus: true,
				logo: this.baseImgUrl + '/static/login/icon_denglu_logo.png',
				isFocus1: false,
				isFocus2: false
			}
		},
		onShow() {
			getUserInfo()
			uni.login({
				provider: "weixin",
				success: function(res) {
					console.log(res.code)
				}
			})
			console.log(this.baseImgUrl)
		},
		// // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		// onReady() {
		// 	this.$refs.loginForm.setRules(this.rules);
		// },
		methods: {
			// 用户登陆
			login() {
				this.$u.api.login(this.loginForm).then(res => {
					if (res.meta.code == 0) {
						// 保存用户登陆的token
						uni.setStorage({
							key: "token",
							data: res.data.token
						})
						uni.setStorage({
							key: "userName",
							data: res.data.userName
						})
						uni.setStorage({
							key: "phone",
							data: res.data.phone
						})
						uni.setStorage({
							key: "email",
							data: res.data.email
						})
						uni.setStorage({
							key: "role",
							data: res.data.role
						})
						uni.setStorage({
							key: "userId",
							data: res.data.userId
						})
						let time = new Date()
						let timeStemp = time.getTime()
						// 存入登陆时间戳
						uni.setStorage({
							key: "timeStemp",
							data: timeStemp
						})
						// 获取到用户信息
						this.$refs.uToast.show({
							title: '登录成功',
							type: 'success',
							url: 'pages/home/index',
							isTab: true
						})
					} else {
						this.$refs.uToast.show({
							title: res.meta.msg,
							type: 'warning',
							isTab: true
						})
					}
				})
			},
			// 跳转到用户注册
			register() {
				uni.navigateTo({
					url: '../register/userTp/userTp',
					complete() {
						console.log('1')
					}
				})
			}
			// 忘记密码
			,
			forgetPwd() {
				uni.navigateTo({
					url: `forgetPwd/forgetPwd?data=${this.loginForm.userName}`
				})
			},
			// 短信登录
			msgLogin() {
				uni.navigateTo({
					url: "msgLogin/msgLogin"
				})
			}
			// 校验是否输入了账号和密码
			,
			changeBtnStatus() {
				let flag = false
				for (var k in this.loginForm) {
					if (this.loginForm[k] == "") {
						flag = true
					}
				}
				this.btnStatus = flag
			}
			// 获取焦点
			,
			getFoucus(e) {
				let view = uni.createSelectorQuery().select(".userName")
				view.fields({
					rect: true
				}, data => {
					console.log(data)
				})
			},
			// 切换聚焦颜色
			changeBorder1() {
				this.isFocus1 = !this.isFocus1
			},
			// 更换聚焦颜色
			changeBorder2() {
				this.isFocus2 = !this.isFocus2
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white !important;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;

		.logo {
			// border:1px solid red;
			// width:100rpx;
			// height: 100rpx;
			border-radius: 20rpx;
			box-shadow: 0 4px 15px -8px #00d3bd;

			img {
				// border:1px solid blue;
				width: 100px;
				height: 100px;
			}

		}

		.logoTitle {
			padding-top: 20rpx;
			margin: 0 auto;
			font-size: 18px;
			font-weight: 500;
			padding-bottom: 40rpx;
		}

		.u-border-bottom::after {
			border-bottom-width: 0;

		}

		.text-area {
			width: 90%;
			display: flex;
			justify-content: center;
		}

		.u-input {
			padding: 4px 10px !important;
			border-bottom: 1px solid #eaeaea !important;

			input {
				text-align: center !important;
			}

		}

		// .content .u-input
		.beFocus {
			.u-input {
				padding: 4px 10px !important;
				border-bottom: 1px solid $u-m-color !important;

				input {
					text-align: center !important;
				}

			}
		}

		.password {
			input {
				padding-left: 1.5em !important;
			}
		}

		.u-form-item__message.data-v-2d68573a {
			padding: 0 !important;
		}

		.title {
			font-size: 28rpx;
			color: $u-content-color;
		}

		.button-demo {
			margin-top: 80rpx;
		}

		.link-demo {
			margin-top: 80rpx;
		}

		.loginBtn {
			margin-top: 20px;
			background-color: $u-m-color !important;
			width: 90%;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 46rpx;
			color: white !important;
			font-size: 16px;
		}

		.otherMethod {
			width: 90%;
			display: flex;
			margin-top: 30rpx;
			justify-content: space-between;
			align-content: space-between;
		}

		.registerBtn {
			// position: absolute;
			// bottom: 20px;
			margin-top: 28rpx;
			background-color: white !important;
			width: 90%;
			border: 1px solid $u-m-color;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 46rpx;
			color: $u-m-color !important;
			font-size: 16px;
		}

		.userFile {
			position: absolute;
			bottom: 20px;

			.file {
				color: #00D3BD !important;
			}
		}

	}
</style>
