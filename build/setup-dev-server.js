// import path from 'path'
// import webpack from 'webpack'
// import MFS from 'memory-fs'
// import clientConfig from './webpack.client.config'
// import serverConfig from './webpack.server.config'
const path = require('path')
const webpack = require('webpack')
const MFS = require('memory-fs')
const clientConfig = require('./webpack.client.config')
const serverConfig = require('./webpack.server.config')

module.exports = function setupDevServer (app, opts) {
  // modify client config to work with hot middleware
  clientConfig.entry.app = ['webpack-hot-middleware/client', clientConfig.entry.app]
  // 开发模式不支持 chunkhash
  clientConfig.output.filename = '[name].js'
  clientConfig.plugins.push(
    // 热更新可以在你代码改变的时候即时编译输出，不用每次都要从都重新编译一遍，
    // 并且除了第一次编译比较慢，后面的编译都是增量编译，速度很快。
    new webpack.HotModuleReplacementPlugin({
      // multiStep: true
    }),
    new webpack.NoErrorsPlugin()
  )

  // dev middleware
  const clientCompiler = webpack(clientConfig)
  // 启动服务的时候 打包并监听客户端用到的文件，
  // webpack-dev-middleware 开发模式，会打包js在内存里面，你改了文件，它也会重新打包
  const devMiddleware = require('webpack-dev-middleware')(clientCompiler, {
    // publicPath: 'dist/static',
    publicPath: clientConfig.output.publicPath,
    stats: {
      colors: true,
      chunks: false,
      // children: false,
      // chunks: false,
      // chunkModules: false
    }
  })
  app.use(devMiddleware)
  clientCompiler.plugin('done', () => {
    console.log('----- done -----')
    // const filePath = path.join(clientConfig.output.path, 'index.html')
    const fs = devMiddleware.fileSystem
    const filePath = path.join(clientConfig.output.path, '../index.html')
    console.log('clientCompiler filePath: ', filePath)
    if (fs.existsSync(filePath)) {
      const index = fs.readFileSync(filePath, 'utf-8')
      opts.indexUpdated(index)
    }
  })

  // hot middleware
  app.use(require('webpack-hot-middleware')(clientCompiler))

  // watch and update server renderer
  const serverCompiler = webpack(serverConfig)
  const mfs = new MFS()
  const outputPath = path.join(serverConfig.output.path, serverConfig.output.filename)

  console.log('outputPath: ', outputPath)
  serverCompiler.outputFileSystem = mfs
  serverCompiler.watch({}, (err, stats) => {
    if (err) throw err
    stats = stats.toJson()
    stats.errors.forEach(err => console.error(err))
    stats.warnings.forEach(err => console.warn(err))
    opts.bundleUpdated(mfs.readFileSync(outputPath, 'utf-8'))
  })
}
