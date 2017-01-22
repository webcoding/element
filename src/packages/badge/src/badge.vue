<template>
  <span
    class="badge"
    :style="style"
    :class="classes">
    <span v-if="text" class="badge-text">{{text}}</span><slot></slot>
  </span>
</template>

<script>
/**
 * badge
 * @module packages/badge
 * @desc 徽章
 * @need 需求描述
//  * @param {string} [type] - 设置 badge 类型
 * @param {string} [status] - 设置 badge 状态，如 success processing(进行中，如呼吸灯) error
 * @param { string|number } [text] 展示的数字或文案，当为数字时候，大于 overflowCount 时显示为 ${overflowCount}+，为 0 时隐藏
 * @param { number } [overflowCount=999] 展示封顶的数字值
 * @param {boolean} [isDot] - 是否为点样式，不展示内容，只有一个小红点
 * @param {string} [size=xs] - 尺寸，接受 xs, lg
 *
 * @param {string} [shape] - 形状，圆的还是方的或点
 * @param {string} [color] - 传入背景颜色值
 * @param {string} [textColor] - 传入文本颜色值
 * TODO: 以上三个是否收纳为扩展一个 style 属性即可
 * @param {string} [style] - 自定义样式
 * @param {string} [link] - 支持外链
 *
 * @example
 * <badge color="error">错误</badge>
 * <badge color="#333">30</badge>
**/
export default {
  name: 'badge',

  props: {
    type: String,
    status: String,
    text: [String, Number],
    isDot: Boolean,
    color: String,
    textColor: String,
    shape: {
      type: String,
      default: 'circle',
      validator(value) {
        return [
          'dot',
          'radius',
          'circle',
          'square',
        ].indexOf(value) > -1;
      }
    },
    size: {
      type: String,
      default: '',
    },
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
          'is-dot': this.isDot,
          // 'badge-single': this.text && this.text.length === 1,
        },
        this.status ? `badge-${this.status}` : '',
        (!this.isDot && this.shape) ? `is-${this.shape}` : '',
      ]
    },
  },
};
</script>
<style lang="sass">

// @import "../../../src/_style/_fn.scss";
// @import "./style.scss";
//
// .doc-content {
//   .badge {
//     margin: 5px;
//   }
// }
//
// .badge-todo  { color: #fff; background: $color-info; }
// .badge-doing { color: #fff; background: $color-warning;}
// .badge-done  { color: #fff; background: $color-success; }
</style>
