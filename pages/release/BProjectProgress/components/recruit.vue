<template>
	<view class="recruit">
		<view class="agreeInfo">
			<view class="needTitle">
				<view class="needTop">
					<view class="needTopLeft">
						<view class="line">
						</view>
						<text>开发者信息</text>
					</view>
					<view class="needTopRight" @click="moreContract">
						<text>查看详情</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="contractBox">
					<view class="itemBox">
						<view class="itemImg">
							<image src="../../../../static/1.jpg" mode=""></image>
						</view>
						<view class="itemInfo">
							<view class="name">
								张三
							</view>
							<view class="phone">
								<text>手机号：156****678</text>
								<text>邮箱：********@qq.com</text>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="needTopC">
			<view class="needTopLeft">
				<view class="line">
				</view>
				<text>项目合同</text>
			</view>
			<view class="needTopRight" @click="moreContract">
				<text>已签约</text>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
		<view class="needTopPayBox">
			<view class="needTopPay">
				<view class="needTopLeft">
					<view class="line">
					</view>
					<text>待支付</text>
				</view>
			</view>
			<view class="payBox">
				<view class="title">
					<text class="money">￥5000</text>
					<text class="content">请在<text class="toRed">100:20:30</text>内完成支付</text>
				</view>
				<view class="radio">
					<u-radio-group v-model="value" @change="radioGroupChange">
						<view class="box1">
							<view class="payType">
								<image src="../../../../static/b-recruit/icon_weixinzhifu.png" mode=""></image>
								<text>微信支付</text>
							</view>
								<u-radio name='1'></u-radio>
						</view>
						<view class="box1">
							<view class="payType">
								<image src="../../../../static/b-recruit/icon_yuezhifu.png" mode=""></image>
								<text>账户余额支付(可用2000元)</text>
							</view>
							<!-- 判断余额是否足够 -->
							<u-radio name='2' v-if="enoughMoney"></u-radio>
							<text class="tip" v-else>余额不足</text>
						</view>
					</u-radio-group>
				</view>
				<view class="btn">
					<button type="default" @click="surePay">确认支付</button>
				</view>
			</view>
		</view>
	<!-- 输入密码 -->
	<u-popup v-model="showPwd" :closeable="false" mode="center" border-radius="14" @finish="finish">
		<view class="inputPwd">
			<view class="text1">请输入支付密码</view>
			<view class="text2">待支付<text>￥{{payMoney}}</text></view>
			<view class="input">
				<u-message-input :maxlength="6"></u-message-input>
			</view>
		</view>
	</u-popup>
	</view>
</template>

<script>
	export default{
		data(){
			return {
				value:'1',
				enoughMoney:false,
				showPwd:false,
				payMoney:3000.00
			}
		},
		methods:{
				// 选中任一radio时，由radio-group触发
				radioGroupChange(e) {
					console.log(e);
				},
				surePay(){
					if(true){//判断是否有设置登录密码
						this.showPwd=true;
					}else{//没有设置
						uni.showModal({
							title:'还未设置交易密码',
							content:'请先去设置交易密码，才能申请提现',
							confirmText:'去设置',
							confirmColor:'#00d3bd',
						    success: function (res) {
								if (res.confirm) {
									console.log('用户点击确定');
								} else if (res.cancel) {
									console.log('用户点击取消');
								}
							}
						})
						}
				
				},
				finish(v){
					console.log(v)
				}
		}
	}
</script>

<style lang="scss">
	.u-radio{
		width:17px !important;
		.u-radio__label.data-v-da6758f0{
			margin-right: 0rpx !important;
		}
	}
	.u-radio__label.data-v-da6758f0{
			margin-right: 0rpx !important;
	}
	.agreeInfo {
		background-color: white;
		border-top: 20rpx solid #f8f8f8;
		border-bottom: 20rpx solid #f8f8f8;

		.contractBox {
			.itemBox {
				padding: 30rpx 26rpx;

				display: flex;
				align-items: center;

				.itemImg {
					width: 37px;
					height: 37px;

					image {
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}

				.itemInfo {
					margin-left: 18rpx;

					.name {
						color: #333333;
						font-size: 26rpx;
						font-weight: bold;
					}

					.phone {
						padding-top: 4px;
						color: #666666;
						font-size: 22rpx;

						text {
							display: inline-block;
							margin-right: 36rpx;
						}
					}

					.itemTag {
						display: flex;
						position: relative;

						.sureBtn {
							width: 166rpx;
							height: 46rpx;
							line-height: 46rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: $u-m-color;
							border-radius: 46rpx;
							color: 24rpx;
							color: white;
						}
					}
				}
			}

		}
	}
	.needTopC {
		background-color: white;
		padding: 28rpx 30rpx 24rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 20rpx solid #f8f8f8;
	
		.needTopLeft {
			display: flex;
			align-items: center;
	
			text {
				color: #333333;
				font-size: 28rpx;
				font-weight: bold;
			}
	
			.line {
				display: inline-block;
				width: 6rpx;
				height: 30rpx;
				background-color: $u-m-color;
				margin-right: 13rpx;
			}
		}
	
		.needTopRight {
			color: #999999;
	
			text {
				display: inline-block;
				margin-right: 11rpx;
			}
		}
	}
	.needTopPay{
		background-color: white;
		padding: 28rpx 30rpx 24rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1rpx solid $u-b-color;
	
		.needTopLeft {
			display: flex;
			align-items: center;
	
			text {
				color: #333333;
				font-size: 28rpx;
				font-weight: bold;
			}
	
			.line {
				display: inline-block;
				width: 6rpx;
				height: 30rpx;
				background-color: $u-m-color;
				margin-right: 13rpx;
			}
		}
	
		.needTopRight {
			color: #999999;
	
			text {
				display: inline-block;
				margin-right: 11rpx;
			}
		}
	}
	.payBox{
		padding:20px 15px;
		background-color: white;
		.title{
			display: flex;
			flex-direction: column;
			padding-bottom: 20px;
			align-items: center;
			justify-content: center;
			text-align: center;
			.money{
				color:#333;
				font-size: 22px;
				font-weight: bold;
			}
			.content{
				color: #666;
				font-size: 12px;
				.toRed{
					color: #c40000;
				}
			}
		}
		.radio{
			.box1{
				display: flex;
				justify-content: space-between;
				padding-bottom: 18px;
				.tip{
					color: #999;
					font-size: 13px;
				}
			}
			.payType{
				display: flex;
				align-items: center;
				image{
					width:20px;
					height:17px;
					margin-right: 12rpx;
				}
			}
		}
		.btn{
			button{
				background-color: $u-m-color;
				height:90rpx;
				border-radius: 90rpx;
				color: white;
			}
		
		}
	}
.needTopPayBox{
	border-bottom: 16px solid #f8f8f8;
}

// 支付密码
.inputPwd{
		padding: 20px;
		.text1{
			padding-bottom: 10px;
		}
		.text2{
			padding-bottom: 10px;
			font-size: 12px;
			color: #999999;
			text{
				color: #C40000;
			}
		}
		.u-char-box{
			border-radius: 15px !important;
			box-sizing: border-box !important;
			padding: 0 15px !important;
			background-color: #F8F8F8;
		}
		.u-char-item{
			width: 30px !important;
			margin: 0 !important;
			height: 30px !important;
			line-height: 30px !important;
			border:none !important;
		}
	}
</style>
