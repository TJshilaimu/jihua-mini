<template>
	<view class="sysInfo">
		<view class="sysBox">
			<view class="content">
				<view class="contentTop">
					<view class="boxLeft">
						<view class="imgBox">
							<image :src="img0" mode=""></image>
							<u-badge :is-dot="true" :offset="offset" :count="count" type="error"></u-badge>
						</view>
						<text>系统消息</text>
					</view>
					<view class="boxRight">
						2020.10.05.20:32
					</view>
				</view>
				<view class="contentBottom">
					<!-- status为1，实名认证通过
						status为2，实名认证未通过
						status为3，成为需求方
					 -->
					<text v-if="status==1">恭喜您，实名认证审核通过！</text>
					<text v-if="status==2">实名认证未通过，请去查看原因。</text>
					<text v-if="status==3">恭喜你，成为我合格的需求方，可以去发布项目了。</text>
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
				img0:'../../../static/information/icon_xiaoxizhongxin_xitongxiaoxi.png',
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
