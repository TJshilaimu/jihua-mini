// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
// 同时，我们也可以在此使用getApp().globalData，如果你把token放在getApp().globalData的话，也是可以使用的
import {
	loginTime
} from "../util/util.js"
const install = (Vue, vm) => {
	Vue.prototype.$u.http.setConfig({
		// baseUrl:'http://10.0.3.180:8083',
		// baseUrl: 'http://10.0.3.182:8081',
		// baseUrl: 'http://47.108.128.22:8081',
		//baseUrl:'http://j35t561520.wicp.vip',
<<<<<<< HEAD
		baseUrl:'http://demo.ngrok.snsxm.top/',
=======
		baseUrl:'http://demo.ngrok.snsxm.top',
		// baseUrl:'https://www.whalepick.com',
>>>>>>> 74dea93bb6303e6a3eddd94bacbc70b8666c9c2d
		// 如果将此值设置为true，拦截回调中将会返回服务端返回的所有数据response，而不是response.data
		// 设置为true后，就需要在this.$u.http.interceptor.response进行多一次的判断，请打印查看具体值
		originalData: true,
		// 设置自定义头部content-type
		header: {
			'content-type': 'application/json;charset=UTF-8'
		}
	});
	// 请求拦截，配置Token等参数
	Vue.prototype.$u.http.interceptor.request = (config) => {
		// console.log(123,config)
		// // 不用校验登陆状态接口白名单
		// let urlList=[
		// 	"/login"
		// ]
		// // let flag=false
		// for(let i=1;i<urlList.length;i++){
		// 	if(config.url.indexOf(urlList[i])!= -1){
		// 		flag=true
		// 	}
		// }
		// str.indexOf("3") != -1
		// if(config.url)
		// 判断登陆状态是否过期
		let time = new Date()
		let timeStemp = time.getTime()
		if (!loginTime(timeStemp, uni.getStorageSync("timeStemp"))) {
			//设置白名单
			// let whiteList = ['/project/listProject']
			// console.log('url',config.url)
			// let flag = whiteList.includes(config.url);
			// if(flag){//直接返回，不验证

			// }else{//验证登录状态

			// }
			//是否登录
			let isLogin = uni.getStorageSync("token");
			if (isLogin) { //已登录
				console.log('已登录', isLogin)
				let time = new Date()
				let timeStemp = time.getTime()
				if (!loginTime(timeStemp, uni.getStorageSync("timeStemp"))) {
					const token = uni.getStorageSync('token');
					// config.header.Token = token;
					config.header.Authorization = token;
					return config;
				} else {
					uni.navigateTo({
						url: "/pages/home/index.vue"
					})
					Vue.prototype.$u.toast("登陆状态已过期，请重新登陆")
				}
			} else { //未登录
				console.log('wei')
				const token = uni.getStorageSync('token');
				config.header.Token = token;
				console.log('未登录', token)
				return config;
			}
			// 判断登陆状态是否过期

			// config.header.Token = 'xxxxxx';

			// 方式一，存放在vuex的token，假设使用了uView封装的vuex方式，见：https://uviewui.com/components/globalVariable.html
			// config.header.token = vm.token;

			// 方式二，如果没有使用uView封装的vuex方法，那么需要使用$store.state获取
			// config.header.token = vm.$store.state.token;

			// 方式三，如果token放在了globalData，通过getApp().globalData获取
			// config.header.token = getApp().globalData.username;

			// 方式四，如果token放在了Storage本地存储中，拦截是每次请求都执行的，所以哪怕您重新登录修改了Storage，下一次的请求将会是最新值
		}
	}
	// 响应拦截，判断状态码是否通过
	Vue.prototype.$u.http.interceptor.response = (res) => {
		if (res.statusCode == 500) {
			Vue.prototype.$u.toast("服务器内部异常")
		}
		return res.data
		// 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
		// 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
		// if(res.meta.code == 500) {
		// 	// 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
		// 	Vue.prototype.$u.toast("服务器内部错误")
		// } else return res;
	}

}
export default {
	install
}
