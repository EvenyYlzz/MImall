<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import jsonp from 'jsonp'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    const url = 'https://www.easy-mock.com/mock/5b012c1fe6e1035843cd3aff/mockapi/table/list'
    jsonp(url, () => {
      console.log('success')
    })
  }
}
</script>
