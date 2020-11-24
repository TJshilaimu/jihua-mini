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
			<!-- B端不同意项目阶段划分 -->
			<view class="stageInf emandInf"  v-if="status==1">
				<view class="stage emand">
					<view class="titleH">
						<text class="contentH">阶段信息</text>
						<u-icon name="question-circle"></u-icon>
					</view>
				</view>
				<view class="stageProject">
					<image :src="stageS"></image>
					<text class="stageTips">暂无最新阶段信息</text>
					<text class="stageDivide">待开发者重新提交方案，点击可以查看最近的一份方案</text>
					<button class="generate" @click="generate">点击查看</button>
				</view>
				
			</view>
			<!-- 状态2、阶段划分项目提交给需求方，等待对方回应 -->
			<!-- 状态3、B端同意阶段划分 -->
			<!-- 状态4、项目延期交付，待交付-->
			<!-- 状态5、已交付延期项目、需求方待验收 -->
			<view class="stageInf emandInf" v-if="status==2 || status==3 || status==4">
				<view class="stage emand">
					<view class="titleH">阶段信息</view>
				</view>
				<view class="stageProjectInf">
					<view class="viewBox" v-if="status==2">
						<view class="stageTitle">P1阶段	</view>
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
						<view class="stageTitle">P2阶段
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
				<!-- isAgree是否已经同意，已同意则不显示 -->
				<view class="stageBtn" v-if="!isAgree">
					<button class="agree" @click="agree">同意</button>
					<button class="refuse" @click="refuse">不同意</button>
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
	</view>
</template>

<script>
	export default{
		data() {
			return {
				stageNum:2,
				status:1,
				content:'',
				show:false,
				contentModal:"提交完成后,待需求方验收之前不能更改",
				titleH:"确认交付P1阶段吗？",
				acceptanceFailed:false,
				taskImg: this.baseImgUrl + '/static/logo1.png',
				peopleImg: this.baseImgUrl + '/static/1.jpg',
				stageW: this.baseImgUrl + '/static/invoice/pic_zanwujieduan.png',
				stageS: this.baseImgUrl + '/static/invoice/pic_huafenshibai.png',
				isAgree:false
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
			refuse(){
				console.log('pp')
				uni.navigateTo({
					url:'./refuseReason/refuseReason?placeholderText=请输入您的不同意的原因(输入字数请在10-100字之间)'
				})
			},
			// 点击查看阶段信息
			generate(){
				uni.navigateTo({
					url:'./stageInfo/stageInfo'
				})
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
</style>
