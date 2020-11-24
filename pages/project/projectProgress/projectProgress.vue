<template>
	<view class="proAgreen">
		<view class="tagTips">
			<u-icon name="error-circle-fill"></u-icon>
			<text>合同已签约，等待需求方托付完项目资金后，项目就开始进行了</text>
		</view>
		<!-- 步骤条 -->
		<step />
		<!-- 项目卡片 -->
		<view class="contentItem" @click="toDetail">
			<view class="projectInfo">
				<view class="projecImg">
				<image :src="projecImg" mode=""></image>
				</view>
				<view class="projecText">
					<view class="title">
						<text>小程序开发小程序开发小程序开发小程序开发小程序开发</text>
						
					</view>
					<view class="titleTag">
						<text>人力资源</text>
					</view>
					<view class="selectType">
						<view class="u-margin-top-4">招募人数：500人</view>
						<view class="u-margin-top-4">项目周期：30天</view>
					</view>
				</view>
			</view>
			<view class="projectTiem">
				<view class="itemLeft">
					项目金额
				</view>
				<view class="itemRight">
					<text class="money">￥</text>
					<text class="moneyNum">
						100000
					</text>
				</view>
			</view>
		</view>
		<!-- 需求方信息 -->
		<view class="needInfo">
			<view class="needTitle">
				<view class="needTop">
					<view class="needTopLeft">
						<view class="line">
							
						</view>
						<text>需求方信息</text>
					</view>
					<view class="needTopRight">
						<text>查看详情</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="needTag">
					<image :src="projecImg" mode=""></image>
					<view class="needTagInfo">
						<view class="infoName">
							张三
						</view>
						<view class="infoPhone">
							<text>手机号：156****1223</text>
							<text>邮箱：156****1223</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 合同信息 -->
		<view class="agreeInfo">
			<view class="needTitle">
				<view class="needTop">
					<view class="needTopLeft">
						<view class="line">
						</view>
						<text>合同信息</text>
					</view>
					<view class="needTopRight" @click="moreContract">
						<text>查看更多</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<!-- 遍历循环此处 -->
				<view class="agreeBox">
					<view class="agreeItem">
						<image :src="projecImg" mode=""></image>
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
						<text class="secBtn sign" @click="sign">签约</text>
						<text class="secBtn see" @click="seeFile">查看合同</text>
					</view>
				</view>
				<view class="agreeBox">
					<view class="agreeItem">
						<image :src="projecImg" mode=""></image>
						<view class="agreeInfoItem">
							<text class="getTime">发送时间：2020-1-23 12:23</text>
							<text class="getTime">收到时间：2020-1-23 12:23</text>
							<text class="deadLine">合同将在<text class="toRed">23:36</text>分后过期</text>
							<view class="confirmTitle">
								合同将在发出后的48小时后过期，请您尽快确认
							</view>
						</view>
						<view class="tagStatus staySign">
							待签约
						</view>
					</view>
					<view class="agreeBtn">
						<text class="secBtn refuse" @click="refuse">拒绝</text>
						<text class="secBtn sign" @click="sign">签约</text>
						<text class="secBtn see" @click="seeFile">查看合同</text>
					</view>
				</view>
			</view>
		</view>
		
		<!-- 拒绝弹出窗 -->
		<u-popup v-model="showPop" mode="center">
			<view class="wrapR">
				<view class="titleR">
					确定拒绝签约合同
				</view>
				<view class="tipR">
					拒绝后此合同作废，将不能在重新签约此合同                      
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
		<!-- 拒绝原因 -->
		<u-action-sheet :list="list" v-model="showRefuse" :mask-close-able="true" :cancel-btn="true" :cancel-text="cancelText"></u-action-sheet>
	</view>
</template>

