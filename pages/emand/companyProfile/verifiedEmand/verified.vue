<template>
	<view class="verified">
		<view class="uploadImg" @click="upload">
			<!-- 			<u-upload width="270px" ref="uUpload1" :before-upload="beforeUpload1" upload-text="上传身份证人像面" name="files" height="180px"
			 :header="header" :action="action" :show-progress="false" max-count="1" :custom-btn="true"> -->
			<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
				<image class="idImg" :src="idCardZ" mode=""></image>
			</view>
			<!-- </u-upload> -->
			<text class="text">上传身份证人像面</text>
		</view>
		<view class="uploadImg getPadding" @click="upload2">
			<!-- 			<u-upload width="270px" ref="uUpload2" :before-upload="beforeUpload2" upload-text="上传身份证国徽面"
			 height="180px" :header="header" :action="action" :show-progress="false" max-count="1" :custom-btn="true"> -->
			<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
				<image class="idImg" :src="idCardF" mode=""></image>
			</view>
			<!-- </u-upload> -->
			<text class="text">上传身份证国徽面</text>
		</view>
		<view class="uploadImg getPadding" @click="upload3">
			<!-- 			<u-upload width="270px" ref="uUpload2" :before-upload="beforeUpload2" upload-text="上传身份证国徽面"
			 height="180px" :header="header" :action="action" :show-progress="false" max-count="1" :custom-btn="true"> -->
			<view slot="addBtn" class="slot-btn" hover-class="slot-btn__hover" hover-stay-time="150">
				<image class="idImg" :src="businessLicense" mode=""></image>
			</view>
			<!-- </u-upload> -->
			<text class="text">上传营业执照</text>
		</view>
		<!-- 		<view class="uploadImg">
			<u-upload width="240px" ref="uUpload2" :before-upload="beforeUpload3" height="140px" :header="header" :action="action"
			 max-count="1"></u-upload>
		</view> -->

		<view class="subBtn">
			<button class="btnItem" @click="submit">提交</button>
			<view class="tips">
				请认真填写，保证信息的真实性，否则会导致审核失败
			</view>
		</view>

		<!-- 信息确认层 -->
		<u-popup v-model="show" mode="bottom">
			<view class="idInfo">
				<view class="imgBg">
					<image :src="distinguish" mode=""></image>
				</view>
				<view class="idTitle">
					核对信息
				</view>
				<view class="item1">
					请仔细核对身份及营业执照信息是否正确
				</view>
				<view class="infoBox">
					<view class="itemBox">
						<text class="nameTitle">姓名</text>
						<text class="nameConTent">{{name}}</text>
					</view>
					<view class="itemBox">
						<text class="nameTitle">身份证号</text>
						<text class="nameConTent">{{idCard}}</text>
					</view>
				</view>
				<view class="infoBox">
					<view class="itemBox">
						<text class="nameTitle">法人姓名</text>
						<text class="nameConTent">{{legalPerson}}</text>
					</view>
					<view class="itemBox">
						<text class="nameTitle">企业名称</text>
						<text class="nameConTent">{{enterprise}}</text>
					</view>
					<view class="itemBox">
						<text class="nameTitle">信用代码</text>
						<text class="nameConTent">{{creditCode}}</text>
					</view>
				</view>

				<view class="sumBtn">
					<button class="btnItem" @click="submit">提交</button>
				</view>
				<view class="item5">信息识别有误，<text style="color:#00D3BD" @click="toChange">点击修改</text></view>
			</view>
		</u-popup>
	</view>
</template>

