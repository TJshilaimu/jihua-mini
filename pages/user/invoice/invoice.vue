<template>
	<view>
		<view class="item">
			<view @click="toAdd">
				<view>开具发票</view>
				<view class="iconT">
					<u-icon color="#999999" name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="item">
			<view @click="invoiceTitle">
				<view>常用发票抬头</view>
				<view class="iconT">
					<u-icon color="#999999" name="arrow-right"></u-icon>
				</view>
			</view>

		</view>
		<view class="item">
			<view @click="toRecord">
				<view>开票记录</view>
				<view class="iconT">
					<u-icon color="#999999" name="arrow-right"></u-icon>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			invoiceTitle() {
				uni.navigateTo({
					url:"./invoiceTitle/invoiceTitle"
				})
			},
			toRecord(){
				uni.navigateTo({
					url:'./record/record'
				})
			},
			toAdd(){
				uni.navigateTo({
					url:'./getInvoice/getInvoice'
				})
			}
		}
	}
</script>

<style lang="less">
	.item {
		width: 100%;
		height: 50px;
		position: relative;

		&>view {
			height: 50px;
			width: 96%;
			position: absolute;
			right: 0;
			line-height: 50px;
			// margin: 16px auto;
			border-bottom: 1px solid #E6E6E6;
			display: flex;
			justify-content: space-between;
		}

		.iconT {
			padding-right: 6px;
		}

	}
</style>
