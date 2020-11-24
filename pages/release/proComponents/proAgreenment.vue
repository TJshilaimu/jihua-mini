<template>
	<view class="proAgreen">
		<view class="title">
			需求方信息
		</view>
		<view class="infoBox">
			<image :src="agreenImg" mode=""></image>
			<view class="infoItem">
				<view class="">
					张琪
				</view>
				<view class="">
					手机号：11111111111
				</view>
				<view class="">
					邮箱:1111111111@111.com
				</view>
			</view>
		</view>
		<view class="agreenInfo">
			合同
		</view>
		<view class="tip">
			<scroll-view scroll-x="true">
				<view class="tipContent">合同已签约，等待需求方托付完项目资金后，项目就可以进行了</view>
			</scroll-view>
		</view>
		
<!-- 		<view class="agreenItem">
			<view class="agreenTop">
				<view class="agreenLogo">
					<image :src="agreenImg" mode=""></image>
					<text class="tagStatus">已签约</text>
				</view>
				<text class="secBtn">查看合同</text>
				<text class="secBtn sign">签约</text>
				<text class="secBtn" @click="refuse">拒绝</text>
			</view>
			<view class="agreenTime">
				<text class="getTime">收到时间：2020-1-23 12:23</text>
				<text class="deadLine">合同将在<text class="toRed">23:36</text>分后过期</text>
			</view>
			<view class="confirmTitle">
				合同将在发出后的48小时后过期，请您尽快确认
			</view>
			<view class="setTime">
				签约时间：2020-1-23 12:23
			</view>
		</view> -->
		<view class="agreenItem">
			<view class="agreenTop">
				<view class="agreenLogo">
					<image :src="agreenImg" mode=""></image>
					<text class="tagStatus">已签约</text>
				</view>
				<text class="secBtn" @click="seeFile">查看合同</text>
				<text class="secBtn sign">签约</text>
				<text class="secBtn" @click="refuse">拒绝</text>
			</view>
			<view class="agreenTime">
				<text class="getTime">收到时间：2020-1-23 12:23</text>
				<text class="deadLine">合同将在<text class="toRed">23:36</text>分后过期</text>
			</view>
			<view class="confirmTitle">
				合同将在发出后的48小时后过期，请您尽快确认
			</view>
			<view class="setTime">
				签约时间：2020-1-23 12:23
			</view>
		</view>
		<!-- 拒绝签约弹窗 -->
		<view class="refuse" v-if="isRefuse">
			<view class="refuseBox">
				<view class="mask" @click="closeBtn">
					
				</view>
				<view class="reason">
					拒绝原因
				</view>
				<view class="selectItem">
					<view class="uni-list">
					 <radio-group @change="radioChange">
							<label class="" v-for="(item, index) in items" :key="item.value">
								<view class="selectOpts" :class="[setNum == item.value ? 'setWhite' : '']">
									<radio :value="item.value" :checked="index === current" />
									<text>{{item.name}}</text>
								</view>
							</label>
						</radio-group>
					</view>
				</view>
				<view class="sureBtn" @click="sureClick">
					确定
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				show:false,
				tips: {
					text: ''
				},
				list: [{
					text: '原因1',
					color: 'black',
					fontSize: 28
				},
				{
					text: '原因1',
					color: 'black',
					fontSize: 28
				},{
					text: '原因1',
					color: 'black',
					fontSize: 28
				},
				{
					text: '原因1',
					color: 'black',
					fontSize: 28
				}],
				cancelText:'确定',
				items: [{
							value: 1,
							name: '原因1'
						},
						{
							value: 2,
							name: '原因2',
							checked: 'true'
						},
						{
							value: 3,
							name: '原因3'
						},
						{
							value: 4,
							name: '原因4'
						}
					],	
				current:0,
				isRefuse:false,
				setNum:1,
				agreenImg:this.baseImgUrl + '/static/1.jpg',
			}
		},
		methods:{
			refuse(){
				console.log('r')
				this.isRefuse = true
			},
			radioChange(i){
				console.log('点击了',i)
				this.setNum = i.detail.value
			},
			//拒绝弹窗
			closeBtn(e){
				e.preventDefault();
				this.isRefuse = false
			},
			sureClick(){
				let that = this;
				uni.showToast({
					title:'已拒绝签约',
					success() {
						that.isRefuse = false;
						//注意这里还得添加修改标签的功能，在调用接口后开发
					}
				})
			},
			//查看合同,需调用接口开发后续功能
			seeFile(){
				console.log('11')
				uni.navigateTo({
					url:'/pages/release/proComponents/seeAgreen'
				})
			}
		}
	}
