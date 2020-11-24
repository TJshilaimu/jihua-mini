<template>
	<view class="proAgreen">
		<!-- 阶段三，开发者重新提交提示 -->
		<view class="topTips" v-if="stage==3">
			<u-icon class="warnIcon" name="error-circle-fill"></u-icon>
			<!-- status为0表示 等待开发者提交
				为1表示，开发者已提交，等待是否同意
				2表示已同意
				3表示不同意
				4表示开发者重新提交，等待是否同意
			-->
			<text v-if="status ==0">等待开发者提交阶段划分方案</text>
			<text v-if="status ==1">开发者发来了一个项目阶段划分的方案，请注意是否同意此方案，同意后就按照此方案进行</text>
			<text v-if="status == 2">P1阶段进行中</text>
			<text v-if="status == 3">等待开发者重新提交阶段划分方案</text>
			<text v-if="status == 4">开发者重新提交了一份项目阶段划分的方案，请尽快处理。</text>
		</view>
		<!-- 步骤条 -->
		<step />
		<!-- 项目卡片 -->
		<view class="contentItem" @click="toDetail">
			<view class="projectInfo">
				<view class="projecImg">
					<image src="../../../static/1.jpg" mode=""></image>
				</view>
				<view class="projecText">
					<view class="title">
						<text>小程序开发小程序开发小程序开发小程序开发小程序开发</text>
					</view>
					<view class="titleTag">
						<text>人力资源</text>
					</view>
					<view class="selectType">
						<view class="u-margin-top-4">招募人数：500人</view>
						<view class="u-margin-top-4">项目周期：30天</view>
					</view>
				</view>
			</view>
			<view class="projectTiem">
				<view class="itemLeft">
					项目金额
				</view>
				<view class="itemRight">
					<text class="money">￥</text>
					<text class="moneyNum">
						100000
					</text>
				</view>
			</view>
		</view>
		<!-- 我的合同 -->
		<view class="agreeInfo" v-if="false">
			<view class="needTitle">
				<view class="needTop">
					<view class="needTopLeft">
						<view class="line">
						</view>
						<text>我的合同</text>
					</view>
					<view class="needTopRight" @click="moreContract">
						<text>查看更多</text>
						<u-icon name="arrow-right"></u-icon>
					</view>
				</view>
				<!-- 遍历循环此处 -->
				<view class="contractBox">
					<view class="itemBox">
						<view class="itemImg">
							<image src="../../../static/1.jpg" mode=""></image>
						</view>
						<view class="itemInfo">
							<view class="name">
								张三
							</view>
							<view class="phone">
								<text>手机号：156****678</text>
								<text>邮箱：********@qq.com</text>
							</view>
						</view>
					</view>
					<view class="agreeInfoItemC">
						<text class="getTimeC">发送时间：2020-1-23 12:23</text>
						<text class="deadLineC">合同将在<text class="toRedC">23:36</text>分后过期</text>
						<view class="confirmTitleC">
							合同将在发出后的48小时后过期，请您尽快确认
						</view>
					</view>
					<view class="contractBtn">
						<text class="secBtn refuse" @click="refuse">取消合同</text>
						<text class="secBtn see" @click="seeFile">查看合同</text>
					</view>
					<image class="statusImg" src="../../../static/b-recruit/pic_daiqianyue.png" mode=""></image>
				</view>
			</view>
		</view>
		<!-- 报名列表 -->
		<view class="needInfo" v-if="false">
			<view class="needTitle">
				<view class="needTop">
					<view class="needTopLeft">
						<view class="line">
						</view>
						<text>报名列表</text>
						<u-icon name="question-circle"></u-icon>
					</view>
				</view>
			</view>
			<view class="secStatus">
				<view class="tag all selected">
					全部
				</view>
				<view class="tag think">
					有意向
				</view>
				<view class="tag sayNo">
					不合适
				</view>
			</view>
			<view class="container">
				<!-- 无内容 -->
				<view class="" v-if="false">
					<view class="stageProject">
						<image src="../../../static/b-recruit/pic_zanwubaoming.png"></image>
						<text class="stageTips">暂无报名信息</text>
						<text class="stageDivide">该项目暂时还未收到报名信息</text>
					</view>
				</view>
				<!-- 有内容 -->
				<view class="itemBox">
					<view class="itemImg">
						<image src="../../../static/1.jpg" mode=""></image>
					</view>
					<view class="itemInfo">
						<view class="name">
							张三
						</view>
						<view class="phone">
							<text>手机号：156****678</text>
							<text>邮箱：********@qq.com</text>
						</view>
						<view class="itemTag">
							<view class="tagIcon">
								<image src="../../../static/b-recruit/icon_youyixiang_se.png" mode=""></image>
								<text>有意向</text>
							</view>
							<view class="tagIcon">
								<image src="../../../static/b-recruit/icon_youyixiang_unse.png" mode=""></image>
								<text>有意向</text>
							</view>
							<view class="tagIcon">
								<image src="../../../static/b-recruit/icon_buheshi_unse.png" mode=""></image>
								<text>不合适</text>
							</view>
							<view class="sureBtn">
								<image src="../../../static/b-recruit/icon_hezuo.png" mode=""></image>
								<text>确认合作</text>
							</view>
						</view>
					</view>
				</view>
				<view class="itemBox">
					<view class="itemImg">
						<image src="../../../static/1.jpg" mode=""></image>
					</view>
					<view class="itemInfo">
						<view class="name">
							张三
						</view>
						<view class="phone">
							<text>手机号：156****678</text>
							<text>邮箱：********@qq.com</text>
						</view>
						<view class="itemTag">
							<view class="tagIcon">
								<image src="../../../static/b-recruit/icon_youyixiang_se.png" mode=""></image>
								<text>有意向</text>
							</view>
							<view class="tagIcon">
								<image src="../../../static/b-recruit/icon_youyixiang_unse.png" mode=""></image>
								<text>有意向</text>
							</view>
							<view class="tagIcon">
								<image src="../../../static/b-recruit/icon_buheshi_unse.png" mode=""></image>
								<text>不合适</text>
							</view>
							<view class="sureBtn" @click="toSure">
								<image src="../../../static/b-recruit/icon_hezuo.png" mode=""></image>
								<text>确认合作</text>
							</view>
						</view>
					</view>
				</view>

			</view>
		</view>
	<!-- 	<view class="deadLine">
			我也是有底线的~
		</view> -->
		<!-- 拒绝弹出窗 -->
		<u-popup v-model="showPop" mode="center">
			<view class="wrapR">
				<view class="titleR">
					确定拒绝签约合同
				</view>
				<view class="tipR">
					拒绝后此合同作废，将不能在重新签约此合同
				</view>
				<view class="smsCodeR">
					<u-input class="inpR" type="text" placeholder="请输入验证码" placeholder-style="color:#dadada;font-size:13px;" />
					<view class="getCodeR">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" @change="codeChange"
						 :startText="startText" :changeText="changeText" :endText="endText"></u-verification-code>
						<u-button class="codeTextR" @click="getCode">{{tips}}</u-button>
					</view>
				</view>
				<view class="btnR">
					<text class="cancelR" @click="cancel">取消</text>
					<text class="confirmR" @click="confirm">确认</text>
				</view>
			</view>
		</u-popup>
		<!-- 拒绝原因 -->
		<u-action-sheet :list="list" v-model="showRefuse" :mask-close-able="true" :cancel-btn="true" :cancel-text="cancelText"></u-action-sheet>
	<!-- 以上从我的合同开始为阶段1，已申请 -->
	<!-- 此为招募中,引入组件 -->
		<recruit v-if="false" />
		<!-- 支付 -->
		<pay-three v-if="false"/>
		<!-- 开发中 -->
		<deving v-if="false"/>
		<!-- 中途关闭或者已完成 -->
		<close-page />
	</view>
