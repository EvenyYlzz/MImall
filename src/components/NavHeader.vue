<template>
    <div class="header">
        <div class="nav-topbar">
            <div class="container">
                <div class="topbar-menu">
                    <a href="javascript:;">小米商城</a>
                    <a href="javascript:;">MIUI</a>
                    <a href="javascript:;">云服务</a>
                    <a href="javascript:;">协议规则</a>
                </div>
                <div class="topbar-user">
                    <a href="javascript:;" v-if="username">{{username}}</a>
                    <a href="javascript:;" v-if="!username" @click="login">登录</a>
                    <a href="javascript:;" v-if="username" @click="logout">退出</a>
                    <a href="javascript:;">我的订单</a>
                    <a href="javascript:;" class="my-cart" @click="goToCart"><span class="icon-cart"></span>购物车({{cartCount}})</a>
                </div>
            </div>
        </div>
        <div class="nav-header">
            <div class="container">
                <div class="header-logo">
                    <a href="/#/index"></a>
                </div>
                <div class="header-menu">
                    <div class="item-menu">
                        <span>小米手机</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item, index) in phoneList" :key="index">
                                    <a :href="'/#/product/'+item.id" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.mainImage" :alt="item.subtitle">
                                        </div>
                                        <div class="pro-name">
                                            {{item.name}}
                                        </div>
                                        <div class="pro-price">
                                            {{item.price | currency}}
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi手机</span>
                        <!-- <div class="children">
                            <ul>
                                <li class="product" v-for="(item) in xiaomishouji" :key="item.id">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img :src="item.img" alt="#">
                                        </div>
                                        <div class="pro-name">
                                            {{item.name}}
                                        </div>
                                        <div class="pro-price">
                                            {{item.price}}
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div> -->
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children">
                            <ul>
                                <li class="product" v-for="(item) in dianshi" :key="item.id">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img v-lazy="item.img" alt="#">
                                        </div>
                                        <div class="pro-name">
                                            {{item.name}}
                                        </div>
                                        <div class="pro-price">
                                            {{item.price}}
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="header-search">
                    <div class="wrapper">
                        <input type="text" name="keyword">
                        <a href="javascript:;"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'nav-header',
    data() {
        return {
            xiaomishouji: [
                {
                    id: 1,
                    img: '/imgs/nav-img/nav-1.png',
                    name: '小米CC9',
                    price: '1799元'
                },
                {
                    id: 2,
                    img: '/imgs/nav-img/nav-2.png',
                    name: '小米CC9e',
                    price: '1299元'
                },
                {
                    id: 3,
                    img: '/imgs/nav-img/nav-3.png',
                    name: '小米CC9 美图定制版',
                    price: '2599元'
                },
                {
                    id: 4,
                    img: '/imgs/nav-img/nav-4.png',
                    name: '小米9',
                    price: '2599元'
                },
                {
                    id: 5,
                    img: '/imgs/nav-img/nav-5.png',
                    name: '小米9 Pro 5G',
                    price: '3699元'
                },
                {
                    id: 6,
                    img: '/imgs/nav-img/nav-6.png',
                    name: '小米MIX Alpha',
                    price: '19999元'
                }
            ],
            dianshi: [
                {
                    id: 1,
                    img: '/imgs/nav-img/nav-3-1.jpg',
                    name: '小米壁画电视 65英寸',
                    price: '6999元'
                },
                {
                    id: 2,
                    img: '/imgs/nav-img/nav-3-2.jpg',
                    name: '小米全面屏电视E55A',
                    price: '1999元'
                },
                {
                    id: 3,
                    img: '/imgs/nav-img/nav-3-3.png',
                    name: '小米电视4A 32英寸',
                    price: '699元'
                },
                {
                    id: 4,
                    img: '/imgs/nav-img/nav-3-4.jpg',
                    name: '小米电视4A 55英寸',
                    price: '1799元'
                },
                {
                    id: 5,
                    img: '/imgs/nav-img/nav-3-5.jpg',
                    name: '小米电视4A 65英寸',
                    price: '2699元'
                },
                {
                    id: 6,
                    img: '/imgs/nav-img/nav-3-6.png',
                    name: '点击查看',
                    price: '查看全部'
                }
            ],
            phoneList: []
        }
    },
    computed: {
        // username() {
        //     //  不能放在data里面，组件加载有延迟，会导致获取到undefined，于是不显示
        //     //  采用computed，只要属性不改变，就可以继续用缓存的值
        //     return this.$store.state.username
        // },
        // cartCount() {
        //     return this.$store.state.cartCount
        // },
        ...mapState(['username', 'cartCount'])
    },
    filters: {
        currency(val) {
            if (!val) return '0.00'
            return '￥' + val.toFixed(2) + '元'
        }
    },
    mounted() {
        this.getProductList()
        const params = this.$route.params
        if (params && params.from === 'login') {
            this.getCartCount()
            //  避免重复获取浪费性能资源
        }
    },
    methods: {
        getProductList() {
            this.axios.get('/products', {
                params: {
                    categoryId: '100012'
                    // pageSize: 6
                }
            }).then((res) => { //  前面封装的时候，就返回的res.data，所以这里的res=res.data，不用再进行处理
                if (res.list.length > 6) { //  拦截截取6条数据，因为顶部手机展示不需要那么多条数据
                    this.phoneList = res.list.slice(0, 6)
                }
            })
        },
        getCartCount() {
            this.axios.get('/carts/products/sum').then((res = 0) => {
                this.$store.dispatch('saveCartCount', res)
                //  todo 获取购物车商品数量保存到vuex里面
            })
        },
        logout() {
            this.axios.post('/user/logout').then(() => {
                this.$message.success('退出成功')
                this.$cookie.set('userId', '', { expires: '-1' }) // 设置为-1即刻过期
                this.$store.dispatch('saveUserName', '')
                this.$store.dispatch('saveCartCount', '0')
            })
        },
        goToCart() {
            this.$router.push('/cart')
        },
        login() {
            this.$router.push('/login')
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/base.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/config.scss';
.header{
    .nav-topbar{
        height: 39px;
        line-height: 39px;
        background-color: #333333;
        color: #B0B0B0;
        .container{
            @include flex();
            a{
                display: inline-block;
                color: #B0B0B0;
                margin-right: 17px;
            }
            .my-cart{
                width: 110px;
                background-color: $colorA;
                text-align: center;
                color: #ffffff;
                margin-right: 0;
                .icon-cart{
                    @include bgImg(16px,12px,'/imgs/icon-cart-checked.png');
                    margin-right: 4px;
                }
            }
        }
    }
    .nav-header{
        .container{
            height: 112px;
            @include flex();
            position: relative;
            .header-menu{
                display: inline-block;
                padding-left: 209px;
                width: 643px;
                .item-menu{
                    display: inline-block;
                    color:#333333;
                    font-weight: bold;
                    font-size: 16px;
                    line-height: 112px;
                    margin-right: 20px;
                    span{
                        cursor: pointer;
                    }
                    &:hover{
                        color: $colorA;
                        .children{
                            height: 220px;
                            opacity: 1;
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left: 0;
                        height: 0;
                        width: 1226px;
                        opacity: 0;
                        overflow: hidden;   //  少了这个下拉过渡存在问题
                        border-top: 1px solid #E5E5E5;
                        box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        z-index: 10;
                        transition: all .5s;
                        background-color: $colorG;
                        .product{
                            float: left;
                            width: 16.6%;
                            height: 220px;
                            font-size: 12px;
                            line-height: 12px;
                            text-align: center;
                            position: relative;
                            a{
                                display: inline-block;
                            }
                            //  a是行内，不是块级，撑不开，所以要将他变成inline-block，这样放进去内容才能撑开
                            img{
                                height: 111px;
                                width: auto;
                                margin-top: 26px;
                            }
                            .pro-img{
                                height: 137px;
                            }
                            .pro-name{
                                font-weight: bold;
                                margin-top: 19px;
                                margin-bottom: 8px;
                                color: $colorB;
                            }
                            .pro-price{
                                color: $colorA;
                            }
                            &:before{
                                content: ' ';
                                position: absolute;
                                top: 28px;
                                right: 0;
                                border-left: 1px solid $colorF;
                                height: 100px;
                                width: 1px;
                            }
                            &:last-child:before{
                                display: none;
                            }
                        }
                    }
                }
            }
            .header-search{
                width: 319px;
                .wrapper{
                    height: 54px;
                    border: 1px solid #E0E0E0;
                    display: flex;
                    align-items: center;
                    input{
                        border: none;
                        border-right: 1px solid #E0E0E0;
                        box-sizing: border-box;
                        width: 264px;
                        height: 52px;
                        padding-left: 14px;
                    }
                    a{
                        @include bgImg(18px,18px,'/imgs/icon-search.png');
                        margin-left: 16px;
                    }
                }
            }
        }
    }
}
</style>
