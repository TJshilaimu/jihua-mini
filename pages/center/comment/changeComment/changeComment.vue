<template>
	<view class="changeComment">
		<view class="commentTitle">
			<view class="title">
				评分
			</view>
			<view class="rate">
				<u-rate inactive-icon="star-fill" :count="count" v-model="value" active-color="#ff9800"></u-rate>
				<text class="rateNum">{{value}}分</text>
			</view>
		</view>
		<u-input height="280" :clearable="false" :custom-style="inputStyle" v-model="content" type="textarea" placeholder="请输入您要修改的评价内容(输入字数请在15-200个之间)"></u-input>

		<view class="submitBtn">
			<button class="btnItem" :disabled="status" :class="[content==''? 'opa' : '']"  @click="submitBtn">确定</button>
		</view>
	</view>
</template>


<script>
	export default {
		data() {
			return {
				count: 5,
				value: 4,
				inputStyle: {
					backgroundColor: '#fafafa',
					padding: 0
				},
				content:'',
				flag:false, // 表示是否不提交就返回
				id:'',
				audit:'',
				status:false
			}
		},
		onLoad(ops) {
			uni.showModal({
				title: '修改提示',
				content: '注：服务评价只能修改一次',
				confirmText: '我知道了',
				confirmColor: '#00d3bd',
				showCancel: false
			})
			this.id=ops.id
			this.$u.api.findOneEstimate({//获取评论总数
				id:this.id
			}).then(res =>{
				if(res.meta.code==0){
					this.value=res.data.score,
					this.content=res.data.details,
					this.audit= res.data.audit
				}else{
					uni.showToast({
						title:res.meta.msg,
						icon:'none'
					})
				}
				console.log('findOneEstimate', res)
			})
			
		},
		/* computed:{
			status(){
				return this.content == ''? true:false
			}
		}, */
		methods: {
			submitBtn(){//保存评论
			let that = this
				if(this.content.length>=15 && this.content.length<=200){
					uni.showToast({
						title:'ok'
					})
					this.$u.api.updateEstimates({
						id:this.id,
						audit:this.audit,
						details:this.content,
						score:this.value
					}).then(res =>{
						if(res.meta.code==0){
							uni.navigateTo({
								url: "../comment",
							})
						}else{
							uni.showToast({
								title:res.meta.msg,
								icon:'none'
							})
						}
						console.log('updateEstimates', res)
					})
				}else{
					uni.showToast({
						title:'15-200个字'
					})
				}
			}
		},
		
		// onBackPress:function(){
		// 	console.log('123')
		// 	if(this.flag){
		// 		return true;
		// 	}else{
		// 		console.log('flag')
		// 		uni.showModal({  
		// 		        title: '提示',  
		// 		        content: '是否退出uni-app？',  
		// 		        success: function(res) {  
		// 		            if (res.confirm) {  
		// 		                // 退出当前应用，改方法只在App中生效  
		// 		                // plus.runtime.quit();  
		// 						console.log('oookk')
		// 		            } else if (res.cancel) {  
		// 		                console.log('用户点击取消');  
		// 		            }  
		// 		        }  
		// 		      });  
		// 		      return true  
		// 	}
		
		// }
	}
</script>

<style lang="scss">
	page {
		background-color: white;
	}

	.u-input {
		padding: 0 !important;
		// padding: 28rpx 30rpx 0 30rpx !important;
	}

	.u-input__input {
		padding: 28rpx 30rpx 0 30rpx !important;
		color: #bababa;
		font-size: 26rpx;
	}

	.changeComment {
		background-color: white;
		// margin-top:3rpx;
		border-top: 3rpx solid #f8f8f8;
		padding-top: 72rpx;
		padding-right: 60rpx;
		padding-left: 60rpx;

		.commentTitle {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 35rpx;

			.title {
				color: #333333;
				font-size: 32rpx;
			}

			.rate {
				.rateNum {
					color: #666666;
					font-size: 28rpx;
					display: inline-block;
					margin-left: 30rpx
				}
			}
		}

		.submitBtn {
			margin-top: 78rpx;

			.btnItem {
				height: 90rpx;
				border-radius: 46rpx;
				background-color: #00D3BD !important;
				color: white;
				font-size: 16px;

				&.opa {
					opacity: .3;
				}
			}
		}
	}
</style>