</template>

<script>
	import Step from './BStep.vue'
	import recruit from './components/recruit.vue'
	import payThree from './components/payThree.vue'
	import deving from './components/deving.vue'
	import closePage from './components/closePage.vue'
	export default {
		data() {
			return {
				show: false,
				showRefuse: false,
				tips: {
					text: ''
				},
				list: [{
						text: '原因1',
						color: 'black',
						fontSize: 28
					},
					{
						text: '原因1',
						color: 'black',
						fontSize: 28
					}, {
						text: '原因1',
						color: 'black',
						fontSize: 28
					},
					{
						text: '原因1',
						color: 'black',
						fontSize: 28
					}
				],
				cancelText: '确定',
				items: [{
						value: 1,
						name: '原因1'
					},
					{
						value: 2,
						name: '原因2',
						checked: 'true'
					},
					{
						value: 3,
						name: '原因3'
					},
					{
						value: 4,
						name: '原因4'
					}
				],
				current: 0,
				isRefuse: false,
				setNum: 1,
				//拒绝弹窗
				showPop: false,
				tips: '',
				seconds: 120,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取',
				// 进度步骤
				stage:3,
				status:0
			}
		},
		components: {
			Step,
			recruit,
			payThree,
			deving,
			closePage
		},
		onShow(){
			// uni.showModal({
			// 	title:'温馨提示',
			// 	content:'您好！已经标记为不适合的开发者不会出现在全部列表中',
			// 	confirmText:'我知道了',
			// 	confirmColor:"#00d3bd",
			// 	showCancel:false
			// })
			//项目进度添加
			// this.$u.api.addProjectProcess({
			// 	checkStatus:'12',
			// 	deductAmount:'22',
			// 	id:1,
			// 	payAmount:'132',
			// 	payContent:'21',
			// 	payDetail:'22',
			// 	payTime:'2018-01-16 23:44:55',
			// 	projectId:'1',
			// 	reason:'123',
			// 	stage:'1',
			// 	stageName:'123',
			// 	stageNumber:'123',
			// 	stageStatus:'123',
			// 	status:'1',
			// 	submitTime:'2018-01-16 23:44:55',
			// 	totalAmount:'123'
			// }).then(res =>{
			// 	console.log('项目进度添加',res)
			// })
			// //用户检查
			// this.$u.api.checckProjectProcess({
			// 	checkStatus:'12',
			// 	deductAmount:'22',
			// 	id:1,
			// 	payAmount:'132',
			// 	payContent:'21',
			// 	payDetail:'22',
			// 	payTime:new Date().getTime(),
			// 	projectId:'23',
			// 	reason:'123',
			// 	stage:'1223',
			// 	stageName:'123',
			// 	stageNumber:'123',
			// 	stageStatus:'123',
			// 	status:'123',
			// 	submitTime:new Date().getTime(),
			// 	totalAmount:'123'
			// }).then(res =>{
			// 	//上面的参数返回的是拒绝成功。
			// 	console.log('用户检查',res)
			// })
			// // 关闭项目进度
			// this.$u.api.closeProjectProcess({
			// 	closeReason:'321',
			// 	projectId:'1'
			// }).then(res =>{
			// 	console.log('关闭项目进度',res)
			// })
			// // 确认项目进度
			// this.$u.api.confirmProjectProcess({
			// 	projectId:'1'
			// }).then(res =>{
			// 	console.log('确认项目进度',res)
			// })
			// // 评价项目进度
			// this.$u.api.evaluateProjectProcess({
			// 	allprog:'1',
			// 	alltype:'1',
			// 	bmrs:2,
			// 	create_time:'2018-01-16 23:44:55',
			// 	evaluateContent:'1231',
			// 	evaluateStar:'123',
			// 	headImg:'123',
			// 	id:11,
			// 	jsyq:'123',
			// 	logo:'123',
			// 	macodeName:'123',
			// 	name:'123',
			// 	price:'213',
			// 	reason:'222',
			// 	recruit:'212',
			// 	status:'1',
			// 	type:'1',
			// 	userId:23,
			// 	userName:'101'
			// }).then(res =>{
			// 	console.log('评价项目进度',res)
			// })
			// // 项目进度列表
			// this.$u.api.projectProcessList({
			// 	projectId:'1'
			// }).then(res =>{
			// 	console.log('项目进度列表',res)
			// })
			// //重新添加项目进度
			// this.$u.api.reAddProjectProcess({
			// 	checkStatus:'12',
			// 	deductAmount:'22',
			// 	id:0,
			// 	payAmount:'132',
			// 	payContent:'21',
			// 	payDetail:'22',
			// 	payTime:'2018-01-16 23:44:55',
			// 	projectId:'1',
			// 	reason:'123',
			// 	stage:'1',
			// 	stageName:'123',
			// 	stageNumber:'123',
			// 	stageStatus:'123',
			// 	status:'1',
			// 	submitTime:'2018-01-16 23:44:55',
			// 	totalAmount:'123'
			// }).then(res =>{
			// 	console.log('重新添加项目进度',res)
			// })
			// //拒绝项目进度阶段
			// this.$u.api.refuseProjectProcess({
			// 	projectId:'1',
			// 	reason:'原因'
			// }).then(res =>{
			// 	console.log('拒绝项目进度',res)
			// })
			// //提交项目进度阶段
			// this.$u.api.refuseProjectProcess({
			// checkStatus:'12',
			// deductAmount:'22',
			// id:0,
			// payAmount:'132',
			// payContent:'21',
			// payDetail:'22',
			// payTime:'2018-01-16 23:44:55',
			// projectId:'1',
			// reason:'123',
			// stage:'1',
			// stageName:'123',
			// stageNumber:'123',
			// stageStatus:'123',
			// status:'1',
			// submitTime:'2018-01-16 23:44:55',
			// totalAmount:'123'
			// }).then(res =>{
			// 	console.log('提交项目进度',res)
			// })
			// //查询项目阶段数
			// this.$u.api.selectPhaseCount({
			// 	projectId:1
			// }).then(res =>{
			// 	console.log('查询项目阶段数',res)
			// })
			// //删除项目阶段
			// this.$u.api.deletePhase({
			// 	// ids:[0]  参数不明
			// }).then(res =>{
			// 	console.log('删除项目阶段',res)
			// })
			//查询项目阶段信息
			// this.$u.api.selectPhase({
			// 	projectId:1
			// }).then(res =>{
			// 	console.log('查询项目阶段信息',res)
			// })
			//保存项目阶段信息
			// this.$u.api.selectPhase({
			// 	checkout:'',
			// 	delayTime:'',
			// 	endTime:'',
			// 	id:'',
			// 	illustrate:'',
			// 	money:'',
			// 	phase:'',
			// 	phaseName:'',
			// 	projectId:1,
			// 	status:'1',
			// 	url:''
			// }).then(res =>{
			// 	console.log('保存项目阶段信息',res)
			// })
			//查询项目阶段信息
			// this.$u.api.updatePhase({
			// 	checkout:'',
			// 	delayTime:'',
			// 	endTime:'',
			// 	id:'',
			// 	illustrate:'',
			// 	money:'',
			// 	phase:'',
			// 	phaseName:'',
			// 	projectId:1,
			// 	status:'1',
			// 	url:''
			// }).then(res =>{
			// 	console.log('更新项目阶段信息',res)
			// })
			//项目参与者单个项目查询
			// this.$u.api.findProjectManProject({
			// 	projectId:'1'
			// }).then(res =>{
			// 	console.log('项目参与者单个项目查询',res)
			// })
			//未审核项目分页查询
			// this.$u.api.findtManAllProject({
			// 	pageCurrent:1,
			// 	projectName:'12345',
			// 	userName:'ss'
			// }).then(res =>{
			// 	console.log('未审核项目分页查询',res)
			// })
			//未审核项目分页查询
			// this.$u.api.findManProjectApply({
			// 	pageCurrent:1,
			// 	projectId:1
			// }).then(res =>{
			// 	console.log('未审核项目分页查询',res)
			// })
			//"分页查询所有审核记录"
			// this.$u.api.findManProjectAudit({
			// 	pageCurrent:1,
			// 	projectName:'1234',
			// 	status:1,
			// 	userName:'hh'
			// }).then(res =>{
			// 	console.log('未审核项目分页查询',res)
			// })
			//"审核过的项目分页查询"
			// this.$u.api.findManProjectPass({
			// 	pageCurrent:1,
			// 	projectName:'1234',
			// 	type:1,
			// 	userName:'hh'
			// }).then(res =>{
			// 	console.log('审核过的项目分页查询',res)
			// })
			//x项目参与者更新项目进度
			this.$u.api.updateManProjectProcess({
				checkStatus:'12',
				deductAmount:'22',
				id:1,
				password:'123456',
				payAmount:'132',
				payContent:'21',
				payDetail:'22',
				payTime:new Date().getTime(),
				projectId:'23',
				reason:'123',
				stage:'1223',
				stageName:'123',
				stageNumber:'123',
				stageStatus:'123',
				status:'123',
				submitTime:new Date().getTime(),
				totalAmount:'123'
			}).then(res =>{
				console.log('审核过的项目分页查询',res)
			})
		},
		methods: {
			// 确定合作,跳转至合同页
			toSure() {
				uni.navigateTo({
					url: '../../project/contractDetail/contractDetail'
				})
			},
			refuse() {
				console.log('r')
				this.showPop = true
			},
			//签约>合同详情
			sign() {
				uni.navigateTo({
					url: '../contractDetail/contractDetail'
				})
			},
			radioChange(i) {
				console.log('点击了', i)
				this.setNum = i.detail.value
			},
			//拒绝弹窗
			closeBtn(e) {
				e.preventDefault();
				this.isRefuse = false
			},
			sureClick() {
				let that = this;
				uni.showToast({
					title: '已拒绝签约',
					success() {
						that.isRefuse = false;
						//注意这里还得添加修改标签的功能，在调用接口后开发
					}
				})
			},
			//查看合同,需调用接口开发后续功能
			seeFile() {
				console.log('11')
				uni.navigateTo({
					url: '../seeContract/seeContract'
				})
			},
			//查看更多合同列表
			moreContract() {
				uni.navigateTo({
					url: '../contractList/contractList'
				})
			},
			//拒绝签约弹出框相关函数
			cancel() {
				uni.showToast({
					title: '取消'
				})
			},
			confirm() {
				uni.showToast({
					title: '确认'
				})
				this.showPop = false;
				this.showRefuse = true;
			},
			codeChange(text) {
				// console.log(text);
				this.tips = text;
			},
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码'
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},
			secondsChange(index) {
				this.seconds = index == 0 ? 60 : index == 1 ? 10 : 5;
			},
			textChange(index) {
				if (index == 0) {
					this.startText = '点一下获取',
						this.changeText = '重新获取Xs',
						this.endText = '再次获取'
				} else {
					this.startText = '获取验证码',
						this.changeText = 'X秒重新获取',
						this.endText = '重新获取'
				}
			},
			end() {
				this.$u.toast('倒计时结束');
			},
			start() {
				this.$u.toast('倒计时开始');
			},
			reset() {
				this.$refs.uCode.reset();
			}
		}
	}
