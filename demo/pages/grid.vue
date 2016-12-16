<template>
  <page>
    <div class="page-header">
      <h3>栅格 <small>grid</small></h3>
      <p>采用 24 栅格（栅格适用PC端，而24列比12列兼容弹性更好）</p>
    </div>
    <group title="设计理念" padded>
      <div class="test-foo">@each 测试</div>
      <div class="row">
        <div class="col-xs">
          <div class="box">
            <div class="row">
              <div class="col-xs">
                <div class="box">auto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="grid-demo">
        <div class="row demo-row">
          <div class="col-24 demo-col demo-col-1">100%</div>
        </div>
        <div class="row demo-row">
          <div class="col-6 demo-col demo-col-2">25%</div>
          <div class="col-6 demo-col demo-col-3">25%</div>
          <div class="col-6 demo-col demo-col-2">25%</div>
          <div class="col-6 demo-col demo-col-3">25%</div>
        </div>
          <div class="row demo-row">
            <div class="col-8 demo-col demo-col-4">33.33%</div>
          <div class="col-8 demo-col demo-col-5">33.33%</div>
          <div class="col-8 demo-col demo-col-4">33.33%</div>
        </div>
          <div class="row demo-row">
            <div class="col-12 demo-col demo-col-1">50%</div>
          <div class="col-12 demo-col demo-col-3">50%</div>
        </div>
          <div class="row demo-row">
            <div class="col-16 demo-col demo-col-4">66.66%</div>
          <div class="col-8 demo-col demo-col-5">33.33%</div>
        </div>
      </div>
      <h3>概述</h3>
      <p>布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：</p>
      <ul>
        <li>通过row在水平方向建立一组column（简写col）</li>
        <li>你的内容应当放置于col内，并且，只有col可以作为row的直接元素</li>
        <li>栅格系统中的列是指1到24的值来表示其跨越的范围。例如，三个等宽的列可以使用.col-8来创建</li>
        <li>如果一个row中的col总和超过 24，那么多余的col会作为一个整体另起一行排列</li>
      </ul>
    </group>
  </page>
</template>


<style>
/* 参看 antd 以及以下实现 */
/*
  http://flexboxgrid.com/
  http://jonathantneal.github.io/postcss-nesting/
  https://github.com/GitScrum/postcss-at-rules-variables
  Used in conjunction with the plugin postcss-each, postcss-conditionals, postcss-for and more at-rules plugins.

  :root {
    --array: foo, bar, baz;
  }
  @each $icon in foo, bar, baz {
  @each $icon in var(--array){
    .icon-$(icon) {
      background: red;
    }
  }

  @use cssnext;
  @use postcss-nested;
  @use postcss-for;
  @use postcss-each;
  @use postcss-conditionals;

 */



.box,
.box-first,
.box-large,
.box-nested,
.box-row {
  position: relative;
  box-sizing: border-box;
  min-height: 1rem;
  margin-bottom: 0;
  background: #007FFF;
  border: 1px solid #FFF;
  border-radius: 2px;
  overflow: hidden;
  text-align: center;
  color: #fff
}

.box-row {
  margin-bottom: 1rem
}

.box-first {
  background: #06C;
  border-color: #007FFF
}

.box-nested {
  background: #036;
  border-color: #007FFF
}

.box-large {
  height: 8rem
}

/* grid */
/* 使用原生的写法能支持 grid 实现么，待定 */
:root {
  --gutter-width: 1rem;
  --outer-margin: 2rem;
  --gutter-compensation: calc((var(--gutter-width) * 0.5) * -1);
  --half-gutter-width: calc((var(--gutter-width) * 0.5));
  --xs-min: 30;
  --sm-min: 48;
  --md-min: 64;
  --lg-min: 75;
  --screen-xs-min: var(--xs-min)em;
  --screen-sm-min: var(--sm-min)em;
  --screen-md-min: var(--md-min)em;
  --screen-lg-min: var(--lg-min)em;
  --container-sm: calc(var(--sm-min) + var(--gutter-width));
  --container-md: calc(var(--md-min) + var(--gutter-width));
  --container-lg: calc(var(--lg-min) + var(--gutter-width));
  --columns: 12;
  --array: foo, bar, baz;
  --size: xs, sm, md, lg;

  --from: 0;
  --to: 12;
  --step: 1;
}
/*@custom-media --xs-viewport only screen and (min-width: 30em);*/
@custom-media --sm-viewport only screen and (min-width: 48em);
@custom-media --md-viewport only screen and (min-width: 64em);
@custom-media --lg-viewport only screen and (min-width: 75em);

.container-fluid, .container {
  margin-right: auto;
  margin-left: auto;
}

.container-fluid {
  padding-right: var(--outer-margin, 2rem);
  padding-left: var(--outer-margin, 2rem);
}

