let baseURL
//  process.env用来获取nodejs进程当中的环境变量
//  CORS跟jsonp设置的
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api'
        break
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api'
        break
    case 'production':
        baseURL = 'http://prod-mall-pre.springboot.cn/api'
        break
    default:
        baseURL = 'http://mall-pre.springboot.cn/api'
        break
}

export default {
    baseURL
}
