<template>
	<view class="invoiceTitle">
		<view v-if="invoiceStatus">
			<image class="img" :src="img"></image>
			<view class="text1">你未设置发票抬头</view>
			<view class="text2">设置过的发票抬头会为你自动保存</view>
			<button class="btn" @click="addInvoiceTitle">立即设置</button>
		</view>
		<view v-if="!invoiceStatus">
			<view class="invoiceItem" v-for="(item,index) in invoiceList" :key="item.id">
				<view class="invoiceInfo">
					<view class="invoiceText">
						<view class="invoiceName">{{item.companyName}}</view>
						<view class="invoiceNum">{{item.companyTax}}</view>
					</view>
					<view class="more" @click="toDetail">
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<view class="invoiceSetting">
					<view class="invoiceopt">
						<u-radio-group active-color="#00D3BD">
							<u-radio name="default">
								默认
							</u-radio>
						</u-radio-group>
					</view>
					<view class="invoiceSet">
						<view @click="editInvoice(item)">
							<u-icon name="order" size="28"></u-icon>
							<view>编辑</view>
						</view>
						<view @click="deleteInvoice(item)"> 
							<u-icon name="trash" size="28"></u-icon>
							<view>删除</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 空状态图片显示
				img: this.baseImgUrl + '/static/invoice/pic_zanwutaitou.png',
				// 发票状态
				invoiceStatus: true,
				invoiceList:[],
				userId:''
			}
		},
		methods: {
			// 跳转到增加发票抬头界面
			addInvoiceTitle() {
				uni.navigateTo({
					url: "./setInvoiceTitle/setInvoiceTitle"
				})
			},
			//跳转到详情页
			toDetail(){
				uni.navigateTo({
					url:'./setInvoiceTitle/setInvoiceTitle'
				})
			},
			//编辑发票抬头
			editInvoice(val){
				console.log('op')
				uni.navigateTo({
					url: "./setInvoiceTitle/setInvoiceTitle?ops="+ JSON.stringify(val)
				})
			},
			//删除发票抬头
			deleteInvoice(val){
				// 删除发票，得写在方法里
				let that = this;
				this.$u.api.deleteInvoice({
					id:val.id
				}).then(res =>{
					console.log('删除发票',res)
					that.$u.api.selectInvoiceTitle({
						userId:that.userId
					}).then(res =>{
						console.log('发票抬头',JSON.parse(res.data))
						if(res.meta.code == 200 && res.success == true){
							//查询成功，进行渲染
							that.invoiceList = JSON.parse(res.data);
							if(that.invoiceList.length>0){
								that.invoiceStatus = false
							}else{
								that.invoiceStatus = true
							}
						}
					})
				})
			}
		},
		onLoad(){
			this.userId = uni.getStorageSync('userId');
			let that =this;

			// 查询发票抬头
			this.$u.api.selectInvoiceTitle({
				userId:this.userId
			}).then(res =>{
				console.log('发票抬头',JSON.parse(res.data))
				if(res.meta.code == 200 && res.success == true){
					//查询成功，进行渲染
					that.invoiceList = JSON.parse(res.data);
					if(that.invoiceList.length>0){
						that.invoiceStatus = false
					}else{
						that.invoiceStatus = true
					}
				}
			})
			console.log(that.invoiceList,'列表')
			
			// 查询发票使用者
			this.$u.api.selectInvoiceUser({
			}).then(res =>{
				console.log('查询发票审核',res)
			})
			// 查询发票列表页数
			this.$u.api.selectListRecordPage({
				current:1,
				receiptRecord:1
			}).then(res =>{
				console.log('查询发票列表页数',res)
			})
		}
	}
</script>

<style lang="scss">
	padg{
		background: #f8f8f8;
	}
	.invoiceTitle {
		width: 100%;
		height: 100vh;
		position: relative;
		background: #f8f8f8;
		display: flex;
		flex-direction: column;
		&>view{
			padding-top: 10px;
			background-color: white;
		}
		.img {
			display: block;
			margin: 0 auto;
			margin-top: 100px;
			position: relative;
			width: 120px;
			height: 120px;
			border-radius: 5px;
			border: 2px solid white;
			box-shadow: 1px 4px 15px #cacaca;
		}

		.text1 {
			margin-top: 30px;
			font-size: 16px;
			font-weight: bold;
			width: 100%;
			text-align: center;
		}

		.text2 {
			color: #999999;
			margin-top: 6px;
			font-size: 14px;
			width: 100%;
			text-align: center;
		}

		.btn {
			position: absolute;
			bottom: 40px;
			width: 90%;
			height: 90rpx;
			border-radius: 46rpx;
			line-height: 90rpx;
			left: 50%;
			transform: translate(-50%, 0);
			outline: none;
			border: none;
			color: white;
			background-color: $u-m-color;
		}

		.invoiceSet {
			&>view {
				display: flex;
				align-items: center;
			}
		}

		.invoiceItem {
			width: 90%;
			margin: 0 auto;
			margin-bottom: 6px;
			.invoiceInfo {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding-bottom: 10px;
				border-bottom: 1px solid #dfdfdf;
				.invoiceNum {
					font-size: 12px;
					margin-top: 4px;
				}
			}
			.invoiceSetting{
				padding: 10px 0;
				display: flex;
				justify-content: space-between;
				font-size: 12px;
				.u-radio__label{
					font-size: 12px;
				}
				.invoiceSet{
					line-height: 27px;
					display: flex;
					align-items: center;
					&>view{
						padding-left: 6px;
						&>view{
							padding-left: 2px;
						}
					}
				}
			}
		}
	}
</style>
