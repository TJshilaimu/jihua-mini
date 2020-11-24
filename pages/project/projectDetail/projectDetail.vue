<template>
	<view class="projectDetail">
		<!-- 		<view class="backTitle">
			<u-icon name="arrow-left" size="44"></u-icon>
			<text class="backTitle">小程序开发</text>
		</view> -->
		<view class="middleContent">
			<scroll-view scroll-y="true" class="scrollY" @scroll="scrollItem">
				<view class="projectInfo">
					<view class="infoItem1">
						<view class="title">
							{{name}}
						</view>
						<view class="myTag">
							<view class="titleTag">
								<text v-if="status==1">招募中</text>
								<text v-if="status==2">开发中</text>
								<text v-if="status==3">已完成</text>
								<text v-if="type==1">设计</text>
								<text v-if="type==2">人力资源</text>
								<text v-if="type==3">IT</text>
								<text v-if="type==4">影视制作</text>
							</view>
							<view class="titleMoney">
								<text class="money">￥</text>
								<text class="moneyNum">
									{{price}}
								</text>
							</view>
						</view>
					</view>
					<view class="infoItem2">
						<view class="itemBox">
							<text class="boxTitle">发布时间</text>
							<text class="boxContent">{{creteTime}}</text>
						</view>
						<view class="itemBox">
							<text class="boxTitle">项目周期</text>
							<text class="boxContent">{{allprog}}天</text>
						</view>
						<view class="itemBox">
							<text class="boxTitle">招募人数</text>
							<text class="boxContent">{{recruit}}人</text>
						</view>
						<view class="itemBox">
							<text class="boxTitle">报名人数</text>
							<text class="boxContent">{{bmrs}}人</text>
						</view>
					</view>
				</view>
				<view class="projectCompany" @click="toCompanyDetail">
					<view class="companyInfo">
						<image :src="profilePath" mode=""></image>
						<view class="companyBox">
							<text class="companyTitle">{{mcomName}}</text>
							<text class="companyContent">这里是公司简介这里是公司简介这里是公司简介...</text>
						</view>
					</view>
					<u-icon name="arrow-right" size="28"></u-icon>
				</view>
				<view class="containerBox">
					<view class="headerMenu">
						需求描述
					</view>
					<view class="contentDetail">
						{{alltype}}
					</view>
				</view>
				<view class="containerBox">
					<view class="headerMenu">
						技能描述
					</view>
					<view class="contentDetail">
						{{jsyq}}
					</view>
				</view>
				<view class="containerBox">
					<view class="headerMenu">
						需求文档
					</view>
					<view class="contentDetail">
						{{prd}}
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="bottomBtn">
			<button v-if="isGet" class="askBtn" @click="askTask(true)">申请</button>
			<button v-else class="askBtn1" @click="askTask(false)">取消申请</button>
		</view>
		<!-- 取消认证 -->
		<u-action-sheet :list="list" v-model="show"  :mask-close-able="true" :cancel-btn="true" :cancel-text="cancelText" @click="withdraw"></u-action-sheet>
		<!--封装取消弹窗组件部分 	
	<view class="definePopup" v-if="flag">
		<view class="bg" @click="closePopup">
			
		</view>
		<view class="popupBox">
			<view class="popupTitle">
				开具电子发票
			</view>
			<view class="contentBox">
				<view class="showItem">
					<text class="titleLeft">发票内容</text>
					<text class="titleRight">电子发票</text>
				</view>
				<view class="showItem">
					<text class="titleLeft">公司名称</text>
					<text class="titleRight">上海信息科技有限公司</text>
				</view>
			</view>
			<view class="popupAdd">
				<button @click="addInvoice">确认提交</button>
			</view>
		</view>
		
	</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				projectStatus: true,
				isGet: true,
				show: false,
				tips: {
					text: ''
				},
				attestation: false,
				list: [{
						text: '原因1',
						color: 'black',
						fontSize: 28
					},
					{
						text: '原因1',
						color: 'black',
						fontSize: 28
					}, {
						text: '原因1',
						color: 'black',
						fontSize: 28
					},
					{
						text: '原因1',
						color: 'black',
						fontSize: 28
					}
				],
				cancelText: '确定',
				companyImg: this.baseImgUrl + '/static/1.jpg',
				id:'',
				reason:'',
				name:'',
				status:'',
				price:'',
				creteTime:'',
				allprog:'',
				recruit:'',
				bmrs:'',
				profilePath:'',
				mcomName:'',
				alltype:'',
				jsyq:'',
				prd:'',
				type:'',
				phoneB:''
				
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			console.log(ops)
			this.id = ops.id
			this.$u.api.detailsProject({//查找项目
				id:ops.id
			}).then(res =>{
				if(res.meta.code==0){
					this.name=res.data.name,
					this.status=res.data.status,
					this.price=res.data.price,
					this.creteTime=res.data.creteTime,
					this.allprog=res.data.allprog,
					this.recruit=res.data.recruit,
					this.bmrs=res.data.bmrs,
					this.profilePath=res.data.profilePath,
					this.mcomName=res.data.mcomName,
					this.alltype=res.data.alltype,
					this.jsyq=res.data.jsyq,
					this.prd=res.data.prd,
					this.type=res.data.type
				}else{
					uni.showToast({
						title:res.meta.msg,
						icon:'none'
					})
				}
				console.log('detailsProject', res)
			})

		},
		methods: {
			askTask(flag) {
				//判断是否为申请
				if (flag) { //申请
					if (!this.attestation) { //判断是否认证
						//已认证，进行下一步,跳转到项目进度
						console.log()
						let userId = uni.getStorageSync('userId')
						this.$u.api.applyProject({//提交项目申请 0申请 1取消
							applyStatus:0,
							applyTime:"2020.11.20",
							applyUserId:userId,
							projectId:this.id,
							reason:''
						}).then(res =>{
							if(res.meta.code==0){
								uni.showToast({
									icon: 'none',
									title: '申请提交成功'
								});
								this.isGet=false
							}else{
								uni.showToast({
									title:res.meta.msg,
									icon:'none'
								})
							}
							console.log('applyProject', res)
						})
						
						/* uni.navigateTo({
							url:'../projectProgress/projectProgress'
						}) */
					} else { //没有认证，进行认证
						uni.showModal({
							title: '温馨提示',
							content: '你还未认证成为开发者，请去完善信息',
							confirmColor:'#00d3bd',
							success(e) {
								if (e.confirm) {
									console.log('点击了确认按钮')
								}
								if (e.cancel) {
									console.log('点击了取消按钮')
								}
							}
						})
					}
				} else if (true) { //已申请，点击取消,展示取消sheet
					this.show = true
					
					
				}
			},
			//跳转到公司详情
			toCompanyDetail() {
				uni.navigateTo({
					url: `../../user/introduce/companyIntroduction/companyIntroduction?phone=18039970522`
				})
			},
			//获取申请原因
			withdraw(index){
				console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
				this.reason=this.list[index].text
				let userId = uni.getStorageSync('userId')
				this.$u.api.deleteApplyProject({//取消项目申请 0申请 1取消
					applyStatus:1,
					applyTime:"2020.11.20",
					applyUserId:userId,
					projectId:this.id,
					reason:this.reason
				}).then(res =>{
					if(res.meta.code==0){
						uni.showToast({
							icon: 'none',
							title: '取消申请提交成功'
						});
						this.isGet=true
					}else{
						uni.showToast({
							title:res.meta.msg,
							icon:'none'
						})
					}
					console.log('deleteApplyProject', res)
				})
							
			}


		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		border-top: 1px solid $u-b-color;
		background-color: #f8f8f8;
	}

	.middleContent {

		// height: calc(100% - 200rpx);
		// box-sizing: border-box;
		// overflow-y: scroll;
		// // margin-top:80rpx;
		// margin-bottom: 200rpx;
		.scrollY {
			height: 100%;
		}
	}

	.projectDetail {
		width: 100%;
		height: 100%;

		// border:1px solid red;
		.projectInfo {
			padding: 30rpx;
			background-color: white;
			box-sizing: border-box;

			// border-bottom: 1px solid gray;
			.infoItem2 {
				font-size: 10px;
				// margin-bottom: 5px;
				display: flex;
				flex-direction: row;
				align-items: center;

				.itemBox {
					display: flex;
					flex-direction: column;
					margin-top: 16rpx;
					padding-right: 30rpx;
					margin-left: 28rpx;
					border-right: 1px solid $u-b-color;

					&:first-of-type {
						margin-left: 0;
					}

					&:last-of-type {
						border-right: none;
					}

					.boxTitle {
						color: #666666;
						font-size: 23rpx;
					}

					.boxContent {
						color: #333333;
						font-size: 23rpx;
					}
				}

			}

			.infoItem1 {
				border-bottom: 1px solid $u-b-color;
				padding-bottom: 20rpx;

				.title {
					font-size: 30rpx;
					font-weight: bold;
					color: #333333;
					width: 688rpx;
				}

				.myTag {
					display: flex;
					justify-content: space-between;
					align-items: center;

					.titleTag {

						// margin-bottom: 12rpx;
						text {
							display: inline-block;
							padding: 5rpx 10rpx;
							border: 1rpx solid $u-m-color;
							color: $u-m-color;
							margin-right: 12rpx;
							font-size: 20rpx;
						}
					}

					.titleMoney {
						color: #c40000;
						font-weight: bold;
						font-size: 20rpx;

						.moneyNum {
							font-size: 26rpx;
						}
					}
				}

				.tagText {
					margin-left: 26rpx;
					border-radius: 8rpx;
					display: #2979ff;
					border: 1rpx solid #2979ff;
					padding: 6rpx 24rpx;
					background-color: #a0cfff;
					font-size: 26rpx;
					;
				}
			}
		}

		.projectCompany {
			background-color: white;
			// border:1px solid red;
			margin: 20rpx 0;
			padding: 22rpx 28rpx;
			display: flex;
			justify-content: space-between;
			background-color: #fff;
			color: #999999;

			.companyInfo {
				display: flex;
				align-items: center;

				image {
					width: 74rpx;
					height: 74rpx;
					border-radius: 50%;
				}

				.companyBox {
					margin-left: 20rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;

					.companyContent {
						width: 521rpx;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
						color: #999999;
						font-size: 24rpx;
					}

					.companyTitle {
						color: #333333;
						font-size: 28rpx;
					}
				}

				text {
					color: black;
					font-weight: 900;
					margin-left: 4px;
				}
			}
		}

		.contentDetail {
			width: 100%;
			background-color: white;
			line-height: 48rpx;
		}

		.bottomBtn {
			background-color: white;
			margin-top: 40rpx;
			width: 100%;
			height: 130rpx;
			// background-color: red;
			display: flex;
			align-items: center;

			.askBtn {
				background-color: $u-m-color;
				width: 630rpx;
				border-radius: 90rpx;
				color: #fffffF;
				font-size: 32rpx;
			}
			.askBtn1{
				background-color: $u-m-color;
				width: 630rpx;
				border-radius: 90rpx;
				color: #fffffF;
				font-size: 32rpx;
			}
		}
	}

	.containerBox {
		background-color: white;
		padding: 30rpx;
		margin-bottom: 20rpx;

		.headerMenu {
			display: flex;
			height: 26rpx;
			line-height: 26rpx;
			padding-left: 20rpx;
			background-color: white;
			align-items: center;
			border-left: 6rpx solid $u-m-color;
			margin-bottom: 22rpx;
		}
	}
</style>
