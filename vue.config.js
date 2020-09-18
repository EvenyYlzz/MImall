module.exports = {
    devServer: {
        host: 'localhost',
        port: 8080,
        proxy: {
            '/api': {
                target:'http://mall-pre.springboot.cn',
                changeOrigin: true,
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    //  路由根路径前添加
    // publicPath: '/app',
    //  输出文件夹
    // outputDir: 'dist',
    //  输出单一的文件页名
    // indexPath: 'index.html',
    //  lintOnSave，eslint开关
    //  开关生成map文件，以防别人通过F12查看源码分析业务、代码
    productionSourceMap: false
}