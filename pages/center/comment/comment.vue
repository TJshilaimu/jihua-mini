<template>
	<view class="comment">
		<view class="allComment">
			全部评论<text class="commentNum">({{estimateCount}})</text>
		</view>
		
		<view class="commentBox"  v-for="(item,index) in estimateList" :key="index">
			<view class="boxTop">
				<view class="companyImg">
					<image :src="companyImg" mode=""></image>
					<view class="companyTitle">
						<view class="companyName">
							{{item.name}}
						</view>
						<view class="commentTime">
							{{item.addTime}}
						</view>
					</view>
				</view>
				<view class="rate">
					<u-rate :count="count" v-model="item.score" active-color="#ff9800" :disabled="true"></u-rate>
				</view>
			</view>
			<view class="boxContent">
				{{item.details}}
			</view>
			<view class="boxProject">
				项目：{{item.projectName}}>
			</view>
			<view class="secBtn">
				<view class="changeBtn" @click="changeBtn(item.id)" v-if="item.status==0&&item.audit!='0'">
					<image :src="changeBtn1" mode=""></image>
					<text>修改</text>
				</view>
				<view class="deleteBtn" @click="deleteBtn(item.id)">
					<image :src="deleteBtn1" mode=""></image>
					<text>删除</text>
				</view>
			</view>
			<image class="image" src="../../../static/icon/pic_shenhezhong.png" v-if="item.audit=='0'"></image>
			<image class="image" src="../../../static/icon/pic_weitongguo.png" v-if="item.audit=='2'"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count: 5,
				current:3.7,
				companyImg: this.baseImgUrl + '/static/center-selected.png',

				changeBtn: this.baseImgUrl + '/static/mine/icon_bianji.png',
				deleteBtn: this.baseImgUrl + '/static/mine/icon_shanchu.png',
				phone:''
			}
		},
		onShow(){
			let that = this;
			this.phone = uni.getStorageSync('phone');
			this.$u.api.selectEstimate({
				phone:this.phone
			}).then(res =>{
				console.log('评论',res)
			})
			this.$u.api.selectEstimateCount({
				phone:this.phone
			}).then(res =>{
				console.log('评论总数',res)
				// changeBtn1: this.baseImgUrl + '/static/mine/icon_bianji.png',
				// deleteBtn1: this.baseImgUrl + '/static/mine/icon_shanchu.png',
				// phone:'',
				// estimateList:'',
				// estimateCount:2
			})
		},
		onLoad(){
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.phone = res.data
					this.$u.api.selectEstimate({//获取用户评论
						phone:this.phone
					}).then(res =>{
						if(res.meta.code==0){
							this.estimateList = res.data
						}else{
							uni.showToast({
								title:res.meta.msg,
								icon:'none'
							})
						}
						console.log('selectEstimate', res)
					})
					this.$u.api.selectEstimateCount({//获取评论总数
						phone:this.phone
					}).then(res =>{
						if(res.meta.code==0){
							this.estimateCount=res.data
						}else{
							uni.showToast({
								title:res.meta.msg,
								icon:'none'
							})
						}
						console.log('selectEstimateCount', res)
					})
				}
			})
		},
		methods:{
			changeBtn(id){//跳转修改评论页面
				uni.navigateTo({
					url:`./changeComment/changeComment?id=${id}`
				})
			},
			deleteBtn(id){//删除评论
				let that = this
				uni.showModal({
					title: '请您确认下',
					content: '确定要删除本次评价吗？',
					confirmText: '确认',
					confirmColor: '#00d3bd',
					  success: function (res) {
					        if (res.confirm) {
					            that.$u.api.deleteEstimates({
					            	id:id
					            }).then(res =>{
					            	if(res.meta.code==0){
					            		uni.navigateTo({
					            			url: "./comment",
					            		})
					            	}else{
					            		uni.showToast({
					            			title:res.meta.msg,
					            			icon:'none'
					            		})
					            	}
					            	console.log('deleteEstimates', res)
					            })
					        } else if (res.cancel) {
					           console.log('用户点击取消');
					        }
					    }
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}
	.comment {
		.allComment {
			font-size: 32rpx;
			color: #333333;
			box-sizing: border-box;
			background-color: white;
			width: 100%;
			height: 90rpx;
			margin-top: 1rpx;
			padding-left: 28rpx;
			line-height: 90rpx;
			.commentNum {
				color: #999999;
				font-size: 22rpx;
			}
		}
		.commentBox{
			background-color: white;
			margin-top:20rpx;
			padding-left:28rpx;
			padding-right: 30rpx;
			padding-top:24rpx;
			position: relative;
			.image{
				position: absolute;
				right:74rpx;
				top:58rpx;
				width:61px;
				height:61px;
			}
			.boxTop{
				display: flex;
				justify-content: space-between;
				align-items:flex-start;
				.companyImg{
					display: flex;
					image{
						width:74rpx;
						height:74rpx;
						margin-right:20rpx;
					}
					.companyTitle{
						.companyName{
							color: #333333;
							font-size: 28rpx;
							max-width:178px;
							white-space: nowrap;
							text-overflow: ellipsis;	
							overflow: hidden;
						}
						.commentTime{
						color: #999999;
						font-size: 24rpx;
						margin-top:8rpx;
						}
					}
				}
				.rate{
					
				}
			}
			.boxContent{
				width: 100%;
				padding:0;
				margin: 0;
				padding-top:28rpx;
				padding-bottom: 20rpx;
				color: #666666;
				font-size: 26rpx;
			}
			.boxProject{
				color: #999999;
				font-size: 22rpx;
				height: 21rpx;
				margin-bottom:24rpx;
			}
			.secBtn{
				// padding-top:24rpx;
				border-top: 1px solid #f8f8f8;
				display: flex;
				justify-content: space-around;
				align-items: center;
				height: 90rpx;
				.changeBtn{
					// border:1px solid red;
					border-right: 1px solid #e6e6e6;
					flex:1;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 30rpx;
						height:30rpx;
						margin-right: 11rpx;
					}
					text{
						color: #999999;
						font-size: 26rpx;
					}
				
				}
				.deleteBtn{
						flex:1;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
							width: 30rpx;
							height:30rpx;
							margin-right: 11rpx;
						}
						text{
							color: #999999;
							font-size: 26rpx;
						}
				}
			}
		}
	}
</style>
