<template>
	<view class="content">
		<view class="logo">
			<img :src="logo">
		</view>
		<view class="logoTitle">
			威选
		</view>
		<view  class="text-area">
			<u-form ref="phoneForm" style="width:100%" :model="phoneForm">
				<u-form-item prop="phone">
					<u-input type="number" v-model="phoneForm.phone" placeholder="请输入手机号码"></u-input>
				</u-form-item>
			</u-form>
		</view>
		<!-- <button class="getSmsCode" :class="[btnStatus? 'addOpacity' : '']"  @click="sendCode" :disabled="btnStatus">获取验证码</button> -->
		<button class="getSmsCode" :class="[!phoneForm.phone? 'addOpacity' : '']"  @click="sendCode" :disabled="!phoneForm.phone">获取验证码</button>
	
		<view class="otherMethod">
			<view @click="toLogin">密码登录</view>
			<view @click="toRegister">立即注册</view>
		</view>
	
		<view class="userFile" >登录代表同意威选<text class="file">《用户协议》</text></view>
		<u-toast ref="uToast" />
	</view>
</template>

<script>

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
				phoneForm: {
					phone: ""
				},
				// 表单校验规则
				rules: {
					phone: [{
						required: true,
						message: '请输入手机号',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}, {
						pattern: /^1[0-9]{10}$/,
						message: '手机号格式不正确',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}]
				},
			}
		},
		onShow() {
			uni.login({
				provider: "weixin",
				success: function(res) {
					console.log(res.code)
				}
			})
		},
		onLoad: function(data) {
			// 获取到用户输入的内容
			console.log(data);
			this.phoneForm.phone = data.data
		},
		onReady: function() {
			this.$refs.phoneForm.setRules(this.rules);
		},
		methods: {
			// 密码登录
			toLogin() {
				uni.navigateTo({
					url: "../index"
				})
			},
			//立即注册
			toRegister(){
				uni.navigateTo({
					url:"../../register/userTp/userTp",
					complete() {
						console.log('12345')
					}
				})
			},
			// 获取焦点
			getFoucus(e){
				let view = uni.createSelectorQuery().select(".userName")
				view.fields({rect:true},data=>{
					console.log(data)
				})
			},
			// 发送验证码
			sendCode() {
				// 路由跳转
				// if(this.$refs.phoneForm.value)
				uni.navigateTo({
					url:`./inputPhoneCode?phone=${this.phoneForm.phone}`
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white !important;
	}
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 40rpx;

		.logo {
			border-radius: 20rpx;
			box-shadow: 0 4px 15px -8px #00d3bd;
			img {
				width: 100px;
				height: 100px;
			}
	
		}
		.logoTitle{
			padding-top:20rpx;
				margin:0 auto;
				font-size:18px;
				font-weight: 500;
				padding-bottom: 40rpx;
			}
		.u-border-bottom::after {
			border-bottom-width: 0;

		}

		.text-area {
			width: 90%;
			// border:1px solid red;
			display: flex;
			justify-content: center;
		}

		.u-input {
			margin: 4px 10px !important;
			border-bottom: 1px solid #eaeaea;
			input {
				text-align: center !important;
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

		.getSmsCode {
			margin-top: 20px;
			background-color: $u-m-color !important;
			width: 90%;
			height:90rpx;
			line-height: 90rpx;
			border-radius: 46rpx;
			color:white !important;
			font-size: 16px;
			&.addOpacity{
				opacity: .5;
			}
		}

		.otherMethod {
			width: 90%;
			display: flex;
			margin-top:30rpx;
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
			height:90rpx;
			line-height: 90rpx;
			border-radius: 46rpx;
			color:$u-m-color !important;
			font-size: 16px;
		}
		.userFile{
			position: absolute;
			bottom: 20px;
			.file{
				color:#00D3BD !important;
			}
		}

	}
</style>

<!-- 

<script>
	export default {
		data() {
			return {
				phoneForm: {
					phone: ""
				},
				// 表单校验规则
				rules: {
					phone: [{
						required: true,
						message: '请输入手机号',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}, {
						pattern: /^1[0-9]{10}$/,
						message: '手机号格式不正确',
						// 可以单个或者同时写两个触发验证方式
						trigger: 'blur'
					}]
				},
			}
		},
		onLoad: function(data) {
			// 获取到用户输入的内容
			console.log(data);
			this.phoneForm.phone = data.data
		},
		onReady: function() {
			this.$refs.phoneForm.setRules(this.rules);
		},
		methods: {
			// 发送验证码
			sendCode() {
				// 路由跳转
				// if(this.$refs.phoneForm.value)
				uni.navigateTo({
					url:`./inputPhoneCode?phone=${this.phoneForm.phone}`
				})
			}
		}
	}
</script>

<style lang="scss">
	.forgetPhone {
		width: 80%;
		margin: 0 auto;
display: ;
		.u-input {
			padding: 4px 10px !important;
		}

		.u-border-bottom::after {
			border-bottom-width: 0px;

		}

		.u-form-item__message.data-v-2d68573a {
			padding: 0 !important;
		}

		.nextBtn {
			width: 60%;
			margin: 0 auto;
		}
		.logo {
			// border:1px solid red;
			// width:100rpx;
			// height: 100rpx;
			border-radius: 20rpx;
			box-shadow: 0 4px 15px -8px #00d3bd;
			img {
				width: 100px;
				height: 100px;
			}
		}
		.logoTitle{
			padding-top:20rpx;
				margin:0 auto;
				font-size:18px;
				font-weight: 500;
				padding-bottom: 40rpx;
			}
	}
</style>
 -->