<script>
	import Step from './projectStep.vue'
	import RefuseCode from '../refusePopup.vue'
	export default{
		data(){
			return{
				show:false,
				showRefuse:false,
				tips: {
					text: ''
				},
				list: [{
					text: '原因1',
					color: 'black',
					fontSize: 28
				},
				{
					text: '原因1',
					color: 'black',
					fontSize: 28
				},{
					text: '原因1',
					color: 'black',
					fontSize: 28
				},
				{
					text: '原因1',
					color: 'black',
					fontSize: 28
				}],
				cancelText:'确定',
				items: [{
							value: 1,
							name: '原因1'
						},
						{
							value: 2,
							name: '原因2',
							checked: 'true'
						},
						{
							value: 3,
							name: '原因3'
						},
						{
							value: 4,
							name: '原因4'
						}
					],	
				current:0,
				isRefuse:false,
				setNum:1,
				//拒绝弹窗
				showPop:false,
				tips: '',
				seconds: 120,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取',
				projecImg: this.baseImgUrl + '/static/1.jpg',
			}
		},
		components:{
			Step,
			RefuseCode
		},
		methods:{
			refuse(){
				console.log('r')
				this.showPop = true
			},
			//签约>合同详情
			sign(){
				uni.navigateTo({
					url:'../contractDetail/contractDetail'
				})
			},
			radioChange(i){
				console.log('点击了',i)
				this.setNum = i.detail.value
			},
			//拒绝弹窗
			closeBtn(e){
				e.preventDefault();
				this.isRefuse = false
			},
			sureClick(){
				let that = this;
				uni.showToast({
					title:'已拒绝签约',
					success() {
						that.isRefuse = false;
						//注意这里还得添加修改标签的功能，在调用接口后开发
					}
				})
			},
			//查看合同,需调用接口开发后续功能
			seeFile(){
				console.log('11')
				uni.navigateTo({
					url:'../seeContract/seeContract'
				})
			},
			//查看更多合同列表
			moreContract(){
				uni.navigateTo({
					url:'../contractList/contractList'
				})
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
				this.showPop=false;
				this.showRefuse=true;
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
	.tagTips{
		background-color: #f8f8f8;
		padding:28rpx 22rpx;
		text{
			font-size: 24rpx;
			color:#999999;
		}
	}
	.proAgreen{
		.contentItem {
			// margin:30rpx;
			padding:30rpx 40rpx 22rpx 20rpx;
			background-color: #fff;
			border-top:20rpx solid #f8f8f8;
			// border:1px solid blue;
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid $u-b-color;
			
			.projectInfo {
				padding-bottom: 20rpx;
				display: flex;
				height: auto;
				align-items: center;
				font-size: 28rpx;
				letter-spacing: 1rpx;
				.projecImg {
					width: 150rpx;
					height: 150rpx;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.projecText{
					margin-left:20rpx;
					.title{
						font-size:30rpx;
						font-weight: bold;
						color:#333333;
						width:500rpx;
						// margin-bottom: 12rpx;
						text{
							display: inline-block;
							height:64rpx;
						}
					}
					.titleTag{
						text{
							display: inline-block;
							padding:4rpx 10rpx;
							border:1rpx solid $u-m-color;
							color:$u-m-color;
							margin-right:12rpx ;
							font-size:20rpx;
						}
					}
					.selectType{
						display: flex;
						
						font-size: 26rpx;
						color:#666666;
					}
				}
			}
		
			.projectTiem {
				padding-top:22rpx;
				border-top:1rpx solid $u-b-color;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.itemLeft{
					display: flex;
					align-items: center;
					color:#999999;
					.otherInfo{
						display: flex;
						align-items: center;
						margin-right: 40rpx;
						justify-content: flex-start;
						font-size: 24rpx;
						image{
							width:28rpx;
							height:28rpx;
							margin-right:10rpx;
						}
					}
				}
				.itemRight{
					color:#c40000;
					font-weight: bold;
					font-size: 20rpx;
					.moneyNum{
						font-size: 26rpx;
					}
				}
			}
		}
		//需求方信息
		.needTitle{
	
			border-top:20rpx solid #f8f8f8;
			border-bottom: 20rpx solid #f8f8f8;
			.needTop{
				padding:28rpx 30rpx 24rpx 30rpx;
				display: flex;
			
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid $u-b-color;
				.needTopLeft{
					display: flex;
					align-items: center;
	
					text{
						color: #333333;
						font-size: 28rpx;
						font-weight: bold;
					}
					.line{
						display: inline-block;
						width:6rpx;
						height:30rpx;
						background-color: $u-m-color;
						margin-right:13rpx;
					}
				}
				.needTopRight{
					color: #999999;
					text{
						display: inline-block;
						margin-right: 11rpx;
					}
				}
			}
			.needTag{
				display: flex;
				align-items: center;
				padding:20rpx 26rpx;
				image{
					width:74rpx;
					height:74rpx;
					border-radius: 50%;
				}
				.needTagInfo{
					margin-left:19rpx;
					height: 74rpx;
					display: flex;
					justify-content: center;
					flex-direction: column;
					.infoName{
						color: #333333;
						font-size: 26rpx;
						font-weight: bold;
					}
					.infoPhone{
						margin-top:4rpx;
						text{
							color: #999999;
							font-size: 22rpx;
							display: inline-block;
							margin-right: 36rpx;
						}
					}
				}
			}
			//合同信息
			.agreeBox{
				padding:0 0 13rpx 15rpx;
				border-bottom: 1rpx solid $u-b-color;
				.agreeItem{
					padding-top:13rpx;
					padding-right: 15rpx;
					display: flex;
					align-items: center;
					position: relative;
					overflow: hidden;
					image{
						width:100rpx;
						height:100rpx;
						border-radius:8rpx;
						margin-right:20rpx;
					}
					.agreeInfo{
						color: #666666;
						font-size: 22rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.confirmTitle{
							color: #c40000;
						}
						.toRed{
							color: #c40000;
						}
					}
					.tagStatus{
						position: absolute;
						width:200rpx;
						background-image: linear-gradient(to right, #FD6892 , #FFB1C7);
						transform: rotate(45deg);
						right: -52rpx;
						top:31rpx;
						text-align: center;
						color: white;
						font-size: 24rpx;
						height: 32rpx;
						line-height: 32rpx;
						&.staySign{
							background-image: none;
							background-color: $u-m-color;
						}
					}
				}
				.agreeBtn{
					display: flex;
					justify-content: flex-end;
					.secBtn{
						display: inline-block;
						width:142rpx;
						height: 50rpx;
						text-align: center;
						line-height: 50rpx;
						font-size: 24rpx;
						border-radius: 50rpx;
						&.refuse{
							border:1rpx solid #999999;
							color: #666666;
						}
						&.sign{
							background-color: $u-m-color;
							color: white;
						}
						&.see{
							border:1rpx solid $u-m-color;
							color: $u-m-color;
						}
					}
				}
			}
		}
		//合同信息
		.agreeInfo{
			border-top:20rpx solid #f8f8f8;
			border-bottom: 20rpx solid #f8f8f8;
			.needTop{
				padding:28rpx 30rpx 24rpx 30rpx;
				display: flex;
			
				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid $u-b-color;
				.needTopLeft{
					display: flex;
					align-items: center;
				
					text{
						color: #333333;
						font-size: 28rpx;
						font-weight: bold;
					}
					.line{
						display: inline-block;
						width:6rpx;
						height:30rpx;
						background-color: $u-m-color;
						margin-right:13rpx;
					}
				}
				.needTopRight{
					color: #999999;
					text{
						display: inline-block;
						margin-right: 11rpx;
					}
				}
			}
			//合同信息
			.agreeBox{
				padding:0 0 26rpx 30rpx;
				border-bottom: 1rpx solid $u-b-color;
				.agreeItem{
					padding-top:13rpx;
					padding-right: 15rpx;
					display: flex;
					align-items: center;
					position: relative;
					overflow: hidden;
					background-color: white;
					image{
						width:100rpx;
						height:100rpx;
						border-radius:8rpx;
						margin-right:20rpx;
					}
					.agreeInfoItem{
						color: #666666;
						font-size: 22rpx;
						display: flex;
						flex-direction: column;
						justify-content: center;
						.confirmTitle{
							color: #c40000;
						}
						.toRed{
							color: #c40000;
						}
					}
					.tagStatus{
						position: absolute;
						width:200rpx;
						background-image: linear-gradient(to right, #FD6892 , #FFB1C7);
						transform: rotate(45deg);
						right: -52rpx;
						top:31rpx;
						text-align: center;
						color: white;
						font-size: 24rpx;
						
					}
				}
				.agreeBtn{
					display: flex;
					justify-content: flex-end;
					// padding-bottom:26rpx;
					padding-top:20rpx;
					.secBtn{
						display: inline-block;
						width:142rpx;
						height: 50rpx;
						text-align: center;
						line-height: 50rpx;
						font-size: 24rpx;
						border-radius: 50rpx;
						margin-right: 20rpx;
						&.refuse{
							border:1rpx solid #999999;
							color: #666666;
						}
						&.sign{
							background-color: $u-m-color;
							color: white;
						}
						&.see{
							border:1rpx solid $u-m-color;
							color: $u-m-color;
						}
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
