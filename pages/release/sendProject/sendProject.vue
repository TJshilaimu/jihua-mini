<template>
	<view class="setInvoiceTitle">
		<view class="form">
			<view class="formItem">
				<view class="required">项目类型</view>
				<view class="projectType">
					<u-input @focus="toShowType" placeholder-style="color:#dadada;font-size:16px;" v-model="invoiceTitleForm.companyTax" placeholder="请选择项目类型"></u-input>
					<u-icon class="smallIcon" name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="formItem radio">
				<view class="required">招募人员类型</view>
				<u-radio-group active-color="#00D3BD" v-model="invoiceTitleForm.type">
					<u-radio name="1">
						<view class="personBox">
							<text class="findPerson">招募个人</text>
							<text class="findPs">只能招募一个人员，项目金额不能超过50000元</text>
						</view>
					</u-radio>
					<u-radio name="2">
						<view class="personBox">
							<text class="findPerson">招募团队</text>
							<text class="findPs">会有专属的产品经理和您对接需求，项目金额不能少于10000元</text>
						</view>
					</u-radio>
				</u-radio-group>
			</view>
			<view class="formItem">
				<view class="required">项目名称</view>
				<view>
					<u-input placeholder-style="color:#dadada;font-size:16px;" v-model="invoiceTitleForm.companyName" placeholder="请输入项目名称(30字以内)"></u-input>
				</view>
			</view>
			<view class="formItem">
				<view class="required">项目预算(元)</view>
				<view class="playMoney">
					<view class="money">
						<u-icon name="rmb"></u-icon>
						<u-input placeholder-style="color:#dadada;font-size:16px;" v-model="invoiceTitleForm.companyName" placeholder="请输入项目预算"></u-input>
					</view>
					<label class="radio">
						<radio value="r1" checked="true" />开具发票</label>
				</view>
			</view>
			<view class="formItem">
				<view class="itemTip">该项目金额不含税，如需发票，请查看<text>操作文档</text></view>
				<view class="required">项目周期（天）</view>
				<view>
					<u-input placeholder-style="color:#dadada;font-size:16px;" v-model="invoiceTitleForm.companyTax" placeholder="点击输入项目描述"></u-input>
				</view>
			</view>
			<view class="formItem">
				<view class="required">项目描述</view>
				<view>
					<u-input @focus="toWriteDetail" placeholder-style="color:#dadada;font-size:16px;" v-model="invoiceTitleForm.companyTax" placeholder="点击输入项目描述"></u-input>
				</view>
			</view>
			<view class="formItem">
				<view>技能要求</view>
				<view>
					<u-input placeholder-style="color:#dadada;font-size:16px;" v-model="invoiceTitleForm.regAddr" placeholder="点击输入技能要求(选填)"></u-input>
				</view>
			</view>
			<view class="formItem">
				<view>需求文档</view>
				<view>
					<u-input placeholder-style="color:#dadada;font-size:16px;" v-model="invoiceTitleForm.regTelephone" placeholder="点击输入项目需求文档存放地址(选填)"></u-input>
				</view>
			</view>
		</view>
		<button class="btn" :class="[disabled?'disabled':'']" @click="askBtn">发布项目</button>
		<!-- 选择项目类型弹窗 -->
		<u-action-sheet :list="list" @click="clickAction" v-model="show"></u-action-sheet>
		<!-- 发布任务的弹窗 -->
		<u-popup v-model="showPop" mode="center">
			<view class="wrapR">
				<view class="titleR">
					确认申请此项目吗
				</view>
				<view class="tipR">
				点击获取验证码，输入并确认申请                   
				</view>
				<view class="smsCodeR">
					<u-input  class="inpR" type="text" placeholder="请输入验证码" placeholder-style="color:#dadada;font-size:13px;"/>
					<view class="getCodeR">
						<u-toast ref="uToast"></u-toast>
						<u-verification-code :keep-running="true" :seconds="seconds" @end="end" @start="start" ref="uCode" 
						@change="codeChange" :startText="startText" :changeText="changeText" 
						:endText="endText"></u-verification-code>
						<u-button class="codeTextR" @click="getCode">{{tips}}</u-button>
					</view>
				</view>
				<view class="btnR">
					<text class="cancelR" @click="cancel">取消</text>
					<text class="confirmR" @click="confirm">确认</text>
				</view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import PopupCode from '../../project/refusePopup.vue'
	export default {
		components:{
			PopupCode
		},
		data() {
			return {
				//这里的参数需要变，此处是复制内容
				invoiceTitleForm: {
					type: 2,
					companyName: "",
					companyTax: "",
					regAddr: "",
					regTelephone: "",
					bank: "",
					bankAccount: "",
					defaultHeader: true,
				},
				disabled: true,
				list: [{
					text: '设计',
					color:'#999999',
					fontSize: 32,
					subText: ''
				}, {
					text: '人力资源',
					color:'#999999',
					fontSize: 32,
				}, {
					text: 'IT',
					color:'#999999',
					fontSize: 32,
				}],
				show:false,
				//申请任务验证码弹窗
				showPop:false,
				tips: '',
				seconds: 120,
				refCode: null,
				startText: '获取验证码',
				changeText: 'X秒重新获取',
				endText: '重新获取'
			}
		},
		methods: {
			//申请项目按钮
			askBtn() {
				this.showPop=true;
			},
			//显示项目类型
			toShowType(){
				this.show=true;
			},
			//点击项目类型弹窗
			clickAction(index){
					console.log(`点击了第${index + 1}项，内容为：${this.list[index].text}`)
			},
			//点击项目描述
			toWriteDetail(){
				console.log('ppp')
				uni.navigateTo({
					url:'./describeProject/describeProject'
				})
			},
			//申请项目验证码弹窗部分
			cancel(){
				uni.showToast({
					title:'取消'
				})
			},
			confirm(){
				uni.showToast({
					title:'确认'
				})
				this.showPop=false;
				this.showRefuse=true;
			},
			codeChange(text) {
				// console.log(text);
				this.tips = text;
			},
			getCode() {
				if(this.$refs.uCode.canGetCode) {
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
				if(index == 0) {
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
		},
		onLoad() {
			// this.$u.api.addInvoiceTitle({
			// 	userId:1,
			// 	companyName:'伏承信息',
			// 	companyTax:123123123321322212,
			// 	regAddr:'成都',
			// 	regTelephone:'12312312312',
			// 	bank:12312312312321,
			// 	bankAccount:'成都',
			// 	type:1,
			// 	defaultHeader:false,
			// }).then(res =>{
			// 	console.log('bank',res)
			// })
		}
	}
</script>

<style lang="scss">
	.setInvoiceTitle {
		width: 90%;
		margin: 0 auto;

		.required {
			display: flex;

			&:before {
				content: "*";
				color: red;
			}
		}

		.radio {
			.u-radio__label {
				// margin-top:38rpx;
				// font-size: 14px !important;
			}
		}

		.formItem {
			padding: 10px 0 0 0;
			margin-bottom: 10rpx;
			// line-height: 24px;
			font-size: 16px;
			border-bottom: 1rpx solid $u-b-color;

			.projectType {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.smallIcon {
					color: #aaaaaa;
				}
			}

			.personBox {
				display: flex;
				flex-direction: column;

				.findPerson {
					color: #666666;
					font-size: 16px;
					margin-top: 19rpx;
				}

				.findPs {
					color: #999999;
					font-size: 13px;
					margin-bottom: 19rpx;
				}
			}

			.playMoney {
				display: flex;
				justify-content: space-between;
				align-items: center;

				.money {
					display: flex;
					align-items: center;
				}
			}

			.itemTip {
				color: #999999;
				font-size: 24rpx;
				padding-bottom: 40rpx;

				text {
					color: $u-m-color;
				}
			}

			.text2 {
				font-size: 12px;
				color: #999;
			}

			.u-input {
				// border-bottom: 1px solid #E6E6E6 !important;
				padding: 4px 0 !important;
			}
		}

		.inline {
			display: flex;
			justify-content: space-between;
		}

		.btn {
			margin: 40px auto;
			width: 90%;
			height: 90rpx;
			border-radius: 46rpx;
			line-height: 90rpx;
			outline: none;
			border: none;
			color: white;
			background-color: $u-m-color;

			&.disabled {
				opacity: .54;
			}
		}
	}
	//申请任务验证码弹窗部分
	.codeTextR{
		button{
			color: $u-m-color !important;
			&::after{
				border:none !important;
			}
		}
	}
	.titleR{
		color: #333333;
		font-size: 34rpx;
		font-weight: bold;
		padding-top:38rpx;
		text-align: center;
	}
	.tipR{
		color: #666666;
		box-sizing: border-box;
		font-size: 30rpx;
		width:508rpx;
		margin-left:60rpx;
		margin-right: 60rpx;
		text-align: center;
		padding-top:40rpx;
	}
	.smsCodeR{
		margin:0 auto;
		padding-top:60rpx;
		width:508rpx;
		display: flex;
		align-items: center;
		border-bottom: 1rpx solid $u-b-color;
		.inpR{
			width:320rpx;
			border-right:1rpx solid $u-b-color;
		}
	}
	.btnR{
		margin-top:56rpx;
		border-top:1rpx solid $u-b-color;
		height: 90rpx;
		line-height: 90rpx;
		text-align:center;
		display: flex;
		text{
			flex:1;
			font-size: 30rpx;
			&.cancelR{
				border-right: 1rpx solid $u-b-color;
				color: #333333;
			}
			&.confirmR{
				color: $u-m-color;
			}
		}
	}
</style>