.row {
  box-sizing: border-box;
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: var(--gutter-compensation, -0.5rem);
  margin-left: var(--gutter-compensation, -0.5rem);
}

.row.reverse {
  flex-direction: row-reverse;
}

.col.reverse {
  flex-direction: column-reverse;
}

/* http://jonathantneal.github.io/postcss-nesting/ */

/*@custom-selector :--columns 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12;
.col {
  &-xs,
  &-xs-:--columns,
  &-xs-offset-0,
  &-xs-offset-:--columns {
    box-sizing: border-box;
    flex: 0 0 auto;
    padding-right: var(--half-gutter-width, 0.5rem);
    padding-left: var(--half-gutter-width, 0.5rem);
  }
}*/

/*@each $size in var(--size){
  .col-$size{
    @for $i from 0 to var(--columns){
      &,
      &-$i,
      &-offset-0,
      &-offset-$i {
        box-sizing: border-box;
        flex: 0 0 auto;
        padding-right: var(--half-gutter-width, 0.5rem);
        padding-left: var(--half-gutter-width, 0.5rem);
      }
      &-$i{
        flex-basis: $(i)/var(--columns);
        max-width: $(i)/var(--columns);
      }
    }
  }
}*/

.col-xs {
  flex-grow: 1;
  flex-basis: 0;
  max-width: 100%;
}
/*
.col-xs-1 {
  flex-basis: 8.33333333%;
  max-width: 8.33333333%;
}

.col-xs-2 {
  flex-basis: 16.66666667%;
  max-width: 16.66666667%;
}

.col-xs-3 {
  flex-basis: 25%;
  max-width: 25%;
}

.col-xs-4 {
  flex-basis: 33.33333333%;
  max-width: 33.33333333%;
}

.col-xs-5 {
  flex-basis: 41.66666667%;
  max-width: 41.66666667%;
}

.col-xs-6 {
  flex-basis: 50%;
  max-width: 50%;
}

.col-xs-7 {
  flex-basis: 58.33333333%;
  max-width: 58.33333333%;
}

.col-xs-8 {
  flex-basis: 66.66666667%;
  max-width: 66.66666667%;
}

.col-xs-9 {
  flex-basis: 75%;
  max-width: 75%;
}

.col-xs-10 {
  flex-basis: 83.33333333%;
  max-width: 83.33333333%;
}

.col-xs-11 {
  flex-basis: 91.66666667%;
  max-width: 91.66666667%;
}

.col-xs-12 {
  flex-basis: 100%;
  max-width: 100%;
}*/

.col-xs-offset-0 {
  margin-left: 0;
}

.col-xs-offset-1 {
  margin-left: 8.33333333%;
}

.col-xs-offset-2 {
  margin-left: 16.66666667%;
}

.col-xs-offset-3 {
  margin-left: 25%;
}

.col-xs-offset-4 {
  margin-left: 33.33333333%;
}

.col-xs-offset-5 {
  margin-left: 41.66666667%;
}

.col-xs-offset-6 {
  margin-left: 50%;
}

.col-xs-offset-7 {
  margin-left: 58.33333333%;
}

.col-xs-offset-8 {
  margin-left: 66.66666667%;
}

.col-xs-offset-9 {
  margin-left: 75%;
}

.col-xs-offset-10 {
  margin-left: 83.33333333%;
}

.col-xs-offset-11 {
  margin-left: 91.66666667%;
}

.start-xs {
  justify-content: flex-start;
  text-align: start;
}

.center-xs {
  justify-content: center;
  text-align: center;
}

.end-xs {
  justify-content: flex-end;
  text-align: end;
}

.top-xs {
  align-items: flex-start;
}

.middle-xs {
  align-items: center;
}

.bottom-xs {
  align-items: flex-end;
}

.around-xs {
  justify-content: space-around;
}

.between-xs {
  justify-content: space-between;
}

.first-xs {
  order: -1;
}

.last-xs {
  order: 1;
}

