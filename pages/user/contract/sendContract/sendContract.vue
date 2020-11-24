<template>
	<view class="seeContract">
		<view class="title">
			信息标注合同
		</view>
		<view class="richText" :class="[suspension?'addH':'']">
			<!-- 	<rich-text :nodes="">
                                甲方
            </rich-text> -->
			<view class="rich">
				富文本
				甲方签名：
			</view>
		</view>
		<!-- if代表是否展示合同全部 -->
		<view class="contractNum" v-if="!suspension">
			合同编号：1213213213
		</view>
		<view class="btn">
			<button class="saveBtn" @click="send" >发送合同</button>
		</view>
		<!-- 确定发送合同弹窗 -->
		<u-popup v-model="showPop" mode="center">
			<view class="wrapR">
				<view class="titleR">
					确定发送合同吗
				</view>
				<view class="tipR">
					请输入验证码验证
				</view>
				<view class="smsCodeR">
					<u-input class="inpR" type="text" placeholder="请输入验证码" placeholder-style="color:#dadada;font-size:13px;" />
					<view class="getCodeR">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"
						 :startText="startText" :changeText="changeText" :endText="endText"></u-verification-code>
						<u-button class="codeTextR" @click="getCode">{{tips}}</u-button>
					</view>
				</view>
				<view class="btnR">
					<text class="cancelR" @click="cancel">取消</text>
					<text class="confirmR" @click="confirm">确认</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSave:false,
				suspension:false,  //悬浮
				signImg: this.baseImgUrl + '/static/1.jpg',
				//发送合同弹窗
				showPop: false,
				tips: '',
				seconds: 120,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取'
			};
		},
		methods:{
			send(){
				this.showPop=true;
			},
			addH(){
				console.log('pk')
				this.suspension=true;
			},
			//发送合同弹出框相关函数
			cancel() {
				uni.showToast({
					title: '取消'
				})
			},
			confirm() {
				uni.showToast({
					title: '确认'
				})
				this.showPop = false;
				this.showRefuse = true;
			},
			codeChange(text) {
				// console.log(text);
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
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
				if (index == 0) {
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
	page {
		border-top: 1rpx solid $u-b-color;
	}

	.seeContract {
		padding: 42rpx 42rpx 40rpx 30rpx;
		.title {
			text-align: center;
			padding-bottom: 36rpx;
			color: #333333;
			font-size: 40rpx;
		}
		.richText {
			height: 800rpx;
			box-sizing: border-box;
			background-color: skyblue;
			&.addH{
				height: 900rpx;
				overflow: scroll;
			}
		}

		.contractNum {
			padding-top: 20rpx;
			color: #999999;
			font-size: 26rpx;
			height: 100rpx;
			background-color: #f8f8f8;
		}

		.btn {
			height: 130rpx;
			padding-top: 20rpx;
			text-align: center;
			background-color: white;
			font-size: 32rpx;
			
			.saveBtn {
				width: 630rpx;
				height: 90rpx;
				line-height: 90rpx;
				border-radius: 90rpx;
				background-color: $u-m-color;
				color: white;
			}
			.tipTitle{
				margin-top:24rpx;
				display: inline-block;
				color: #999999;
				font-size: 28rpx;
				padding-bottom: 18rpx;
				.file{
					color: $u-m-color;
				}
			}
		}
	
	}
	
	//发送合同弹出框相关样式
	.codeTextR {
		button {
			color: $u-m-color !important;
	
			&::after {
				border: none !important;
			}
		}
	}
	
	.titleR {
		color: #333333;
		font-size: 34rpx;
		font-weight: bold;
		padding-top: 38rpx;
		text-align: center;
	}
	
	.tipR {
		color: #666666;
		box-sizing: border-box;
		font-size: 30rpx;
		width: 508rpx;
		margin-left: 60rpx;
		margin-right: 60rpx;
		text-align: center;
		padding-top: 40rpx;
	}
	
	.smsCodeR {
		margin: 0 auto;
		padding-top: 60rpx;
		width: 508rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid $u-b-color;
	
		.inpR {
			width: 320rpx;
			border-right: 1rpx solid $u-b-color;
		}
	}
	
	.btnR {
		margin-top: 56rpx;
		border-top: 1rpx solid $u-b-color;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		display: flex;
	
		text {
			flex: 1;
			font-size: 30rpx;
	
			&.cancelR {
				border-right: 1rpx solid $u-b-color;
				color: #333333;
			}
	
			&.confirmR {
				color: $u-m-color;
			}
		}
	}
</style>
