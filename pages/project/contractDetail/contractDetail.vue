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
			</view>
			<view class="signImg">
				<image :src="signImg" mode=""></image>
			</view>
		</view>
		<!-- if代表是否展示合同全部 -->
		<view class="contractNum" v-if="!suspension">
			合同编号：1213213213
		</view>
		<view class="btn">
			<button class="saveBtn" @click="next" >下一步</button>
			<view class="tipTitle">点击下一步即代表你同意<text class="file" @click="addH">《合同规范》</text></view>
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
			next(){
				uni.navigateTo({
					url:'../../../common/signUrl/signUrl'
				})
			},
			addH(){
				console.log('pk')
				this.suspension=true;
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
			position: relative;
			.signImg {
				position: absolute;
				top: 100rpx;
				right: 100rpx;
				width: 100rpx;
				height: 100rpx;
				border-radius: 50%;
				overflow: hidden;
				image {
					width: 100%;
					height: 100%;
				}
			}
			&.addH{
				height: 900rpx;
				overflow: scroll;
			}
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
</style>
