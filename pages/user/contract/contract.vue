<template>
	<view class="contract">
		<view class="contactType">
			<u-tabs :list="list" :is-scroll="false" :current="current" @change="change" active-color="#00D3DB" bar-width="60"></u-tabs>
		</view>
		<view class="contactList">
			<view class="contactItem" v-for="(v,i) in contactList" :key="i">
				<view class="contactTitle">
					<image :src="img"></image>
					<view class="contactTitleHead">{{v.title}}</view>
					<u-icon name="arrow-right" size="24"></u-icon>
				</view>
				<view class="contactContent">
					<image :src="iconX"></image>
					<view class="contactInfo">
						<view class="contactAName">甲方名称：{{v.aName}}</view>
						<view class="contactBName">乙方名称：{{v.bName}}</view>
						<view class="contactCreateTime">发送时间：{{v.createTime}}</view>
						<view class="contactTime" v-if="v.status=='3'">签约时间：{{v.dealTime}}</view>
						<view class="contactTime" v-if="v.status=='1'">合同将在<text class="outTime">{{v.outTime}}</text>分后过期</view>
					</view>
					<image class="successImg" v-if="v.status=='3'" :src="iconX1"></image>
				</view>
				<view class="opt">
					<view class="btn2" v-if="v.status=='1'">取消合同</view>
					<view class="btn">查看合同</view>
				</view>
				<image class="contactTpyeImg" :src="v.status=='1'?img1:v.status=='2'?img2:v.status=='3'?img3:v.status=='4'?img4:''"></image>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img: this.baseImgUrl + '/static/wallet/icon_hetongmingcheng.png',
				img1: this.baseImgUrl + '/static/wallet/pic_daiqianyue.png',
				img2: this.baseImgUrl + '/static/wallet/pic_yijujue.png',
				img3: this.baseImgUrl + '/static/wallet/pic_yiqianyue.png',
				img4: this.baseImgUrl + '/static/wallet/pic_yishixiao.png',
				iconX: this.baseImgUrl + '/static/wallet/clement-h-95YRwf6CNw8-unsplash%20(1).jpg',
				iconX1: this.baseImgUrl + '/static/wallet/pic_shengxiaozhong.png',
				list: [{
					name: '全部'
				}, {
					name: '待签约'
				}, {
					name: '已签约'
				}, {
					name: '已拒绝'
				}, {
					name: '已失效'
				}, ],
				current: 0,
				contactList: [{
					contactImg: "",
					title: "小程序开发小程序开发",
					aName: "成都信息科技有限公司",
					bName: "张三",
					status:"1",
					createTime: "2019-01-23 12:23",
					dealTime: "2019-01-23 12:23",
					outTime:"23:00"
				},{
					contactImg: "",
					title: "小程序开发小程序开发",
					aName: "成都信息科技有限公司",
					bName: "张三",
					status:"2",
					createTime: "2019-01-23 12:23",
					dealTime: "2019-01-23 12:23",
					outTime:"23:00"
				},{
					contactImg: "",
					title: "小程序开发小程序开发",
					aName: "成都信息科技有限公司",
					bName: "张三",
					status:"3",
					createTime: "2019-01-23 12:23",
					dealTime: "2019-01-23 12:23",
					outTime:"23:00"
				},{
					contactImg: "",
					title: "小程序开发小程序开发",
					aName: "成都信息科技有限公司",
					bName: "张三",
					status:"4",
					createTime: "2019-01-23 12:23",
					dealTime: "2019-01-23 12:23",
					outTime:"23:00"
				}]
			}
		},
		methods: {
			change(index) {
				this.current = index;
			},
		}
	}
</script>

<style lang="scss">
	page{
		background: #F8F8F8;
	}
	.contract {
		.contractType {
			display: flex;
		}

		.contactList {
			.contactItem {
				background: white;
				margin-bottom: 6px;
				position: relative;

			}
			
			.contactTitle {
				display: flex;
				height: 40px;
				align-items: center;
				padding: 0 16px;
				image{
					width: 16px;
					height: 16px;
				}
				.contactTitleHead {
					margin: 0 6px;
					max-width: 180px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
					line-height: 30px;
				}
			}
			.contactContent{
				display: flex;
				position: relative;
				padding: 0 20px;
				padding-bottom: 20px;
				border-bottom: 1px solid #E6E6E6;
				image{
					width: 75px;
					height: 75px;
					border-radius: 5px;
				}
				.contactCreateTime,.contactTime{
					font-size: 12px;
					color: #999999;
				}
				.contactInfo{
					padding-left: 10px;
				}
				.contactAName,.contactBName{
					max-width: 190px;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.outTime{
					color: #C40000;
				}
			}
			.contactTpyeImg{
				position: absolute;
				width: 50px;
				height: 50px;
				right: 0;
				top:0;
			}
			.successImg{
				position: absolute;
				right:20px;
				bottom: 22px;
				width: 60px !important;
				height: 60px !important;
			}
			.opt{
				padding: 10px;
				display: flex;
				justify-content: flex-end;
				.btn{
					color: $u-m-color;
					border: 1px solid $u-m-color;
					height: 30px;
					border-radius: 15px;
					width: 100px;
					font-size: 14px;
					line-height: 30px;
					text-align: center;
				}
				.btn2{
					margin-right: 10px;
					color: #666666;
					border: 1px solid #999999;
					height: 30px;
					border-radius: 15px;
					width: 100px;
					font-size: 14px;
					line-height: 30px;
					text-align: center;
				}
			}
		}
	}
</style>
