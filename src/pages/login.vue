<template>
  <div class="login">
    <div class="container">
      <a href="/#/index"><img src="/imgs/login-logo.png" alt=""></a>
    </div>
    <div class="wrapper">
      <div class="container">
        <div class="login-form">
          <h3>
            <span class="checked">帐号登录</span><span class="sep-line">|</span><span>扫码登录</span>
          </h3>
          <div class="input">
            <input type="text" placeholder="请输入帐号" v-model="username">
          </div>
          <div class="input">
            <input type="password" placeholder="请输入密码" v-model="password">
          </div>
          <div class="btn-box">
            <a href="javascript:;" class="btn" @click="login">登录</a>
          </div>
          <div class="tips">
            <div class="sms" @click="register">手机短信登录/注册</div>
            <div class="reg">立即注册<span>|</span>忘记密码？</div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
        <div class="footer-link">
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">EvenYyl博客主页</a><span> | </span>
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">QQ: 172463072</a><span> | </span>
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">Wechat: 13036781031</a><span> | </span>
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">Tel: 18877532527</a>
        </div>
        <p class="copyright">Copyright @2020 EvenyYl All Rights Reserved</p>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data() {
    return {
      username: '',
      password: '',
      userId: ''
    }
  },
  methods: {
    login() {
      const { username, password } = this
      this.axios.post('/user/login', {
        username,
        password
      }).then((res) => {
        //  第一个参数设置用户名称，第二个变量名，第三个设置过期时间
        this.$cookie.set('userId', res.id, { expires: 'Session' })
        //  储存保存用户名
        //  为了把登录的信息存储带到另外的页面上，于是乎就得引入vuex
        //  空
        // this.$store.dispatch('saveUserName',res.username);
        this.saveUserName(res.username)
        this.$router.push({
          name: 'index',
          params: {
            from: 'login'
          }
        })
        //  登陆成功页面跳转
      })
    },
    // this.$store.dispatch('saveUserName',res.username);
    // =...mapActions(['saveUserName']),  +  this.saveUserName(res.username)
    //  等同于，只不过当多了之后，第二种会减少代码书写
    ...mapActions(['saveUserName']),
    register() {
        //  虚拟注册一个用户名
      this.axios.post('/user/register', {
        username: 'admin1',
        password: 'admin1',
        email: 'admin1@163.com'
      }).then(() => {
          //    element-UI 信息提示框
        this.$message.success('注册成功')
      })
    }
  }
}
</script>
<style lang="scss">
@import './../assets/scss/base.scss';
.login{
  &>.container{
    height:113px;
    img{
      width:auto;
      height:100%;
    }
  }
  .wrapper{
    background:url('/imgs/login-bg.jpg') no-repeat center;
    .container{
      height:576px;
      .login-form{
        box-sizing: border-box;
        padding-left: 31px;
        padding-right: 31px;
        width:410px;
        height:510px;
        background-color:#ffffff;
        position:absolute;
        bottom:29px;
        right:0;
        h3{
          line-height:23px;
          font-size:24px;
          text-align:center;
          margin:40px auto 49px;
          .checked{
            color:#FF6600;
          }
          .sep-line{
            margin:0 32px;
          }
        }
        .input{
          display:inline-block;
          width:348px;
          height:50px;
          border:1px solid #E5E5E5;
          margin-bottom:20px;
          input{
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border: none;
            padding: 18px;
          }
        }
        .btn{
          width:100%;
          line-height:50px;
          margin-top:10px;
          font-size:16px;
        }
        .tips{
          margin-top:14px;
          display:flex;
          justify-content:space-between;
          font-size:14px;
          cursor:pointer;
          .sms{
            color:#FF6600;
          }
          .reg{
            color:#999999;
            span{
              margin:0 7px;
            }
          }
        }
      }
    }
  }
  .footer{
    height:100px;
    padding-top:60px;
    color:#999999;
    font-size:16px;
    text-align:center;
    .footer-link{
      a{
        color:#999999;
        display:inline-block;
      }
      span{
        margin:0 10px;
      }
    }
    .copyright{
      margin-top:13px;
    }
  }
}
</style>
