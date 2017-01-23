<template>
  <span
    class="badge"
    :style="styles"
    :class="classes">
    <span v-if="text" class="badge-text">{{badgeText}}</span>
  </span>
</template>

<script>
/**
 * badge 徽章
 * @module packages/badge
 * @desc 图标右上角的红点、数字或者文字。用于告知用户，该区域的状态变化或者待处理任务的数量。
 * @rules
 *   - 当用户有必要知晓每条更新时，应该使用数字型，eg：社交中的一对一的消息通知。
 *   - 当用户只需知道大致有内容更新时，应该使用红点型，eg：社交中的群消息通知。
 * @API
//  * @param {string} [type] - 设置 badge 类型
 * @param {string} [status] - 设置 badge 状态，如 success processing(进行中，如呼吸灯) error
 * @param { string|number } [text] 展示的数字或文案，当为数字时候，大于 max 时显示为 ${max}+，为 0 时隐藏
 * @param { number } [max=999] 展示封顶的数字值
 * @param {boolean} [isDot] - 是否为点样式，不展示内容，只有一个小红点
 * @param {string} [size=xs] - 尺寸，接受 xs, lg
 *
 * @param {string} [shape] - 形状，圆的还是方的或点
 * @param {string} [color] - 传入背景颜色值
 * @param {string} [textColzor] - 传入文本颜色值
 * 以上三个可收纳为扩展一个 style 属性即可
 * @param {string} [style] - 自定义样式
 * TODO: @param {string} [link] - 支持外链
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
    max: {
      type: Number,
      default: 99,
      // validator(value) {
      //   // 必须为数字，可以直接传入 xxx=number，传入为string 类型，
      //   // 或使用 v-bind:xxx=number 传入为 number 类型
      //   let max = Number(value);
      //   return max === max;
      // },
    },
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
      },
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
    badgeText () {
      let {text, max} = this;
      // debugger;
      let overflowCount = Number(max);
      let textNum = Number(text);
      // text 展示的数字或文案，当为数字时候，大于 max 时显示为 ${max}+，为 0 时隐藏
      // return (typeof text === 'number' && text > max) ? `${max}+` : text;
      return (textNum === textNum && text > overflowCount) ? `${overflowCount}+` : text;
    },
    styles () {
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
