<script>
/**
 * x-tag
 * @module packages/xtag
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [tag] - 指定html标签
 * @help 参看 router-link
 * @help https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 *
 * @example
 * <x-tag tag="div">
 *   ...
 * </x-tag>
 */
export default {
  name: 'x-tag',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    // exact: Boolean,
    // append: Boolean,
    // replace: Boolean,
    // activeClass: String
  },
  render (h) {
    const $default = this.$slots.default
    let data = $default.data

    return h(this.tag, data, this.$slots.default)
  }
}
</script>