</script>

<style lang="scss">
	.proAgreen{
		padding:0 0rpx;
		.title{
			padding-bottom: 16rpx;
		}
		.infoBox{
			background-color: white;
			display: flex;
			padding:10rpx;
			padding-bottom: 18rpx;
			border-bottom: 1px solid gray;
			image{
				width:120rpx;
				height:120rpx;
				border-radius:50%;
				margin-right:20rpx;
			}
			.infoItem{
				font-size: 30rpx;
				view{
					margin-bottom: 6rpx;
				}
			}
		}
		.agreenInfo{
			padding-top:40rpx;
			padding-left: 10rpx;
			padding-bottom: 30rpx;
		}
		.tip{
			margin-left: 10rpx;
			margin-bottom: 50rpx;
			height: 40rpx;
			.tipContent{
				font-size: 34rpx;
				white-space: nowrap;
			}
		}
		.agreenItem{
			width: 100%;
			padding:28rpx 26rpx;
			margin-top:36rpx;
			margin-bottom: 20rpx;
			background-color: white;
			border:1rpx solid #bfbfbf;
			// box-sizing: border-box;
			.agreenTop{
				height:100rpx;
				width: 100%;
				margin-bottom: 10px;
				display: flex;
				justify-content: space-between;
				.agreenLogo{
					width:200rpx;
					height: 100%;
					position: relative;
					image{
						width: 100%;
						height: 100%;
					}
					.tagStatus{
						position: absolute;
						left:0;
						top: 0;
						color:#2979ff;
						font-size:26rpx;
						border:1rpx solid #2979ff;
						background-color: #a9cfff;
						padding:6rpx 10rpx;
					}
				}
				.secBtn{
					display: inline-block;
					border:1rpx solid #DCDCDC;
					height: 60rpx;
					// padding: 6rpx 8rpx;
					border-radius:4px;
					font-size: 12px;
					line-height: 60rpx;
					width: 20%;
					text-align: center;
					&.sign{
						background-color: #0099ff;
						color:white;
					}
				}
			}
			.agreenTime{
				font-size: 26rpx;
				margin-bottom: 6rpx;
				display: flex;
				justify-content: space-between;
				.getTime{
					// margin-right:18rpx;:
				}
				.deadLine{
					.toRed{
						color: #b30000;
					}
				}
			}
			.confirmTitle{
				color:#b30000;
				margin:6rpx 0;
			}
			.setTime{
				font-size: 26rpx;
			}
		}
		.refuse{
			z-index: 999;
			background-color: #eee;
			// opacity: .4;
			position: fixed;
			bottom: 0;
			width:100%;
			height: 100%;
			.refuseBox{
				position: fixed;
				bottom: 0;
				width:100%;
				.mask{
					background-color: pink;
					width:100%;
					height: 100vh;
					opacity: 0;
				}
				.reason{
					text-align: center;
					font-weight: bolder;
					font-size: 40rpx;
					color: black;
				}
				.selectItem{
					width:100%;
					height: 300rpx;
					// border:1px solid blue;
					margin-bottom:40rpx;
					opacity: 1;
					color: black;
					.selectOpts{
						color:red;
						opacity: 1;
						height:80rpx;
						line-height: 80rpx;
						// border-bottom: 2rpx solid gray;
						padding-bottom: 20rpx;
						margin-left:40rpx;
					}
					.setWhite{
						background-color: white;
					}
				}
				.sureBtn{
					box-sizing: border-box;
					height: 60rpx;
					padding-top:30rpx;
					margin:30rpx 0;
					text-align: center;
					border-top: 2px solid gray;
					color:blue;
					font-size: 40rpx;
					font-weight: bold;
				}
			}
		
		}
	}
</style>
