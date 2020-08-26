<template>
  <div class="modal" v-show="showModal">
    <div class="mask"></div>
    <!-- 幕布 -->
     <div class="modal-dialog">
        <div class="modal-header">
            <span>标题</span>
            <a href="javascript:;" class="icon-close"></a>
        </div>
        <div class="modal-body">
            <slot name="body"></slot>
        </div>
        <div class="modal-footer">
            <div class="btn-group">
                <a href="javascript:;" class="btn">确定</a>
                <a href="javascript:;" class="btn btn-default">取消</a>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        //  弹框类型：小small、中、大large、表单form
        modalType: {
            typer: String,
            default: 'form'
        },
        //  弹框标题
        title: String,

        //  按钮类型：1：确定按钮，2：取消按钮，3：确定取消都有
        btnType: String,
        sureText: {
            type: String,
            default: '确定'
        },
        cancleText: {
            type: String,
            default: '取消'
        },
        showModal: Boolean
    }
}
</script>

<style lang="scss">
@import './../assets/scss/config.scss';
@import './../assets/scss/mixin.scss';
@import './../assets/scss/modal.scss';
//  引入的样式文件如果存在相互依赖引入问题，要注意先引入必须的文件
</style>
