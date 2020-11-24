<template>
	<view class="more">
		<u-form :model="form" ref="uForm" >
			<u-form-item class="setPosition" label-position="top" label="注册地址">
				<u-input v-model="form.address" placeholder="请输入注册地址" />
			</u-form-item>
			<u-form-item class="setPosition" label-position="top" label="注册电话">
				<u-input v-model="form.phone" placeholder="请输入注册电话" />
			</u-form-item>
			<u-form-item class="setPosition" label-position="top" label="开户行">
				<u-input v-model="form.bank" placeholder="请输入开户行" />
			</u-form-item>
			<u-form-item class="setPosition" label-position="top" label="银行账号">
				<u-input v-model="form.bankAccount" placeholder="请输入对应的银行账号" />
			</u-form-item>
		</u-form>
		<view class="submitBtn">
			<button class="btnItem" :class="[btnStatus?'addOpacity' : '']" :disabled="btnStatus" @click="submitBtn">保存</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
				form:{
					address:'',
					phone:'',
					bank:'',
					bankAccount:''
				}
			};
		},
		computed:{
			btnStatus(){
				let flag=false;
				for(let prop in this.form){
					if(this.form[prop] == ''){
						flag = true;
					}
				}
				return flag;
			}
		},
		methods:{
			submitBtn(){
				let that = this;
				console.log(this.btnStatus)
				uni.navigateTo({
					url:'../writeInvoice?address=' + that.form.address + '&phone='+ that.form.phone + '&bank='+ that.form.bank + '&bankAccount='+ that.form.bankAccount
				})
			}
		}
	}
</script>

<style lang="scss">
	page{
		border-top:1px solid $u-b-color;
	}
	.u-form-left__content__label{
		font-size:32rpx;
		color: #333333;
		}
.more{
	padding: 60rpx;
}
	.submitBtn {
		padding-top:80rpx;
		margin-bottom: 60rpx;
		.btnItem {
			height: 90rpx;
			border-radius: 46rpx;
			background-color: #00D3BD !important;
			color: white !important;
			font-size: 16px;
			&.addOpacity{
				opacity: .5;
			}
		}
	}
</style>
