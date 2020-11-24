<template>
	<view class="">
			<view class="emandInf">
				<view class="emand">
					<view class="titleH">开发者信息</view>
					<view class="details">查看详情></view>
				</view>
				<view class="projectPeople">
					<view class="people"><image :src="peopleImg"></image></view>
					<view class="peopleName">
						<text class="name">张三</text>
						<view class="phone">
							<text>手机号：156****1562</text>
							<text>邮箱：********@qq.com</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 我的合同 -->
			<view class="needTopC">
				<view class="needTopLeft">
					<view class="line">
					</view>
					<text>阶段信息(3)</text>
				</view>
				<view class="needTopRight" @click="moreContract">
					<text>查看详情</text>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<!-- 项目进度不同阶段信息 -->
			<!-- 暂无阶段信息 -->
			<view class="stageInf emandInf" v-if="status==0">
				<view class="stage emand">
					<view class="titleH">阶段信息</view>
				</view>
				<view class="stageProject">
					<image :src="stageW"></image>
					<text class="stageTips">暂无阶段信息</text>
					<text class="stageDivide">等待开发者提交阶段划分方案</text>
				</view>
			</view>
			<!-- 项目款 -->
			<view class="stageInf emandInf">
				<view class="stage emand">
					<view class="titleH">
						<text class="contentH">项目款</text>
					</view>
				</view>
				<view class="stageStep">
					<view class="stepBox">
						<view class="">
							P1阶段
						</view>
						<view class="">
							<view>总金额：1000元</view>
							<view>获得金额：1000元</view>
						</view>
					</view>
					<view class="stepBox">
						<view class="">
							P1阶段
						</view>
						<view class="">
							<view>总金额：1000元</view>
							<view>获得金额：1000元</view>
						</view>
					</view>
					<view class="stepBox">
						<view class="">
							P1阶段
						</view>
						<view class="">
							<view>总金额：1000元</view>
							<view>获得金额：1000元</view>
						</view>
					</view>
					<view class="allMoney">
						共计获得金额：3000元
					</view>
				</view>
			</view>
			<!-- B端不同意项目阶段划分 -->
			<!-- 
			 status为1、表示没有评价
			 status为2、表示有评价
			 -->
			<view class="stageInf emandInf"  v-if="status==1">
				<view class="stage emand">
					<view class="titleH">
						<text class="contentH">服务评价</text>
					</view>
				</view>
				<view class="stageProject">
					<image :src="stageS"></image>
					<text class="stageTips">暂无评价</text>
					<text class="stageDivide">请为本次的体验给需求方写一个评价吧</text>
					<button class="generate" @click="showAdvise">立即评价</button>
				</view>
			</view>
		<view class="commentBox">
			<view class="boxTop">
				<view class="companyImg">
					<image :src="companyImg" mode=""></image>
					<view class="companyTitle">
						<view class="companyName">
							新谭物资科技有限公司
						</view>
						<view class="commentTime">
							2020-10-05 10:20
						</view>
					</view>
				</view>
				<view class="rate">
					<u-rate :count="count" :current="current" active-color="#ff9800" :disabled="true"></u-rate>
				</view>
			</view>
			<view class="boxContent">
				我的多行消息我,的多行消息我的多行消息我的多行消息我的多行消息
			</view>
			<view class="boxProject">
				项目：小程序开发>
			</view>
			<view class="secBtn">
				<view class="changeBtn" @click="changeBtn">
					<image :src="changeBtn" mode=""></image>
					<text>修改</text>
				</view>
				<view class="deleteBtn" @click="deleteBtn">
					<image :src="deleteBtn" mode=""></image>
					<text>删除</text>
				</view>
			</view>
		</view>
		<view class="commentBox">
			<view class="boxTop">
				<view class="companyImg">
					<image :src="companyImg" mode=""></image>
					<view class="companyTitle">
						<view class="companyName">
							新谭物资科技有限公司
						</view>
						<view class="commentTime">
							2020-10-05 10:20
						</view>
					</view>
				</view>
				<view class="rate">
					<u-rate :count="count" :current="current" active-color="#ff9800" :disabled="true"></u-rate>
				</view>
			</view>
			<view class="boxContent">
				我的多行消息我,的多行消息我的多行消息我的多行消息我的多行消息
			</view>
			<view class="boxProject">
				项目：小程序开发>
			</view>
			<view class="secBtn">
				<view class="changeBtn" @click="changeBtn">
					<image :src="changeBtn" mode=""></image>
					<text>修改</text>
				</view>
				<view class="deleteBtn" @click="deleteBtn">
					<image :src="deleteBtn" mode=""></image>
					<text>删除</text>
				</view>
			</view>
		</view>
			<u-modal v-model="show" :content="contentModal" :title="titleH" show-cancel-button=true></u-modal>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				stageNum:2,
				status:2,
				content:'',
				count: 5,
				current:3.7,
				companyImg: this.baseImgUrl + '/static/center-selected.png',
				changeBtn: this.baseImgUrl + '/static/mine/icon_bianji.png',
				deleteBtn: this.baseImgUrl + '/static/mine/icon_shanchu.png',
			}
		},
		methods:{
			showAdvise(){
				console.log('评价')
			}
		}
	}
