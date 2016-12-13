const webpack = require('webpack')
const base = require('./webpack.base.config')

const isProd = process.env.NODE_ENV === 'production'
var baseConfig = require('./config')
var config = baseConfig.server

module.exports = Object.assign({}, base, {
  target: 'node',
  devtool: false,
  // entry: './src/server-entry.js',
  entry: config.entry,
  output: Object.assign({}, base.output, {
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  }),
  resolve: {
    alias: Object.assign({}, base.resolve.alias, {
      // 'create-api': './create-api-server.js',
      'create-api': config.api,
    })
  },
  externals: Object.keys(require('../package.json').dependencies),
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
  ]
})
