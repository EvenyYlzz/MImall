import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

//  根据前端的跨域方式做调整 /a /b
axios.defaults.baseURL = '/api'
//  超时设置8s
axios.defaults.timeout = 8000

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
