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
					<!-- status为1，方案已提交
						status为2，需求方已同意
						status为3，需求方不同意
						status为4，P1已延期
						status为5，P1已全款验收通过
						status为6，有扣款
						7，需求方未验收
						8，项目强制关闭
						9，项目完成
						
					 -->
					<text v-if="status==1">阶段方案已提交，等待需求方处理</text>
					<text v-if="status==2"><text class="proName">需求方：{{personName}}</text>已经同意你的阶段划分方案</text>
					<text v-if="status==3"><text class="proName">需求方：{{personName}}</text>不同意你的阶段划分方案，请去修改方案</text>
					<text v-if="status==4">P1阶段已经延期请尽快提交阶段产物</text>
					<text v-if="status==5">P1阶段全款验收通过，点击查看</text>
					<text v-if="status==6">P1阶段验收通过，但有扣款，点击查看是否同意该验收方案</text>
					<text v-if="status==7">P1阶段需求方已经超过7天未验收，项目款会在1~3个工作日内打到你的账户，请注意查收</text>
					<text v-if="status==8">项目已经强制关闭，点击查看详情</text>
					<text v-if="status==9">项目已完成，点击查看详情</text>
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
