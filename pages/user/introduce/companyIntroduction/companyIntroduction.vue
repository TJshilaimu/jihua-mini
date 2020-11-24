<template>
		<view class="personalIntroduction">
			<view class="headPortrait">
				<view class="head">
					<image :src="companyImg" mode=""></image>
				</view>
				<text class="userName">{{userName}}</text>
			</view>
			<view class="introductionBox">
				<view :class="selectStyle?'selectColor':'allIntroduction'" @click="tabs(1)">
					公司介绍
				</view>
				<view :class="!selectStyle?'selectComment':'allComment'" @click="tabs(2)">
					服务评论<text class="commentNum">({{estimateCount}})</text>
				</view>
			</view>
			<view>
				<view style="background-color: #fff;" v-if="current == 1">
					<company-introduction :introduce='introduce' :projectExperience = 'projectExperience'></company-introduction>
				</view>
				<view style="background-color: #fff;" v-if="current == 2">
					<service-evaluation :estimateList = 'estimateList' :estimateCount='estimateCount'></service-evaluation>
				</view>
			</view>
		</view>
</template>

<script>
	import companyIntroduction from './companyCom/companyIntroduction.vue'
	import serviceEvaluation from './companyCom/serviceEvaluation.vue'
	export default {
		components:{
			companyIntroduction,
			serviceEvaluation
		},
		data() {
			return {
				userName:"上海南宇装饰责任有限公司",
				current:"1",
				selectStyle:true,
				companyImg: this.baseImgUrl + '/static/logo.png',
				phoneB:'',
				introduce:'',
				projectExperience:'',
				estimateList:'',
				estimateCount:''
				
			}
		},
		onLoad(ops) {
			//上一个页面传来的参数,获取并赋值渲染
			this.phoneB = ops.phone
			console.log(ops)
			this.$u.api.selectFindPersonal({//查询公司介绍
				phone:ops.phone
			}).then(res =>{
				this.introduce = res.data
				console.log('selectFindPersonal', res)
			}),
			this.$u.api.findProjectEditor({//查询项目案例
				phone:ops.phone
			}).then(res =>{
				this.projectExperience=res.data
				
				console.log('findProjectEditor', res)
			}),
			this.$u.api.selectEstimate({//查询用户评论
				phone:ops.phone
			}).then(res =>{
				if(res.meta.code==0){
					this.estimateList = res.data
				}else{
					uni.showToast({
						title:res.meta.msg,
						icon:'none'
					})
				}
				console.log('selectEstimate', res)
			}),
			this.$u.api.selectEstimateCount({//获取评论总数
				phone:ops.phone
			}).then(res =>{
				if(res.meta.code==0){
					this.estimateCount=res.data
				}else{
					uni.showToast({
						title:res.meta.msg,
						icon:'none'
					})
				}
				console.log('selectEstimateCount', res)
			})
		},
		methods: {
			tabs(num){
				this.current=num
				if(num==1){
					this.selectStyle=true
				}
				else{
					this.selectStyle=false
				}
			}
		}
	}
</script>

<style lang="scss">
	page{
		height: 100vh;
	}
	.personalIntroduction{
		border-top:1rpx solid $u-b-color;
		background: #ffffff;
		height:100%;
		.headPortrait{
			display: flex;
			align-items: center;
			padding:30rpx 30rpx;
			border-bottom: 20rpx solid #f8f8f8;
			background-color: #fff;
			.head{
				width: 120rpx;
				height: 120rpx;
				border:none;
				border-radius: 100px;
				margin-right: 26rpx;
			}
			image {
				width: 120rpx;
				height: 120rpx;
				
			}
			.userName {
				color: #333333;
				font-size: 34rpx;
				font-weight: bold;
			}
		}
		.introductionBox{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #f0f0f0;
			background: #fff;
			line-height: 50px;
			font-size: 15px;
			.allIntroduction{
				width:50%;
				display: inline-block;
				text-align: center;
				font-weight: bold
			}
			.selectColor{
				width:50%;
				display: inline-block;
				text-align: center;
				color:#00D3BD;
				position: relative;
				&::after{
					content:'';
					display: inline-block;
					position: absolute;
					bottom: -2rpx;
					left:130rpx;
					width:117rpx;
					height:3rpx;
					background-color: $u-m-color;
					}
			}
			.allComment {
				width:50%;
				display: inline-block;
				text-align: center;
				font-size: 30rpx;
				.commentNum{
					color:#999;
					font-size: 13px;;
				}
			}
			.selectComment {
				width:50%;
				display: inline-block;
				text-align: center;
				font-weight: bold;
				color:#00D3BD;
				position: relative;
				&::after{
					content:'';
					display: inline-block;
					position: absolute;
					bottom: -2rpx;
					left:130rpx;
					width:117rpx;
					height:3rpx;
					background-color: $u-m-color;
					}
				.commentNum{
					color:#999;
					font-size: 13px;
					color:#00D3BD;
				}
			}
		}
	}
	
	.companyInfo {
		display: flex;
		align-items: center;
		image {
			width: 74rpx;
			height: 74rpx;
			border-radius: 50%;
			}
			.companyTitle{
				color: #333333;
				font-size: 34rpx;
				font-weight: bold;
			}
	}
</style>
