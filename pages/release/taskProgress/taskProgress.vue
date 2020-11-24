<template>
	<view class="projectDetail">
		<view class="tips">你已成为本项目的开发者！请尽快与需求方联系，建立阶段划分</view>
		<view>
			<!-- 步骤条 -->
			<view class="step">
				<!-- <u-steps :list="numList" current="0" mode="number" @click="test"></u-steps> -->
				<step />
			</view>
			<view class="middleContent">
				<view class="projectInfo">
					<view class="imageB">
						<image :src="taskImg"></image>
					</view>
					
					<view class="projectCon">
						<view class="projectTitle">小程序小程序小程序小程序小程序小程序小程序小程序</view>
						<view class="projectBox">
							<text class="projectB">人力资源</text>
						</view>
						
						<view class="projectX">招募人数：500人 项目周期：30天</view>
					</view>
				</view>
				<view class="money">
					<text>项目金额</text>
					<view class="moneyNum">￥<text>1000.00</text></view>
				</view>
			</view>
			<view class="emandInf">
				<view class="emand">
					<view class="titleH">需求方信息</view>
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
			<!-- 项目进度不同阶段信息 -->
			<!-- 暂无阶段信息 -->
			<view class="stageInf emandInf" v-if="status==0">
				<view class="stage emand">
					<view class="titleH">阶段信息</view>
				</view>
				<view class="stageProject">
					<image :src="stageW"></image>
					<text class="stageTips">暂无阶段信息</text>
					<text class="stageDivide">你还没有划分项目阶段</text>
					<button class="generate" @click="generate">生成阶段</button>
				</view>
			</view>
			<!-- B端不同意项目阶段划分 -->
			<view class="stageInf emandInf"  v-if="status==1">
				<view class="stage emand">
					<view class="titleH">阶段信息</view>
				</view>
				<view class="stageProject">
					<image :src="stageS"></image>
					<text class="stageTips">阶段划分未同意</text>
					<text class="stageDivide">需求方不同意你的阶段划分方案，请修改后重新提交</text>
					<button class="generate" @click="generate">修改阶段划分方案</button>
				</view>
				
			</view>
			<!-- 状态2、阶段划分项目提交给需求方，等待对方回应 -->
			<!-- 状态3、B端同意阶段划分 -->
			<!-- 状态4、项目延期交付，待交付-->
			<!-- 状态5、已交付延期项目、需求方待验收 -->
			<view class="stageInf emandInf" v-if="status==2 || status==3 || status==4">
				<view class="stage emand">
					<view class="titleH">阶段信息({{stageNum}})</view>
				</view>
				<view class="stageProjectInf">
					<view class="viewBox" v-if="status==2">
						<view>P1阶段	</view>
					</view>
					<view class="viewBox"  v-if="status==3||status==4">
						<view>P1阶段
							<text class="stageStatus">未提交</text>
						</view>
						<view>状态：进行中</view>
					</view>
					<view class="viewBox">
						<text>阶段名称</text>
						<text>P1阶段功能初稿设计</text>
					</view>
					<view class="viewBox" v-if="status==2 || status==3 ">
						<text>交付日期</text>
						<text>2019.08.18</text>
					</view>
					<view class="viewBox" v-if="status==4">
						<view>计划交付日期
							<text class="delay">已延期5天</text>
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
					<view class="textBox viewBox" v-if="status==3 || status==4">
						<text>交付</text>
						<textarea  v-model="content"  placeholder="请输入项目文件保存的地址,如百度网盘链接,github网址等等">
							
						</textarea>
						<button class="submit" @click="projectSubmit">提交</button>
					</view>
				</view>
				<view class="stageProjectInf">
					<view class="viewBox">
						<view>P2阶段
						</view>
						<view v-if="status==3||status==4">状态：未开始</view>
					</view>
					<view class="viewBox">
						<text>阶段名称</text>
						<text>P1阶段功能初稿设计</text>
					</view>
					<view class="viewBox">
						<text>交付日期</text>
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
			<u-modal v-model="show" :content="contentModal" :title="titleH" show-cancel-button=true></u-modal>
			<!-- 状态5、已交付延期项目、需求方待验收 -->
			<!-- 状态6、延期项目，p1验收不通过 -->
			<!-- 状态7、延期项目，验收通过，但有扣款 -->
			<!-- 状态8、延期项目，验收通过 -->
			<!-- 状态9、延期项目，P1已全款验收 -->
			<!-- 状态10、延期项目，P1已验收,但有扣款 -->
			<!-- 状态11、延期项目，P1超时未验收 -->
			<view class="stageInf emandInf" v-if="status==5 || status==6 || status==7 || status==8 || status==9 || status==10 || status==11">
				<view class="stage emand">
					<view class="titleH">阶段信息({{stageNum}})</view>
				</view>
				<view class="stageProjectInf">
					<view class="checkStatus viewBox"  v-if=" status==6 || status==7 || status==9 || status==10 || status==11">
						<view class="check">
							<view>P1阶段
								<text class="stageStatus">待验收</text>
							</view>
							<text>状态：进行中</text>
						</view>
						<view class="checkTips" v-if=" status==6 || status==7">验收不通过，<text @click="viewDetails">点击查看详情</text></view>
						<view class="checkTip1" v-if="status==9 || status==10">阶段项目款会在1~3个工作日打到您的账户</view>
						<view class="checkTip1 checkTip2" v-if="status==11">需求方超过7天未验收，项目款将在1-3个工作日打到你的账户</view>
					</view>
					<view class="viewBox"  v-if="status==5 || status==8">
						<view>P1阶段
							<text class="stageStatus">验收通过</text>
						</view>
						<view>状态：已完成</view>
					</view>
					
					<view class="viewBox">
						<text>阶段名称</text>
						<text>P1阶段功能初稿设计</text>
					</view>
					<view class="viewBox">
						<view>计划交付日期
							<text class="delay">已延期5天</text>
						</view>
						<text>2019.08.18</text>
					</view>
					<view class="viewBox">
						<text>阶段金额</text>
						<text>100.00</text>
					</view>
					<view class="viewBox" v-if="status==10">
						<text>扣款金额</text>
						<text>20.00</text>
					</view>
					<view class="viewBox" v-if="status==9 || status==10  || status==11">
						<text>实际到账金额</text>
						<text>80.00</text>
					</view>
					<view class="explain viewBox">
						<text>交付说明</text>
						<text class="explainT">初稿功能和设计，初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计初稿功能设计</text>
					</view>
					<view class="textBox viewBox" v-if="status==6">
						<text>交付</text>
						<textarea  v-model="content"  placeholder="请输入项目文件保存的地址,如百度网盘链接,github网址等等">
							
						</textarea>
						<button class="submit" @click="projectSubmit">提交</button>
					</view>
					<view class="explain viewBox" v-if="status==5 || status==7 || status==8 || status==9 || status==10 || status==11">
						<view class="viewBox">
							<text>交付</text>
							<text style="color:#00D3BD">复制内容</text>
						</view>
						<text class="explainT">
							链接：http://hufheifhndoishdoiehfioheiofh.com
							提取码：r7za
						</text>
					</view>
				</view>
			</view>
		</view>
		<!-- 验收不通过详情 -->
		<u-popup v-model="acceptanceFailed" mode="center" border-radius="14" length="80%" class="acceptanceBox">
			<view class="acceptanceTitle">
				阶段验收
			</view>
			<view class="acceptance">
				<text class="textName">阶段验收</text>
				<text>P1</text>
			</view>
			<view class="acceptance">
				<text class="textName">阶段项目款</text>
				<text>2000元</text>
			</view>
			<view class="acceptance">
				<text class="textName">扣除费用</text>
				<text>200元</text>
			</view>
			<view class="reason">
				<text class="reasonTitle">扣除原因</text>
				<text class="reaseCon">这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因这里是扣除原因</text>
			</view>
			<view class="reasonBtn">
				<button class="refuse">拒绝</button>
				<button class="agree">同意</button>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import step from '../proComponents/step.vue'
	export default {
		components:{
			step
		},
		data() {
			return {
				stageNum:2,
				status:0,
				content:'',
				show:false,
				contentModal:"提交完成后,待需求方验收之前不能更改",
				titleH:"确认交付P1阶段吗？",
				acceptanceFailed:false,
				taskImg: this.baseImgUrl + '/static/logo1.png',
				peopleImg: this.baseImgUrl + '/static/1.jpg',
				stageW: this.baseImgUrl + '/static/invoice/pic_zanwujieduan.png',
				stageS: this.baseImgUrl + '/static/invoice/pic_huafenshibai.png',
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			console.log(ops)
		},
		methods: {
			askTask() {
				//判断是否登录
				if (false) { //没有登录
					uni.showModal({
						title: '提示',
						content: '你还未认证成为开发者，请先去完善信息',
						success(e) {
							if (e.confirm) {
								console.log('点击了确认按钮')
							}
							if (e.cancel) {
								console.log('点击了取消按钮')
							}
						}
					})
				} else if (true) { //已登录，点击取消,展示取消sheet
					this.show = true
				}
			},
			scrollItem(e) { //滚动时动态显示导航栏
				console.log('滚动', e.target.scrollTop)
				if (e.target.scrollTop >= 70) {
					uni.setNavigationBarTitle({
						title: '小程序'
					})
				}
				if (e.target.scrollTop < 70) {
					uni.setNavigationBarTitle({
						title: ''
					})
				}
			},
			generate(){//阶段划分
				uni.navigateTo({
					url:'../stageDivision/stageDivision'
				})
			},
			//阶段项目提交
			projectSubmit(){
				this.show=true
			},
			//验收不通过，查看详情
			viewDetails(){
				this.acceptanceFailed= true
			}

		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		background: #f8f8f8;
	}
	//修改步骤条颜色
	.u-steps__item__num{
		background-color: #00D3BD !important;
		color:#fff !important ;
	}
	.u-icon__icon{
		color:#fff !important ;
	}
	.projectDetail {
		width: 100%;
		height: 100%;
		.tips{
			color:#999;
			line-height: 40px;
			font-size: 12px;
			background: url(http://47.108.128.22:8081/static/icon_tishi.png) no-repeat left center;
			background-size: 16px 16px;
			padding-left: 18px;
			margin-left: 5px;
		}
		.step{
			height:100rpx;
			padding:0px 0 80px 0;
			background-color: #fff;
		}
		.middleContent{
			display: flex;
			flex-direction: column;
			background: #fff;
			padding:20px 10px 0;
			margin-top:10px;
			.projectInfo{
				display: flex;
				justify-content: space-between;
				border-bottom: 1px solid #E6E6E6;
				padding-bottom: 10px;;
				.imageB{
					width:80px;
					height:80px;
					border-radius: 10px;
					border:1px solid #ccc;
					image{
						width:80px;
						height:80px;	
					}
				}
				.projectCon{
					padding-left:10px;
					.projectTitle{
						font-weight: bold;
						line-height: 20px;
						font-size: 15px;
					}
					.projectBox{
						margin:5px 0;
						.projectB{
							border:1px solid #00D3BD;
							color:#00D3BD;
							font-size: 12px;
							padding:0px 5px;
							border-radius: 3px;
						}
					}
					.projectX{
						color:#666;
					}
				}
			}
			.money{
				display: flex;
				justify-content: space-between;
				color:#999;
				line-height: 40px;
			}
			.moneyNum{
				color:#C40000;
				font-size: 12px;
				font-weight: bold;
				text{
					font-size: 14px;
				}
			}
		}
		.emandInf{
			/* background-color: #fff; */
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
					color:#999;
					font-size: 12px;
				}
				.generate{
					background-color: #00D3BD;
					color:#fff;
					border: none;
					line-height: 36px;
					margin:20px auto 40px;
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
					line-height: 50px;
					border-bottom: 1px solid #E6E6E6;
					color: #333;
					&:last-of-type{
						border:none;
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
	}
	.acceptanceBox{
		display: flex;
		flex-direction: column;
		.acceptanceTitle{
			line-height: 50px;
			border-bottom: 1px solid #E6E6E6;
			color:#333;
			font-size: 17px;
			text-align: center;
		}
		.acceptance{
			margin:0 15px;
			border-bottom: 1px solid #E6E6E6;
			line-height: 45px;
			.textName{
				display: inline-block;
				width:75px;
				margin-right:20px;
			}
			
		}
		.reason{
			display: flex;
			flex-direction: column;
			margin:0 15px;
			.reasonTitle{
				line-height: 50px;
				color:#333;
			}
			.reaseCon{
				line-height: 22px;
				font-size: 13px;
				margin-bottom: 15px;
			}
		}
		.reasonBtn{
			display: flex;
			justify-content: space-between;
			button{
				width:50%;
				box-sizing: border-box;
				background-color:#fff;
				border-color:#fff;
				border-radius: 0;
			}
			.refuse{
				color:#333;
				font-size: 15px;
				line-height: 50px;
				border:none;
				
			}
			.agree{
				color:#00D3BD;
				font-size: 15px;
				line-height: 50px;
				border:none;
			}
		}
	}
	
</style>
