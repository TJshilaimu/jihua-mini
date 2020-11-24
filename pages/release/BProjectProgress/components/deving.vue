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
					<text>我的合同</text>
				</view>
				<view class="needTopRight" @click="moreContract">
					<text>已签约</text>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<!-- 项目进度不同阶段信息 -->
			<!-- 状态2、未提交 -->
			<!-- 状态3、待验收 -->
			<!-- 状态4、超时未提交-->
			<!-- 状态5、超时未验收 -->
			<!-- 状态6、已全款验收 -->
			<!-- 状态7、验收通过，但有扣款 -->
			<view class="stageInf emandInf" >
				<view class="stage emand">
					<view class="titleH">阶段信息(2)</view>
				</view>
				<view class="stageProjectInf">
					<view class="viewBox" :class="[status==4||status==6||status==7?'special':'']">
						<view class="viewBoxTag">
							<view>P1阶段
								<text v-if="false" :class="[status==2?'stageStatus':(status==4?'delay':'')]">未提交</text>
								<text v-if="status==6" class="getGreen">已全款验收</text>
								<text v-if="status==7" class="getGreen">验收通过，但有扣款</text>
							</view>
							<view class="stepTag"  v-if="status==2">状态：开发中</view>
							<view class="stepTag"  v-if="status==5 || status==6 || status==7">状态：已完成</view>
							<view class="stepTag" v-if="status==4">状态：已关闭</view>
						</view>
						<view v-if="status ==4" class="tagContent">开发者超时7天未提交项目产物，可以关闭此阶段，且不用支付本阶段任何费用</view>
						<view v-if="status ==6" class="tagContentG">已全款验收通过，本阶段项目段自动支付给开发者</view>
						<view v-if="status ==7" class="tagContentG">开发者已同意你的扣款方案</view>
					</view>
					<view class="viewBox">
						<text>阶段名称</text>
						<text>P1阶段功能初稿设计</text>
					</view>
					<view class="viewBox">
						<text>计划交付日期</text>
						<text>2019.08.18</text>
					</view>
					<view class="viewBox">
						<text>阶段金额</text>
						<text>100.00</text>
					</view>
					<view class="viewBox" v-if="status == 7">
						<text>扣款金额</text>
						<text>100.00</text>
					</view>
					<view class="viewBox" v-if="status == 7">
						<text>实际支付</text>
						<text>100.00</text>
					</view>
					<view class="explain viewBox">
						<text>交付说明</text>
						<text class="explainT">初稿功能和设计，初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计</text>
					</view>
					<view class="textBox viewBox" v-if="status==3 || status ==7">
						<view class="copyBox">
							<text>交付</text>
							<text class="copyContent" @click="copyContent">复制内容</text>
						</view>
						<textarea  v-model="content"  placeholder="请输入项目文件保存的地址,如百度网盘链接,github网址等等">	
						</textarea>
						<view class="stageBtn" v-if="status ==3">
							<button class="agree" @click="agree">验收通过</button>
							<button class="refuse" @click="refuse">不同意</button>
						</view>
					</view>
				</view>
				<view class="stageProjectInf">
					<view class="viewBox">
						<view class="stageTitle">P2阶段
						<text :class="[status==7?'stageStatus':'']">未提交</text>
						</view>
						<view class="stepTag" v-if="status==2||status==3">状态：未开始</view>
						<view class="stepTag" v-if="status==4">状态：已关闭</view>
						<view class="stepTag" v-if="status==7">状态：进行中</view>
					</view>
					<view class="viewBox">
						<text>阶段名称</text>
						<text>P2阶段功能初稿设计</text>
					</view>
					<view class="viewBox">
						<text>计划交付日期</text>
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
			<!-- 同意阶段信息，弹出框 -->
			<u-popup v-model="showPop"  mode="bottom">
				<view class="popBox">
					<view class="title">
						阶段验收
					</view>
					<view class="content">
						<view class="">
							项目阶段
						</view>
						<view class="">
							P1
						</view>
					</view>
					<view class="content">
						<view class="">
							项目金额
						</view>
						<view class="">
							3000元
						</view>
					</view>
					<view class="content radioCheck">
						<view class="">
							验收
						</view>
						<view >
							<radio-group @change="radioChange">
								<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
										<view class="radioRight">
											<radio :value="item.value" :checked="index === current" />
											{{item.name}}
										</view>
								</label>
							</radio-group>
						</view>
					</view>
					<view class="btn">
						<view class="confirmBtn">确定</view>
						<view class="cancelBtn">取消</view>
					</view>
				</view>
			</u-popup>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				stageNum:2,
				status:7,
				content:'',
				show:false,
				showPop:false,
				value:'check1',
				contentModal:"提交完成后,待需求方验收之前不能更改",
				titleH:"确认交付P1阶段吗？",
				acceptanceFailed:false,
				taskImg: this.baseImgUrl + '/static/logo1.png',
				peopleImg: this.baseImgUrl + '/static/1.jpg',
				stageW: this.baseImgUrl + '/static/invoice/pic_zanwujieduan.png',
				stageS: this.baseImgUrl + '/static/invoice/pic_huafenshibai.png',
				isAgree:false,
				items:[{
					name:'全款验收',
					value:'1'
				},{
					name:'全款验收，但有扣款',
					value:'2'
				}],
				current:1
			}
		},
		// created() {
		// 	uni.showModal({
		// 		title:'温馨提示',
		// 		content:'项目阶段划分方案由开发者进行划分，需求方可以选择同意或者不同意该方案，只有当双方达成一致后，项目阶段才开始进行',
		// 		confirmText:'我知道了',
		// 		confirmColor:'#00d3bd',
		// 		showCancel:false
		// 	})
		// },
		methods:{
			agree(){
				console.log('pp')
				uni.showModal({
				    title: '温馨提示',
				    content: '同意阶段划分方案以后，就无法再修改',
					confirmColor:'#00d3bd',
					confirmText:'确认',
				    success: function (res) {
				        if (res.confirm) {
				            console.log('用户点击确定');
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
			},
			// 项目阶段拒绝验收
			refuse(){
				uni.navigateTo({
					url:'./refuseReason/refuseReason?placeholderText=请输入您的不同意的原因(输入字数请在10-100字之间)'
				})
			},
			// 点击查看阶段信息
			generate(){
				uni.navigateTo({
					url:'./stageInfo/stageInfo'
				})
			},
			// 复制剪切板内容
			copyContent(){
				uni.setClipboardData({
				    data:this.content ,
				    success: function () {
				        console.log('success');
				    }
				});
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
		.stageProjectInf{
			background-color: #fff;
			display: flex;
			flex-direction: column;
			padding:0 10px 0px;
			margin-bottom: 10px;
			border-bottom: 10px solid #f8f8f8;
			.stageStatus{
				border:1px solid #F3C96F;
				color:#F3C96F;
				font-size: 12px;
				padding:0 5px;
				line-height: 20px;
				height:20px;
				margin:15px 0 0 5px;
				border-radius: 3px;
			}
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
				padding-top:18px;
				padding-bottom: 18px;
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
				.stepTag{
					font-weight: bold;
					color:#333;
					font-size: 14px;
				}
				.copyBox{
					font-size: 30rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.copyContent{
						color:$u-m-color;
					}
				}
				&.special{
					display: block;
					.viewBoxTag{
						display: flex;
						justify-content: space-between;
						.getGreen{
							display: inline-block;
							margin-left:5px;
							padding:2px 5px;
							color:$u-m-color;
							font-size: 10px;
							border:1rpx solid $u-m-color;
						}
					}
					.tagContent{
						padding-top:8px;
						line-height: 18px;
						padding:16rpx 18rpx;
						color: #F36F75;
						font-size: 12px;
						font-weight: bold;
						border:1px solid #F36F75;
					}
					.tagContentG{
						margin-top:8px;
						line-height: 18px;
						padding:16rpx 18rpx;
						color: $u-m-color;
						font-size: 12px;
						font-weight: bold;
						border:1px solid$u-m-color;
					}
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
	// 阶段验收弹出框
	.popBox{
		color: #333;
		.title{
			text-align: center;
			padding:17px 0px;
			margin-left:15px;
			margin-right: 15px;
			font-size: 17px;
			font-weight: bold;
			border-bottom: 1rpx solid $u-b-color;
		}
		.content{
			font-size: 15px;
			padding:15px 0;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-left:15px;
			margin-right: 15px;
			border-bottom: 1rpx solid $u-b-color;
			.radioRight{
				text-align: right;
			}
			&.radioCheck{
				border-bottom: none;
			}
		}
		.btn{
			padding:10px 15px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			text-align: center;
			font-size: 16px;
			.confirmBtn{
				height: 45px;
				line-height: 45px;		
				width:330rpx;
				background-color: $u-m-color;
				border-radius: 45px;
				color: white;
			}
			.cancelBtn{
				height: 45px;
				line-height: 45px;
				width:330rpx;
				border:1rpx solid $u-m-color;
				background-color: white;
				border-radius: 45px;
				color: $u-m-color;
			}
			
		}
	}
</style>
