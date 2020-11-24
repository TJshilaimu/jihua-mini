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
						<text>项目款消息</text>
					</view>
					<view class="boxRight">
						2020.10.05.20:32
					</view>
				</view>
				<view class="contentBottom">
					<!-- status为1，已支付
						status为2，超时未支付
					 -->
					<text v-if="status==1"><text class="proName">需求方：{{personName}}</text>支付成功，项目可以开始进行了，，点击查看详情</text>
					<text v-if="status==2"><text class="proName">需求方：{{personName}}</text>超过7天未支付，项目自动关闭</text>
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
				personName:'张三',
				img:'../../../static/information/icon_xiaoxizhongxin_xiangmukuanxiaoxi.png'
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
