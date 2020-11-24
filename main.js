import Vue from 'vue'
import App from './App'
// import http from "./util/http.js"
Vue.config.productionTip = false

App.mpType = 'app'
// Vue.prototype.http = http
// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
// 配置图片外链地址
Vue.prototype.baseImgUrl='http://47.108.128.22:8081'
// http拦截器，将此部分放在new Vue()和app.$mount()之间，才能App.vue中正常使用
import httpInterceptor from '@/common/http.interceptor.js'
Vue.use(httpInterceptor, app)

// http接口API抽离，免于写url或者一些固定的参数
import httpApi from '@/common/http.api.js'
Vue.use(httpApi, app)
app.$mount()