</script>

<style lang="scss">
	.needTopC {
		border-top:10px solid #f8f8f8;
		background-color: white;
		padding: 28rpx 30rpx 24rpx 30rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.needTopLeft {
			display: flex;
			align-items: center;
	
			text {
				color: #333333;
				font-size: 28rpx;
				font-weight: bold;
			}
	
			.line {
				display: inline-block;
				width: 6rpx;
				height: 30rpx;
				background-color: $u-m-color;
				margin-right: 13rpx;
			}
		}
	
		.needTopRight {
			color: #999999;
	
			text {
				display: inline-block;
				margin-right: 11rpx;
			}
		}
	}
	// 阶段按钮
	.stageBtn{
		border-top: 6px;
		display: flex;
		justify-content: center;

		align-items: center;
		padding:10px 15px;
		.agree{
			border-radius: 90rpx;
			width:380rpx;
			background-color:$u-m-color;
			color: white;
			margin-right: 30rpx;
		}
		.refuse{
			border-radius: 90rpx;
			width:220rpx;
			border:1px solid $u-m-color;
			color:$u-m-color;
		}
	}
	.emandInf{
		background-color: #fff; 
		margin-top:10px;
		.emand{
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			padding:0 10px;
			border-bottom: 1px solid #E6E6E6;
			.titleH{
				display: flex;
				font-size: 15px;
				padding-left:8px;
				align-items: center;
				position: relative;
				color:#333;
				line-height: 40px;
				font-weight: bold;
				.contentH{
					display: inline-block;
					margin-right: 4px;
				}
				&:before {
					position: absolute;
					left: 0px;;
					content: "";
					display: block;
					margin-right: 4px;
					width: 3px;
					height: 18px;
					background-color: #00D3BD;
				}				
			}
			.details{
				line-height: 40px;
				color:#999;
			}
		}
		.projectPeople{
			background-color: #fff;
			display: flex;
			flex-direction: row;
			padding:10px 10px;
			image{
				margin: 0 8px 0 0;
				width: 40px;
				height: 40px;
				border-radius: 50%;
			}
			.name{
				color:#333;
			}
			.phone{
				color:#666;
				font-size: 12px;
				text{
					margin-right:10px;
				}
			}
		}
		
			
	}
	.stageInf{
		.stageProject{
			display: flex;
			flex-direction: column;
			text-align: center;
			image{
				width:100px;
				height:100px;
				margin:25px auto;
			}
			.stageTips{
				color:#333;
				line-height: 27px;;
				font-size: 16px;
			}
			.stageDivide{
				display: inline-block;
				padding-bottom: 23px;
				color:#999;
				font-size: 12px;
			}
			.generate{
				background-color: #00D3BD;
				color:#fff;
				border: none;
				height:45px;
				line-height: 45px;
				margin:0px auto 40px;
				border-radius: 40px;
				font-size: 14px;;
				padding:0 40px;
			}
		}
	}
	.stageInf{
		.stageStep{
			padding-left: 15px;
			padding-right: 15px;
			.stepBox{
				padding:18px 0px;
				border-bottom: 1rpx solid $u-b-color;
				display: flex;
				justify-content: space-between;
				align-items: flex-start;
				text-align: right;
			}
			.allMoney{
				height: 50px;
				padding:18px 0px;
				text-align: right;
				font-size: 15px;
				font-weight: bold;
				color:#333333;
			}
	
		}
		.stageProjectInf{
			background-color: #fff;
			display: flex;
			flex-direction: column;
			padding:0 10px 0px;
			margin-bottom: 10px;
			border-bottom: 10px solid #f8f8f8;
			view.viewBox{
				display: flex;
				justify-content: space-between;
				line-height: 50px;
				border-bottom: 1px solid #E6E6E6;
				color: #333;
				&:last-of-type{
					border:none;
				}
				.stageTitle{
					font-weight: bold;
					font-size: 14px;
					color: #333;
				}
			}
			.explain{
				display: flex;
				flex-direction: column;
				justify-content:initial;
				
				.explainT{
					line-height: 25px;
					margin-bottom: 16px;
				}
				
			}
			.textBox{
				display: flex;
				flex-direction: column;
				padding-bottom: 20px;
				border:none;
				text{
					line-height: 30px;
					padding:10px 0;
					color:#333;
				}
				textarea{
					border:1px solid #E6E6E6;
					width:100%;
					padding:10px;
					box-sizing: border-box;
					line-height: 20px;
				}
				.submit{
					background-color: #00D3BD;
					color:#fff;
					border: none;
					line-height: 40px;
					margin:10px 0 0;
					border-radius: 40px;
					font-size: 14px;;
					padding:0 12px;
				}
			}
			.checkStatus{
				display: flex;
				flex-direction: column;
				justify-content:initial;
				.check{
					display: flex;
					justify-content: space-between;
					line-height: 40px;
					padding-top:5px;
				}
				.checkTips{
					background: #00D3BD;
					color:#fff;
					padding:0 10px;
					line-height: 30px;
					font-size: 12px;
					margin-bottom: 10px;
				}
				.checkTip1{
					border:1px solid #00D3BD;
					background-color: none;
					color:#00D3BD;
					padding:0 10px;
					line-height: 30px;
					font-size: 12px;
					margin-bottom: 10px;
				}
				.checkTip2{
					border:1px solid #F36F75;
					color:#F36F75;
				}
			}
		}
	}
	.commentBox{
		background-color: white;
		margin-top:20rpx;
		padding-left:28rpx;
		padding-right: 30rpx;
		padding-top:24rpx;
		.boxTop{
			display: flex;
			justify-content: space-between;
			align-items:flex-start;
			.companyImg{
				display: flex;
				image{
					width:74rpx;
					height:74rpx;
					margin-right:20rpx;
				}
				.companyTitle{
					.companyName{
						color: #333333;
						font-size: 28rpx;
						max-width:178px;
						white-space: nowrap;
						text-overflow: ellipsis;	
						overflow: hidden;
					}
					.commentTime{
					color: #999999;
					font-size: 24rpx;
					margin-top:8rpx;
					}
				}
			}
			.rate{
				
			}
		}
		.boxContent{
			width: 100%;
			padding:0;
			margin: 0;
			padding-top:28rpx;
			padding-bottom: 20rpx;
			color: #666666;
			font-size: 26rpx;
		}
		.boxProject{
			color: #999999;
			font-size: 22rpx;
			height: 21rpx;
			margin-bottom:24rpx;
		}
		.secBtn{
			// padding-top:24rpx;
			border-top: 1px solid #f8f8f8;
			display: flex;
			justify-content: space-around;
			align-items: center;
			height: 90rpx;
			.changeBtn{
				// border:1px solid red;
				border-right: 1px solid #e6e6e6;
				flex:1;
				display: flex;
				justify-content: center;
				align-items: center;
				image{
					width: 30rpx;
					height:30rpx;
					margin-right: 11rpx;
				}
				text{
					color: #999999;
					font-size: 26rpx;
				}
			
			}
			.deleteBtn{
					flex:1;
					display: flex;
					justify-content: center;
					align-items: center;
					image{
						width: 30rpx;
						height:30rpx;
						margin-right: 11rpx;
					}
					text{
						color: #999999;
						font-size: 26rpx;
					}
			}
		}
	}
</style>
