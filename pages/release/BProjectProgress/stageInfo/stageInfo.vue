<template>
		<view class="stageInf emandInf">
			<view class="stageProjectInf">
				<view class="viewBox">
					<view class="stageTitle">P1阶段	</view>
				</view>
				<view class="viewBox">
					<text>阶段名称</text>
					<text>P1阶段功能初稿设计</text>
				</view>
				<view class="viewBox">
					<view>计划交付日期
						<!-- <text class="delay">已延期5天</text> -->
					</view>
					<text>2019.08.18</text>
				</view>
				<view class="viewBox">
					<text>阶段金额</text>
					<text>100.00</text>
				</view>
				<view class="explain viewBox">
					<text>交付说明</text>
					<text class="explainT">初稿功能和设计，初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计</text>
				</view>
			</view>
			<view class="stageProjectInf">
				<view class="viewBox">
					<view class="stageTitle">P2阶段
					</view>
				</view>
				<view class="viewBox">
					<text>阶段名称</text>
					<text>P1阶段功能初稿设计</text>
				</view>
				<view class="viewBox">
					<view>计划交付日期
						<!-- <text class="delay">已延期5天</text> -->
					</view>
					<text>2019.08.18</text>
				</view>
				<view class="viewBox">
					<text>阶段金额</text>
					<text>100.00</text>
				</view>
				<view class="explain viewBox">
					<text>交付说明</text>
					<text class="explainT">初稿功能和设计，初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计</text>
				</view>
			</view>
		</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style lang="scss">
	.stageInf{
		.stageProjectInf{
			background-color: #fff;
			display: flex;
			flex-direction: column;
			padding:0 10px 0px;
			margin-bottom: 10px;
			border-top: 10px solid #f8f8f8;
			.delay{
				border:1px solid #F36F75;
				color:#F36F75;
				font-size: 12px;
				padding:0 5px;
				line-height: 20px;
				height:20px;
				margin:15px 0 0 5px;
				border-radius: 3px;
			}
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
</style>
