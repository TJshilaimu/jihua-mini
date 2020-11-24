<template>
	<view class="content">
		<view class="userInfo">
			<view class="userBg1">
				<image :src="userBg1" mode=""></image>
			</view>
			<view class="userBg2">
			</view>
			<!-- 已登录 -->
			<view class="userBox" v-if="loginStatus">
				<view class="userContent">
					<view class="userImg">
						<image :src="userImg" mode=""></image>
						<text class="userName">{{userName}}</text>
					</view>
					<view class="userShow" @click="userPage">
						<text v-if="isToC">个人资料</text>
						<text v-else>个人中心</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
			</view>
			<view class="userBox" @click="login" v-else>
				<view class="userContent">
					<view class="userImg" @click="login">
						<image :src="userHead" mode=""></image>
						<text class="userName">登录/注册></text>
					</view>
				</view>
			</view>
		</view>
		<!-- 未登录 -->
		<view class="menuList" v-if="!loginStatus">
			<view class="menuItem" @click="login">
				<view class="itemContent">
					<image :src="wallet1" mode=""></image>
					<text class="text">我的钱包</text>
				</view>
				<view class="arrowIcon">
					<u-icon name="arrow-right" color="#999999"></u-icon>
				</view>
			</view>
			<!-- 			<view class="menuItem" @click="wallet">
				<view class="itemContent">
					<image :src="contract" mode=""></image>
					<text class="text">我的合同</text>
				</view>
				<view class="arrowIcon">
					<u-icon name="arrow-right" color="#999999" ></u-icon>
				</view>
			</view> -->
			<view class="menuItem" @click="introduce">
				<view class="itemContent">
					<image :src="aboutWx" mode=""></image>
					<text class="text">关于威选</text>
				</view>
				<view class="arrowIcon">
					<u-icon name="arrow-right" color="#999999"></u-icon>
				</view>
			</view>
		</view>
		<!-- 已登录 -->
		<view v-else>
			<!-- C端 -->
			<view v-if="isToC">
				<view class="menuList">
					<view class="menuItem" @click="wallet">
						<view class="itemContent">
							<image :src="wallet1" mode=""></image>
							<text class="text">我的钱包</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="menuItem" @click="toContract">
						<view class="itemContent">
							<image class="contract" :src="contract" mode=""></image>
							<text class="text">我的合同</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="menuItem" @click="toComment">
						<view class="itemContent">
							<image class="contract" :src="evaluate" mode=""></image>
							<text class="text">我的评价</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
				</view>
				<view class="menuList">
					<view v-if="loginStatus">
						<view class="menuItem isDevelopment" @click="Developers">
							<view class="itemContent">
								<image :src="developer" mode=""></image>
								<text class="text">开发者认证</text>
							</view>
							<view class="arrowIcon" @click="Developers">
								<text class="statusTitle">未认证</text>
								<u-icon name="arrow-right" color="#999999"></u-icon>
							</view>
						</view>
						<view class="menuItem" @click="introduce">
							<view class="itemContent">
								<image class="whale" :src="aboutWx" mode=""></image>
								<text class="text">关于威选</text>
							</view>
							<view class="arrowIcon">
								<u-icon name="arrow-right" color="#999999"></u-icon>
							</view>
						</view>
					</view>
				</view>

			</view>
			<view v-else>
				<!-- B端 -->
				<view class="menuList">
					<view class="menuItem" @click="wallet">
						<view class="itemContent">
							<image :src="wallet1" mode=""></image>
							<text class="text">我的钱包</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="menuItem" @click="toContract">
						<view class="itemContent">
							<image class="contract" :src="contract" mode=""></image>
							<text class="text">我的合同</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="menuItem isDevelopment" @click="toEmand">
						<view class="itemContent">
							<image class="need" :src="need" mode=""></image>
							<text class="text">需求方认证</text>
						</view>
						<view class="arrowIcon">
							<text class="statusTitle">未认证</text>
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="menuItem" @click="toComment">
						<view class="itemContent">
							<image class="contract" :src="evaluate" mode=""></image>
							<text class="text">我的评价</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
				</view>
				<view class="menuList">
					<view class="menuItem" @click="invoice">
						<view class="itemContent">
							<image class="invoice" :src="developer" mode=""></image>
							<text class="text">发票管理</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="menuItem">
						<view class="itemContent" @click="toAddress">
							<image class="address" :src="address" mode=""></image>
							<text class="text">地址管理</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
					<view class="menuItem" @click="introduce">
						<view class="itemContent">
							<image class="whale" :src="aboutWx" mode=""></image>
							<text class="text">关于威选</text>
						</view>
						<view class="arrowIcon">
							<u-icon name="arrow-right" color="#999999"></u-icon>
						</view>
					</view>
				</view>
			</view>

		</view>
	</view>
</template>


