import Vue from "vue"
// 修改手机号中间四位
export const decodePhone = (data) => {

	var character = data; //字符

	//1.判断该字符串里是否包含数字
	function getNum(text) {

		var value = text.replace(/[^0-9]/ig, "");
		return value;
	}

	//2.if包含数字，判断数据长度是否为11
	if (getNum(character).length == 11) {

		//3.截取所有数字，并用*替换4，4
		var phNum = getNum(character),
			phnumAfter = phNum.substr(0, 3) + "****" + phNum.substr(7);
	}

	//4.替换输出
	return phnumAfter
}
// url 转base64格式
export const urlTobase64 = (url) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: url,
			method: 'GET',
			responseType: 'arraybuffer',
			success: res => {
				let toBase64Url;
				let base64 = wx.arrayBufferToBase64(res.data); //把arraybuffer转成base64
				toBase64Url = 'data:image/jpeg;base64,' + base64; //不加上这串字符，在页面无法显示
				resolve(toBase64Url)
			},
			fail: () => {
				reject("转换base64格式失败")
			}
		});
	})
}
// 正则表达式校验
export const checkCard = (str, reg) => {
	//15位数身份证正则表达式
	var arg1 = reg;
	if (str.match(arg1) == null) {
		return false;
	} else {
		return true;
	}
}
// 登陆时间判断，判断登陆状态是否过期
export const loginTime = (nowTime, loginTime) => {
	// if(nowTime-loginTime)
	// let result = new Promise((resolve, reject) => {
	if (parseInt(nowTime / 1000) - parseInt(loginTime / 1000) > (2 * 60 * 60)) {
		// 清除登陆的信息
		uni.clearStorage()
		return true
	} else {
		return false
	}
	// })
	// return result
}

// 获取用户信息
export const getUserInfo = () => {
	// 获取用户授权信息
	// 检测是否有头像的个人信息授权
	uni.login({
		provider: "weixin",
		success: function(res) {
			console.log(res)
			uni.getSetting({
				success: (res) => {
					console.log(123, res.authSetting['scope.userInfo'])
					// if(res.authSetting['scope.userInfo']!=undefined){
					// 用户已授权
					// 获取用户信息
					// uni.getUserInfo({
					// 	provider:"weixin",
					// 	fail:function(res){
					// 		console.log(res)
					// 	},
					// 	success:function(res2){
					// 		console.log(123456,res2)
					// 	}
					// })
					// }else{
					// 	console.log(123456)
					// 	// 用户未授权
					uni.authorize({
						scope: 'scope.userInfo',
						fail: function(res) {
							console.log(res)
						},
						success: () => {
							// 用户已完成个人信息授权
							// 获取用户信息
							uni.getUserInfo({
								provider: "weixin",
								success: function(res2) {
									console.log(123, res2)
								}
							})
						}
					})
					// }
				}
			})

		}
	}) // uni.login({
	// 	provider:"weixin",
	// 	success:function(res1){
	// 		uni.get
	// 	}
	// })
}
// 微信支付
export const pay = (amount) => {
	amount = 0.01
	return new Promise((resolve, reject) => {
		let timeStamp = Math.round(new Date() / 1000)
		uni.login({
			provider: "weixin",
			success: function(res) {
				uni.request({
					// 获取微信配置
					url: "http://demo.ngrok.snsxm.top/demo/wxpay/getConf",
					success: (data) => {
						uni.request({
							// 获取微信用户信息
							url: `https://api.weixin.qq.com/sns/jscode2session?appid=${data.data.data.appid}&secret=${data.data.data.secret}&js_code=${res.code}&grant_type=authorization_code`,
							success: (res2) => {
								uni.request({
									url: `http://demo.ngrok.snsxm.top/demo/wxpay/createUnifiedOrder?amount=${amount}&openid=${res2.data.openid}`,
									method: "POST",
									success: (res3) => {
										console.log(res3)
										uni.requestPayment({
											nonceStr: res3.data.data.nonceStr,
											appid: "wx0d0953edf14ced38",
											paySign: res3.data.data.paySign,
											timeStamp: res3.data.data.timeStamp,
											package: res3.data.data.package,
											signType: res3.data.data.signType,
											success: (res) => {
												resolve(res)
											},
											fail: (res) => {
												reject(res)
											}
										})
									}
								})

							}
						})

					}
				})
				return
			}
		})

	})
}
// 用户充值 
export const recharge = (obj) => {
	// 充值路径
	return new Promise((resolve, reject) => {
		let timeStamp = Math.round(new Date() / 1000)
		uni.login({
			provider: "weixin",
			success: function(res) {
				console.log(res)
				uni.request({
					// 获取微信配置
					url: "http://demo.ngrok.snsxm.top/demo/wxpay/getConf",
					header: {
						"Token": uni.getStorageSync("token")
					},
					success: (data) => {
						uni.request({
							// 获取微信用户信息
							url: `https://api.weixin.qq.com/sns/jscode2session?appid=${data.data.data.appid}&secret=${data.data.data.secret}&js_code=${res.code}&grant_type=authorization_code`,
							success: (res2) => {
								uni.request({
									url: `http://demo.ngrok.snsxm.top/wallet/recharge?openId=${res2.data.openid}&amount=0.01&password=${obj.password}`,
									method: "POST",
									success: (res3) => {
										console.log(res3)
										uni.requestPayment({
											nonceStr: res3.data.data.nonceStr,
											appid: "wx0d0953edf14ced38",
											paySign: res3.data.data.paySign,
											timeStamp: res3.data.data.timeStamp,
											package: res3.data.data.package,
											signType: res3.data.data.signType,
											success: (res) => {
												resolve(res)
											},
											fail: (res) => {
												reject(res)
											}
										})
									}
								})

							}
						})

					}
				})
				return
			}
		})


	})
}
// uploadImg:function(){
//  var that = this;
//  wx.chooseImage({
//  count: 9,
//   sizeType: ['original', 'compressed'],
//   sourceType: ['album', 'camera'],
//   success: function(res){
//   var successUp = 0; //成功
//   var failUp = 0; //失败
//   var length = res.tempFilePaths.length; //总数
//   var count = 0; //第几张
//   that.uploadOneByOne(res.tempFilePaths,successUp,failUp,count,length);
//   }, 
//  });
// },
// 用户文件上传
export const uploadOneByOne = (url,imgPaths, successUp, failUp, count, name, length, data) => {
	const token = uni.getStorageSync('token');
	// config.header.Token = token;
	console.log(imgPaths[count])
	wx.uploadFile({
		url: url, //仅为示例，非真实的接口地址
		filePath: imgPaths[count],
		name: name, //示例，使用顺序给文件命名
		formData: data,
		header: {
			Authorization: token
		},
		success: function(e) {
			console.log(e)
			successUp++; //成功+1
		},
		fail: function(e) {
			console.log(e)
			failUp++; //失败+1
		},
		complete: function(e) {
			count++; //下一张
			if (count == length) {
				//上传完毕，作一下提示
				console.log('上传成功' + successUp + ',' + '失败' + failUp);
				wx.showToast({
					title: '上传成功' + successUp,
					icon: 'success',
					duration: 2000
				})
			} else {
				//递归调用，上传下一张
				uploadOneByOne(imgPaths, successUp, failUp, count, name, length);
				console.log('正在上传第' + count + '张');
			}
		}
	})
}
