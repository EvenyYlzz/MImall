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
    const url = '/activity/servicetime'
    jsonp(url, (err, res) => {
      console.log('success')
      if (err) {
        console.log(err.stack)
      }
    })
  }
}
</script>
