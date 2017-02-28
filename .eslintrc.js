
// JS 书写规范
// http://eslint.org
// http://standardjs.com/rules.html
// - 规范文档参看[javascript-style-guide](https://github.com/webcoding/javascript-style-guide/blob/master/docs)
// - 具体配置及注意事项参看 [config-eslint.md](https://github.com/webcoding/javascript-style-guide/blob/master/docs/config-eslint.md)

// NOTE: 兼容性设定，放置在项目根目录，此文件同时支持 ES5、ES6 便于切换（切换注释即可，待修订）

module.exports = {
  root: true,
  parser: "babel-eslint",
  installedESLint: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    }
  },
  globals: {
    Vue: false,
    document: false,
    navigator: false,
    window: false,
  },

  plugins: [
    // 处理 html 文件内 js 代码规范等
    "html",
    // // import 支持省略 .vue 后缀
    "vue",
  ],

  // ES5 推荐规范
  // extends: "webcoding/configurations/airbnb/es5",
  // ES6 推荐规范
  // extends: "airbnb",
  extends: "webcoding/configurations/airbnb/es6",

  // add your custom rules here
  rules: {
    // 行尾分号，默认配置always，要求在行末加上分号，standard 配置强制不带
    semi: ["error", "never"],
    // 多行模式必须带逗号，单行模式不能带逗号
    "comma-dangle": ["error", "always-multiline"],
    "max-len": ["error", {"code": 160}],
    // 禁止使用位操作符，~除外，如果非要使用，留个注释说明原因和目的
    "no-bitwise": ["error", { "allow": ["~"] }],
    // 禁止未使用过的变量，但设置为不检查参数
    "no-unused-vars": ["error", { "args": "none" }],
    // 禁止定义前使用，包括作用域可以提升的函数
    "no-use-before-define": ["error", { "functions": false, "classes": false }],
    // 箭头函数的参数使用圆括号，但参数只有一个时，可以省略圆括号，但若函数体在指令块中则必须写圆括号
    // "arrow-parens": ["error", "as-needed", { "requireForBlockBody": true }],
    // "space-before-function-paren":
    // 禁止使用 console debugger
    // "no-console": 1,
    // 禁止使用 debugger
    // "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
    'vue/jsx-uses-vars': 2,
  }
}