<script>
	import {
		urlTobase64,
		uploadOneByOne
	} from "../../../../util/util.js"
	import {
		veriftyApi,
		certificateApi
	} from "../../../../common/apiUrl.js"
	export default {
		data() {
			return {
				action: ``,
				fileList1: [],
				fileList2: [],
				header: {},
				phone: "",
				imgs: {
					img1: '', // 身份证正面
					img2: '', // 身份证反面
					img3: '', // 营业执照
				},
				show: false,
				btnStatus: false,
				name: "张三",
				idCard: '511320100210012112',
				legalPerson: "李四",
				enterprise: "上海信息科技有限责任公司",
				creditCode: "511320100210012112",
				idCardZ: this.baseImgUrl + '/static/developer/pic_renxiangmian.png',
				idCardF: this.baseImgUrl + '/static/developer/pic_guoweimian.png',
				businessLicense: this.baseImgUrl + '/static/developer/pic_yingyezhizhao.png',
				distinguish: this.baseImgUrl + '/static/developer/pic_xinxishibie.png',
			}
		},
		onShow: function() {
			uni.getStorage({
				key: "token",
				success: (res) => {
					console.log('token')
					this.header.Token = res.data
				}
			})
			uni.getStorage({
				key: "phone",
				success: (res) => {
					console.log('phone', res)
					this.phone = res.data
					// this.action+`?phone=${this.phone}`
				}
			})
		},
		methods: {
			beforeUpload1(index, list) {
				// 获取临时地址
				// 				let that =this;
				// 				let url1 =list[0].url ;
				// 				console.log('321',url1)
				// 				urlTobase64(url1).then(res =>{
				// 					console.log('人像',res)
				// 					that.imgs.img1= res;
				let that = this;
				let url1 = list[0].url;
				console.log('321', url1)
				urlTobase64(url1).then(res => {
					that.imgs.img1 = res;
					that.changeBtnStatus()
				})

				// return false
			},
			beforeUpload2(index, list) {
				//国徽面
				// 获取临时地址
				// 				let that =this;
				// 				 let url2=list[0].url ;
				// 				 urlTobase64(url2).then(res =>{
				// 					 console.log('国徽',res)
				// 				 	that.imgs.img2= res;
				let that = this;
				let url2 = list[0].url;
				urlTobase64(url2).then(res => {
					that.imgs.img2 = res;
					that.changeBtnStatus()
				})
				// return false
			},
			upload() {
				wx.chooseMessageFile({
					count: 1,
					type: "file",
					extension: ["png", "jpg"],
					success: (res) => {
						console.log(res)
						this.imgs.img1 = res.tempFiles[0]
					}
				})
			},
			upload2() {
				wx.chooseMessageFile({
					count: 1,
					type: "file",
					extension: ["png", "jpg"],
					success: (res) => {
						this.imgs.img2 = res.tempFiles[0]
					}
				})
			},
			upload3() {
				// 获取临时地址
				wx.chooseMessageFile({
					count: 1,
					type: "file",
					extension: ["png", "jpg"],
					success: (res) => {
						this.imgs.img3 = res.tempFiles[0]
					}
				})
			},
			// 校验是否输入了账号和密码
			changeBtnStatus() {
				console.log(123465)
				let flag = false
				for (var k in this.imgs) {
					if (this.imgs[k] == "") {
						flag = true
					}
				}
				console.log('flag', flag)
				this.btnStatus = flag
			},
			// 提交认证图片
			submitVerifiedImg() {
				// console.log(this.imgs)
				// this.show = true
				// this.$u.api.uploadidNoRecognize({
				// 	phone: this.phone,
				// 	files: [this.imgs.img1, this.imgs.img2]
				// })
			},
			//查看信息后提交按钮
			submit() {
				let that = this;
				let arr1 = [this.imgs.img1, this.imgs.img2, this.imgs.img3]
				this.uploadImgs(0, arr1.length, 0, arr1)
			},
			//修改身份证信息
			toChange() {
				uni.navigateTo({
					url: './changeCompanyInfo/changeCompanyInfo'
				})
			},
			uploadImgs(i, length, count, arr1) {
				const that = this
				const token = uni.getStorageSync('token');
				console.log(arr1[i])

				let type
				// if (i === 2) {
				// 	type = "bussiness"
				// }
				if (i === 1) {
					type = "back"
				}
				if (i === 0) {
					type = "face"
				}
				wx.uploadFile({
					url: veriftyApi, //仅为示例，非真实的接口地址
					filePath: arr1[i].path,
					name: 'imagePath', //示例，使用顺序给文件命名
					formData: {
						phone: this.phone,
						type: type
					},
					header: {
						Authorization: token
					},
					success: function(e) {
						console.log(e)
					},
					fail: function(e) {
						console.log(e)
					},
					complete: function(e) {
						console.log(e)
						if (count == length) {
							//上传完毕，作一下提示
							wx.showToast({
								title: '上传成功',
								icon: 'success',
								duration: 2000
							})
						} else {
							console.log('正在上传第' + count + '张');
							if (i + 1 === length) {
								return
							}
							that.uploadImgs(i + 1, length, count + 1, arr1)
						}
					}
				})
			}
		}
		// if(this.fileList1==[]){
		// 	this.$u.toast("请上传身份证正面")
		// 	return
		// }
		// if(this.fileList2==[]){
		// 	this.$u.toast("请上传身份证反面")
		// 	return
		// }
		// this.$refs.uUpload1.upload()
		// this.fileList1.push(...this.fileList2)
		// submitUserImg({
		// 	phone: this.phone
		// }, {
		// 	files: [this.img1, this.img2]
		// }).then(res => {
		// 	console.log(res)
		// })
		// this.$u.toast("提交成功")
		// }
	}
