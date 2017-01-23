
## 遇到的问题及解决办法

- 组件属性 number 类型传递？
  如果直接书写 some-prop="1" 它的值以字符串"1"而不是以实际数字传下去，如果想传递一个实际的 JavaScript 数字，需要使用 v-bind ，从而让它的值被当作 JavaScript 表达式计算：v-bind:some-prop="1"(缩写:some-prod="1") 参见[字面量语法-vs-动态语法](http://cn.vuejs.org/v2/guide/components.html#字面量语法-vs-动态语法)
  或者为了便于书写，可传入 string，在验证属性里增加验证 Number(some-prop) === Number(some-prop)
  或者对 props 属性验证做扩展，在底层实现基础验证

- 组件属性 行内样式 style 传递？