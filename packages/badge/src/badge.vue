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
    color: String,
    textColor: String,
    isPoint: Boolean,
    type: String,
    shape: {
      type: String,
      default: 'circle',
      validator(value) {
        return [
          'point',
          'radius',
          'circle',
          'square',
        ].indexOf(value) > -1;
      }
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
        this.color ? {backgroundColor: this.color} : {},
        this.textColor ? {color: this.textColor} : {},
      ]
    },
    classes () {
      return [
        {
          'is-point': this.isPoint,
          // 'badge-single': this.text && this.text.length === 1,
        },
        this.type ? `badge-${this.type}` : '',
        (!this.isPoint && this.shape) ? `is-${this.shape}` : '',
      ]
    },
  },
};
</script>
<style lang="css">

</style>
