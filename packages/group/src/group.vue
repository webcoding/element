<template>
  <div class="group" :class="[this.type ? `group-${this.type}` : '']">
    <slot name="header">
      <div class="group-header" v-if="title">{{title}}</div>
    </slot>
    <div class="group-body" :class="classes">
      <slot></slot>
    </div>
    <div class="group-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
/**
 * group-list
 * @module packages/xtag
 * @desc 用于生成指定的 html 标签容器
 * @param {string} [type] - 分组类型
 * @example
 * <group-list>
 *   ...
 * </group-list>
 */
export default {
  name: 'group',
  props: {
    title: String,
    type: String,
    padded: Boolean,
  },
  computed: {
    // style () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes () {
      return [
        this.type,
        {
        'is-padded': this.padded,
      }]
    },
  },
}
</script>