<script>
	import {
		pay
	} from "../../util/util.js"
	export default {
		data() {
			return {
				loginStatus: false,
				isToC: false,
				userName: '',
				userBg1: this.baseImgUrl + '/static/mine/pic_topbg.png',
				userImg: this.baseImgUrl + '/static/1.jpg',
				userHead: this.baseImgUrl + '/static/center-selected.png',
				wallet1: this.baseImgUrl + '/static/mine/icon_wodeqianbao.png',
				aboutWx: this.baseImgUrl + '/static/mine/icon_guanyuweixuan.png',
				contract:this.baseImgUrl + '/static/mine/icon_wodehetong.png',
				evaluate:this.baseImgUrl + '/static/mine/icon_wodepingjia.png',
				developer:this.baseImgUrl + '/static/mine/icon_fapiaoguanli.png',
				need: this.baseImgUrl + '/static/mine/icon_xuqiufangrenzheng.png',
				address:this.baseImgUrl + '/static/mine/icon_dizhiguanli.png',
				
			}
		},
		// 页面展示生命周期
		onShow: function() {
			let that = this;
			console.log(0)
			// 判断是否登录
			uni.getStorage({
				key: 'token',
				success: (res) => {
					if (res.data) {
						this.loginStatus = true
						const val = uni.getStorageSync('role');
						if (val) {
							console.log(val)
							if (val == 'dev') { //C端
								that.isToC = true
							}
							if (val == 'masterdev') { //B端个人
								console.log('B端个人');
								that.isToC = false
							}
							if (val == 'mcom') { //B端企业
								console.log('B端企业');
								that.isToC = false
							}
						}
					}
				},
				fail: () => {
					this.loginStatus = false
				}
			});
			uni.getStorage({
				key: 'userName',
				success: (res) => {
					this.userName = res.data;
				}
			})
		},
		methods: {
			// 用户登陆界面跳转
			login() {
				uni.navigateTo({
					url: "../login/index"
				})
			},
			// 跳转到用户中心
			userPage() {
				if (this.loginStatus) {
					// 已登录
					uni.navigateTo({
						url: "../user/index"
					})
				} else {
					// 未登录
					uni.navigateTo({
						url: "../login/index"
					})
				}
			},
			//开发者认证
			Developers() {
				uni.navigateTo({
					url: "../user/developers/developers"
				})
			},
			// 跳转到钱包界面
			wallet() {
				uni.navigateTo({
					url: "../user/wallet/wallet"
				})
			},
			// 跳转到发票界面
			invoice() {
				uni.navigateTo({
					url: "../user/invoice/invoice"
				})
			},

			//跳转到我的评论
			toComment() {
				uni.navigateTo({
					url: 'comment/comment'
				})
			},
			//跳转到我的合同
			toContract() {
				uni.navigateTo({
					url: '../user/contract/contract'
				})
			},
			//跳转到地址管理
			toAddress() {
				uni.navigateTo({
					url: ''
				})
			},
			//需求方认证
			toEmand() {
				uni.navigateTo({
					url: '../emand/index'
				})
			},
			//临时跳转个人详情
			introduce() {
				if (this.loginStatus) {
					// 已登录
					uni.navigateTo({
						url: "../user/introduce/personalIntroduction/personalIntroduction"
					})
				} else {
					// 未登录
					uni.navigateTo({
						url: "../login/index"
					})
				}
			}

		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f8f8f8;
	}

	.userInfo {
		background-color: white;
		position: relative;
		margin-bottom: 20rpx;

		.userBg1 {
			width: 750rpx;
			height: 148rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.userBg2 {
			width: 100%;
			height: 115rpx;
			background-color: white;
		}

		.userBox {
			width: 690rpx;
			height: 190rpx;
			position: absolute;
			top: 32rpx;
			left: 30rpx;
			border-radius: 20rpx;
			background-color: white;
			box-shadow: 0px 3px 13px -3px #dddddd;
			padding-right: 42rpx;

			.userContent {
				overflow: hidden;
				padding: 35rpx 30rpx 35rpx 33rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.userImg {
					display: flex;
					align-items: center;

					image {
						width: 120rpx;
						height: 120rpx;
						border-radius: 50%;
						margin-right: 26rpx;
					}

					.userName {
						color: #333333;
						font-size: 34rpx;
						font-weight: bold;
					}

					.userName1 {}
				}

				.userShow {
					color: #999999;
					font-size: 24rpx;

					text {
						margin-right: 10rpx;
					}
				}
			}

			.arrowIcon {
				padding-right: 42rpx;
				color: #999999 !important;

			}
		}
	}

	.menuList {
		margin-top: 20rpx;
		background-color: white;

		.menuItem {
			margin-left: 30rpx;
			height: 114rpx;
			border-bottom: 3rpx solid $u-b-color;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding-right: 42rpx;

			.itemContent {
				display: flex;
				align-items: center;
				color: #333333;
				font-weight: bold;

				image {
					width: 40rpx;
					height: 37rpx;
					margin-right: 13rpx;

					&.address {
						width: 36rpx;
						height: 32rpx;
					}

					&.contract {
						width: 37rpx;
						height: 37rpx;
					}

					&.need {
						width: 40rpx;
						height: 40rpx;
					}

					&.invoice {
						width: 36rpx;
						height: 40rpx;
					}

					&.whale {
						width: 34rpx;
						height: 35rpx;
					}
				}

				text {
					font-size: 30rpx;
				}

			}

			.arrowIcon {
				.statusTitle {
					color: #999999;
					font-size: 26rpx;
					display: inline-block;
					margin-right: 13rpx;
				}
			}

			&:last-of-type {
				border: none;
			}

			// &.isDevelopment{
			// 	border-top:20rpx;

			// }
		}
	}

	.userAvatar {
		width: 64px;
		height: 64px;
		background-color: #2979FF;
	}

	.userOp {
		margin-left: 20px;
	}

	// .menuList {
	// 	margin-top: 20px;
	// 	background-color: white;
	// }

	// .menuItem {
	// 	padding: 10px 0;
	// 	display: flex;
	// 	justify-content: space-between;

	// 	.icon {
	// 		width: auto;
	// 		min-width: 40px;
	// 		color: #999999; 
	// 	}

	// 	.text {
	// 		margin-left: 20px;
	// 		width: auto;
	// 		min-width: 200px;
	// 	}

	// 	image {
	// 		width: 18px;
	// 		height: 18px;
	// 	}

	// }

	// .itemContent {
	// 	height: 20px;
	// 	display: flex;
	// 	align-items: center;
	// 	justify-content: center;

	// 	.iconfont {
	// 		color: $u-m-color;
	// 		line-height: 20px;
	// 	}
	// }
</style>
