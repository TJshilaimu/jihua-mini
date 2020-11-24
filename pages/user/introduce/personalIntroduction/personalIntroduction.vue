<template>
	<view class="personalIntroduction">
		<view class="headPortrait">
			<view class="head">
				<image :src="personalImg" mode=""></image>
			</view>
			<text class="userName">{{userName}}</text>
		</view>
		<view class="introductionBox">
			<view :class="selectStyle?'selectColor':'allIntroduction'" @click="tabs(1)">
				个人介绍
			</view>
			<view :class="!selectStyle?'selectComment':'allComment'" @click="tabs(2)">
				服务评论<text class="commentNum">(99+)</text>
			</view>
		</view>
		<view>
			<view style="background-color: #fff;" v-if="current == 1">
				<personal-introduction :workExperience='workExperience' :goodSkill = 'goodSkill' :introduce ='introduce' :educationExperience='educationExperience'></personal-introduction>
			</view>
			<view style="background-color: #fff;" v-if="current == 2">
				<service-evaluation></service-evaluation>
			</view>
		</view>
	</view>
</template>

<script>
	import personalIntroduction from './introdutionCom/personalIntroduction.vue'
	import serviceEvaluation from './introdutionCom/serviceEvaluation.vue'
	export default {
		components:{
			personalIntroduction,
			serviceEvaluation
		},
		data() {
			return {
				userName:"Logan weave",
				current:"1",
				selectStyle:true,
				phone:"",
				workExperience:"",
				goodSkill:'',
				introduce:'',
				educationExperience:'',
				personalImg: this.baseImgUrl + '/static/logo.png'
			}
		},
		onShow() {
	// this.$u.api.selectFindSkills({
	// 					phone:'18408241175'
	// 				}).then(res =>{
	// 					this.goodSkill = res.data
	// 					console.log('goodSkill', res)
	// 				})
			uni.getStorage({
				key: "phone",
				success: (res) => {
					this.phone = res.data
					this.$u.api.selectFindSkills({
						phone:this.phone
					}).then(res =>{
						this.goodSkill = res.data
						console.log('goodSkill', res)
					})
					this.$u.api.selectFindWork({
						phone:this.phone
					}).then(res =>{
						this.workExperience = res.data
						console.log('workExperience', res)
					})
					this.$u.api.selectFindPersonal({
						phone:this.phone
					}).then(res =>{
						this.introduce = res.data
						console.log('phone', res)
					})
					this.$u.api.selectFindEducational({
						phone:this.phone
					}).then(res =>{
						this.educationExperience = res.data
						console.log('educationExperience', res)
					})
				}
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

<style lang="less">
	page{
		height: 100vh;
	}
	.personalIntroduction{
		border-top:1px solid #f0f0f0;
		background: #ffffff;
		height:100%;
		.headPortrait{
			display: flex;
			align-items: center;
			padding:20px 20px;
			background-color: #fff;
			border-bottom: 10px solid #f8f8f8;
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
				font-weight: bold;
			}
			.allComment {
				width:50%;
				display: inline-block;
				text-align: center;
				font-weight: bold;
				.commentNum{
					color:#999;
					font-size: 12px;
					font-weight: normal;
				}
			}
			.selectComment {
				width:50%;
				display: inline-block;
				text-align: center;
				font-weight: bold;
				color:#00D3BD;
				.commentNum{
					color:#999;
					font-size: 12px;
					color:#00D3BD;
					font-weight: normal;
				}
			}
		}
	}
</style>
