<template>
	<view class="forgetPhone">
		<view class="phone">
			手机号
		</view>
		<u-form ref="phoneForm" :model="phoneForm">
			<u-form-item prop="phone">
				<u-input v-model="phoneForm.phone" placeholder="请输入手机号" @input="changeBtnStatus"></u-input>
			</u-form-item>
		</u-form>
		<view class="nextBtn">
			<button class="btnItem" @click="checkRule" :disabled="btnStatus">下一步</button>
		</view>
	</view>
</template>

<script>
	import { checkCard } from '../../../util/util.js'
	export default {
		data() {
			return {
				phoneForm: {
					phone: ""
				},
				btnStatus:true,

			}
		},
		onLoad: function(data) {
			// 获取到用户输入的内容
			this.phoneForm.phone = data.data
		},
		onReady: function() {
			this.$refs.phoneForm.setRules(this.rules);
		},
		methods: {
			// 发送验证码
			sendCode() {
				// 路由跳转
				uni.navigateTo({
					url:`./inputPhoneCode?phone=${this.phoneForm.phone}`
				})
			},
			// 校验是否输入了账号和密码
			changeBtnStatus() {
				let flag = false
				for (var k in this.phoneForm) {
					if (this.phoneForm[k] == "") {
						flag = true
					}
				}
				this.btnStatus = flag
			},
			checkRule(){
				if(this.phoneForm.phone){
					let reg = /^1[0-9]{10}$/;
					let str = this.phoneForm.phone;
					let isLegal = checkCard(str,reg);
					if(isLegal){ // 合法，可以点击下一步
						uni.navigateTo({
							url:`./inputPhoneCode?phone=${this.phoneForm.phone}`
						})
					}else{
						uni.showToast({
							title:'手机号输入不正确',
							icon:'none',
							duration:1000,
						})
					}
				}else{
					uni.showToast({
						title:'请输入正确的手机号',
						icon:'none',
						duration:1000,
					})
				}
			
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.forgetPhone {
		// width: 80%;
		margin: 0 auto;
		.phone{
			height:30rpx;
			margin-top:46px;
			margin-left: 60rpx;
			font-size: 16px;
			color: #333333;
		}
		.u-form{
			padding-left:60rpx !important;
			padding-right: 60rpx !important;
		}
		.u-input {
			
			color: #333333 !important;
			font-size: 16px !important;
		}
		.u-input__input{
			font-size: 16px !important;
		}

		.u-border-bottom::after {
			border-bottom-width: 1px;

		}

		.u-form-item__message.data-v-2d68573a {
			padding: 0px !important;
		}

		.nextBtn {
			margin: 60rpx 60rpx;
			.btnItem{
				height: 90rpx;
				border-radius:46rpx;
				background-color: $u-m-color;
				color: white;
				font-size: 16px;
			}
		}
	}
</style>
