<template>
    <div class="footer">
        <div class="footer-logo">
            <img src="/imgs/logo-footer.png" alt="#">
            <p>小米商城</p>
        </div>
        <div class="footer-link">
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">EvenYyl博客主页</a><span> | </span>
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">QQ: 172463072</a><span> | </span>
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">Wechat: 13036781031</a><span> | </span>
            <a href="https://juejin.im/user/4195392104182365/posts" target="_blank">Tel: 18877532527</a>
        </div>
        <div class="copyright">Copyright @2020 <span class="domain">EvenyYl</span> All Rights Reserved</div>
    </div>
</template>

<script>
export default {
    name: 'nav-footer'
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
.footer{
    height: 234px;
    border-top: 4px solid $colorA;
    background-color: $colorB;
    color: $colorD;
    font-size: $fontI;
    text-align: center;
    .footer-logo{
        margin-top: 46px;
        margin-bottom: 31px;
        img{
            width: 53px;
            height: 36px;
            margin-bottom: 13px;
        }
    }
    .footer-link{
        margin-bottom: 13px;
        a{
            color: $colorD;
            display: inline-block;
        }
        span{
            margin: 0 10px;
        }
    }
    .copyright{
        .domain{
            color: $colorA;
        }
    }
}
</style>
