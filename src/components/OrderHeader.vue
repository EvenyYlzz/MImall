<template>
    <div class="order-header">
        <div class="container clearfix">
            <div class="header-logo">
                <a href="/#/index"></a>
            </div>
            <div class="title">
                <h2>{{title}}
                    <slot name="tip"></slot>
                </h2>
            </div>
            <div class="username">
                <a href="javascript:;">{{username}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'order-header',
    props: {
        title: String
    },
    computed: {
        ...mapState(['username'])
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
.order-header{
    padding: 30px 0;
    border-bottom: 2px solid #FF6600;
    .header-logo{
        float: left;
    }
    .title, .username{
        display: inline-block;
        height: 55px;
        line-height: 55px;
    }
    .title{
        float: left;
        margin-left: 54px;
        h2{
            font-size: $fontC;
            color: $colorB;
        }
        span{
            font-size: $fontJ;
            margin-left: 17px;
            color: $colorD;
            font-weight: 200;
        }
    }
    .username{
        float: right;
        a{
            color: $colorC;
            font-size: $fontI;
        }
    }
}
</style>
