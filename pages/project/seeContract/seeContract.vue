<template>
	<view class="seeContract">
		<view class="title">
			信息标注合同
		</view>
		<view class="richText">
			<!-- 	<rich-text :nodes="">
                                甲方
            </rich-text> -->
			富文本
		</view>
		<view class="contractNum">
			合同编号：1213213213
		</view>
		<view class="btn">
			<!-- 判断是否签约，一个签约一个保存 -->
			<button class="saveBtn" @click="save" v-if="isSave">保存</button>
			<view class=" signSec" v-else>
				<button class="sign">签约</button>
				<button class="refuse">拒绝</button>
			</view>
		</view>
		<view class="signImg">
			<image :src="signImg" mode=""></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isSave:false,
				signImg: this.baseImgUrl + '/static/1.jpg',
			};
		},
		methods:{
			save(){
				uni.showToast({
					title:'保存成功',
					icon:'none'
				})
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
			height: 700rpx;
			box-sizing: border-box;
			background-color: skyblue;
		}

		.contractNum {
			padding-top: 20rpx;
			color: #999999;
			font-size: 26rpx;
			height: 200rpx;
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
			.signSec{
				display: flex;
				justify-content: center;
				height: 90rpx;
				align-items: center;
				.sign{
					border-radius: 90rpx;
					width:380rpx;
					background-color:$u-m-color;
					color: white;
					margin-right: 30rpx;
				}
				.refuse{
					border-radius: 90rpx;
					width:220rpx;
					border:1px solid $u-m-color;
					color:$u-m-color;
				}
			}
		}
		.signImg {
			position: fixed;
			top: 200rpx;
			right: 200rpx;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50%;
			overflow: hidden;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