</script>

<style lang="scss">
	// 这里为招募中的组件的单选按钮，因为在组件中设置此样式不起作用，作用用字啊此处
	// 因为4.开发中的阶段验收弹窗有按钮，起冲突了，暂时注释
	// .u-radio{
	// 	width:17px !important;
	// 	.u-radio__label.data-v-da6758f0{
	// 		margin-right: 0rpx !important;
	// 	}
	// }
	// .u-radio__label.data-v-da6758f0{
	// 		margin-right: 0rpx !important;
	// }
	
	
	page {
		background-color: #f8f8f8;
		// height: 100%;
		border-top: 20rpx solid #f8f8f8;
	}

	.tagTips {
		background-color: #f8f8f8;
		padding: 28rpx 22rpx;

		text {
			font-size: 24rpx;
			color: #999999;
		}
	}

	.proAgreen {
		.topTips{
			padding:0px 0 13px 11px;
			color:#999;
			font-size:12px;
			.warnIcon{
				margin-right: 4px;
			}
		}
		.contentItem {
			// margin:30rpx;
			padding: 30rpx 40rpx 22rpx 20rpx;
			background-color: #fff;
			border-top: 20rpx solid #f8f8f8;
			// border:1px solid blue;
			display: flex;
			flex-direction: column;
			border-bottom: 1px solid $u-b-color;

			.projectInfo {
				padding-bottom: 20rpx;
				display: flex;
				height: auto;
				align-items: center;
				font-size: 28rpx;
				letter-spacing: 1rpx;

				.projecImg {
					width: 150rpx;
					height: 150rpx;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.projecText {
					margin-left: 20rpx;

					.title {
						font-size: 30rpx;
						font-weight: bold;
						color: #333333;
						width: 500rpx;

						// margin-bottom: 12rpx;
						text {
							display: inline-block;
							height: 64rpx;
						}
					}

					.titleTag {
						text {
							display: inline-block;
							padding: 4rpx 10rpx;
							border: 1rpx solid $u-m-color;
							color: $u-m-color;
							margin-right: 12rpx;
							font-size: 20rpx;
						}
					}

					.selectType {
						display: flex;

						font-size: 26rpx;
						color: #666666;
					}
				}
			}

			.projectTiem {
				padding-top: 22rpx;
				border-top: 1rpx solid $u-b-color;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.itemLeft {
					display: flex;
					align-items: center;
					color: #999999;

					.otherInfo {
						display: flex;
						align-items: center;
						margin-right: 40rpx;
						justify-content: flex-start;
						font-size: 24rpx;

						image {
							width: 28rpx;
							height: 28rpx;
							margin-right: 10rpx;
						}
					}
				}

				.itemRight {
					color: #c40000;
					font-weight: bold;
					font-size: 20rpx;

					.moneyNum {
						font-size: 26rpx;
					}
				}
			}
		}

		//需求方信息

		.needInfo {
			background-color: white;

			.needTitle {
				border-top: 20rpx solid #f8f8f8;

				.needTop {
					padding: 28rpx 30rpx 24rpx 30rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1rpx solid $u-b-color;

					.needTopLeft {
						display: flex;
						align-items: center;

						text {
							display: inline-block;
							margin-right: 2px;
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
			}

			.secStatus {
				display: flex;
				justify-content: space-around;
				padding-top: 26rpx;
				padding-bottom: 26rpx;

				.tag {
					color: #333333;
					font-size: 28rpx;
					padding-bottom: 26rpx;
					border-bottom: 3rpx solid transparent;

					&.selected {
						color: $u-m-color;
						border-bottom: 3rpx solid $u-m-color;
					}
				}
			}

			.container {
				background-color: white;
				padding-bottom: 40rpx;

				//无项目内容
				.stageProject {
					display: flex;
					flex-direction: column;
					text-align: center;
					padding-bottom: 50rpx;

					image {
						width: 135px;
						height: 135px;
						margin: 25px auto;
					}

					.stageTips {
						color: #333;
						line-height: 27px;
						font-size: 16px;
					}

					.stageDivide {
						color: #999;
						font-size: 12px;
					}

					.generate {
						background-color: #00D3BD;
						color: #fff;
						border: none;
						line-height: 36px;
						margin: 20px auto 40px;
						border-radius: 40px;
						font-size: 14px;
						padding: 0 40px;
					}
				}

				//有内容
				.itemBox {
					padding: 30rpx 20rpx;
					margin-left: 40rpx;
					margin-right: 40rpx;
					margin-top: 20rpx;
					// border:1px solid $u-b-color;
					box-shadow: 0 2rpx 18px -8px #cccccc;
					display: flex;
					align-items: center;

					.itemImg {
						width: 37px;
						height: 37px;

						image {
							border-radius: 50%;
							width: 100%;
							height: 100%;
						}
					}

					.itemInfo {
						margin-left: 18rpx;

						.name {
							color: #333333;
							font-size: 26rpx;
							font-weight: bold;
						}

						.phone {
							padding-top: 4px;
							color: #666666;
							font-size: 22rpx;

							text {
								display: inline-block;
								margin-right: 36rpx;
							}
						}

						.itemTag {
							display: flex;
							position: relative;

							.tagIcon {
								margin-right: 30rpx;
								padding-top: 10px;
								display: flex;
								align-items: center;
								color: #999999;
								font-size: 24rpx;

								image {
									width: 14px;
									height: 14px;
									margin-right: 4px;
								}
							}

							.sureBtn {
								width: 166rpx;
								height: 46rpx;
								line-height: 46rpx;
								position: absolute;
								right: -48rpx;
								bottom: -10rpx;
								display: flex;
								justify-content: center;
								align-items: center;
								background-color: $u-m-color;
								border-radius: 46rpx;
								color: 24rpx;
								color: white;

								image {
									width: 14px;
									height: 14px;
									border-radius: 50%;
									margin-right: 3px;
								}

							}
						}

					}
				}

			}

		}

		//底线
		.deadLine {
			padding: 30rpx;
			text-align: center;
			color: #cccccc;
			font-size: 26rpx;
		}

		//合同信息
		.agreeInfo {
			border-top: 20rpx solid #f8f8f8;
			border-bottom: 20rpx solid #f8f8f8;

			.needTop {
				padding: 28rpx 30rpx 24rpx 30rpx;
				display: flex;

				justify-content: space-between;
				align-items: center;
				border-bottom: 1rpx solid $u-b-color;

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

			.secStatus {}
		}
	}

	//拒绝弹出框相关样式
	.codeTextR {
		button {
			color: $u-m-color !important;

			&::after {
				border: none !important;
			}
		}
	}

	.titleR {
		color: #333333;
		font-size: 34rpx;
		font-weight: bold;
		padding-top: 38rpx;
		text-align: center;
	}

	.tipR {
		color: #666666;
		box-sizing: border-box;
		font-size: 30rpx;
		width: 508rpx;
		margin-left: 60rpx;
		margin-right: 60rpx;
		text-align: center;
		padding-top: 40rpx;
	}

	.smsCodeR {
		margin: 0 auto;
		padding-top: 60rpx;
		width: 508rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid $u-b-color;

		.inpR {
			width: 320rpx;
			border-right: 1rpx solid $u-b-color;
		}
	}

	.btnR {
		margin-top: 56rpx;
		border-top: 1rpx solid $u-b-color;
		height: 90rpx;
		line-height: 90rpx;
		text-align: center;
		display: flex;

		text {
			flex: 1;
			font-size: 30rpx;

			&.cancelR {
				border-right: 1rpx solid $u-b-color;
				color: #333333;
			}

			&.confirmR {
				color: $u-m-color;
			}
		}
	}


	// 合同
	.agreeInfo {
		background-color: white;
		border-top: 20rpx solid #f8f8f8;
		border-bottom: 20rpx solid #f8f8f8;

		.contractBox {
			position: relative;

			.itemBox {
				padding: 30rpx 26rpx;

				display: flex;
				align-items: center;

				.itemImg {
					width: 37px;
					height: 37px;

					image {
						border-radius: 50%;
						width: 100%;
						height: 100%;
					}
				}

				.itemInfo {
					margin-left: 18rpx;

					.name {
						color: #333333;
						font-size: 26rpx;
						font-weight: bold;
					}

					.phone {
						padding-top: 4px;
						color: #666666;
						font-size: 22rpx;

						text {
							display: inline-block;
							margin-right: 36rpx;
						}
					}

					.itemTag {
						display: flex;
						position: relative;

						.sureBtn {
							width: 166rpx;
							height: 46rpx;
							line-height: 46rpx;
							display: flex;
							justify-content: center;
							align-items: center;
							background-color: $u-m-color;
							border-radius: 46rpx;
							color: 24rpx;
							color: white;
						}
					}

				}
			}

			.agreeInfoItemC {
				color: #666666;
				font-size: 22rpx;
				padding-left: 30rpx;
				display: flex;
				flex-direction: column;
				justify-content: center;

				text {
					height: 12px;
					display: inline-block;
					margin-bottom: 10rpx;
				}

				.confirmTitleC {
					color: #c40000;
				}

				.toRedC {
					color: #c40000;
				}
			}

			.contractBtn {
				display: flex;
				justify-content: flex-end;
				padding-bottom: 13px;
				padding-top: 13px;

				.secBtn {
					margin-right: 30rpx;
					width: 142rpx;
					height: 50rpx;
					font-size: 24rpx;
					line-height: 50rpx;
					text-align: center;
					border-radius: 50rpx;

					&.refuse {
						margin-right: 20rpx;
						color: #ffffff;
						background-color: $u-m-color;

					}

					&.see {
						color: $u-m-color;
						border: 1rpx solid $u-m-color;
					}
				}
			}

			.statusImg {
				width: 50px;
				height: 50px;
				position: absolute;
				top: 0;
				right: 0;
			}
		}

		.needTop {
			padding: 28rpx 30rpx 24rpx 30rpx;
			display: flex;

			justify-content: space-between;
			align-items: center;
			border-bottom: 1rpx solid $u-b-color;

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
	}
</style>
