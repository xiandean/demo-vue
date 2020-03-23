const path = require('path')

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    // 基本路径
    // 从 Vue CLI 3.3 起已弃用，请使用publicPath
    // baseUrl: '/',
    publicPath: process.env.NODE_ENV === 'production' ? './' : './',

    // 输出文件目录
    // outputDir: 'dist',

    // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    // assetsDir: '',

    // 指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    // indexPath: 'index.html',

    // 默认情况下，生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存，你可以通过将这个选项设为 false 来关闭文件名哈希。
    // filenameHashing: true,

    // 在 multi-page 模式下构建应用。
    // pages: {
    //     index: {
    //         // page 的入口
    //         entry: 'src/index/main.js',
    //         // 模板来源
    //         template: 'public/index.html',
    //         // 在 dist/index.html 的输出
    //         filename: 'index.html',
    //         // 当使用 title 选项时,
    //         // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
    //         title: 'Index Page',
    //         // 在这个页面中包含的块，默认情况下会包含
    //         // 提取出来的通用 chunk 和 vendor chunk。
    //         chunks: ['chunk-vendors', 'chunk-common', 'index']
    //     },
    //     // 当使用只有入口的字符串格式时，
    //     // 模板会被推导为 `public/subpage.html`
    //     // 并且如果找不到的话，就回退到 `public/index.html`。
    //     // 输出文件名会被推导为 `subpage.html`。
    //     subpage: 'src/subpage/main.js'
    // },

    // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
    // lintOnSave: true,

    // 是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
    // runtimeCompiler: false,

    // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。Type: Array<string | RegExp>
    // transpileDependencies: [],

    // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
    productionSourceMap: false,

    // 设置生成的 HTML 中 <link rel="stylesheet"> 和 <script> 标签的 crossorigin 属性。
    // crossorigin: 'anonymous',

    // 在生成的 HTML 中的 <link rel="stylesheet"> 和 <script> 标签上启用 Subresource Integrity (SRI)。如果你构建后的文件是部署在 CDN 上的，启用该选项可以提供额外的安全性。
    // integrity: false,

    // 如果这个值是一个对象，则会通过 webpack-merge 合并到最终的配置中。如果这个值是一个函数，则会接收被解析的配置作为参数。该函数及可以修改配置并不返回任何东西，也可以返回一个被克隆或合并过的配置版本。
    configureWebpack: {
        resolve: {
            alias: {
                api: resolve('src/api'),
                common: resolve('src/common'),
                components: resolve('src/components'),
                pages: resolve('src/pages'),
                router: resolve('src/router'),
                store: resolve('src/store'),
            },
        },
        // plugins: [
        //     new MyAwesomeWebpackPlugin()
        // ],
    },
    // configureWebpack: config => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 为生产环境修改配置...
    //     } else {
    //         // 为开发环境修改配置...
    //     }
    // },

    // 是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
    // chainWebpack: config => {
    //     // config.resolve.alias
    //     //     .set('api', resolve('src/api'))
    //     //     .set('common', resolve('src/common'))
    //     //     .set('components', resolve('src/components'))
    //     //     .set('pages', resolve('src/pages'))
    //     //     .set('router', resolve('src/router'))
    //     //     .set('store', resolve('src/store'))

    //     // config.module
    //     //     .rule('vue')
    //     //     .use('vue-loader')
    //     //     .loader('vue-loader')
    //     //     .tap(options => {
    //     //         // 修改它的选项...
    //     //         return options
    //     //     })
    //     // }
    // },

    // css相关配置
    // css: {
    //     // 默认情况下，只有 *.module.[ext] 结尾的文件才会被视作 CSS Modules 模块。设置为 true 后你就可以去掉文件名中的 .module 并将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块。
    //     // modules: false,

    //     // 是否将组件中的 CSS 提取至一个独立的 CSS 文件中 (而不是动态注入到 JavaScript 中的 inline 代码)。Default: 生产环境下是 true，开发环境下是 false
    //     // extract: true,

    //     // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能。
    //     // sourceMap: false,

    //     // 向 CSS 相关的 loader 传递选项
    //     // loaderOptions: {
    //     //     // 给 sass-loader 传递选项
    //     //     sass: {
    //     //         // @/ 是 src/ 的别名
    //     //         // 所以这里假设你有 `src/variables.sass` 这个文件
    //     //         data: `@import "~@/variables.sass"`
    //     //     },
    //     //     // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
    //     //     // 因为 `scss` 语法在内部也是由 sass-loader 处理的
    //     //     // 但是在配置 `data` 选项的时候
    //     //     // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
    //     //     // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
    //     //     scss: {
    //     //         data: `@import "~@/variables.scss";`
    //     //     },
    //     //     // 给 less-loader 传递 Less.js 相关选项
    //     //     less: {
    //     //         // http://lesscss.org/usage/#less-options-strict-units `Global Variables`
    //     //         // `primary` is global variables fields name
    //     //         globalVars: {
    //     //             primary: '#fff'
    //     //         }
    //     //     }
    //     // },
    // },

    // 所有 webpack-dev-server 的选项都支持。
    // devServer: {
    //     // 在devServer启动且第一次构建完成时，自动用我们的系统的默认浏览器去打开要开发的网页
    //     // open: false,

    //     // 默认是 localhost。如果你希望服务器外部可访问，指定如下 host: '0.0.0.0'，设置之后可以访问ip地址
    //     // host: '0.0.0.0',

    //     // 指定端口
    //     // port: 8080,

    //     // 配置是否启用模块的热替换功能。
    //     // hot:true,

    //     // hot 和 hotOnly 的区别是在某些模块不支持热更新的情况下，前者会自动刷新页面，后者不会刷新页面，而是在控制台输出热更新失败。
    //     // hotOnly: false,

    //     // 是否为https访问
    //     // https: false,

    //     // 代理，Type: string | Object
    //     // 这会告诉开发服务器将任何未知请求 (没有匹配到静态文件的请求) 代理到http://localhost:4000。
    //     // proxy: 'http://localhost:4000',
    //     // 完整的选项可以查阅 http-proxy-middleware
    //     // proxy: {
    //     //     '/api': {
    //     //         // 目标接口域名
    //     //         target: 'http://localhost:4000',

    //     //         // false为http访问，true为https访问
    //     //         // secure: false,

    //     //         //是否跨域
    //     //         changeOrigin: true,

    //     //         // 代理websockets
    //     //         // ws: true,

    //     //         // 重写接口
    //     //         // pathRewrite: {
    //     //             // rewrite path
    //     //             // '^/api/old-path': '/api/new-path',

    //     //             // remove base path
    //     //             // '^/api/remove/path': '/path',
    //     //         // }
    //     //     },
    //     //     // '/foo': {
    //     //     //     target: '<other_url>'
    //     //     // }
    //     // },
    // }

    // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建。
    // parallel: require('os').cpus().length > 1,

    // 向 PWA 插件传递选项。see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
    // pwa: {},

    // 传递任何第三方插件选项
    // pluginOptions: {
    //     // foo: {
    //     //     // 插件可以作为 `options.pluginOptions.foo` 访问这些选项。
    //     // }
    // },
}