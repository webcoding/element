process.env.VUE_ENV = 'server'
const isProd = process.env.NODE_ENV === 'production'

// const baseConfig = require('./config')

// import opn from 'opn'
// import fs from 'fs'
// import path from 'path'
// import express from 'express'
// import favicon from 'serve-favicon'
// import compression from 'compression'
// import serialize from 'serialize-javascript'
// import {createBundleRenderer} from 'vue-server-renderer'

const opn = require('opn')
const fs = require('fs')
const path = require('path')
const express = require('express')
const favicon = require('serve-favicon')
const compression = require('compression')
const serialize = require('serialize-javascript')
const createBundleRenderer = require('vue-server-renderer').createBundleRenderer

// path.resolve([from ...], to)
// 该方法属于path模块  将参数 to 位置的字符解析到一个绝对路径里(相对于 from)。
// 相当于调用 path.join(__dirname, file)
const resolve = file => path.resolve(__dirname, file)

console.log('__dirname ', __dirname)
console.log('__filename ', __filename)
console.log('process.cwd() ', process.cwd())

// 迁移到 Express 4.x
// http://www.cnblogs.com/haogj/p/3985438.html
const app = express()
const DEFAULT_RENDERER_OPTIONS = {
  cache: require('lru-cache')({
    max: 1000,
    maxAge: 1000 * 60 * 15
  })
}

// function getFileName (config, projectName) {
//   return config.output.filename.replace('[name]', projectName)
// }

let indexHTML // generated by html-webpack-plugin
let renderer  // created from the webpack-generated server bundle
// const createRenderer = fs => {
//   const bundlePath = path.resolve(process.cwd(), 'build/server-bundle.js')
//   return createBundleRenderer(fs.readFileSync(bundlePath, 'utf-8'))
// }
function createRenderer (bundle) {
  // https://github.com/vuejs/vue/blob/next/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, DEFAULT_RENDERER_OPTIONS)
}

function parseIndex (template) {
  const contentMarker = '<!-- APP -->'
  const i = template.indexOf(contentMarker)
  return {
    head: template.slice(0, i),
    tail: template.slice(i + contentMarker.length)
  }
}

if (isProd) {
  // use nginx to serve static files in real
  //
  // in production: create server renderer and index HTML from real fs
  // const bundlePath = path.join(baseConfig.server.output.path, getFileName(serverConfig, baseConfig.projectName))
  renderer = createRenderer(fs.readFileSync(resolve('../dist/static/server-bundle.js'), 'utf-8'))
  indexHTML = parseIndex(fs.readFileSync(resolve('../dist/index.html'), 'utf-8'))
  // console.log(indexHTML)
} else {
  // in development: setup the dev server with watch and hot-reload,
  // and update renderer / index HTML on file change.
  require('./setup-dev-server')(app, {
    bundleUpdated: bundle => {
      renderer = createRenderer(bundle)
    },
    indexUpdated: index => {
      // console.log('index: ', index)
      indexHTML = parseIndex(index)
      // console.log(indexHTML)
    }
  })
}

// https://github.com/expressjs/serve-static
const serve = (path, cache, opts) => express.static(resolve(path), Object.assign({}, {
  maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0
}, opts))

// Set header to force download
// function setHeaders(res, path) {
//   res.setHeader('Content-Disposition', contentDisposition(path))
// }

// 服务应该启动以 dist 为根目录

app.use(compression({ threshold: 0 }))
// app.use(favicon('../public/logo-48.png'))
// app.use('/dist', serve('../dist'))
app.use('/static', serve('../dist/static'))
app.use('/service-worker.js', serve('../dist/static/service-worker.js'))
app.use('/manifest.json', serve('../manifest.json'))
app.use('/public', serve('../public'))


// 注意 使用 vue 的 history 模式，需要服务器端配置
// URL 匹配不到任何静态资源，全部返回同一个 index.html（app 的入口页面）
// # nginx
// location / {
//   try_files $uri $uri/ /index.html;
// }
// 或者使用 express 插件 connect-history-api-fallback
app.get('*', (req, res) => {
  if (!renderer) {
    return res.end('waiting for compilation... refresh in a moment.')
  }else{
    console.log('server ready。。。')
  }

  var streamNum = 1;
  res.setHeader('Content-Type', 'text/html')
  var s = Date.now()

  const context = { url: req.url }
  const renderStream = renderer.renderToStream(context)
  console.log('render: ', context)

  renderStream.once('data', () => {
    console.log('stream: ', streamNum++);
    res.write(indexHTML.head)
  })

  renderStream.on('data', chunk => {
    console.log('stream: ', streamNum++);
    res.write(chunk)
  })

  renderStream.on('end', () => {
    // embed initial store state
    if (context.initialState) {
      res.write(
        `<script>window.__INITIAL_STATE__=${
          serialize(context.initialState, { isJSON: true })
        }</script>`
      )
    }
    res.end(indexHTML.tail)
    console.log(`whole request: ${Date.now() - s}ms`)
  })

  renderStream.on('error', err => {
    // 制作一个对应的 404 页面
    if (err && err.code === '404') {
      res.status(404).end('404 | Page Not Found')
      return
    }
    // Render Error Page or Redirect
    // 制作一个对应的 500 页面
    res.status(500).end('Internal Error 500')
    console.error(`error during render : ${req.url}`)
    console.error(err)
  })
})


// Error: listen EADDRINUSE :::8080
// 端口被占用
const port = process.env.PORT || 8001
app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log(`server started at ${uri}`)
  opn(uri)
})
