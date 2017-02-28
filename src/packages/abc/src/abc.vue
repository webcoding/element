<template>

</template>

<script>
/**
 * abc
 * @module packages/abc
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 * @help 参看 router-link
 * @help https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 *
 * @example
 * <abc tag="div">
 *   ...
 * </abc>
 */
export default {
  name: 'abc',
  props: {
    // tag: {
    //   type: String,
    //   default: 'div'
    // },
  },
  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes() {
    //   return [
    //     {
    //       'badge-point': this.point,
    //       'badge-single': this.text && this.text.length === 1,
    //       radius: this.radius,
    //       round: this.round,
    //     },
    //     this.type ? `badge-${this.type}` : '',
    //   ]
    // },
  },
}
</script>

<style lang="css">
/*@import "../../../src/style/var.css";*/
@component-namespace x- {
  @component abc {
    @descendent button {

      @when left {

      }
      @when left {

      }
    }
    @descendent title {
      @utils-ellipsis;
      font-size: inherit;
      font-weight: normal;
      flex: 1;
    }
    @when fixed {
      position: fixed 0 0 * 0;
      z-index: $z-index-normal;
    }
  }
}
</style>
