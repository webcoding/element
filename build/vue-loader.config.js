module.exports = {
  // bump deps, ignore whitespace
  preserveWhitespace: false,
  postcss: [
    // postcss-cssnext 已经包含了 autoprefixer
    // require('autoprefixer')({
    //   browsers: ['last 3 versions']
    // }),
    /**
      postcss
      postcss-import
      postcss-each
      postcss-at-rules-variables
      postcss-conditionals
      postcss-for
      postcss-custom-properties
      postcss-nested

     */
    // require('postcss-nesting')({ /* options */ }),
    // https://github.com/GitScrum/postcss-at-rules-variables
    // PostCss plugin to use CSS Custom Properties in at-rule @each, @for, @if, @else and more...
    // require('postcss-import'), //atImport
    // atVariables  atRules ['for', 'if', 'else', 'each'] （要使用，先安装以下依赖）
    // require('postcss-custom-properties'),  //customProperties
    require('postcss-salad'),
    // Supports variables in this $format, like Sass.
    // require('postcss-simple-vars'),
    // 清除注释
    // require('postcss-discard-comments'),
    // 自定义媒体查询 @custom-media --small-viewport (max-width: 30em);
    // require('postcss-custom-media'),
    // 简写最大最小值比较 @media screen and (500px <= width <= 1200px) {}
    // require('postcss-media-minmax'),
    //
    require('postcss-at-rules-variables'),
    // atIf 应用 if else 语句
    require('postcss-conditionals'),
    // atEach 应用 each 语句 @each $val in var(--array) { } @for var(--array) {}
    require('postcss-each'),
    // atFor 应用 for 语句
    // @for $i from var(--from) to var(--to) by var(--step) { .b-$i { width: $(i)px; } }
    require('postcss-for'),
    // 使用 postcss-nesting 或 postcss-nested 增加样式规则嵌套支持
    // 支持嵌套写法 A plugin allows for nesting selectors and media queries.
    // http://jonathantneal.github.io/postcss-nesting/
    // require('postcss-nesting'),  //nesting
    // require('postcss-nested'),  //nested
    // 简写 transform 样式属性
    // {rotate: 180deg;
    // scale: 2 2;
    // translate: 10px 10px;}
    // require('postcss-transform-shortcut'),
    // An on-demand calc() based grid building system. div { lost-column: 1/2 };
    // require('lost'),
  ]
}


/*
  postcss-at-rules-variables

  test atRules ['for', 'if', 'else', 'each']

:root{ --from: 1; } @for $i from 1 to 2';
:root{ --from: 1; } @for $i from var(--from) to 2';

:root{ --to: 2; } @for $i from 1 to 2';
:root{ --to: 2; } @for $i from 1 to var(--to)';

:root{ --from: 1; --to: 2; } @for $i from 1 to 2';
:root{ --from: 1; --to: 2; } @for $i from var(--from) to var(--to)';

:root{ --from: 1; --to: 2; --step: 5 } @for $i from 1 to 2 by 5';
:root{ --from: 1; --to: 2; --step: 5 } @for $i from var(--from) to var(--to) by var(--step)';

:root{ --first: 1; --second: 2; } @if 1 < 2';
:root{ --first: 1; --second: 2; } @if var(--first) < var(--second)';

:root{ --first: 1; --second: 2; } @if 1 < 2 { color: olive; } @else if 1 > 2 { color: red; }';
:root{ --first: 1; --second: 2; } @if var(--first) < var(--second) { color: olive; } @else if var(--first) > var(--second) { color: red; }';

:root{ --array: foo, bar, baz; } @each $val in foo, bar, baz {} @for foo, bar, baz {}';
:root{ --array: foo, bar, baz; } @each $val in var(--array) {} @for var(--array) {}';

:root{ --red: red; } @if var(--green) { color: var(--green) }';
:root{ --red: red; } @if var(--green) { color: var(--green) }';
 */