@media (--sm-viewport) {
  .container {
    width: var(--container-sm, 46rem);
  }

  .col-sm {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-sm-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-sm-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-sm-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-sm-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-sm-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-sm-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-sm-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-sm-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-sm-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-sm-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-sm-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-sm-12 {
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-sm-offset-0 {
    margin-left: 0;
  }

  .col-sm-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-sm-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-sm-offset-3 {
    margin-left: 25%;
  }

  .col-sm-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-sm-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-sm-offset-6 {
    margin-left: 50%;
  }

  .col-sm-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-sm-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-sm-offset-9 {
    margin-left: 75%;
  }

  .col-sm-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-sm-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-sm {
    justify-content: flex-start;
    text-align: start;
  }

  .center-sm {
    justify-content: center;
    text-align: center;
  }

  .end-sm {
    justify-content: flex-end;
    text-align: end;
  }

  .top-sm {
    align-items: flex-start;
  }

  .middle-sm {
    align-items: center;
  }

  .bottom-sm {
    align-items: flex-end;
  }

  .around-sm {
    justify-content: space-around;
  }

  .between-sm {
    justify-content: space-between;
  }

  .first-sm {
    order: -1;
  }

  .last-sm {
    order: 1;
  }
}

@media (--md-viewport) {
  .container {
    width: var(--container-md, 61rem);
  }

  .col-md {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-md-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-md-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-md-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-md-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-md-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-md-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-md-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-md-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-md-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-md-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-md-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-md-12 {
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-md-offset-0 {
    margin-left: 0;
  }

  .col-md-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-md-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-md-offset-3 {
    margin-left: 25%;
  }

  .col-md-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-md-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-md-offset-6 {
    margin-left: 50%;
  }

  .col-md-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-md-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-md-offset-9 {
    margin-left: 75%;
  }

  .col-md-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-md-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-md {
    justify-content: flex-start;
    text-align: start;
  }

  .center-md {
    justify-content: center;
    text-align: center;
  }

  .end-md {
    justify-content: flex-end;
    text-align: end;
  }

  .top-md {
    align-items: flex-start;
  }

  .middle-md {
    align-items: center;
  }

  .bottom-md {
    align-items: flex-end;
  }

  .around-md {
    justify-content: space-around;
  }

  .between-md {
    justify-content: space-between;
  }

  .first-md {
    order: -1;
  }

  .last-md {
    order: 1;
  }
}

@media (--lg-viewport) {
  .container {
    width: var(--container-lg, 71rem);
  }

  .col-lg {
    flex-grow: 1;
    flex-basis: 0;
    max-width: 100%;
  }

  .col-lg-1 {
    flex-basis: 8.33333333%;
    max-width: 8.33333333%;
  }

  .col-lg-2 {
    flex-basis: 16.66666667%;
    max-width: 16.66666667%;
  }

  .col-lg-3 {
    flex-basis: 25%;
    max-width: 25%;
  }

  .col-lg-4 {
    flex-basis: 33.33333333%;
    max-width: 33.33333333%;
  }

  .col-lg-5 {
    flex-basis: 41.66666667%;
    max-width: 41.66666667%;
  }

  .col-lg-6 {
    flex-basis: 50%;
    max-width: 50%;
  }

  .col-lg-7 {
    flex-basis: 58.33333333%;
    max-width: 58.33333333%;
  }

  .col-lg-8 {
    flex-basis: 66.66666667%;
    max-width: 66.66666667%;
  }

  .col-lg-9 {
    flex-basis: 75%;
    max-width: 75%;
  }

  .col-lg-10 {
    flex-basis: 83.33333333%;
    max-width: 83.33333333%;
  }

  .col-lg-11 {
    flex-basis: 91.66666667%;
    max-width: 91.66666667%;
  }

  .col-lg-12 {
    flex-basis: 100%;
    max-width: 100%;
  }

  .col-lg-offset-0 {
    margin-left: 0;
  }

  .col-lg-offset-1 {
    margin-left: 8.33333333%;
  }

  .col-lg-offset-2 {
    margin-left: 16.66666667%;
  }

  .col-lg-offset-3 {
    margin-left: 25%;
  }

  .col-lg-offset-4 {
    margin-left: 33.33333333%;
  }

  .col-lg-offset-5 {
    margin-left: 41.66666667%;
  }

  .col-lg-offset-6 {
    margin-left: 50%;
  }

  .col-lg-offset-7 {
    margin-left: 58.33333333%;
  }

  .col-lg-offset-8 {
    margin-left: 66.66666667%;
  }

  .col-lg-offset-9 {
    margin-left: 75%;
  }

  .col-lg-offset-10 {
    margin-left: 83.33333333%;
  }

  .col-lg-offset-11 {
    margin-left: 91.66666667%;
  }

  .start-lg {
    justify-content: flex-start;
    text-align: start;
  }

  .center-lg {
    justify-content: center;
    text-align: center;
  }

  .end-lg {
    justify-content: flex-end;
    text-align: end;
  }

  .top-lg {
    align-items: flex-start;
  }

  .middle-lg {
    align-items: center;
  }

  .bottom-lg {
    align-items: flex-end;
  }

  .around-lg {
    justify-content: space-around;
  }

  .between-lg {
    justify-content: space-between;
  }

  .first-lg {
    order: -1;
  }

  .last-lg {
    order: 1;
  }
}

/* demo */
/*.grid-demo .demo-row,
.demo-row,
.grid-demo .code-box-demo .demo-row,
.code-box-demo .demo-row {
  background-image: linear-gradient(
      90deg,
      #F5F5F5 4.16666667%, transparent 4.16666667%, transparent 8.33333333%, #F5F5F5 8.33333333%,
      #F5F5F5 12.5%, transparent 12.5%, transparent 16.66666667%, #F5F5F5 16.66666667%,
      #F5F5F5 20.83333333%, transparent 20.83333333%, transparent 25%, #F5F5F5 25%,
      #F5F5F5 29.16666667%, transparent 29.16666667%, transparent 33.33333333%, #F5F5F5 33.33333333%,
      #F5F5F5 37.5%, transparent 37.5%, transparent 41.66666667%, #F5F5F5 41.66666667%,
      #F5F5F5 45.83333333%, transparent 45.83333333%, transparent 50%, #F5F5F5 50%,
      #F5F5F5 54.16666667%, transparent 54.16666667%, transparent 58.33333333%, #F5F5F5 58.33333333%,
      #F5F5F5 62.5%, transparent 62.5%, transparent 66.66666667%, #F5F5F5 66.66666667%,
      #F5F5F5 70.83333333%, transparent 70.83333333%, transparent 75%, #F5F5F5 75%,
      #F5F5F5 79.16666667%, transparent 79.16666667%, transparent 83.33333333%, #F5F5F5 83.33333333%,
      #F5F5F5 87.5%, transparent 87.5%, transparent 91.66666667%, #F5F5F5 91.66666667%,
      #F5F5F5 95.83333333%, transparent 95.83333333%);
  overflow: hidden;
  margin-bottom: 8px;
}
.grid-demo .row-flex,
.row-flex,
.grid-demo .code-box-demo .row-flex,
.code-box-demo .row-flex {
  background: #F5F5F5;
}
.grid-demo .row > div,
.row > div,
.grid-demo .code-box-demo .row > div,
.code-box-demo .row > div,
.grid-demo .row-flex > div,
.row-flex > div,
.grid-demo .code-box-demo .row-flex > div,
.code-box-demo .row-flex > div {
  padding: 5px 0;
  text-align: center;
  border-radius: 0;
  min-height: 30px;
  margin-top: 8px;
  margin-bottom: 8px;
  color: #fff;
}
.grid-demo .code-box-demo .row > div:not(.gutter-row),
.code-box-demo .row > div:not(.gutter-row),
.grid-demo .code-box-demo .row-flex > div:not(.gutter-row),
.code-box-demo .row-flex > div:not(.gutter-row) {
  background: #00A0E9;
  padding: 16px 0;
}
.grid-demo .code-box-demo .row > div:not(.gutter-row):nth-child(2n+1),
.code-box-demo .row > div:not(.gutter-row):nth-child(2n+1),
.grid-demo .code-box-demo .row-flex > div:not(.gutter-row):nth-child(2n+1),
.code-box-demo .row-flex > div:not(.gutter-row):nth-child(2n+1) {
  background: rgba(0, 160, 233, 0.7);
}
.grid-demo .row .demo-col,
.row .demo-col,
.grid-demo .code-box-demo .row .demo-col,
.code-box-demo .row .demo-col {
  text-align: center;
  padding: 30px 0;
  color: #fff;
  font-size: 18px;
  border: none;
  margin-top: 0;
  margin-bottom: 0;
}
.grid-demo .row .demo-col-1,
.row .demo-col-1,
.grid-demo .row .demo-col-1,
.row .demo-col-1 {
  background: rgba(0, 160, 233, 0.7);
}
.grid-demo .row .demo-col-2,
.row .demo-col-2,
.grid-demo .code-box-demo .row .demo-col-2,
.code-box-demo .row .demo-col-2 {
  background: rgba(0, 160, 233, 0.5);
}
.grid-demo .row .demo-col-3,
.row .demo-col-3,
.grid-demo .code-box-demo .row .demo-col-3,
.code-box-demo .row .demo-col-3 {
  background: rgba(255, 255, 255, 0.2);
  color: #999;
}
.grid-demo .row .demo-col-4,
.row .demo-col-4,
.grid-demo .code-box-demo .row .demo-col-4,
.code-box-demo .row .demo-col-4 {
  background: rgba(0, 160, 233, 0.6);
}
.grid-demo .row .demo-col-5,
.row .demo-col-5,
.grid-demo .code-box-demo .row .demo-col-5,
.code-box-demo .row .demo-col-5 {
  background: rgba(255, 255, 255, 0.5);
  color: #999;
}
.grid-demo .code-box-demo .height-100,
.code-box-demo .height-100 {
  height: 100px;
  line-height: 100px;
}
.grid-demo .code-box-demo .height-50,
.code-box-demo .height-50 {
  height: 50px;
  line-height: 50px;
}
.grid-demo .code-box-demo .height-120,
.code-box-demo .height-120 {
  height: 120px;
  line-height: 120px;
}
.grid-demo .code-box-demo .height-80,
.code-box-demo .height-80 {
  height: 80px;
  line-height: 80px;
}*/
</style>
