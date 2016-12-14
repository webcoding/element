<template>
  <div class="transition-box">
    <div class="page">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/**
 * page
 * @module packages/page
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 * @help 参看 router-link
 * @help https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 *
 * @example
 * <page tag="div">
 *   ...
 * </page>
 */
export default {
  name: 'page',
  computed: {
    // style () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes () {
      // 是否要让 page 上添加的样式加入到内层上
      // console.log(1111)
      // return [
      //   this.class,
      // ]
    },
  },
}
</script>

<style>
.transition-box{
  position: absolute;
  z-index: 0;
  width: 100%;
  transition: all .3s cubic-bezier(.55,0,.1,1);
}
</style>
