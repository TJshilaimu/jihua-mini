<template>
	<view class="register">
		<view class="logo">
			<img :src="logo">
			<view>威选</view>
		</view>
		<view class="registerForm">
			<u-form style="width: 80%;" :model="registerForm" ref="registerForm" label-position="left" label-width="200"
			 :label-style="labelStyle">
				<u-form-item prop="name">
					<u-input v-model="registerForm.name" :border="false" placeholder="请输入用户名(6-16个字符)" @input="changeBtnStatu"
					 :clearable="false"></u-input>
				</u-form-item>
				<u-form-item prop="phone">
					<u-input v-model="registerForm.phone" placeholder="请输入手机号" @input="changeBtnStatu" :clearable="false"></u-input>
				</u-form-item>
				<u-form-item prop="code">
					<view class="phoneCode">
						<u-input style="width: 100%;" class="clearBoder" v-model="registerForm.code" placeholder="请输入验证码" @input="changeBtnStatu"
						 :clearable="false"></u-input>
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :seconds="seconds" ref="uCode" @change="codeChange"></u-verification-code>
						<text class="codeText" @click="getCode">{{tips}}</text>
					</view>
				</u-form-item>
				<u-form-item prop="password">
					<u-input class="password" v-model="registerForm.password" placeholder="请输入密码" type="password" @input="changeBtnStatu"
					 :clearable="false"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<view class="attionInfo">
			<view>1.用户名必须唯一且6-16个字符</view>
			<view>2.密码必须为6-16字符，包含数字和字母</view>
		</view>
		<button class="registerBtn" @click="register">注册</button>
		<view class="info">注册代表同意威选<text class="text">《用户协议》</text></view>
	</view>
</template>

<script>

	import { checkCard } from "../../util/util.js"
	export default {
		data() {
			return {
				// 
				logo: this.baseImgUrl + '/static/login/icon_denglu_logo.png',
				tips: "",
				// 验证码倒计时时间
				seconds: 60,
				// 表单label样式
				labelStyle: {
					"text-align": "justify",
					"text-align-last": "justify"
				},
				btnStatus: true,
				// 注册表单
				registerForm: {
					code: "",
					name: "",
					phone: "",
					password: "",
					role:""
				},
				codeStatus: false,
				// 表单校验规则
				rules: {
					name: [{
						required: true,
						message: '请输入用户名',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}, {
						max: 18,
						min: 6,
						message: '请输入用户名',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}],
					phone: [{
						required: true,
						message: '请输入手机号',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}],
					code: [{
						required: true,
						message: '请输入验证码',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}]
				},
				// 用户类型
				userTp: ""
			}
		},
		onShow: function() {
			// uni.screen.lockOrientation('landscape-primary'); //锁定
		},
		onLoad: function(data) {
			// 获取到注册的用户类型
			this.registerForm.role = data.userTp
		},
		// // 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		// onReady() {
		// 	this.$refs.registerForm.setRules(this.rules);
		// 	this.refCode = this.$refs.uCode;
		// },
		methods: {
			// 登陆页跳转
			login() {
				uni.navigateTo({
					url: "../login/index",
					fail: (err) => {
						console.log(err)
					}
				})
			},
			// 提交注册信息
			register() {
				this.$refs.registerForm.validate(valid => {
					if (valid) {
						this.$u.api.register(this.registerForm).then(res => {
							this.$u.toast(res.meta.msg)
							if (res.meta.code == 0) {
								this.$u.toast("正在登陆请稍等")
								this.$u.api.login({
									userName: this.registerForm.name,
									password: this.registerForm.password
								}).then(res => {
									if (res.meta.code === 0) {
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
										// 获取到用户信息
										this.$refs.uToast.show({
											title: '已登录',
											type: 'success',
											url: 'pages/home/index',
											isTab: true
										})
									} else {
										uni.switchTab({
											url: "../login/index"
										})
									}
								})
							}
						})
					} else {
						console.log('验证失败');
					}
				});
			},
			codeChange(text) {
				this.tips = text;
			},
			getCode() {
				if(!checkCard(this.registerForm.phone,/^[0-9]{11}$/)){
					this.$u.toast("手机号格式不正确")
					return
				}
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					this.$u.api.sendRegisterSms({
						phone: this.registerForm.phone
					}).then(res => {
						uni.hideLoading();
						this.$u.toast('验证码已发送');
						this.$refs.uCode.start();
					})
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			// 修改提交按钮
			changeBtnStatu() {
				let flag = false
				for (var k in this.registerForm) {
					if (this.registerForm[k] == "") {
						flag = true
					}
				}
				this.btnStatus = flag
			}
		}
	}
</script>

<style lang="scss">
	.register {
		display: flex;
		flex-direction: column;
		padding: 40rpx;

		.u-input {
			width: 100% !important;
			border-bottom: 1px solid #eaeaea;

			input {
				text-align: center !important;
			}

		}

		.logo {
			width: 90px;
			margin: 0 auto;

			img {
				width: 90px;
				height: 90px;
			}

			view {
				text-align: center;
				font-size: 16px;
				font-weight: bold;
			}
		}

		.clearBoder {
			.u-input {
				border-bottom: none !important;

				input {
					width: 100%;
					line-height: 43px;
				}
			}
		}

		.u-border-bottom::after {
			border-bottom-width: 0px;

		}

		.attionInfo {
			width: 80%;
			margin: 4px auto;
			font-size: 12px;
			color: #303133;

			view {
				margin: 2px 0;
			}
		}

		.phoneCode {
			position: relative;
			display: flex;
			align-items: flex-end;
			justify-content: space-between;
			border-bottom: 1px solid #eaeaea;
		}

		.codeText {
			position: absolute;
			right: 0;
			line-height: 35px;
			color: #00D3BD;
			z-index: 999;
		}

		.registerForm {
			width: 100%;
			margin: 0 auto;
			display: flex;
			justify-content: center;
			align-content: center;
		}

		.registerBtn {
			margin-top: 20px;
			width: 80%;
		}

		.password {
			width: 100%;
			position: relative;

			u-input {
				width: 100%;

				input {
					width: 100%;
				}
			}

			.u-input__right-icon {
				position: absolute;
				right: 0;
			}
		}

		.login {
			position: absolute;
			bottom: 20px;
		}

		.registerBtn {
			// position: absolute;
			// bottom: 20px;
			margin-top: 28rpx;
			background-color: $u-m-color !important;
			width: 80%;
			height: 90rpx;
			line-height: 90rpx;
			border-radius: 46rpx;
			color: white !important;
			font-size: 16px;
		}
		.info{
			width: 80%;
			margin-top: 60px;
			margin-left: auto;
			margin-right: auto;
			text-align: center;
			.text{
				color: $u-m-color;
			}
		}
	}
</style>
