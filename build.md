
# 构建相关

> 可维护性第一原则

```
TODO, FIXME, CHANGED, XXX, IDEA, HACK, NOTE, REVIEW, NB, BUG, QUESTION, COMBAK, TEMP
各种代码状态标记
    FIXME:
    TODO:
    CHANGED:
    XXX:
    IDEA:
    HACK:
    NOTE:
    REVIEW:
    BUG:
    QUESTION:
    COMBAK:
    TEMP:
Bug当前状态 可能值：
    OPEN:
    CLOSE:  已经修复，最终状态：关闭
    REOPEN: 重新打开
Bug是否已经解决 可能值：
    INVALID:
    FIXED:（已修复，待确认）
```




根据不同环境以及场景，构建不同的版本输出，参数如下：

```
// TODO: 待处理
// 环境 dev prod test
// 端输出 client server hybird wechat/wxapp
// 多容器(宿主)及运行时(runtime)

npm run dev(对应 client)
npm run build(仅编译不启动 server)
npm run start(npm run prod)
npm run test(测试)
```

## 目录结构

构建时，服务应该以 dist 为根建立服务，并把启动服务的脚本输出到此目录

```
.
├── build/               # 构建监本目录
├── demo/                # 示例
│   ├── assets/            # 放置需要经由 Webpack 处理的静态文件
│   ├── components/        # 组件目录（COMPONENT）
│   ├── directives/        # 指令
│   ├── filters/           # 过滤器
│   ├── routes/            # 路由 或使用单文件 route.js（和 main.js 同级）
│   ├── services/          # 服务（SERVICE，用于统一管理 XHR 请求）
│   ├── views/             # 路由视图基页（VIEW）
│   ├── tpl/               # 模板文件夹
│   │   ├── index.html       # 默认模板，可以放多个模板
│   │   ├── output.js        # 使用多个模板时的输出配置
│   ├── App.vue            # 启动文件
│   ├── main.js            # 入口 js
├── node_modules/        # 依赖的 node 工具包目录
├── dist/                # build 生成的生产环境下的项目
├── src/                 # 源码目录（开发都在这里进行）
│   ├── assets/            # 放置需要经由 Webpack 处理的静态文件
│   ├── mixins/            # 混入
│   ├── packages/          # 组件包
│   ├── utils/             # 工具函数
│   ├── styles/            # 样式
│   ├── index.js           # 组件汇总输出
├── static/              # 放置无需经由 Webpack 处理的静态文件
|                          静态文件合并，不要放置令人混淆的多个目录结构
├── test/                # 测试文件目录
├── .babelrc             # Babel 转码配置
├── .eslintrc.js         # ES 语法检查配置
├── .eslintignore        # （配置）ESLint 检查中需忽略的文件（夹）
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # 项目描述文件
```

组件库格式

```
src/packages/modules_name/
    ├── src/ 该组件相关实现
    ├── demo/ 该组件使用示例 demo
    ├── test/  该组件单元测试用例
    ├── index.js  入口文件
    ├── *.md  该组件相关说明等
```


## 开发环境依赖模块说明

webpack 已升级到2.x，参见 http://javascriptplayground.com/blog/2016/10/moving-to-webpack-2/

```
webpack                               // 用来构建打包程序
webpack-dev-server                    // 开发环境下，设置代理服务器
    "scripts": "webpack-dev-server --hot --inline"
    “inline” 为入口页面添加“热加载”功能
    “hot”选项则开启“热替换（Hot Module Reloading）两个都设置，此优先级更高，先尝试 HMR，失败则刷新页面
html-webpack-plugin                   // html 文件编译
url-loader                            // 图片  转化成base64格式
file-loader                           // 字体  将字体文件打包
css-loader                            // css  生成
less                                  // css  预处理器less
less-loader                           // css  预处理器less的webpack插件
style-loader                          // css  插入到style标签
autoprefixer-loader                   // css  浏览器兼容性问题处理
babel-core                            // ES6  代码转换器
babel-loader                          // ES6  代码转换器，webpack插件
babel-plugin-transform-object-assign  // ES6  Object.assign方法做兼容处理
babel-preset-es2015                   // ES6  代码编译成现在浏览器支持的ES5
babel-preset-stage-0                  // ES6  ES7要使用的语法阶段
vue-loader                            // vue  组件编译
babel-helper-vue-jsx-merge-props      // vue  jsx语法编译
babel-plugin-syntax-jsx               // vue  jsx语法编译
babel-plugin-transform-vue-jsx        // vue  jsx语法编译

cross-env                             // 解决跨平台设置 NODE_ENV 的问题

vue                                   // 构建用户界面的
vue-router                            // 路由
vuex                                  // 组件状态管理
vue-validator                         // 验证
vue-resource                          // 资源加载


"scripts": {
  "build": "webpack  --profile --progress --colors --display-error-details",
  "dev": "webpack  --display-modules --profile --progress --colors --display-error-details",
  "dev-hrm": "webpack-dev-server --config"
}

color 输出结果带彩色，比如：会用红色显示耗时较长的步骤
profile 输出性能数据，可以看到每一步的耗时
progress 输出当前编译的进度，以百分比的形式呈现
display-modules 默认情况下 node_modules 下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
display-error-details 输出详细的错误信息
webpack-dev-server 将会开启热更新
```

## 关于 postcss

下面是一些最常用的组件，可基于 postcss-salad 二次开发

```
postcss-partial-import: W3C and Sass-like imports
postcss-mixins: Sass-like mixins
postcss-advanced-variables: Sass-like variables and methods
postcss-custom-selectors: W3C custom selectors
postcss-custom-media: W3C custom media queries
postcss-custom-properties: W3C custom variables
postcss-media-minmax: W3C < <= >= > media queries
postcss-color-function: W3C color methods
postcss-nesting: W3C nested selectors
postcss-nested: Sass-like nested selectors
postcss-atroot: place rules back up to the root
postcss-property-lookup: reference other property values
postcss-extend: W3C and Sass-like extend methods
postcss-selector-matches: W3C multiple matches pseudo-classes
postcss-selector-not: W3C multiple not pseudo-classes
```


## 常见问题

此项目结合 vue-cli init webpack 以及 vue-hackernews-2.0 运行

#### PhantomJS 单元测试不能正常运行

确保设置了下面配置，并安装了 npm 包 `phantomjs-prebuilt karma-phantomjs-launcher`

```
export PHANTOMJS_BIN=/usr/local/lib/node_modules/phantomjs-prebuilt/bin/phantomjs
```


#### 不使用 PhantomJS 改为 Chrome，无法找到路径

确保设置下面配置（在 ~/.zshrc` 中），并安装 npm 包  `karma-chrome-launcher`

```
export CHROME_BIN=/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
```


#### 无法运行 UI 测试

报错 `Unsupported major.minor version 52.0`，是因为 selenium-server 由 2.x 升级到 3.x，需要 java JESDK8 环境支持

参见：http://stackoverflow.com/questions/22489398/unsupported-major-minor-version-52-0
