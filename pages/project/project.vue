<template>
	<view>
		<!-- <u-dropdown inactive-color="#2979ff">
			<u-dropdown-item v-model="value1" ref="selectItem1" :title="title1" :options="options1" @change="changeItem1" class="secItem"></u-dropdown-item>
			<u-dropdown-item v-model="value2" ref="selectItem2" :title="title2" :options="options2" @change="changeItem2" class="secItem"></u-dropdown-item>
		</u-dropdown> -->
		<view class="selsectType">
			<view @click="select('type')" class="selectTypeTitle">
				<text>所有类型</text>
				<u-icon name="arrow-down" size="16"></u-icon>
			</view>
			<view @click="select('progress')">
				<text>所有进度</text>
				<u-icon name="arrow-down" size="16"></u-icon>
			</view>
		</view>
		<u-popup v-model="show" mode="top" duration="0" border-radius="20">
			<view>
				<view class="selsectType">
					<view @click="select('type')">
						<text :class="type=='type'?'selected':''">所有类型</text>
						<u-icon name="arrow-down" size="16" :color="type=='month'?'#00D3DB':''"></u-icon>
					</view>
					<view @click="select('progress')">
						<text :class="type=='progress'?'selected':''">所有进度</text>
						<u-icon name="arrow-down" size="16" :color="type=='type'?'#00D3DB':''"></u-icon>
					</view>
				</view>
				<view class="content">
					<view v-if="type=='type'">
						<view @click="selectTime('1')" class="item"><text>设计</text>
							<u-icon v-if="selectTimee=='1'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectTime('2')" class="item"><text>人力资源</text>
							<u-icon v-if="selectTimee=='2'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectTime('3')" class="item"><text>IT</text>
							<u-icon v-if="selectTimee=='3'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectTime('4')" class="item"><text>影视制作</text>
							<u-icon v-if="selectTimee=='4'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
					</view>
					<view v-if="type=='progress'">
						<view @click="selectType('1')" class="item"><text>招募中</text>
							<u-icon v-if="selectTypee=='1'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectType('2')" class="item"><text>开发中</text>
							<u-icon v-if="selectTypee=='2'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
						<view @click="selectType('3')" class="item"><text>已完成</text>
							<u-icon v-if="selectTypee=='3'" name="checkbox-mark" color="#00D3DB"></u-icon>
						</view>
					</view>
				</view>
				<view class="opt">
					<view class="cancel" @click="show=false">取消</view>
					<view class="confirm" @click="search">确认</view>
				</view>
			</view>
		</u-popup>
	<view>
		<view class="contentItem" @click="toDetail(1)">
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
		<view class="contentItem" @click="toDetail(item.id)" v-for="(item,index) in projectList" :key="index">
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
		<view class="baseline">我也是有底线的~</view>
	</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				show: false,
				type: 'month',
				selectTimee: "1",
				selectTypee: "1",
				selectStatuss: "1",
				projecImg:this.baseImgUrl + '/static/1.jpg',
				release:this.baseImgUrl + '/static/home/icon_fabu.png',
				signUp:this.baseImgUrl + '/static/home/icon_renshu.png',
				current:1,
				projectName:'',
				projectStatus:'',
				projectType:'',
				projectList:''
				
			}
		},
		onShow: function() {
			this.$u.api.findListProject({//查找项目
				pageCurrent:this.current,
				projectName:this.projectName,
				status:'',
				type:''
			}).then(res =>{
				if(res.meta.code==0){
					this.projectList = res.data.records
				}else{
					uni.showToast({
						title:res.meta.msg,
						icon:'none'
					})
				}
				console.log('listProject', res)
			})
		},
		methods: {
			changeItem1(index) {
				debugger
				this.$u.toast(`点击了第${index}项`);
				let val = this.options1.findIndex(item => item.value == index);
				this.title1 = this.options1[val].label;
			},
			changeItem2(index) {
				this.$u.toast(`点击了第${index}项`);
				let val = this.options2.findIndex(item => item.value == index);
				this.title2 = this.options2[val].label;
			},
			//点击跳转到详情页
			toDetail(id) {
				uni.navigateTo({
					url: `./projectDetail/projectDetail?id=${id}`
				})
			},
			// 选择分类
			select(v) {
				this.type = v
				this.show = true
			},
			// 选择分类类型
			selectTime(v) {
				this.selectTimee = v
				this.projectType=v
			},
			// 选择进度
			selectType(v) {
				this.selectTypee = v
				this.projectStatus=v
				
			},
			// 选择分类类型 
			selectStatus(v) {
				this.selectStatuss = v
			},
			search(){
				this.$u.toast("已查询到结果")
				this.show=false
				this.$u.api.findListProject({//查找项目
					pageCurrent:this.current,
					projectName:this.projectName,
					status:this.projectStatus,
					type:this.projectType
				}).then(res =>{
					if(res.meta.code==0){
						this.projectList = res.data.records
					}else{
						uni.showToast({
							title:res.meta.msg,
							icon:'none'
						})
					}
					console.log('listProject', res)
				})
			}
		}
	}
</script>

<style lang="scss">
	.u-dropdown__menu .u-dropdown__menu__item {
		flex: 0 0 200rpx !important;
		display: inline-block;
	}
page{
	background-color: #f8f8f8;
	.baseline{
		color:#CCCCCC;
		text-align: center;
		line-height: 80rpx;
		font-size: 26rpx;
	}
	.contentItem{
		background:#fff;
		display: flex;
		flex-direction: column;
		background: #fff;
		padding:0 30rpx 0;
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
				}
			}
		}
	}
}
	.bottomTitle{
		text-align: center;
		padding-top:30rpx;
		background-color: #f8f8f8;
		color: #cccccc;
		font-size: 26rpx;
		}

	.selsectType {
		background-color: white;
		display: flex;
		justify-content: space-around;
		text-align: center;
		border-bottom: 1px solid #E6E6E6;

		&>view {
			padding: 12px 0;
			width: 33%;
			display: flex;
			align-items: center;
			justify-content: center;

			.u-icon {
				margin-left: 4px !important;
			}

		}

		.selected {
			color: $u-m-color;
		}
}
		.item {
			display: flex;
			justify-content: space-between;
			padding: 10px;
		}

		.opt {
			display: flex;
			border-radius: 0px 0px 6px 6px;

			.cancel {
				width: 50%;
				height: 40px;
				line-height: 40px;
				text-align: center;
			}

			.confirm {
				width: 50%;
				height: 40px;
				line-height: 40px;
				text-align: center;
				background-color: $u-m-color;
				color: white;
			}
		}
	
</style>
