<template>
	<view class="setInvoiceTitle">
		<view class="form">
			<view class="formItem radio">
				<view class="required">抬头类型</view>
				<u-radio-group active-color="#00D3BD" v-model="invoiceTitleForm.type">
					<u-radio name="1">
						企业
					</u-radio>
					<u-radio name="2">
						个人/非企业单位
					</u-radio>
				</u-radio-group>
			</view>
			<view v-if="invoiceTitleForm.type==2" class="formItem">
				<view class="required">公司名称</view>
				<view>
					<u-input v-model="invoiceTitleForm.companyName"></u-input>
				</view>
			</view>
			<view v-if="invoiceTitleForm.type==1">
				<view class="formItem">
					<view class="required">公司名称</view>
					<view>
						<u-input v-model="invoiceTitleForm.companyName"></u-input>
					</view>
				</view>
				<view class="formItem">
					<view class="required">公司税号</view>
					<view>
						<u-input v-model="invoiceTitleForm.companyTax"></u-input>
					</view>
				</view>
				<view class="formItem">
					<view>注册地址</view>
					<view>
						<u-input v-model="invoiceTitleForm.regAddr"></u-input>
					</view>
				</view>
				<view class="formItem">
					<view>注册电话</view>
					<view>
						<u-input v-model="invoiceTitleForm.regTelephone"></u-input>
					</view>
				</view>
				<view class="formItem">
					<view>开户行</view>
					<view>
						<u-input v-model="invoiceTitleForm.bank"></u-input>
					</view>
				</view>
				<view class="formItem">
					<view>银行账户</view>
					<view>
						<u-input v-model="invoiceTitleForm.bankAccount"></u-input>
					</view>
				</view>
			</view>
			<view class="formItem inline">
				<view>
					<view class="text1">设置默认抬头</view>
					<view class="text2">提醒：每次开票填写该抬头信息</view>
				</view>
				<view>
					<u-switch v-model="invoiceTitleForm.defaultHeader" active-color="#00D3BD"></u-switch>
				</view>
			</view>
		</view>
		<button class="btn" @click="addInvoiceTitle">保存</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				invoiceTitleForm: {
					type: 2,
					companyName: "",
					companyTax: "",
					regAddr: "",
					regTelephone: "",
					bank: "",
					bankAccount: "",
					defaultHeader: true,
				}
			}
		},
		methods: {
			addInvoiceTitle() {
				this.$u.api.addInvoiceTitle(this.invoiceTitleForm).then(res => {
					console.log('添加发票抬头',res)
				})
			}
		},
		onLoad(ops) {
			this.invoiceTitleForm = JSON.parse(ops.ops);
			console.log(this.invoiceTitleForm,'lis')
			// 添加发票抬头
			// this.$u.api.addInvoiceTitle({
			// 	id:1,
			// 	userId:'23',
			// 	companyName:'伏1',
			// 	companyTax:'123123123321322212',
			// 	regAddr:'成都',
			// 	regTelephone:'12312312312',
			// 	bank:'12312312312321',
			// 	bankAccount:'成都',
			// 	type:'1',
			// 	defaultHeader:'false',
			// 	status:'0',
			// 	updateTime:new Date().getTime() + '',
			// 	refuseReason:'12',
			// }).then(res =>{
			// 	// if(res.meta.code==200){
			// 	// 	//成功
			// 	// }
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
			display: flex;
			justify-content: space-between;

			.u-radio__label {
				height: 24px !important;
				line-height: 24px !important;
				font-size: 14px !important;
			}
		}

		.formItem {
			padding: 10px 0;
			line-height: 24px;
			font-size: 16px;

			.text2 {
				font-size: 12px;
				color: #999;
			}

			.u-input {
				border-bottom: 1px solid #E6E6E6 !important;
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
		}
	}
</style>