</script>

<style lang="scss">
	.verified {
		padding-top: 120rpx;
		border-top: 1px solid #f0f0f0;

		.uploadImg {
			box-sizing: border-box;
			margin-left: 105rpx;
			margin-right: 105rpx;
			text-align: center;

			&.getPadding {
				padding-top: 105rpx;
			}

			.text {
				display: inline-block;
				margin-top: 26rpx;
			}

			.slot-btn {
				width: 540rpx;
				height: 360rpx;

				image {
					width: 540rpx;
					height: 360rpx;
				}
			}
		}

		.u-list-item {
			margin: 0 !important;
			background: white !important;
		}

		.subBtn {
			margin: 140rpx 60rpx 80rpx;

			.btnItem {
				height: 90rpx;
				border-radius: 46rpx;
				background-color: #00D3BD !important;
				color: white !important;
				font-size: 16px;

				&.addOpacity {
					opacity: .5;
				}
			}

			.tips {
				text-align: center;
				color: #999;
				font-size: 13px;
				line-height: 20px;
				padding: 10px 10px;
			}
		}

		.idInfo {
			// background-color: ;
			overflow: hidden;
			border-top-left-radius: 10px;
			border-top-right-radius: 10px;
			display: flex;
			flex-direction: column;
			align-items: center;
			background-color: white;

			.imgBg {
				width: 100%;
				height: 260rpx;

				background-color: $u-m-color;
				display: flex;
				justify-content: center;
				align-items: center;

				image {
					height: 173rpx;
					width: 460rpx;
				}
			}

			.idTitle {
				margin-top: 32rpx;
				margin-bottom: 32rpx;
				color: #333333;
				font-size: 34rpx;
			}

			.item1 {
				width: 630rpx;
				height: 80rpx;
				line-height: 80rpx;
				text-align: center;
				color: #f68e36;
				font-size: 28rpx;
				background-color: #FFF7F1;
			}

			.infoBox {
				margin-top: 53rpx;
				width: 630rpx;
				/* height: 134rpx; */
				padding: 32rpx 34rpx 0;
				border: 1px solid $u-b-color;
				display: flex;
				flex-flow: row wrap;

				.itemBox {
					display: flex;
					flex-direction: column;
					padding-bottom: 32rpx;

					.nameTitle {
						color: #999999;
						font-size: 26rpx;
						margin-bottom: 2px;
					}

					.nameContent {
						color: #333333;
						font-size: 30;
					}

					&:nth-of-type(2) {
						margin-left: 80rpx;
					}
				}
			}

			.sumBtn {
				margin: 53rpx 60rpx 30rpx;
				width: 630rpx;

				.btnItem {
					height: 90rpx;
					line-height: 90rpx;
					border-radius: 46rpx;
					background-color: #00D3BD !important;
					color: white !important;
					font-size: 16px;
				}
			}

			.item5 {
				color: #999999;
				font-size: 26rpx;
				padding-bottom: 52rpx;
			}
		}

		.u-drawer-content {
			background-color: transparent !important;
		}
	}
</style>
