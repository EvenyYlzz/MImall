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
      res: {}
    }
  },
  mounted () {
    // storage.setItem('a', 1)
    // storage.setItem('user', { a: 1 })
    // storage.setItem('abc', { a: 1 }, 'user')
    // storage.clear('a') // 干掉第一层
    // storage.clear('a', 'user') // 干掉第二层

    //  本地加载请求静态json文件的形式
    // this.axios.get('/mock/user/login.json').then( () => {
    //   this.res = res
    // })

    //  通过easy-mock平台实现数据mock
    //  要在main.js中将这句axios.defaults.baseURL = '/api'弄上去，api是easy-mock数据，如果有后端的接口就直接用后端链接，跟真实的工作中后端对接是很相似的
    // this.axios.get('/user/login').then( () => {
    //   this.res = res
    // })

    //  本地集成mockjs实现数据mock
    this.axios.get('/user/login').then((res) => {
      this.res = res
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
