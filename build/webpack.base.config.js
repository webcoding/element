const path = require('path')
const vueConfig = require('./vue-loader.config')
// 引入插件
const vConsolePlugin = require('vconsole-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

// const vConsole = require('vconsole');
// 接收运行参数(这里要支持参数精简化)
const argv = require('yargs')
    .describe('debug', 'debug 环境') // use 'webpack --debug'
    .argv;

const isProd = process.env.NODE_ENV === 'production'
const isDebug = !(isProd || process.env.NODE_ENV === 'test')
console.log('isDebug mode: ', isDebug)

var baseConfig = require('./config')
var config = baseConfig.client
var clientEntry = {
  app: config.entry,
  // vconsole: './node_modules/vconsole',
  vendor: [
    'es6-promise',
    // 'firebase/app',
    // 'firebase/database',
    'vue',
    'vue-router',
    'vuex',
    'vuex-router-sync',
  ],
}

// var clientEntry = isDebug ? Object.assign({}, clientEntry, {vconsole: vConsole }) : clientEntry

// console.log('path.resolve: ', path.resolve(__dirname,  'dist/static'))
// console.log('path.join:    ', path.join(__dirname, 'dist/static'))

// 发布前清空发布目录是有必要的，我们可以通过‘clean-webpack-plugin’插件解决：
// const CleanWebpackPlugin = require('clean-webpack-plugin');
// 编译完自动打开浏览器
// var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devtool: '#source-map',
  entry: clientEntry,
  // 怎样存储输出结果以及存储到哪里
  output: {
    // path: path.resolve(__dirname, '../dist'),
    // publicPath: '/dist/', //内存输出，也会到这里
    // filename: '[name].[chunkhash].js'
    // 仅仅告诉 webpack 结果存储在哪里(输出目录)
    // path.resolve 以应用程序为起点，根据参数字符串解析出一个绝对路径，获取绝对地址
    path: path.resolve(__dirname, '../dist/static'), // 开发模式
    // path: path.resolve(__dirname, '../dist/static'), // 开发模式
    // 路径结合、合并
    // path: path.join(process.cwd(), 'dist/static'),

    // 发布后，资源的引用目录
    // publicPath 被许多插件用于生产模式，如配置静态资源引用 cdn 的等
    publicPath: '/static/', // 用于输出，生产模式可设置 cdn 地址，如 http://qn.cdn.cn:8000/

    // 文件名称，可包含路径（资源添加版本号）
    // [hash]：webpack编译会产生一个hash值
    // [chunkhash]：每个模块的hash值
    // [chunkhash:8]：取[chunkhash]的前8位
    // 荐发布模式使用版本号，其他模式无需使用，热更新模式不支持‘chunkhash’，但是支持‘hash’
    filename: '[name].[chunkhash].js',

    // 按需加载模块时输出的文件名称
    // chunkFilename: 'js/[name].js',
  },
  plugins: [
    // 此组件会拦截 console 的报错，导致报错定位出现一定问题
    // new vConsolePlugin({ enable: isDebug }),
    // new UglifyJsPlugin({
    //   sourceMap: true,
    //   compress: {
    //     warnings: true,
    //   },
    // }),
    // 全局引入 jquery 等插件，不需要每次使用时 import
    // new webpack.ProvidePlugin({
    //   $: "jquery",
    //   jQuery: "jquery",
    //   "window.jQuery": "jquery",
    //   "_": "underscore",
    // }),
    // new CleanWebpackPlugin(['dist'], {
    //   root: '', // An absolute path for the root  of webpack.config.js
    //   verbose: true,// Write logs to console.
    //   dry: false // Do not delete anything, good for testing.
    // }),
    // new OpenBrowserPlugin({url: 'http://localhost:8080' + PATHS.publicPath + 'index.html'}),
    // // 使用其它语言，默认情况下中文语言包依旧是被引入的，可以使用 IgnorePlugin 忽略掉，减少文件体积
    // new webpack.IgnorePlugin('./locale/lang/zh-CN/')
    //
    // // it always better if OfflinePlugin is the last plugin added
    // var OfflinePlugin = require('offline-plugin');
    // new OfflinePlugin(),
  ],
  resolve: {
    // // (was split into `root`, `modulesDirectories` and `fallback` in the old options)
    // //（以前这个选项分散在 `root`、`modulesDirectories` 和 `fallback` 三处。）
    // // 模块查找路径：指定解析器查找模块的目录。
    // // 相对路径会在每一层父级目录中查找（类似 node_modules）。
    // // 绝对路径会直接查找。
    // // 将按你指定的顺序查找。
    modules: [
      path.resolve(__dirname, "src"),
      "node_modules",
    ],
    // // root: path.join(__dirname, "src"),
    // // fallback: [path.join(__dirname, '../node_modules')],
    //
    // // These JSON files are read in directories
    // // 描述文件：这些 JSON 文件将在目录中被读取。
    // descriptionFiles: ["package.json", "bower.json"],
    //
    // // These fields in the description files are looked up when trying to resolve the package directory
    // // 入口字段：在解析一个包目录时，描述文件中的这些字段所指定的文件将被视为包的入口文件。
    // mainFields: ["main", "browser"],
    //
    // // These files are tried when trying to resolve a directory
    // // 入口文件：在解析一个目录时，这些文件将被视为目录的入口文件。
    // mainFiles: ["index"],
    //
    // // These fields in the description files offer aliasing in this package
    // // The content of these fields is an object where requests to a key are mapped to the corresponding value
    // // 别名字段：描述文件中的这些字段提供了该包的别名对照关系。
    // // 这些字段的内容是一个对象，每当请求某个键名时，就会映射到对应的键值。
    // aliasFields: ["browser"],
    //
    // // These extensions are tried when resolving a file
    // // 扩展名：在解析一个文件时，将会尝试附加这些文件扩展名。
    // extensions: [".js", ".json", ".vue"],
    //
    // // If false it will also try to use no extension from above
    // // 强制使用扩展名：如果值为 false，在解析一个文件时，也会尝试匹配无扩展名的文件。
    // enforceExtension: false,
    //
    // // These extensions are tried when resolving a module
    // // 模块后缀名：在解析一个模块名时，将会尝试附加这些后缀名。
    // moduleExtensions: ["-loader"],
    //
    // // If false it's also try to use no module extension from above
    // // 强制使用模块后缀名：如果值为 false，在解析一个模块名时，也会尝试匹配不包含后缀名的模块。
    // enforceModuleExtension: false,

    // 另外：在解析一个模块名时，会使用这个别名映射表。
    alias: {
      // These aliasing is used when trying to resolve a module
      // 'vue$': 'vue/dist/vue',
      // 'src': path.resolve(__dirname, '../src'),
      // 'assets': path.resolve(__dirname, '../src/assets'),
      // 'components': path.resolve(__dirname, '../src/components'),
      'public': path.resolve(__dirname, '../public'),
      // jquery: path.resolve(__dirname, "vendor/jquery-2.0.0.js")
    }
  },
  module: {
    noParse: /es6-promise\.js$/, // avoid webpack shimming process
    // webpack 默认只识别 js 文件，所以对于html也要使用对应的loader
    rules: [
      // {
      //   test: /\.js$/,
      //   enforce: "pre",
      //   loader: "eslint-loader"
      // },
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
            options: vueConfig,
          }
        ],
      },
      {
        test: /\.js$/,
        loader: 'buble-loader',
        exclude: /node_modules/,
        options: {
          objectAssign: 'Object.assign'
        }
      },
      // {
      //   test: /\.scss$/,
      //   use: ExtractTextPlugin.extract({
      //     fallback: "style-loader",
      //     use: "css-loader"
      //   })
      // },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ],
      },
      // 图片 loader
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        options: {
          // limit=10000 ： 10kb
          // 图片大小小于10kb 采用内联的形式，否则输出图片
          limit: 10000,
          name: '[name].[ext]?[hash]',
          // name: '/img/[name]-[hash:8].[ext]'
        }
      },
      // // 字体loader
      // {
      //     test: /\.(eot|woff|woff2|ttf|svg)$/,
      //     loader: 'url-loader',
      //     options: {
      //       limit: 5000,
      //       name: '/font/[name]-[hash:8].[ext]'
      //     }
      // },
    ]
  }
}
