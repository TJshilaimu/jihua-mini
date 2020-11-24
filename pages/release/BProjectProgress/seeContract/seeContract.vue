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
			<button class="saveBtn" @click="save" >保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSave:false,
				suspension:false,  //悬浮
				signImg: this.baseImgUrl + '/static/1.jpg',

			};
		},
		methods:{
			save(){
				console.log('ok')
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
