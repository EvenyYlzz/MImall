<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import storage from './storage/index'
export default {
  name: 'app',
  components: {
  },
  data () {
    return {
    }
  },
  mounted() {
    this.getUser()
    this.getCartCount()
  },
  methods: {
    getUser() {
      this.axios.get('/user').then((res) => {
        this.$store.dispatch('saveUserName', res.username)
        //  todo 拉取用户信息保存到vuex里面
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
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
