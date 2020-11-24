<template>
	<view class="agreeInfo">
		<view class="agreeBox">
			<view class="agreeItem">
				<image :src="agreeImg" mode=""></image>
				<view class="agreeInfoItem">
					<text class="getTime">发送时间：2020-1-23 12:23</text>
					<text class="getTime">收到时间：2020-1-23 12:23</text>
					<text class="deadLine">合同将在<text class="toRed">23:36</text>分后过期</text>
					<view class="confirmTitle">
						合同将在发出后的48小时后过期，请您尽快确认
					</view>
				</view>
				<view class="tagStatus">
					已签约
				</view>
			</view>
			<view class="agreeBtn">
				<text class="secBtn refuse" @click="refuse">拒绝</text>
				<text class="secBtn sign">签约</text>
				<text class="secBtn see" @click="seeFile">查看合同</text>
			</view>
		</view>
		<view class="agreeBox">
			<view class="agreeItem">
				<image :src="agreeImg" mode=""></image>
				<view class="agreeInfoItem">
					<text class="getTime">发送时间：2020-1-23 12:23</text>
					<text class="getTime">收到时间：2020-1-23 12:23</text>
					<text class="deadLine">合同将在<text class="toRed">23:36</text>分后过期</text>
					<view class="confirmTitle">
						合同将在发出后的48小时后过期，请您尽快确认
					</view>
				</view>
				<view class="tagStatus">
					已签约
				</view>
			</view>
			<view class="agreeBtn">
				<text class="secBtn refuse" @click="refuse">拒绝</text>
				<text class="secBtn sign">签约</text>
				<text class="secBtn see" @click="seeFile">查看合同</text>
			</view>
		</view>
		<!-- 拒绝弹出窗 -->
		<u-popup v-model="show" mode="center">
			<view class="wrapR">
				<view class="titleR">
					确定拒绝签约合同
				</view>
				<view class="tipR">
					拒绝后此合同作废，将不能再重新签约此合同                      
				</view>
				<view class="smsCodeR">
					<u-input  class="inpR" type="text" placeholder="请输入验证码" placeholder-style="color:#dadada;font-size:13px;"/>
					<view class="getCodeR">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" 
						@change="codeChange" :startText="startText" :changeText="changeText" 
						:endText="endText"></u-verification-code>
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
				show:false,
				tips: '',
				seconds: 120,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取',
				agreeImg: this.baseImgUrl + '/static/1.jpg',
			};
		},
		onShow() {
			// 项目合同列表，根据项目id
			this.$u.api.selectProjectAgreementList({
				projectId:''
			}).then(res =>{
				console.log('合同列表',res)
			})
			// 项目合同所有列表，根据用户id
			this.$u.api.selectAllProjectAgreementList({
				userId:'23'
			}).then(res =>{
				console.log('合同所有列表',res)
			})
			//查看合同
			this.$u.api.selectAgreementById({
				id:'1'
			}).then(res =>{
				console.log('查看合同',res)
			})
			//添加合同
			this.$u.api.addAgreement({
				agreementId:'',
				agreementUserId:'',
				agreementUserName:'',
				content:'',
				id:1,
				projectId:'',
				reason:'',
				receiveTime:'',
				signName:'',
				signTime:'',
				status:''
			}).then(res =>{
				console.log('添加合同',res)
			})
			//修改合同
			this.$u.api.updateAgreement({
				// 待定
			}).then(res =>{
				console.log('修改合同',res)
			})
			//签订合同
			this.$u.api.signAgreement({
				// 待定
			}).then(res =>{
				console.log('签订合同',res)
			})
			//拒绝合同
			this.$u.api.refuseAgreement({
				// 待定
			}).then(res =>{
				console.log('拒绝合同',res)
			})
		},
		methods: {
			seeFile() {
				uni.navigateTo({
					url: '../seeContract/seeContract'
				})
			},
			refuse() {
				//弹出拒绝弹窗
				this.show =true;
			},
			//拒绝签约弹出框相关函数
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
	page {
		background-color: #f8f8f8;
		border-top: 1px solid $u-b-color;
	}

	.agreeInfo {

		border-bottom: 20rpx solid #f8f8f8;
		background-color: white;

		//合同信息
		.agreeBox {
			padding: 0 0 26rpx 30rpx;
			border-bottom: 1rpx solid $u-b-color;

			.agreeItem {
				padding-top: 13rpx;
				padding-right: 15rpx;
				display: flex;
				align-items: center;
				position: relative;
				overflow: hidden;
				background-color: white;
				image {
					width: 100rpx;
					height: 100rpx;
					border-radius: 8rpx;
					margin-right: 20rpx;
				}
				.agreeInfoItem {
					color: #666666;
					font-size: 22rpx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					.confirmTitle {
						color: #c40000;
					}
					.toRed {
						color: #c40000;
					}
				}
				.tagStatus {
					position: absolute;
					width: 200rpx;
					background-image: linear-gradient(to right, #FD6892, #FFB1C7);
					transform: rotate(45deg);
					right: -52rpx;
					top: 31rpx;
					text-align: center;
					color: white;
					font-size: 24rpx;
				}
			}

			.agreeBtn {
				display: flex;
				justify-content: flex-end;
				// padding-bottom:26rpx;
				padding-top: 20rpx;
				.secBtn {
					display: inline-block;
					width: 142rpx;
					height: 50rpx;
					text-align: center;
					line-height: 50rpx;
					font-size: 24rpx;
					border-radius: 50rpx;
					margin-right: 20rpx;
					&.refuse {
						border: 1rpx solid #999999;
						color: #666666;
					}
					&.sign {
						background-color: $u-m-color;
						color: white;
					}
					&.see {
						border: 1rpx solid $u-m-color;
						color: $u-m-color;
					}
				}
			}
		}
	}
	//拒绝弹出框相关样式
	.codeTextR{
		button{
			color: $u-m-color !important;
			&::after{
				border:none !important;
			}
		}
	}
	.titleR{
		color: #333333;
		font-size: 34rpx;
		font-weight: bold;
		padding-top:38rpx;
		text-align: center;
	}
	.tipR{
		color: #666666;
		box-sizing: border-box;
		font-size: 30rpx;
		width:508rpx;
		margin-left:60rpx;
		margin-right: 60rpx;
		text-align: center;
		padding-top:40rpx;
	}
	.smsCodeR{
		margin:0 auto;
		padding-top:60rpx;
		width:508rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid $u-b-color;
		.inpR{
			width:320rpx;
			border-right:1rpx solid $u-b-color;
		}
	}
	.btnR{
		margin-top:56rpx;
		border-top:1rpx solid $u-b-color;
		height: 90rpx;
		line-height: 90rpx;
		text-align:center;
		display: flex;
		text{
			flex:1;
			font-size: 30rpx;
			&.cancelR{
				border-right: 1rpx solid $u-b-color;
				color: #333333;
			}
			&.confirmR{
				color: $u-m-color;
			}
		}
	}
</style>
