<template>
	<view class="">
		<u-navbar height="48" :border-bottom='false' back-text="威选" back-icon-name="none" :back-text-style="{color: '#fff'}" :background="background" ></u-navbar>
		<view class="content">
			<view class="swiper">
				<view class="mainBg">
					<u-search :show-action="false" @blur="search" placeholder="请输入项目名称" v-model="searchText"></u-search>
				</view>
				<view class="whiteBg">
				</view>
				<view class="swiperBox">
					<u-swiper :list="list" mode="rect" height="350" border-radius="14"></u-swiper>
				</view>
			</view>
		</view>
		<view class="projectList">
			<view class="pushProject">推荐项目</view>
			<view class="contentItem" @click="showDetail(1)">
				<view class="taskNumber">
					<text class="number">NO.17000014000037</text>
					<text class="numberStatus">已申请</text>
				</view>
				<view class="projectInfo">
					<view class="imageB">
						<image :src="taskImg"></image>
					</view>
					<view class="projectCon">
						<view class="projectTitle">小程序小程序小程序小程序小程序小程序小程序小程序</view>
						<view class="projectBox">
							<text class="projectB">人力资源</text>
							<text class="projectB">周期30天</text>
						</view>
						<view class="projectX">
							<text>招募人数:200人|已报名10人</text>
							<text class="money">￥1000.00</text>
						</view>
					</view>
				</view>
				<view class="releaseTime">
					<view class="companyName">
						<image src=""></image>
						<text>上海迈远信息科技技术有限公司</text>
					</view>
					<text class="time">2天前发布</text>
				</view>
			</view>
			<view class="contentItem" @click="showDetail(item.id)" v-for="(item,index) in projectList" :key="index">
				<view class="taskNumber">
					<text class="number">{{item.number}}</text>
					<text class="numberStatus" v-if="item.status==1">招募中</text>
					<text class="numberStatus" v-if="item.status==2">开发中</text>
					<text class="numberStatus" v-if="item.status==3">已完成</text>
				</view>
				<view class="projectInfo">
					<view class="imageB">
						<image :src="item.logo"></image>
					</view>
					<view class="projectCon">
						<view class="projectTitle">{{item.name}}</view>
						<view class="projectBox">
							<text class="projectB" v-if="item.type==1">设计</text>
							<text class="projectB" v-if="item.type==2">人力资源</text>
							<text class="projectB" v-if="item.type==3">IT</text>
							<text class="projectB" v-if="item.type==4">影视制作</text>
							<text class="projectB">周期{{item.allprog}}天</text>
						</view>
						<view class="projectX">
							<text>招募人数:{{item.recruit}}人|已报名{{item.bmrs}}人</text>
							<text class="money">￥{{item.price}}</text>
						</view>
						<text class="money"><text style="font-size: 10px;">￥</text>1000.00</text>
					</view>
				</view>
				<view class="releaseTime">
					<view class="companyName">
						<image :src="item.profilePath"></image>
						<text>{{item.mcomName}}</text>
					</view>
					<text class="time">2天前发布</text>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import {
		loginTime
	} from "../../util/util.js"
	export default {
		data() {
			return {
				list: [

					{
						image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
						title: '昨夜星辰昨夜风，画楼西畔桂堂东'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
						title: '身无彩凤双飞翼，心有灵犀一点通'
					},
					{
						image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
						title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
					}
				],
				projecImg: this.baseImgUrl + '/static/1.jpg',
				tiemPerson: this.baseImgUrl + '/static/人物-团队.png',
				
				projectName:'',
				status:'',
				type:'',
				projectList:[],
				current: 1,//初始页默认值为1
				pageCount:0,//项目总数
				background:{
					'background-color':'#00d3bd'
				},
				searchText:''
			}
		},
		onLoad(){
			this.getdatalist()
		},
		onShow: function() {
			// 判断登陆状态是否过期，提示用户重新登陆
			// let time = new Date()
			// let timeStemp = time.getTime()
			// if(loginTime(timeStemp,uni.getStorageSync('timeStemp'))){
			// 	uni.navigateTo({
			// 		url:"../login/index",
			// 		success: () => {
			// 			this.$u.toast("登陆状态已过期，请重新登陆")
			// 		}
			// 	})
			// 	return
			// }
			// 查询项目列表
			/* this.$u.api.getPorjecList({
				current: 1
			}).then(res => {
				console.log('l ok',res)
				if(res.success == true && res.meta.code == 0){
					
				}
			}) */
			// uni.getStorage({
			// 	key:'phone',
			// 	success(res){
			// 		console.log(res,'ph')
			// 		that.$u.api.selectEstimateCount({
			// 			phone:res.data
			// 		}).then(res =>{
			// 			console.log('评论总数',res)
			// 		})
			// 	}
			// })

			// this.$u.api.selectEstimateCount({
			// 	phone:'18408241175'
			// }).then(res =>{
			// 	console.log('评论总数',res)
			// }) 
		},
		methods: {
			// 用户登陆界面跳转
			login() {
				uni.navigateTo({
					url: "../login/index"
				})
			},
			showDetail(id) {
				uni.navigateTo({
					url: `../project/projectDetail/projectDetail?id=${id}`
				})
			},
			getdatalist() {//查找项目
			 this.$u.api.findListProject({//查找项目
				pageCurrent:this.current,
				projectName:this.projectName,
				status:this.status,
				type:this.type
			 }).then(res =>{
				if(res.meta.code==0){
					this.pageCount=res.data.pageCount
					var arr1 = this.projectList//从data获取当前datalist数组
					var arr2 = res.data.records //从此次请求返回的数据中获取新数组
					arr1 = arr1.concat(arr2); //合并数组
					this.projectList = arr1
					console.log('findListProject',this.projectList)
				}else{
					uni.showToast({
						title:res.meta.msg,
						icon:'none'
					})
				}
			 })
			},
			 onReachBottom: function () { //触底开始下一页
			    this.current = this.current + 1; //获取当前页数并+1   
				if(this.pageCount>= this.current){//判断是否已到最后一页
					this.getdatalist();//重新调用请求获取下一页数据
				}	    
			  },
			//搜索导航失焦时搜索
			search(){
				console.log('搜索')
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: white;
		border-top: none;
	}

	.content {
		.swiper {
			position: relative;

			.mainBg {
				width: 100%;
				height: 180rpx;
				background-color: $u-m-color;
				padding:5px 15px;
			}

			.whiteBg {
				width: 100%;
				height: 250rpx;
				background-color: white;
			}

			.swiperBox {
				position: absolute;
				width: 710rpx;
				top: 80rpx;
				left: 20rpx;
			}
		}
	}
	.contentItem{
		background:#fff;
		display: flex;
		flex-direction: column;
		background: #fff;
		margin-bottom: 10px;
		.taskNumber{
			display: flex;
			justify-content: space-between;
			line-height: 76rpx;
			border-bottom: 1px solid #E6E6E6;
			color:#999;
			font-size: 28rpx;
			.numberStatus{
				color:#00D3BD;
			}
		}
		.projectInfo{
			display: flex;
			flex-direction: row;
			border-bottom: 1px solid #E6E6E6;
			padding: 20rpx 0;
			.imageB{
				width:150rpx;
				height:150rpx;
				border-radius: 10px;
				border:1px solid #ccc;
				image{
					width:150rpx;
					height:150rpx;	
				}
			}
			.projectCon{
				padding-left:10px;
				width:100%;
				.projectTitle{
					font-weight: bold;
					line-height: 40rpx;
					font-size: 30rpx;
				}
				.projectBox{
					margin:10rpx 0;
					.projectB{
						border:1px solid #00D3BD;
						color:#00D3BD;
						font-size: 20rpx;
						padding:2rpx 10rpx;
						border-radius: 3px;
						margin-right:5px;
					}
				}
				.projectX{
					display: flex;
					justify-content: space-between;
					color:#666;
					font-size: 24rpx;
					.money{
						color:#C40000;
						font-weight: bold;
					}
				}
			}
		}
		.releaseTime{
			display: flex;
			justify-content: space-between;
			color:#999;
			line-height: 76rpx;
			font-size: 25rpx;
			.companyName{
				display: flex;
				flex-direction: row;
				image{
					width:40rpx;
					height:40rpx;
					background-color: #00D3BD;
					border-radius: 25rpx;
					margin-top:18rpx;
					margin-right:5rpx
				}
			}
		}
	}

	.userInfo {
		display: flex;
		align-items: center;

	}

	.userAvatar {
		width: 64px;
		height: 64px;
		background-color: #2979FF;
	}

	.userOp {
		margin-left: 20px;
	}

	.projectList {
		padding: 20rpx;
		padding-top: 40rpx;

		.pushProject {
			width: 100%;
			height: 60rpx;
			line-height: 60rpx;
			background-color: white;
			font-weight: bolder;
			color: $u-m-color;
			position: relative;
			border-bottom: 2px solid #f5f5f9;

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
		}

	}
</style>
