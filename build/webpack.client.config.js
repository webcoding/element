const webpack = require('webpack')
const base = require('./webpack.base.config')
const vueConfig = require('./vue-loader.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// webpack 默认会将css文件与当前js文件打包一起，但是这种方式会阻塞页面的加载，因为css的执行要等待js文件加载进来
// 所以我们会把css从js文件中提取出来，放到一个单独的css文件中，使用 extract-text-webpack-plugin 插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const SWPrecachePlugin = require('sw-precache-webpack-plugin')

const isProd = process.env.NODE_ENV === 'production'
var baseConfig = require('./config')
var config = baseConfig.client

var clientConfig = Object.assign({}, base, {
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {
      // 'create-api': './create-api-client.js',
      'create-api': config.api,
    })
  },
  plugins: (base.plugins || []).concat([
    // strip comments in Vue code
    // 全局环境变量
    new webpack.DefinePlugin({
      // 全局标识 if(__DEV__){ console.log('debug 模式'); }
      // __DEV__: debug
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"',
    }),
    // extract vendor chunks for better caching
    // 提取公共文件，生成 vendor 文件
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    }),
    // generate output HTML
    // 生成多个 html，使用多个 new HtmlWebpackPlugin
    // http://www.cnblogs.com/haogj/p/5160821.html
    new HtmlWebpackPlugin({
      // title: '',               // 用来生成页面的 title 元素
      // favicon: config.favicon,    // 添加特定的 favicon 路径到输出的 HTML 文件中
      filename: config.filename,  // 默认是 index.html，也可以配置目录路径，相对于 path(即 output.path)
      // template: 'src/index.template.html',
      template: config.template,  // 模板文件路径，支持加载器，比如 html!./index.html 也可以是个函数
      // inject: true,       // true | 'head' | 'body' | false  ,注入所有的资源到特定的 template 或者 templateContent 中，
                          // 如果设置为 true 或者 body，所有的 javascript 资源将被放置到 body 元素的底部，
                          // 'head' 将放置到 head 元素中
      // hash: true | false, 默认值 true, 添加一个唯一的 webpack 编译 hash 到所有包含的脚本和 CSS 文件，对于解除 cache 很有用。
      // cache: true | false，默认值 true, 仅仅在文件修改之后才会发布文件。
      // showErrors: true | false, 默认值 true,错误信息会写入到 HTML 页面中
      // minify: {           // minify: {} | false , 传递 html-minifier 选项给 minify 输出
      //   removeComments: true,     //移除HTML中的注释
      //   collapseWhitespace: true, //删除空白符与换行符
      // }
    })
  ])
})

if (isProd) {
  // Use ExtractTextPlugin to extract CSS into a single file
  // so it's applied on initial render.
  // vueConfig is already included in the config via LoaderOptionsPlugin
  // here we overwrite the loader config for <style lang="stylus">
  // so they are extracted.
  // 内部使用css-loader和stylus-loader来收集所有的css汇总到独立的 style.xxx.css 文件中
  vueConfig.loaders = {
    // postcss: ExtractTextPlugin.extract({
    //   // loader: 'css-loader!stylus-loader',
    //   loader: 'css-loader!postcss-loader',
    //   // loader: 'css-loader!sass-loader', // 换成 sass，还要安装 node-sass的
    //   fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    // })
    // stylus: ExtractTextPlugin.extract({
    sass: ExtractTextPlugin.extract({
      // loader: 'css-loader!stylus-loader',
      // loader: 'css-loader!postcss-loader',
      loader: 'css-loader!sass-loader', // 换成 sass，还要安装 node-sass的
      fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader
    }),
  }

  clientConfig.plugins.push(
    // 使用单独的 css 文件
    new ExtractTextPlugin('styles.[hash].css'),
    // this is needed in webpack 2 for minifying CSS
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    // minify JS
    // 获取bundle.js然后压缩和混淆内容以减小文件体积
    new webpack.optimize.UglifyJsPlugin({
      // mangle: {
      //   // 排除不想要压缩的对象名称
      //   except: ['$super', '$', 'exports', 'require', 'module', '_']
      // },
      compress: {
        warnings: false
      },
      // output: {
      //   comments: false,
      // }
    }),
    // SWPrecachePlugin will not work with Webpack Dev Server
    new SWPrecachePlugin({
      cacheId: 'vue-hn',
      filename: 'service-worker.js',
      dontCacheBustUrlsMatching: /./,
      staticFileGlobsIgnorePatterns: [/index\.html$/, /\.map$/]
    })
  )
}

module.exports = clientConfig
