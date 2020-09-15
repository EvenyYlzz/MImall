<template>
  <div>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import ServiceBar from './../components/ServiceBar'
import NavFooter from '../components/NavFooter'
export default {
  name: 'order',
  components: {
    ServiceBar,
    NavFooter
  },
  //  首次进入父路由会进行渲染判断，但是在子路由中跳转，不会再次进入mounted，因为已经渲染完成，所以造成了一个bug
  methods: {
  }
}
</script>

<style>

</style>
