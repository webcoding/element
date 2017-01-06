<template>
  <span
    class="iconfont"
    :style="style"
    :class="classes">
    <slot></slot>
  </span>
</template>

<script>
/**
 * icon
 * @module packages/icon
 * @desc 徽章
 * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 *
 * @example
 * <icon color="error">错误</icon>
 * <icon color="#333">30</icon>
**/
export default {
  name: 'icon',

  props: {
    bg: String,
    color: String,
    type: {
      type: String,
      default: 'home'
    },
    size: {
      type: String,
      default: 'normal'
    }
  },

  computed: {
    style() {
      return [
        {color: this.color},
        {backgroundColor: this.bg},
      ]
    },
    classes() {
      return [
        {
          radius: this.radius,
          round: this.round,
        },
        // this.size ? `size-${this.size}` : '',
        this.type ? `icon-${this.type}` : '',
      ]
    },
  }
};
</script>
<style lang="css">

</style>
