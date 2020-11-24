<template>
	<view class="record">
		<view class="recordBox" v-for="(item,index) in recordList" :key="item.id">
			<view class="boxTitle">
				<view class="name">
					{{item.companyName}}
				</view>
				<view class="detail" @click="showDetail(item)">
					<text>查看详情</text>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="boxContent">
				<view class="boxItem">
					开票状态：已开票
				</view>
				<view class="boxItem">
					开票时间：{{item.createTime}}
				</view>
				<view class="boxItem">
					开票类型：电子发票
				</view>
				<view class="money">
					票面金额：<text class="moneyColor">{{item.money}}</text>
				</view>
			</view>
		</view>
		<view class="textWarning">
			我也是有底线的~
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				recordList:[]
			};
		},
		onLoad(){
			let that = this;
			let userId = uni.getStorageSync('userId')
			// 发票记录列表
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.phone = res.data
					this.$u.api.selectInvoiceRecord({
						userId
					}).then(res =>{
						that.recordList = JSON.parse(res.data)
						console.log('记录', JSON.parse(res.data))
					})
				}
			})
			// 发票记录详情
			// this.$u.api.selectInvoiceDetail({
			// 	id:24
			// }).then(res =>{
			// 	console.log('发票记录详情',res)
			// })

		

		},
		methods:{
			showDetail(val){
				uni.navigateTo({
					url:`../invoiceDetail/invoiceDetail?opts=` + JSON.stringify(val),
					success() {
						console.log('ok')
					}
				})
			}
		}
	}
</script>

<style lang="scss">
page{
	background-color: #f8f8f8;
	padding:30rpx;
}
.record{
	.recordBox{
		width:690rpx;
		margin-bottom: 20rpx;
		.boxTitle{
			background-color: white;
			padding:30rpx;
			height: 90rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			margin-bottom:1px;
			.name{
				font-size: 30rpx;
				width: 350rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
				color: #333333;
			}
			.detail{
				font-size: 26rpx;
				color: #999999;
				text{
					display: inline-block;
					margin-right: 13rpx;
				}
			}
		}
		.boxContent{
			background-color: white;
			padding:30rpx;
			font-size: 24rpx;
			color: #999999;
			.boxItem{
				margin-bottom: 16rpx;
			}
			.money{
				.moneyColor{
					font-weight: bold;
					color:#C40000;
					
				}
			}
		}
	}
	.textWarning{
		color:#cccccc;
		font-size:26rpx;
		text-align: center;
		}
}
</style>
