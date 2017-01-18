## 设计及目标

- Object: 编辑、构建、调试、debug工具
  - 浏览器运行时——源码定位
  - 编辑器定位变量声明位置
  - 编辑器运行代码——CodeRunner
  - 开发版——调试工具实现（打开调试），包含但不限于以下情况
    - log日志
    - system配置及参数（系统、网络、UA、宿主等）
    - 切换 API 环境
    - 操作项目缓存等
  - 基于需要输出
    - 支持参数精简化(以下为参考)
    - 运行环境 local/dev/prod/test 默认 dev(prod 和 test 环境，debug 为 false)
    - 渲染模式 client/server/wechat/hybird (默认 client)
  - 使用 VSCode ?
  - css 样式自动排序

- Object: 框架设计实现
  - 定义组件库格式（10个组件）
  - 定义全局组件调用方式（2个全局组件）
  - TDK 更新方式实现
  - 文档注释说明（jsDoc 格式要求）
  - 实现组件库及 demo 运行示例
  - 实现一个项目示例（实现首页）

- Object: 测试自动化
  - ESlint 规范书写统一格式
  - mock 模拟数据（mock.js）
  - （70%投入）unit 单元测试，用来确保每个组件正常工作（典型示例4个）
  - （20%投入）集成、接口测试，用来确保不同组件互相合作
  - （10%投入）e2e 端到端/UI测试 用户界面测试用来测试实现是否和设计时候所想的一样
  - ？功能测试，用来确保整个应用会按照用户期望的那样运行 —— 主要测试界面交互（操作反馈、提示、数据状态等）

测试的比例要根据实际的项目需求来划分，以上数据来自《Google 测试之道》 一书，对于google产品。


- 编译开发及扩展
  - 关于 webpack 配置的（要更精简好用）
  - CSS3 动画
  - 本地启动服务时，偶尔会遇到端口占用情况，这个需要解决
  - 单页面应用也不能完全单页（资源统一集中加载），应该根据情况按需分组加载或自动分组加载
  - navigator.serviceWorker


## 实现

使用 postcss 处理器处理样式，可以更精简的实现样式，比如：

why: 它比libsass快了几乎两倍(并且比Ruby Sass快了28倍)，支持cssnext和CSS Modules，而且可以很随意的扩展其功能

```
// 支持变量、自定义选择器、媒体查询 等下一代的 CSS 语法规则
:root {
--color: red;
}
@custom-selector :--heading h1, h3, h3, h4, h5, h6;
@custom-media --small-viewport (max-width: 30em);
article :--heading + p {
  margin-top: 0;
}

// 支持自定义简写
size: 52px 32px;
position: absolute 0 * * 0;
color: #abccfc #212231;
font-size: 1.25em 2;
border: 1px 2px #343434;

// 基础图形
triangle: 10px top #fff;

// 支持直接在 CSS 中自定义 SVG 的属性值，包括它的 fill、stroke、path 等属性。

```
