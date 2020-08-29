import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
  username: '', //  登陆用户名
  cartCount: 0 // 购物车商品数量
}

export default new Vuex.Store({
  state,
  mutations,
  actions
  // 可以上面这样一个个文件单独导入，也可以像下面这样全部写在一起
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  // modules: {
  // }
})
