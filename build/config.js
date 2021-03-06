// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

// var argv = process.argv.slice(2);
// console.log('process.argv', argv);

var projectPath = './demo/';

module.exports = {
  // favicon: 'static/favicon.png',
  // projectName: 'src',
  filename: 'index.html',
  template: 'index.tpl',
  // manifest: './manifest.json',
  client: {
    api: './create-api-client.js',
    entry: projectPath + 'client-entry.js',
    filename: '../index.html',
    template: projectPath + 'index.tpl',
    dist: '/dist',
  },
  server: {
    api: './create-api-server.js',
    entry: projectPath + 'server-entry.js',
    filename: '../index.html',
    template: projectPath + 'index.tpl',
    dist: '/dist',
  }

  // filename: 'index.html',
  // template: path.resolve(__dirname, '../src/index.html'),
  // build: {
  //   env: require('./prod.env'),
  //   index: path.resolve(__dirname, '../dist/index.html'),
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: './',
  //   productionSourceMap: true,
  //   // Gzip off by default as many popular static hosts such as
  //   // Surge or Netlify already gzip all static assets for you.
  //   // Before setting to `true`, make sure to:
  //   // npm install --save-dev compression-webpack-plugin
  //   productionGzip: false,
  //   productionGzipExtensions: ['js', 'css']
  // },
  // dev: {
  //   env: require('./dev.env'),
  //   port: 8080,
  //   index: path.resolve(__dirname, '../src/index.html'),
  //   assetsRoot: path.resolve(__dirname, '../dist'),
  //   assetsSubDirectory: 'static',
  //   assetsPublicPath: './',
  //   proxyTable: {},
  //   // CSS Sourcemaps off by default because relative paths are "buggy"
  //   // with this option, according to the CSS-Loader README
  //   // (https://github.com/webpack/css-loader#sourcemaps)
  //   // In our experience, they generally work as expected,
  //   // just be aware of this issue when enabling this option.
  //   cssSourceMap: false
  // }
}
