<template>
  <span
    class="badge"
    :style="style"
    :class="classes">
    <slot></slot>
  </span>
</template>

<script>
/**
 * badge
 * @module packages/badge
 * @desc 徽章
 * @param {string} [type=primary] 组件样式，可选 primary, error, success, warning
 * @param {string} [color] - 传入颜色值
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 *
 * @example
 * <badge color="error">错误</badge>
 * <badge color="#333">30</badge>
**/
export default {
  name: 'badge',

  props: {
    bg: String,
    color: String,
    point: Boolean,
    type: String,
    radius: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: true
    },
    size: {
      type: String,
      default: ''
    },
    text: String,
  },
  ready: function () {
    console.log(this.text)
  },
  computed: {
    style () {
      return [
        this.color ? {color: this.color} : {},
        this.bg ? {backgroundColor: this.bg} : {},
      ]
    },
    classes () {
      return [
        {
          'badge-point': this.point,
          'badge-single': this.text && this.text.length === 1,
          radius: this.radius,
          round: this.round,
        },
        this.type ? `badge-${this.type}` : '',
      ]
    },
  },
};
</script>
<style lang="css">

</style>
