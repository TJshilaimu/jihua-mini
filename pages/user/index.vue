<template>
	<view class="userCenter">
		<view class="menuList">
			<view class="menuItem"><text class="text">头像</text>
				<view class="avatarItem">
					<img class="avatar" @click="changeAvatar" :src="src"/>
					<u-icon name="arrow-right" color="#999999"></u-icon>
				</view>
			</view>
			<view class="menuItem"><text class="text">用户名</text>
				<view class="icon1">
					<text class="itemInfo">{{userInfo.userName}}</text>
				</view>
			</view>
			<view class="menuHead">账号绑定</view>
			<view class="menuItem" @click="email">
				<text class="text">邮箱地址</text>
				<view class="icon1">
					<text class="itemInfo">{{userInfo.email}}</text>
					<u-icon name="arrow-right" color="#999999"></u-icon>
				</view>
			</view>
			<view class="menuItem" @click="phone"><text class="text">手机号</text>
				<view class="icon1">
					<text class="itemInfo">{{replacePhone(userInfo.phone)}}</text>
					<u-icon name="arrow-right" color="#999999"></u-icon>
				</view>
			</view>
			<view class="menuHead">账号设置</view>
			<view class="menuItem" @click="changePwd"><text class="text">修改密码</text>
				<view class="icon1">
					<u-icon name="arrow-right" color="#999999"></u-icon>
				</view>
			</view>
		</view>
		<view>
			<button class="logout" @click="logoutShow=true">退出登陆</button>
		</view>
		<u-modal @confirm="logout" :show-title="true" :show-cancel-button="true" cancel-color="#666666" confirm-color="#00D3BD"
		 :title="title" v-model="logoutShow" :content="content"></u-modal>
	</view>
</template>

<script>
	import {
		decodePhone
	} from "../../util/util.js"

	export default {
		data() {
			return {
				// 二次确认框显示状态
				logoutShow: false,
				content: '确认要退出登陆吗？',
				title: "请你确认下",

				userInfo: {
					userName: "", //用户名
					phone: "", //手机号
					email: "", //邮箱
				},
				src:""
			}
		},
		onLoad: function() {
			this.userInfo.userName = uni.getStorageSync("userName")
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.userInfo.phone = res.data;
					this.$u.api.getUserInfo({
						phone: this.userInfo.phone
					}).then(res => {
						console.log('个人',res)
						if (res.meta.code == 0) {
							this.userInfo.email = res.data.email? res.data.email:'绑定邮箱';
							uni.setStorage({
								key: "phone",
								data: res.data.phone
							})
							uni.setStorage({
								key: "email",
								data: res.data.email
							})
						} else {
							this.$u.toast("用户资料更新失败")
						}
					})
				}
			})
			uni.getStorage({
				key: "email",
				success: (res) => {
					console.log('email',res)
					if (res.data == null) {
						this.userInfo.email = "绑定邮箱"
					} else {
						this.userInfo.email = res.data
					}
					console.log(this.userInfo.email)
				}
			})
			//调用修改头像api

		},
		methods: {
			replacePhone(data) {
				return decodePhone(data)
			},
			// 跳转到邮箱界面
			email() {
				// 判断是否存在邮箱地址
				if (this.userInfo.email == "绑定邮箱") {
					uni.navigateTo({
						url: "email/addEmail",
						fail: (err) => {
							console.log(err)
						}
					})
				} else {

				}

			},
			// 跳转到手机界面
			phone() {
				uni.navigateTo({
					url: "./phone/changePhone"
				})
			},
			// 跳转到修改密码页
			changePwd() {
				uni.navigateTo({
					url: "../login/forgetPwd/forgetPwd"
				})
			},
			// 修改头像
			changeAvatar() {
				let that = this
				wx.showActionSheet({
					itemList: ['从手机相册选择', '拍照'],
					success: function(res) {
						console.log(res.tapIndex)
						if (res.tapIndex == 1) {
							uni.chooseImage({
								count: 1, // 默认9
								sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
								sourceType: ['camera'], // 可以指定来源是相册还是相机，默认二者都有
								success: function(res) {
									// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
									var tempFilePaths = res.tempFilePaths
									that.$u.api.updateAvatar({
										profile: tempFilePaths,
									
									}).then(res =>{
										console.log(res,"2225")
									})
								}
							})
						}
						if (res.tapIndex == 0) {
							uni.chooseImage({
								count: 1, // 默认9
								sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
								sourceType: ['album'], // 可以指定来源是相册还是相机，默认二者都有
								success: function(res) {
									// 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
									var tempFilePaths = res.tempFilePaths
									that.src=tempFilePaths
									that.$u.api.updateAvatar({
										profile: tempFilePaths,
									
									}).then(res =>{
										console.log(res,"2225")
									})
								}
							})
						}
					},
					fail: function(res) {
						console.log(res.errMsg)
					}
				})

			},
			// 退出登录
			logout() {
				// 退出登录api
				this.$u.api.logout().then(res =>{
					console.log('退出登录api',res)
				})
				
				// 二次确认
				uni.clearStorage({
					success: () => {
						uni.clearStorage()
						this.$u.toast("已注销登录")
						uni.switchTab({
							url: "../center/index"
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #F8F8F8;
	}

	.userCenter {
		.avatar {
			border-radius: 18px;
			width: 30px;
			height: 30px;
			background-color: skyblue;
			margin-right: 10px;
		}

		.menuHead {
			display: flex;
			height: 46px;
			line-height: 46px;
			padding-left: 20px;
			margin-top: 6px;
			background-color: white;
			border-bottom: 1px solid #e6e6e6;
			align-items: center;
			position: relative;

			&:before {
				left: 0;
				content: "";
				display: block;
				margin-right: 4px;
				width: 3px;
				height: 14px;
				background-color: $u-m-color;
			}
		}

		.avatarItem {
			display: flex;
			align-items: center;
			justify-content: center;
			margin-right: 10px;
		}

		.menuItem {
			background-color: white;
			height: 56px;
			line-height: 56px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			border-bottom: 1px solid #f4f4f4;
			background-color: white;

			.icon1 {
				width: auto;
				min-width: 40px;
				color: black;
				text-align: right;
				margin-right: 10px;
				color: #999999;
			}

			.itemInfo {
				margin-right: 10px;
				color: #999999;
			}

			.text {

				margin-left: 20px;
				width: auto;
				min-width: 140px;
			}
		}

		.logout {
			width: 90%;
			height: 90rpx;
			margin: 40px auto;
			border-radius: 45px;
			color: white;
			font-size: 16px;
			line-height: 90rpx;
			background-color: $u-m-color;
		}
	}
</style>
