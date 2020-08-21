import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import env from './env'

const mock = true
//  这里只能用require加载，不能用import加载，import是预加载，预加载直接编译的时候，数据就会直接被拦截，永远拿不到，我们希望通过开关来控制数据
if (mock) {
  require('./mock/api')
}
//  根据前端的跨域方式做调整 /a /b
//  代理就直接api现在这种(代理判断不同的请求在vue.config.js进行处理)，CORS跟jsonp要env.js的判断处理
//  影响本地json
axios.defaults.baseURL = '/api'

//  超时设置8s
axios.defaults.timeout = 8000

//  根据环境变量获取不同的请求地址
//  影响本地json
// axios.defaults.baseURL = env.baseURL

//  接口错误拦截（接收拦截）
axios.interceptors.response.use(function (response) {
  const res = response.data
  if (res.status === 0) {
    return res.data
  } else if (res.status === 10) {
    window.location.href = '/#/login' //  未登录的全部跳转到登陆页
  } else {
    alert(res.msg)
  }
})

Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
