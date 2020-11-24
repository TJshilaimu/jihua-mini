<template>
	<view class="myPage">
		<view class="box">
			<view class="pushProject">
				开票信息
			</view>
			<view class="formBox">
				<u-form :model="form" ref="uForm" >
					<u-form-item class="setPosition" required label-position="left" label="抬头类型" label-width="150">
						<u-radio-group v-model="form.radio" class="otherInfo">
							<u-radio v-for="(item, index) in radioList" :checked="item.checked" :key="index" @change="radioChange"  :name="item.val" :disabled="item.disabled">
								{{ item.name }}
							</u-radio>
						</u-radio-group>
					</u-form-item>
					<!-- 以下两列单位有 -->
					<u-form-item v-if="companyShow" class="setPosition" required label-position="top" label="公司名称">
						<view class="otherInfo" @click="showPop">
							<text>我的发票抬头</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
						<u-input v-model="form.nameCompany" placeholder="请输入公司名称" />
					</u-form-item>
					<u-form-item v-if="companyShow" required label-position="top" label="公司税号">
						<u-input v-model="form.companyTax" placeholder="请输入公司税号" />
					</u-form-item>
					<!-- 以下为个人呈现 -->
					<u-form-item v-if="!companyShow" class="setPosition" required label-position="top" label="公司名称">
						<view class="otherInfo" @click="showPop">
							<text>我的发票抬头</text>
							<u-icon name="arrow-right"></u-icon>
						</view>
						<u-input v-model="form.namePerson" placeholder="请输入公司或个人名称" />
					</u-form-item>
				</u-form>
			</view>
			<view v-if="companyShow" class="moreContent">
				<view class="title">更多内容</view>
				<view class="toWrite" @click="writeMore">
					<text>去填写</text>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>
		<view class="box">
			<view class="pushProject addMargin">
				金额信息
			</view>
			<u-form :model="form" ref="uForm" >
				<u-form-item class="setPosition" label-position="top" label="总金额">
					<u-input v-model="form.money" placeholder="请输入金额" />
				</u-form-item>
			</u-form>
		</view>
		<view class="box">
			<view class="pushProject addMargin">
				接收方式
			</view>
			<u-form :model="form" ref="uForm" >
				<u-form-item class="setPosition" label-position="top" label="电子邮箱">
					<u-input v-model="form.email" placeholder="请输入邮箱" />
				</u-form-item>
			</u-form>
		</view>
		<view class="submitBtn">
			<button class="btnItem" :class="[!btnStatus?'addOpacity' : '']" @click="submitBtn">保存</button>
		</view>
		<!-- 发票抬头弹窗组件 -->
		<view class="definePopup" v-if="popupShow">
			<view class="bg" @click="closePopup">
				
			</view>
			<view class="popupBox">
				<view class="popupTitle">
					我的发票抬头
				</view>
				<view class="popupContent" v-if="false">
					<view class="titleImg">
						<image :src="titleW" mode=""></image>
					</view>
					<text class="titleTip1">您未设置发票抬头</text>
					<text class="titleTip2">设置过的发票抬头会为您自动保存哦~</text>
				</view>
				<view class="radioCheck">
					<u-radio-group v-model="secName" :wrap="true" @change="popupRadioGroupChange">
						<u-radio 
							@change="radioChange" 
							v-for="(item, index) in invoiceInfo" :key="item.id" 
							:name="item.name"
						>
							<view class="radioTitle">
								<view class="titleName">{{item.name}}
								<text class="tag">默认</text>
								</view>
								<text class="titleNum">{{item.num}}</text>
							</view>
						</u-radio>
					</u-radio-group>
				</view>
				<view class="popupAdd">
					<button @click="addInvoice">添加常用发票抬头</button>
				</view>
			</view>
			
		</view>
		<!-- 开具电子发票弹窗 -->
		<view class="definePopup" v-if="flag">
			<view class="bg" @click="closePopup">
				
			</view>
			<view class="popupBox">
				<view class="popupTitle">
					开具电子发票
				</view>
				<view class="contentBox">
					<view class="showItem">
						<text class="titleLeft">发票内容</text>
						<text class="titleRight">电子发票</text>
					</view>
					<view class="showItem">
						<text class="titleLeft">公司名称</text>
						<text class="titleRight">{{form.radio == 1?form.nameCompany:form.namePerson}}</text>
					</view>
				</view>
				<view class="popupAdd">
					<button @click="addInvoice">确认提交</button>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				radioList:[{
					name:'单位',
					val:1,
					checked: true,
					disabled:false
				},{
					name:'个人/非企业单位',
					val:2,
					checked: false,
					disabled:false
				}],
				form:{
					radio:'',
					nameCompany:'',
					companyTax:'',
					namePerson:'',
					email:'',
					money:''
				},

				radio:1,
				companyShow:true,
				popupShow:false,
				//发票数据
				invoiceInfo:[{
					name:'伏承信息科技有限公司',
					num:'4392704234923843244',
					id:1,
					check:true
				},
				{
					name:'上海信息科技股份有限公司',
					num:'4392704234923843244',
					id:2,
					check:false
				},{
					name:'伏承信息科技有限公司1',
					num:'4392704234923843244',
					id:3,
					check:false
				},
				{
					name:'上海信息科技股份有限公司1',
					num:'4392704234923843244',
					id:4,
					check:false
				},{
					name:'伏承信息科技有限公司2',
					num:'4392704234923843244',
					id:5,
					check:false
				},
				{
					name:'上海信息科技股份有限公司2',
					num:'4392704234923843244',
					id:6,
					check:false
				}],
				secName:'伏承信息科技有限公司',
				flag:false, //开具发票展示状态
				titleW: this.baseImgUrl + '/static/invoice/pic_zanwukaipiaoxiangmu.png',
				userId:''
			}
		},
		onLoad(options) {
			this.userId = uni.getStorageSync('userId');
			console.log(this.userId,'a')
			console.log('ops',options)
			if(options.address!=''&&options.phone!=''&&options.bank!=''&&options.bankAccount!=''){
				this.form.address = options.address;
				this.form.phone = options.phone;
				this.form.bank = options.bank;
				this.form.bankAccount = options.bankAccount;
			}
		},
		onShow(){
			console.log(this.userId,'sd')
			// 电子发票记录添加
			this.$u.api.elcInvoice({
				userId:this.userId,
				bank:this.form.bank,
				bankAccount:this.form.bankAccount,
				createTime:new Date().getTime() + '',
				companyName:this.form.nameCompany?this.form.nameCompany:this.form.namePerson,
				companyTax:this.form.companyTax,
				email:this.form.email,
				defaultHeader:'',
				id:1,
				ids:'2',
				refuseReason:'',
				regAddr:this.form.address,
				regTelephone:this.form.phone,
				status:this.radioCheck,
				totalAmount:this.form.money,
				type:'1',
				updateTime: '',
				userName:''
			}).then(res =>{
				console.log('电子发票记录添加',res)
			})
		},
		computed:{
			btnStatus(){
				let flag=false;
				for(let prop in this.form){
					if(this.form[prop] != ''){
						flag = true;
					}
				}
				return flag;
			}
		},
		methods:{
			radioChange(e){
				console.log(e)
				this.radioCheck=e;
				if(e == 1){
					//单位
					this.companyShow = true;
				}else{
					this.companyShow = false;
				}
			},
			//更多内容
			writeMore(){
				uni.navigateTo({
					url:'moreContent/moreContent'
				})
			},
			//弹窗radio选择
			popupRadioGroupChange(e){
				console.log(e)
			},
			//点击遮罩层关闭弹窗
			closePopup(e){
				
				e.stopPropagation();
				this.popupShow=false;
				this.flag=false;
			},
			//添加弹窗发票抬头
			addInvoice(e){
				// 电子发票记录添加
				this.$u.api.elcInvoice({
					userId:this.userId,
					bank:this.form.bank,
					bankAccount:this.form.bankAccount,
					createTime:new Date().getTime() + '',
					companyName:this.form.nameCompany?this.form.nameCompany:this.form.namePerson,
					companyTax:this.form.companyTax,
					email:this.form.email,
					defaultHeader:'',
					id:1,
					ids:'2',
					refuseReason:'',
					regAddr:this.form.address,
					regTelephone:this.form.phone,
					status:this.radioCheck,
					totalAmount:this.form.money,
					type:'1',
					updateTime: '',
					userName:''
				}).then(res =>{
					console.log('电子发票记录添加',res)
				})
				this.closePopup(e);
			},
			//展示发票抬头选项
			showPop(){
				this.popupShow=true
			},
			//保存按钮事件，弹出发票信息
			submitBtn(){
				console.log(this.isAbled,'测试computed')
				console.log('表单数据',this.form)
				this.flag=true;
			}
		}
	}
