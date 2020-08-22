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
                    <a href="javascript:;">登录</a>
                    <a href="javascript:;">注册</a>
                    <a href="javascript:;" class="my-cart"><span class="icon-cart"></span>购物车</a>
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
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="javascript:;">
                                        </div>
                                        <div class="pro-name">
                                            小米CC9
                                        </div>
                                        <div class="pro-price">
                                            1799元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="javascript:;">
                                        </div>
                                        <div class="pro-name">
                                            小米CC9
                                        </div>
                                        <div class="pro-price">
                                            1799元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="javascript:;">
                                        </div>
                                        <div class="pro-name">
                                            小米CC9
                                        </div>
                                        <div class="pro-price">
                                            1799元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="javascript:;">
                                        </div>
                                        <div class="pro-name">
                                            小米CC9
                                        </div>
                                        <div class="pro-price">
                                            1799元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="javascript:;">
                                        </div>
                                        <div class="pro-name">
                                            小米CC9
                                        </div>
                                        <div class="pro-price">
                                            1799元
                                        </div>
                                    </a>
                                </li>
                                <li class="product">
                                    <a href="" target="_blank">
                                        <div class="pro-img">
                                            <img src="/imgs/nav-img/nav-1.png" alt="javascript:;">
                                        </div>
                                        <div class="pro-name">
                                            小米CC9
                                        </div>
                                        <div class="pro-price">
                                            1799元
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-menu">
                        <span>RedMi手机</span>
                        <div class="children"></div>
                    </div>
                    <div class="item-menu">
                        <span>电视</span>
                        <div class="children"></div>
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
export default {
    name: 'nav-header'
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
            .header-logo{
                display: inline-block;
                width: 55px;
                height: 55px;
                background-color: $colorA;
                a{
                    display: inline-block;
                    width: 110px;
                    height: 55px;
                    &:before{
                        content: ' ';
                        @include bgImg(55px,55px,'/imgs/mi-logo.png',55px);
                        transition: margin .3s;
                    }
                    &:after{
                        content: ' ';
                        @include bgImg(55px,55px,'/imgs/mi-home.png',55px);
                    }
                    &:hover:before{
                        margin-left: -55px;
                        transition: margin .3s;
                    }
                }
            }
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
                        }
                    }
                    .children{
                        position: absolute;
                        top: 112px;
                        left: 0;
                        height: 220px;
                        width: 1226px;
                        border-top: 1px solid #E5E5E5;
                        box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
                        z-index: 10;
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
                            &:last-child::before{
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
