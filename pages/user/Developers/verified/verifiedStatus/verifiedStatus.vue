<template>
	<!-- 认证通过 -->
	<view class="verifiedStatus" v-if="isAdopt==='adopt'">
		<view class="adoptStatus">
			<text class="verified">开发者实名认证</text>
			<text class="adopt">认证已通过</text>
		</view>
		<view class="identityInf">
			<view class="titleH">身份信息</view>
			<view class="nameBox">
				<text class="">姓名</text>
				<text class="">张三</text>
			</view>
			<view class="idBox">
				<text class="">身份证号</text>
				<text class="">130183199312082683</text>
			</view>
			
		</view>
	</view>
	<!-- 认证失败 -->
	<view class="verifiedStatusFail" v-else-if="isAdopt==='fail'">
		<view class="failStatus">
			<image :src="img1" alt=""></image>
			<text class="fail">审核失败</text>
			<view class="customerService">
				认证失败,
				<text style="color:#2979FF">联系客服</text>
			</view>
			<button class="btn" @click="recertification" >重新认证</button>
		</view>
	</view>
	<!-- 认证审核中 -->
	<view class="verifiedStatusFail" v-else="isAdopt==='shenhe'">
		<view class="failStatus">
			<image :src="img2" alt=""></image>
			<text class="fail">审核中</text>
			<view class="customerService">
				提交成功，请等待管理员审核
			</view>
			<button class="btn" @click="know">我知道了</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isAdopt:'adopt',
				img1: this.baseImgUrl + '/static/idCard/pic_shenheshibai.png',
				img2: this.baseImgUrl + '/static/idCard/pic_shenhezhong.png',
			}
		},
		methods: {
			recertification(){
				//审核失败跳转重新认证
				uni.navigateTo({
					url: "../verified/verified"
				})
			},
			know(){
				uni.navigateTo({
					url: "../verified/verified"
				})
			}	
		}
	}
</script>

<style lang="less">
	page{
		height:100%;
		background-color: #f8f8f8;
	}
	.verifiedStatus{
		position:relative;
	}
.adoptStatus{
	width:100%;
	background:url(http://47.108.128.22:8081/static/idCard/pic_shjimingrenzhengtongguo_top.png) no-repeat;
	background-size: 100% auto;
	height:auto;
	display: flex;
	flex-direction: column;
	color:#fff;
	padding:50px 20px;
	.verified{
		font-size: 15px;
		opacity:0.9;
	}
	.adopt{
		font-size: 20px;
		line-height: 30px;		
	}
}
.identityInf{
	width:90%;
	margin:0 auto;
	margin-top:-20px;
	background-color: #fff;
	border-radius: 10px;
	padding:0 20px;
	line-height: 50px;
	.titleH{
		display: flex;
		font-size: 15px;
		padding-left:12px;
		align-items: center;
		position: relative;
		border-bottom: 1px solid #f1f1f1;
		width:100%;
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
	.nameBox{
		display: flex;
		justify-content:space-between ;
		border-bottom: 1px solid #f1f1f1;
		width:100%;
	}
	.idBox{
		display: flex;
		justify-content:space-between ;
		width:100%;
	}
}
.verifiedStatusFail{
	height:100%;
	width:100%;
	background: #fff;
	.failStatus{
		display: flex;
		flex-direction: column;
		width:65%;
		margin:0 auto;
		image{
			display: inline-block;
			width:100%;
			margin-top:50px;	
		}
		.fail{
			font-size: 17px;
			color:#333;
			line-height: 30px;
			text-align: center;
			padding-top:10px;
		}
		.customerService{
			font-size: 13px;
			color:#999;
			line-height: 20px;
			text-align: center;
			margin-bottom:33px;
		}
		.btn{
			display: block;
			width:90%;
			line-height: 45px;
			border:none;
			border-radius: 25px;
			background: #00D3BD;
			color:#fff;
			font-size: 15px;
		}
		
	}
}
</style>
