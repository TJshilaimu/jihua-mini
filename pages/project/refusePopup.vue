<template>
	<view class="refusePopup">
		<u-popup v-model="show" mode="center" @close="close">
			<view class="wrap">
				<view class="title">
					确定拒绝签约合同
				</view>
				<view class="tip">
					拒绝后此合同作废，将不能在重新签约此合同                      
				</view>
				<view class="smsCode">
					<u-input  class="inp" type="text" placeholder="请输入验证码" placeholder-style="color:#dadada;font-size:13px;"/>
					<view class="getCode">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" 
						@change="codeChange" :startText="startText" :changeText="changeText" 
						:endText="endText"></u-verification-code>
						<u-button class="codeText" @click="getCode">{{tips}}</u-button>
					</view>
				</view>
				<view class="btn">
					<text class="cancel" @click="cancel">取消</text>
					<text class="confirm" @click="confirm">确认</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default{
		
		data(){
			return {
				show:false,
				tips: '',
				seconds: 120,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取'
			}
		},
		methods: {

			cancel(){
				uni.showToast({
					title:'取消'
				})
			},
			confirm(){
				uni.showToast({
					title:'确认'
				})
			},
			codeChange(text) {
				// console.log(text);
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			secondsChange(index) {
				this.seconds = index == 0 ? 60 : index == 1 ? 10 : 5;
			},
			textChange(index) {
				if(index == 0) {
					this.startText = '点一下获取',
					this.changeText = '重新获取Xs',
					this.endText = '再次获取'
				} else {
					this.startText = '获取验证码',
					this.changeText = 'X秒重新获取',
					this.endText = '重新获取'
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				this.$u.toast('倒计时开始');
			},
			reset() {
				this.$refs.uCode.reset();
			}
		}
	}
</script>

<style lang="scss">

	.codeText{
		button{
			color: $u-m-color !important;
			&::after{
				border:none !important;
			}
		}
	}
	.title{
		color: #333333;
		font-size: 34rpx;
		font-weight: bold;
		padding-top:38rpx;
		text-align: center;
	}
	.tip{
		color: #666666;
		box-sizing: border-box;
		font-size: 30rpx;
		width:508rpx;
		margin-left:60rpx;
		margin-right: 60rpx;
		text-align: center;
		padding-top:40rpx;
	}
	.smsCode{
		margin:0 auto;
		padding-top:60rpx;
		width:508rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid $u-b-color;
		.inp{
			width:320rpx;
			border-right:1rpx solid $u-b-color;
		}
	}
	.btn{
		margin-top:56rpx;
		border-top:1rpx solid $u-b-color;
		height: 90rpx;
		line-height: 90rpx;
		text-align:center;
		display: flex;
		text{
			flex:1;
			font-size: 30rpx;
			&.cancel{
				border-right: 1rpx solid $u-b-color;
				color: #333333;
			}
			&.confirm{
				color: $u-m-color;
			}
		}
	}
</style>
