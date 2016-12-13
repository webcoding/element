## 目录结构

构建时，服务应该以 dist 为根建立服务，并把启动服务的脚本输出到此目录

```
.
├── build/               # 构建监本目录
├── config/              # 构建配置目录
├── node_modules/        # 依赖的 node 工具包目录
├── dist/                # build 生成的生产环境下的项目
├── src/                 # 源码目录（开发都在这里进行）
│   ├── assets/            # 放置需要经由 Webpack 处理的静态文件
│   ├── components/        # 组件目录（COMPONENT）
│   ├── directives/        # 指令
│   ├── filters/           # 过滤器
│   ├── routes/            # 路由
│   ├── services/          # 服务（SERVICE，用于统一管理 XHR 请求）
│   ├── views/             # 路由视图基页（VIEW）
│   ├── App.vue            # 启动文件
│   ├── main.js            # 入口 js
│   ├── index.html         # 静态基页
├── static/              # 放置无需经由 Webpack 处理的静态文件
├── test/                # 测试文件目录
├── .babelrc             # Babel 转码配置
├── .eslintrc.js         # ES 语法检查配置
├── .eslintignore        # （配置）ESLint 检查中需忽略的文件（夹）
├── .gitignore           # （配置）需被 Git 忽略的文件（夹）
├── package.json         # 项目描述文件
```
