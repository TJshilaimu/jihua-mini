<template>
	<view>
		<view class="itemBox" v-for="(item,index) in list" :key="index" @click="changePage(index)">
			<view class="boxLeft">
				<view class="imgBox">
					<image :src="index==0?img0:index==1?img1:index==2?img2:index==3?img3:index==4?img4:index==5?img5:index==6?img6:index==7?img7:index==8?img8:''" mode=""></image>
					<u-badge :count="item.count" type="error" :offset="offset"></u-badge>
				</view>
				<text>{{item.name}}</text>
			</view>
			<view class="boxRight">
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img0:'../../static/information/icon_xiaoxizhongxin_xitongxiaoxi.png',
				img1:'../../static/information/icon_xiaoxizhongxin_xiangmuzhuangtai.png',
				img2:'../../static/information/icon_xiaoxizhongxin_baomingxiaoxi.png',
				img3:'../../static/information/icon_xiaoxizhongxin_hetongxiaoxi.png',
				img4:'../../static/information/icon_xiaoxizhongxin_xiangmukuanxiaoxi.png',
				img5:'../../static/information/icon_xiaoxizhongxin_kaifajinxingzhongxiaoxi.png',
				img6:'../../static/information/icon_xiaoxizhongxin_pingjiaxiaoxi.png',
				img7:'../../static/information/icon_xiaoxizhongxin_qianbaoxiaoxi.png',
				img8:'../../static/information/icon_xiaoxizhongxin_kaipiaoxiaoxi.png',	
				offset: [0, -5],
				list:[{
					name:'系统消息',
					count:3
				},{
					name:'项目状态信息',
					count:'99'
				},{
					name:'报名消息',
					count:'108'
				},{
					name:'合同消息',
					count:'108'
				},{
					name:'项目款消息',
					count:'108'
				},{
					name:'开发进行中消息',
					count:'108'
				},{
					name:'评价消息',
					count:'108'
				},{
					name:'钱包消息',
					count:'108'
				},{
					name:'开票消息',
					count:'108'
				}],
				imgs:[]
			};
		},
		methods:{
			changePage(val){
				if(val == 0){//系统消息
					uni.navigateTo({
						url:'./systemInfo/systemInfo'
					})
				}
				if(val == 1){//项目状态消息
					uni.navigateTo({
						url:'./projectStatusInfo/projectStatusInfo'
					})
				}
				if(val == 2){//报名消息
					uni.navigateTo({
						url:'./signInfo/signInfo'
					})
				}
				if(val == 3){//合同消息
					uni.navigateTo({
						url:'./agreeInfo/agreeInfo'
					})
				}
				if(val == 4){//项目款消息
					uni.navigateTo({
						url:'./projectMoneyInfo/projectMoneyInfo'
					})
				}
				if(val == 5){//开发进行中消息
					uni.navigateTo({
						url:'./devInfo/devInfo'
					})
				}
				if(val == 6){//评价消息
					uni.navigateTo({
						url:'./evaluateInfo/evaluateInfo'
					})
				}
				if(val == 7){//钱包消息
					uni.navigateTo({
						url:'./walletInfo/walletInfo'
					})
				}
				if(val == 8){//开票消息
					uni.navigateTo({
						url:'./invoiceInfo/invoiceInfo'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		border-top: 1rpx solid $u-b-color;
	}

	.itemBox {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 18px 0;
		margin: 0 15px;
		border-bottom: 1rpx solid $u-b-color;

		.boxLeft {
			display: flex;
			align-items: center;

			.imgBox {
				width: 44px;
				height: 44px;

				position: relative;
				border-radius: 50%;

				image {
					border-radius: 50%;
					width: 44px;
					height: 44px;
				}
			}

			text {
				display: inline-block;
				margin-left: 17px;
				font-size: 16px;
				color: #333333;
			}
		}
		.boxRight{
			color:#aaaaaa;
		}
	}
</style>