</script>

<style lang="scss">
	page{
		background-color: white;
	}
	.u-radio__label{
		margin-right: 0 !important;
		margin-left:10rpx !important;
	}
	.u-radio__icon-wrap{
		margin-left: 20rpx !important;
	}
	.u-radio-group{
		// border-bottom: 1px solid #e6e6e6 !important;
		}
	.u-border-bottom:after{
		// border:none !important
		border-bottom: 1px solid #e6e6e6 !important;
	}
	.pushProject {
		font-size: 32rpx;
		font-weight: bold;
		width: 100%;
		height: 106rpx;
		line-height: 106rpx;
		background-color: white;
		font-weight: bolder;
		color: $u-m-color;
		position: relative;
		border-bottom: 1px solid #e6e6e6;
	
		&::after {
			content: '';
			display: inline-block;
			width: 20px;
			position: absolute;
			bottom: -2px;
			left: 40rpx;
			border-bottom: 2px solid $u-m-color;
			z-index: 999;
		}
		&.addMargin{
			margin-top:40rpx;
		}
	}
.myPage{
	padding:40rpx 60rpx;
	.setPosition{
		position: relative;
		.otherInfo{
			position: absolute;
			right:0;
			top:20rpx;
			color: #999999;
		}
	}
	.moreContent{
		height: 128rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid $u-b-color;
		.title{
			font-size:32rpx;
			color: #333333;
		}
		.toWrite{
			font-size: 26rpx;
			color: #999999;
		}
	}
	.submitBtn {
		padding-top:80rpx;
		margin-bottom: 60rpx;
		.btnItem {
			height: 90rpx;
			border-radius: 46rpx;
			background-color: #00D3BD !important;
			color: white;
			font-size: 16px;
			&.addOpacity{
				opacity: .5;
			}
		}
	}
}
.definePopup{
	position: fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
	z-index:999;
	.bg{
		height: calc(100% - 783rpx);
		background-color: #000000;
		opacity: .7;
	}
	.popupBox{
		opacity:1;
		width:100%;
		height:783rpx;
		background-color: white;
		.popupTitle{
			height:110rpx;
			line-height: 110rpx;
			text-align: center;
			color:#333333;
			font-size:34rpx;
			border-bottom: 1px solid $u-b-color;
		}
		.popupContent{
			height:494rpx;
			border-bottom: 1px solid $u-b-color;
			padding:50rpx;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			text-align: center;
			.titleImg{
				width:270rpx;
				height:270rpx;
				image{
					width:100%;
					height: 100%;
				}
				border:5rpx solid #f3f3f4;
				box-shadow: 0 2rpx 15rpx 5rpx #f3f3f4;
				margin-bottom: 54rpx;
			}
			.titleTip1{
				color:#333333;
				font-size: 32rpx;
				margin-bottom: 16rpx;
			}
			.titleTip2{
				color:#999999;
				font-size: 26rpx;
				// margin-bottom: 16rpx;
			}
		}
		//发票选择radio
		.radioCheck{
			height:494rpx;
			border-bottom: 1px solid $u-b-color;
			padding:0 50rpx;
			overflow: scroll;
			.u-radio {
				border-bottom:1px solid $u-b-color;
				padding:28rpx 0;
			}
			.radioTitle{
				margin-left:20rpx;
				.titleName{
					font-size: 32rpx;
					color: #333333;
					.tag{
						display: inline-block;
						margin-left:20rpx;
						padding:1rpx 10rpx;
						font-size: 20rpx;
						color:$u-m-color;
						border:1rpx solid $u-m-color;
					}
				}
				.titleNum{
					font-size: 26rpx;
					color: #999999;
				}
			}
			
		}
		.popupAdd{
				height: 176rpx;
				padding:0 60rpx;
				display: flex;
				justify-content: center;
				align-items: center;
				button{
					width: 100%;
					height: 90rpx;
					line-height: 90rpx;
					border-radius: 46rpx;
					background-color: #00D3BD !important;
					color: white;
					font-size: 16px;
				}
		}
		//开具电子发票
		.contentBox{
			height:494rpx;
			border-bottom: 1px solid $u-b-color;
			padding:0 30rpx;
			.showItem{
				height: 114rpx;
				border-bottom: 1px solid $u-b-color;
				display:flex ;
				justify-content: space-between;
				align-items: center;
				.titleLeft{
					font-size: 30rpx;
					color:#333333;
				}
				.titleRight{
					font-size: 26rpx;
					color:#999999;
				}
				
			}
		}
	}
}
</style>
