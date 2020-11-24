<template>
		<view class="getInvoice">
			<view class="middlePro" v-if="showProject">
				<view class="noProject">
					<view>
					<image :src="titleW" mode=""></image>
					</view>
					<view class="title1">您还没有可开具发票的项目</view>
					<view class="title2">有符合要求的项目才可开具发票哦~</view>
				</view>
				<view class="submitBtn">
					<button class="btnItem" :disabled="true" @click="submitBtn">下一步</button>
				</view>
			</view>
			<view class="showPro" v-else>
				<view class="radioBox">
					
					<u-radio-group v-model="secName" :wrap="true" @change="radioGroupChange">
						<u-radio 
							@change="radioChange" 
							v-for="(item, index) in radioList" :key="index"  
							:name="item.name"
						>
						<view class="projectInfo">
							<view class="projecImg">
								<image :src="projecImg" mode=""></image>
							</view>
							<view class="projecText">
								<view class="projectTitle">小程序开发小程序开发小程序开发小程序开发</view>
								<view class="projectTip">
									<text class="tipColor">招募中</text>
									<text class="tipColor">网站开发</text>
								</view>
								<view class="titleBottom">
									<text>招募：H5开发</text>
									<text class="money">$10000</text>
								</view>
							</view>
						</view>
						</u-radio>
					</u-radio-group>
					
					
			<!-- 		<label class="radio">
						<radio value="" />
					</label>
					<view class="projectInfo">
						<view class="projecImg">
							<image :src="projecImg" mode=""></image>
						</view>
						<view class="projecText">
							<view class="projectTitle">小程序开发小程序开发小程序开发小程序开发</view>
							<view class="projectTip">
								<text class="tipColor">招募中</text>
								<text class="tipColor">网站开发</text>
							</view>
							<view class="titleBottom">
								<text>招募：H5开发</text>
								<text class="money">$10000</text>
							</view>
						</view>
					</view> -->
				</view>
				<view class="nextBtn">
					<button class="btnItem" :disabled="disabled" @click="nextBtn">下一步</button>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				showProject:false,
				disabled:false,
				radioList:[{
					name:'单位',
					val:1,
					checked: true,
					disabled:false
				},{
					name:'个人/非企业单位',
					val:2,
					checked: false,
					disabled:false
				}],
				secName:'单位',
				titleW: this.baseImgUrl + '/static/invoice/pic_zanwutaitou.png',
				projecImg: this.baseImgUrl + '/static/1.jpg',
			};
		},
		methods:{
			nextBtn(){
				uni.navigateTo({
					url:'../writeInvoice/writeInvoice'
				})
			},
			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				console.log(e)
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				console.log(e)
			}
		},
		onShow(){
			let userId = uni.getStorageSync('userId')
			this.$u.api.selectInvoiceProject({
				ids:userId
			}).then(res =>{
				console.log('发票res',res)
				if(res.meta.code == 200 && res.success == true){
					// 查询成功，进行渲染
				}
			})
		}
	}
</script>

<style lang="scss">
	page{
		border-top:1px solid $u-b-color;
		width:100%;
		height:100%;
		box-sizing: border-box;
	}
.getInvoice{
	width: 100%;
	height:100%;
	.middlePro{
		position: relative;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		text-align: center;
		.noProject{
			width:100%;
			position: absolute;
			top:50%;
			left:50%;
			transform: translate(-50%,-50%);
			image{
				width:268rpx;
				height:268rpx;
			}
			.title1{
				margin-top:54rpx;
				color:#333333;
				font-size: 32rpx;
				text-align: center;	
			}
			.title2{
				font-size:26rpx;
				color:#999999;
				margin-top:16rpx;
			}
		}
		
		.submitBtn {
			position: absolute;
			bottom: 0;
			width:690rpx;
			left:30rpx;
			bottom: 28rpx;
			opacity: .5;
			background-color: white;
			.btnItem {
				height: 90rpx;
				border-radius: 46rpx;
				background-color: #00D3BD !important;
				color: white;
				font-size: 16px;
			}
	}
	
	}
	.showPro{
		.radioBox{
			overflow: scroll;
			height: calc(100% - 120rpx);
			margin-left:30rpx;
			padding:30rpx 30rpx 30rpx 0;
			border-bottom:1px solid $u-b-color;
			display: flex;
			align-items: center;
			.radio{
				margin-right:13rpx;
			}
			.projectInfo {
				// border: 1px solid red;
				display: flex;
				height: auto;
				align-items: center;
				font-size: 28rpx;
				letter-spacing: 1rpx;
				.projecImg {
					width: 150rpx;
					height: 150rpx;
					margin-right: 10px;
					image {
						width: 100%;
						height: 100%;
					}
				}
				.projecText {
					flex:1;
					display: flex;
					flex-direction: column;
					.projectTitle {
						color: black;
						font-weight: bolder;
						font-size: 30rpx;
					}
					.projectTip {
						margin: 8rpx 0;
						.tipColor {
							width:80rpx;
							height:30rpx;
							border: 1px solid #66DECF;
							color: #00D3BD;
							margin-right: 16rpx;
							border-radius: 4px;
							font-size: 20rpx;
						}
					}
					.titleBottom{
						font-size: 26rpx;
						color: #333333;
						width:100%;
						display: flex;
						justify-content: space-between;
						align-items: flex-end;
						.money{
							color: #C40000;
						}
					}
				}
			
			}
		}
		.nextBtn {
			background-color: white;
			position: absolute;
			bottom: 0;
			width:690rpx;
			left:30rpx;
			bottom: 28rpx;
		
			.btnItem {
				height: 90rpx;
				border-radius: 46rpx;
				background-color: #00D3BD !important;
				color: white;
				font-size: 16px;
			}
	}
	}
}
</style>
