const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 基本路径
    baseUrl: process.env.NODE_ENV === 'production' ? './' : './',
    chainWebpack: config => {
        config.resolve.alias
            .set('api', resolve('src/api'))
            .set('common', resolve('src/common'))
            .set('components', resolve('src/components'))
            .set('pages', resolve('src/pages'))
            .set('router', resolve('src/router'))
            .set('store', resolve('src/store'))
    },
    productionSourceMap: false,
    css: {
        // sourceMap: true,
        // loaderOptions: {
        //     postcss: {
        //         // options here will be passed to postcss-loader
        //         plugins: []
        //     }
        // }
    }
}

// module.exports = {
//     /** 区分打包环境与开发环境
//      * process.env.NODE_ENV==='production'  (打包环境)
//      * process.env.NODE_ENV==='development' (开发环境)
//      * baseUrl: process.env.NODE_ENV==='production'?"https://cdn.didabisai.com/front/":'front/',
//      */
//     // 基本路径
//     baseUrl: '/',
//     // 输出文件目录
//     outputDir: 'dist',
//     // build时放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
//     // assetsDir: '',
//     // eslint-loader 是否在保存的时候检查
//     lintOnSave: true,
//     // 默认在生成的静态资源文件名中包含hash以控制缓存
//     filenameHashing: true,
//     // use the full build with in-browser compiler?
//     // https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
//     compiler: false,
//     // webpack配置
//     // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
//     chainWebpack: () => {},
//     configureWebpack: () => {},
//     //如果想要引入babel-polyfill可以这样写
//     // configureWebpack: (config) => {
//     //   config.entry = ["babel-polyfill", "./src/main.js"]
//     // },
//     // vue-loader 配置项
//     // https://vue-loader.vuejs.org/en/options.html
//     vueLoader: {},
//     // 生产环境是否生成 sourceMap 文件
//     productionSourceMap: true,
//     // css相关配置
//     css: {
//         // 是否使用css分离插件 ExtractTextPlugin
//         extract: true,
//         // 开启 CSS source maps?
//         sourceMap: false,
//         // css预设器配置项
//         loaderOptions: {},
//         // 启用 CSS modules for all css / pre-processor files.
//         modules: false
//     },
//     // use thread-loader for babel & TS in production build
//     // enabled by default if the machine has more than 1 cores
//     parallel: require('os').cpus().length > 1,
//     // 是否启用dll
//     // See https://github.com/vuejs/vue-cli/blob/dev/docs/cli-service.md#dll-mode
//     dll: false,
//     // PWA 插件相关配置
//     // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
//     pwa: {},
//     // webpack-dev-server 相关配置
//     devServer: {
//         open: process.platform === 'darwin',
//         host: '0.0.0.0',
//         port: 8080,
//         https: false,
//         hotOnly: false,
//         proxy: null, // 设置代理
//         before: app => {}
//     },
//     // 第三方插件配置
//     pluginOptions: {
//         // ...
//     }
// }