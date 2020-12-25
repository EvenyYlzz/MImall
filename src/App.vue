<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
//  测试git配置
//  测试链接111
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  mounted() {
    if (this.$cookie.get('userId')) {
        this.getUser()
        this.getCartCount()
    }
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res = {}) => {
        this.$store.dispatch('saveUserName', res.username)
        //  todo 拉取用户信息保存到vuex里面
      })
    },
    //  添加默认值，防止兼兼容性问题报错
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res = 0) => {
        this.$store.dispatch('saveCartCount', res)
        //  todo 获取购物车商品数量保存到vuex里面
      })
    }
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss';
@import './assets/scss/config.scss';
@import './assets/scss/button.scss';
</style>
