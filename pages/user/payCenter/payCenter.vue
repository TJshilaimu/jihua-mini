<template>
	<view>
		<view class="payBox">
			<view class="title">
				<text class="money">￥5000</text>
				<text class="content">请在<text class="toRed">100:20:30</text>内完成支付</text>
			</view>
			<view class="radio">
				<u-radio-group v-model="value" @change="radioGroupChange">
					<view class="box1">
						<view class="payType">
							<image :src="img1" mode=""></image>
							<text>微信支付</text>
						</view>
							<u-radio name='1'></u-radio>
					</view>
					<view class="box1">
						<view class="payType">
							<image :src="img2" mode=""></image>
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
		<u-modal v-model="show" :mask-close-able="true" :show-cancel-button="true" :content="content" :title="title" :confirmText="confirmText" :cancel-text="cancelText" :cancel-color="cancelColor" :confirm-color="confirmColor"></u-modal>
	<!-- 输入密码 -->
	<u-popup v-model="showPwd" :closeable="false" mode="center" border-radius="14" @finish="finish">
		<view class="inputPwd">
			<view class="text1">请输入支付密码</view>
			<view class="text2">待支付<text>￥{{payMoney}}</text></view>
			<view class="input">
				<u-message-input :focus="true" type="password" :maxlength="6" v-model="password" @finish="finish"></u-message-input>
			</view>
		</view>
	</u-popup>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				enoughMoney:true,
				img1:'../../../static/b-recruit/icon_weixinzhifu.png',
				img2:'../../../static/b-recruit/icon_yuezhifu.png',
				show:false,
				content:'您确认放弃支付吗？',
				title:'温馨提示',
				confirmColor:'#00d3bd',
				confirmText:'继续支付',
				cancelColor:'#333',
				cancelText:'放弃支付',
				showPwd:false,
				payMoney:3000,
				password:''
			};
		},
		methods:{
			finish(v){
				console.log(v)
				// 判断交易密码是否有风险
				if(true){//有风险
					uni.showModal({
						title:'温馨提示',
						content:'你的交易密码存在风险,请新设置密码',
						confirmText:'去重置',
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
			surePay(){
				let that = this;
				if(false){//判断是否有设置登录密码
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
								that.showPwd=true;
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					})
					}
			
			},
		}
	}
</script>

<style lang="scss">
page{
	border-top:1rpx solid $u-b-color;
	background-color: white;
}
.u-radio__label.data-v-da6758f0{
			margin-right: 0rpx !important;
			margin-left: 0rpx !important;
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
