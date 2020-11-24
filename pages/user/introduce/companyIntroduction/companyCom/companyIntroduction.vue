<template>
	<view class="skillDisplay">
		<view class="middleContent">
			<scroll-view scroll-y="true" class="scrollY" @scroll="scrollItem">
				<!-- 公司介绍 -->
				<view class="introduce goodSkill">
					<view class="goodSkillD">
						<view class="titleH">公司简介</view>
					</view>
					<view class="contentBox">
						<scroll-view scroll-y="true">
							{{introduce}}
						</scroll-view>
					</view>
				</view>
				<!-- 项目案例 -->
				<view class="workExperience goodSkill">
					<view class="goodSkillD">
						<view class="titleH">项目案例</view>
					</view>
					<view>
						<view class="workDetail" v-for="(item,index) in projectExperience" :key="index">
							<view class="company">
								<text class="companyName">{{item.projectName}}</text>
							</view>
							<text class="workType">开发周期：{{item.leadTime}}</text>
							<view class="contentBox">
								<scroll-view scroll-y="true">
									{{item.projects}}
								</scroll-view>
							</view>
							<text class="screenshot">项目截图</text>
							<view class="imageBox">
								<view>
									<image :src="src"></image>
								</view>
								<view>
									<image :src="src1"></image>
								</view>
								<view>
									<image :src="src1"></image>
								</view>
								<view>
									<image :src="src1"></image>
								</view>
							</view>
							<text class="address">项目演示地址：{{item.url}}</text>


						</view>
					</view>
					<view class="openAll" v-if="openAll" @click="open(true)">
						<text>展开全部</text>
						<u-icon name="arrow-down"></u-icon>
					</view>
					<view class="openAll" v-else @click="open(false)">
						<text>收起全文</text>
						<u-icon name="arrow-up"></u-icon>
					</view>
				</view>
			</scroll-view>

		</view>
	</view>
</template>

<script>
	export default {
		props:{
			'introduce':{
				type:String,
				required:true
			},
			'projectExperience':{
				type:Array,
				required:true
			},
		},
		data() {
			return {
				companyEmpty: true,
				projectCases: true,
				openAll: true,
				src: this.baseImgUrl + '/static/company/pic_tianjiagongsi.png',
				src1:this.baseImgUrl + '/static/company/pic_tianjiagongsi.png'
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			console.log(ops)
		},
		methods: {
			scrollItem(e) { //滚动时动态显示导航栏
				// console.log('滚动',e.target.scrollTop)
				// 	if(e.target.scrollTop >= 70){
				// 		uni.setNavigationBarTitle({
				// 			title:'小程序'
				// 		})
				// 	}
				// 	if(e.target.scrollTop < 70){
				// 		uni.setNavigationBarTitle({
				// 			title:'技能展示'
				// 		})
				// 	}
				// },
			},
			open(flag) {
				if (flag) {
					this.openAll = false;
				} else {
					this.openAll = true;
				}
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
	}

	.skillDisplay {
		width: 100%;
		height: 100%;
		padding: 0 15px;

		.goodSkill {
			border-bottom: 1px solid #f1f1f1;
			padding-bottom: 15px;
			;

			.goodSkillD {
				display: flex;
				justify-content: space-between;
				padding-top: 42rpx;

				.titleH {
					display: flex;
					font-size: 15px;
					padding-left: 12px;
					align-items: center;
					position: relative;
					width: 100%;
					color: #333;
					font-weight: bold;

					&:before {
						position: absolute;
						left: 0px;
						;
						content: "";
						display: block;
						margin-right: 4px;
						width: 3px;
						height: 18px;
						background-color: #00D3BD;
					}
				}
			}

			.tagText {
				border-radius: 8rpx;
				border: none;
				padding: 8rpx 24rpx;
				background-color: #f8f8f8;
				font-size: 24rpx;
				margin-right: 5px;
				margin-top: 10px;
				color: #999;
			}

			.tagAdd {
				background-color: #E0FAF7;
				color: #00D3BD;
			}

			.contentBox {
				width: 100%;
				background-color: white;
				border: none;
				max-height: 200rpx;
				padding: 2px 2px 0;
				overflow-y: scroll;
				line-height: 25px;
				color: #999;
			}

			.workDetail {
				padding-top: 32rpx;
				line-height: 20px;
				padding-bottom: 20px;
				;

				.company {
					display: flex;
					justify-content: space-between;
					color: #666;
					font-size: 14px;

					.edit {
						color: #00D3BD;
						margin-right: 10px;
						;
					}
				}

				.workType {
					color: #888;
					font-size: 14px;
					line-height: 25px;

					text {
						margin-right: 5px;
						;
					}
				}

				.workTime {
					color: #999;
					font-size: 12px;
				}

				.screenshot {
					line-height: 30px;
					color: #666666;
					font-size: 26rpx;
					margin-top: 10px;
				}

				.imageBox {
					display: flex;
					flex-flow: row wrap;

					view {
						width: 30%;
						background-color: #F7F7F7;
						margin-right: 5px;
						margin-bottom: 10px;

						image {
							width: 100%;
							display: inline-block;
							height: 60px;
						}
					}
				}

				.address {
					font-size: 26rpx;
					color: #666666;
				}
			}

			.openAll {
				text-align: center;
				color: #999999;
				font-size: 24rpx;
			}

		}
	}
</style>
