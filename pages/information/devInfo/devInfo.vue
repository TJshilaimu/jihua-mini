<template>
	<view class="sysInfo">
		<view class="sysBox">
			<view class="content">
				<view class="contentTop">
					<view class="boxLeft">
						<view class="imgBox">
							<image :src="img" mode=""></image>
							<u-badge :is-dot="true" :offset="offset" :count="count" type="error"></u-badge>
						</view>
						<text>开发进行中消息</text>
					</view>
					<view class="boxRight">
						2020.10.05.20:32
					</view>
				</view>
				<view class="contentBottom">
					<!-- status为1，开发者提交
						status为2，开发者重新提交
						status为3，p1待验收
						status为4，开发者延期未交付，去提醒
						status为5，超时7天
						status为6，开发者不同意扣款
						7，开发者同意扣款
						8，P1阶段完成 ，项目款已打
						9，项目完成
						10，项目强制关闭
						
					 -->
					<text v-if="status==1">开发者1号提交了一份阶段划分方案，请点击查看</text>
					<text v-if="status==2">开发者1号重新提交了一份阶段划分方案，请点击查看</text>
					<text v-if="status==3">P1阶段待验收</text>
					<text v-if="status==4">P1阶段开发者已经延期1天未交付，请提醒他尽快交付</text>
					<text v-if="status==5">P1阶段开发者已经延期超过7天，可以去手动关闭该阶段，或者关闭整个项目</text>
					<text v-if="status==6">P1阶段开发者不同意你的扣款，点击查看或者联系客服介入</text>
					<text v-if="status==7">P1阶段开发者同意你的扣款，请点击查看</text>
					<text v-if="status==8">P1阶段已完成，项目款已经打到开发者账户，请点击查看</text>
					<text v-if="status==9">项目已完成</text>
					<text v-if="status==10">项目已强制关闭，请点击查看详情</text>
					<view class="proType">
						项目：{{projectName}}
					</view>
				</view>
			</view>
			<view class="detail">
				<text class="detailTitle">查看详情</text>
				<u-icon name="arrow-right"></u-icon>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				count:'2',
				offset: [0, 0],
				status:'1',
				projectName:'小程序开发',
				img:'../../../static/information/icon_xiaoxizhongxin_kaifajinxingzhongxiaoxi.png'
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.sysInfo{
		height: 100vh;
		background-color: #f8f8f8;
		padding:15px;
		.sysBox{
			background-color: white;
			padding:15px 10px 13px 10px;
			margin-bottom: 10px;
			.content{
				border-bottom: 1rpx solid $u-b-color;
				.contentTop{
					display: flex;
					justify-content: space-between;
					align-items: center;
					.boxLeft{
						display: flex;
						align-items: center;
						.imgBox{
							width: 26px;
							height:26px;
							border-radius: 50%;
						
							position: relative;
							margin-right:9px;
						display: flex;
						justify-content: center;
						align-items: center;
						image{
						width:26px;
						height:26px;
						}
						}
						text{
							color:'#333333';
							font-size: 15px;
							font-weight: bold;
						}
					}
					.boxRight{
							color:#999999;
							font-size: 12px;
					}
					
				}
				.contentBottom{
					padding:14px 0;
					color: #666666;
					font-size: 13px;
					.proName{
						color:$u-m-color;
						text-decoration: underline;
					}
					.proType{
						color:#999999;
						font-size: 12px;
						margin-top:6px;
					}
				}
			}
			.detail{
				padding: 13px 0 0 0;
				display: flex;
				justify-content: space-between;
				color: #aaaaaa;
				.detailTitle{
					color: #333333;
					font-size: 14px;
				}
			}
		}
	}
</style>
