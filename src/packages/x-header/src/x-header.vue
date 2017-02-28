<template>
  <header
    class="navbar"
    :class="classes">
    <div class="navbar-left">
      <slot name="left"></slot>
    </div>
    <div class="navbar-center">
      <slot></slot>
    </div>
    <div class="navbar-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>

// import xTitle from './x-title'

/**
 * x-header
 * @module packages/x-header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 默认显示在中间区域，标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <x-header fixed>
 *   <div solt="left"></div>
 *   <div solt="center"></div>
 *   <div solt="right"></div>
 * </x-header>
 */
export default {
  name: 'x-header',

  components: {
    // xTitle,
  },

  props: {
    // fixed: Boolean,
    title: String,
  },

  computed: {
    // styles() {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes() {
      return [
        // { 'is-fixed': fixed },
      ]
    },
  },
}
</script>
