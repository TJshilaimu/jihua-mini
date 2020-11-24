<template>
	<view class="transactionRe">
		<view class="selsectType">
			<view @click="select('month')">
				<text>本月</text>
				<u-icon name="arrow-down" size="16"></u-icon>
			</view>
			<view @click="select('type')">
				<text>交易类型</text>
				<u-icon name="arrow-down" size="16"></u-icon>
			</view>
			<view @click="select('status')">
				<text>交易状态</text>
				<u-icon name="arrow-down" size="16"></u-icon>
			</view>
		</view>
		<u-popup v-model="show" mode="top" duration="0" border-radius="20">
			<view>
				<view class="selsectType">
					<view @click="select('month')">
						<text :class="type=='month'?'selected':''">本月</text>
						<u-icon name="arrow-down" size="16" :color="type=='month'?'#00D3DB':''"></u-icon>
					</view>
					<view @click="select('type')">
						<text :class="type=='type'?'selected':''">交易类型</text>
						<u-icon name="arrow-down" size="16" :color="type=='type'?'#00D3DB':''"></u-icon>
					</view>
					<view @click="select('status')">
						<text :class="type=='status'?'selected':''">交易状态</text>
						<u-icon name="arrow-down" size="16" :color="type=='status'?'#00D3DB':''"></u-icon>
					</view>
				</view>
				<view class="content">
					<view v-if="type=='month'">
						<view @click="selectTime('1')" class="item"><text>本月</text>
							<u-icon v-if="selectTimee=='1'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectTime('2')" class="item"><text>一个月内</text>
							<u-icon v-if="selectTimee=='2'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectTime('3')" class="item"><text>半年内</text>
							<u-icon v-if="selectTimee=='3'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectTime('4')" class="item"><text>一年内</text>
							<u-icon v-if="selectTimee=='4'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
					</view>
					<view v-if="type=='type'">
						<view @click="selectType('1')" class="item"><text>充值</text>
							<u-icon v-if="selectTypee=='1'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectType('2')" class="item"><text>提现</text>
							<u-icon v-if="selectTypee=='2'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectType('3')" class="item"><text>项目款</text>
							<u-icon v-if="selectTypee=='3'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
					</view>
					<view v-if="type=='status'">
						<view @click="selectStatus('1')" class="item"><text>已取消</text>
							<u-icon v-if="selectStatuss=='1'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectStatus('2')" class="item"><text>已失败</text>
							<u-icon v-if="selectStatuss=='2'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectStatus('3')" class="item"><text>已完成</text>
							<u-icon v-if="selectStatuss=='3'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectStatus('4')" class="item"><text>处理中</text>
							<u-icon v-if="selectStatuss=='4'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
					</view>
				</view>
				<view class="opt">
					<view class="cancel" @click="show=false">取消</view>
					<view class="confirm" @click="search">确认</view>
				</view>
			</view>
		</u-popup>
		<view class="transactionRecord">
			<view class="content">
				<view class="contentItem" v-for="(v,i) in transactionRecord" :key="i">
					<view class="contentItemContent">
						<image :src="v.type=='1'?typeImg1:v.type=='2'?typeImg2:v.type=='3'?typeImg3:''">
							<view>
								<view class="itemTitle">
									<view class="text">{{v.title}}</view>
									<view class="tag">{{v.status=='1'?'已取消':v.status=='2'?'已失败':v.status=='3'?'已成功':''}}</view>
								</view>
								<view class="itemTime">{{v.time}}</view>
							</view>
					</view>
					<view class="itemAmount">{{v.amount}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				typeImg1: this.baseImgUrl + '/static/wallet/icon_xiangmukuan.png',
				typeImg2: this.baseImgUrl + '/static/wallet/icon_chongzhi.png',
				typeImg3: this.baseImgUrl + '/static/wallet/icon_tixian.png',
				transactionRecord: [{
						type: "1",
						status: "1",
						time: "今天 08:12",
						title: "项目款收入",
						amount: "+2000"
					}, {
						type: "2",
						status: "2",
						time: "昨天 08:12",
						title: "微信充值",
						amount: "+200"
					}, {
						type: "1",
						status: "1",
						time: "08-08 08:12",
						title: "设计开发-p1阶段",
						amount: "+2000"
					},
					{
						type: "2",
						status: "1",
						time: "09-08 08:12",
						title: "名字笔记的哇哈杜瓦蝴蝶瓦好了哈完蛋啦",
						amount: "+3200"
					}, {
						type: "3",
						status: "1",
						time: "2020-09-08 08:12",
						title: "提现",
						amount: "+2000"
					}, {
						type: "3",
						status: "2",
						time: "2020-09-08 08:12",
						title: "提现",
						amount: "+2000"
					}, {
						type: "3",
						status: "3",
						time: "2020-09-08 08:12",
						title: "提现",
						amount: "+2000"
					}
				],
				show: false,
				type: 'month',
				selectTimee: "1",
				selectTypee: "1",
				selectStatuss: "1"
			}
		},
		methods: {
			// 选择分类
			select(v) {
				this.type = v
				this.show = true
			},
			// 选择分类类型 
			selectTime(v) {
				this.selectTimee = v
			},
			// 选择分类类型 
			selectType(v) {
				this.selectTypee = v
			},
			// 选择分类类型 
			selectStatus(v) {
				this.selectStatuss = v
			},
			search(){
				this.$u.toast("已查询到结果")
				this.show=false
			}
		}
	}
</script>

<style lang="scss">
	.transactionRe {
		.selsectType {
			display: flex;
			justify-content: space-around;
			text-align: center;
			border-bottom: 1px solid #E6E6E6;

			&>view {
				padding: 12px 0;
				width: 33%;
				display: flex;
				align-items: center;
				justify-content: center;

				.u-icon {
					margin-left: 4px !important;
				}

			}

			.selected {
				color: $u-m-color;
			}

		}

		.item {
			display: flex;
			justify-content: space-between;
			padding: 10px;
		}

		.opt {
			display: flex;
			border-radius: 0px 0px 6px 6px;

			.cancel {
				width: 50%;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}

			.confirm {
				width: 50%;
				height: 40px;
				line-height: 40px;
				text-align: center;
				background-color: $u-m-color;
				color: white;
			}
		}

		.transactionRecord {
			margin-top: 6px;
			width: 100%;
			background-color: white;

			.content {
				width: 100%;
				margin: 0 auto;

				.contentItem {
					padding: 10px 20px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1px solid #E6E6E6;

					.contentItemContent {
						display: flex;

						&>view {
							margin-left: 6px;
							display: flex;
							flex-direction: column;
							justify-content: space-between;

							.itemTitle {
								height: 20px;
								line-height: 20px;
								display: flex;
								align-items: center;

								.text {
									font-size: 14px;
									max-width: 200px;
									overflow: hidden;
									text-overflow: ellipsis;
									white-space: nowrap;
								}

								.tag {
									border-radius: 4px;
									margin-left: 4px;
									color: $u-m-color;
									border: 1px solid $u-m-color;
									box-sizing: border-box;
									padding: 0 2px;
									font-size: 10px !important;
								}

							}

							.itemTime {
								font-size: 12px;
								color: #999999;
							}
						}

						&>image {
							width: 36px;
							height: 36px;
						}
					}

				}
			}
		}

	}
</style>
