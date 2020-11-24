<template>
	<view class="userTp">
		<view class="head1">请选择你的身份</view>
		<view class="head2">明确后将为你提供更精准的服务</view>
		<view class="userTpBox" @click="register('dev')">
			<view class="userImg">
				<img :src="devImg"></img>
			</view>
			<view class="userText">
				<text class="userTpName">开发者</text>
				<text class="info">可以在威选申请项目，赚取收益</text>
			</view>
		</view>
		<view class="userTpBox" @click="register('B')">
			<view class="userImg">
				<img :src="userImg"></img>
			</view>
			<view class="userText">
				<text class="userTpName">需求方</text>
				<text class="info">可以在威选发布项目，实现需求</text>
			</view>
		</view>
		<!-- 认证类型选择 -->
		<u-popup v-model="authTpShow" mode="center" width="90%" :border-radius="10">
			<view class="popup">
				<view class="title1">请选择需求方类型</view>
				<view class="title2">确认过你的类型后，会为你提供更加准确的服务</view>
				<view class="content">
					<view class="contentItem" @click="register('masterdev')">
						<view>
							<img :src="PImg">
							<view class="contentItemText">
								<view>个人需求方</view>
								<view>没有企业资质的需求方</view>
							</view>
						</view>
						<view>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
					<view class="contentItem" @click="register('mcom')">
						<view>
							<img :src="CImg">
							<view class="contentItemText">
								<view>企业需求方</view>
								<view>有企业资质的需求方</view>
							</view>
						</view>

						<view>
							<u-icon name="arrow-right"></u-icon>
						</view>
					</view>
				</view>
			</view>

		</u-popup>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				devImg: this.baseImgUrl + '/static/register/pic_kaifazhe.png',
				userImg: this.baseImgUrl + '/static/register/pic_xuqiuzhe.png',
				CImg: this.baseImgUrl + '/static/login/icon_gerenxuqiuzhe.png',
				PImg: this.baseImgUrl + '/static/login/icon_qiyexuqiuzhe.png',
				authTpShow: false
			}
		},
		methods: {
			// 跳转到注册界面
			register(v) {
				if (v == 'B') {
					this.authTpShow = true
					return
				}
				uni.navigateTo({
					url: `../index?userTp=${v}`
				})

			}
		}
	}
</script>

<style lang="less">
	.userTp {
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		.head1 {
			margin-top: 40px;
			margin-bottom: 2px;
			font-size: 16px;
			font-weight: bold;
		}

		.head2 {
			font-size: 14px;
			font-weight: lighter;
		}

		.userTpBox {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			&:nth-child(3) {
				margin-top: 40px;
			}

			&:nth-child(4) {

				margin-top: 40px;

				&::before {
					content: "";
					height: 1px;
					width: 80%;
					background: #E6E6E6;
					margin-bottom: 20px;
				}
			}

			.userImg {
				img {
					width: 54px;
					height: 86px;
				}
			}

			.userText {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;

				.userTpName {
					font-size: 16px;
				}

				.info {
					margin-top: 4px;
					font-size: 12px;
					font-weight: lighter;
				}
			}
		}

		.popup {
			width: 100%;
			padding: 10px;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;

			.title1 {
				width: 80%;
				font-size: 14px;
				font-weight: blod;
				text-align: center;
			}

			.title2 {
				width: 80%;
				font-size: 12px;
				font-weight: lighter;
				text-align: center;
			}

			.content {
				width: 100%;
				padding-top: 20px;

				.contentItem {
					width: 80%;
					height: 48px;
					display: flex;
					align-items: center;
					box-sizing: content-box;
					justify-content: space-between;
					padding: 10px 6px;
					margin: 20px auto;
					box-shadow: 0px 4px 4px #f8f8f8;
					border-radius: 4px;

					view {
						&:nth-child(1) {
							display: flex;
							align-items: center;

							.contentItemText {
								margin-left: 4px;
								display: flex;
								flex-direction: column;

								view {
									&:nth-child(1) {
										font-size: 14px;
										font-weight: bold;
										ling-height: 24px;
									}

									&:nth-child(2) {
										font-size: 12px;
										font-weight: lighter;
										ling-height: 24px;
									}
								}
							}
						}
					}

					img {
						width: 36px;
						height: 36px;
					}
				}
			}

		}
	}
</style>
