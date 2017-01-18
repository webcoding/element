<template>
  <div></div>
</template>

<script>
// import vConsole from "vconsole"
/**
 * v-debug
 * @module packages/v-debug
 * @desc 集成 vConsole —— 一个轻量、可拓展、针对手机网页的前端开发者调试面板。
 * @features
 *  - 查看 console 日志
 *  - 查看网络请求
 *  - 手动执行 JS 命令行
 *  - 自定义插件
 * @help [vConsole](https://github.com/WechatFE/vConsole)
 *
 * @example
 * <v-debug>
 *   ...
 * </v-debug>
 */
export default {
  name: 'v-debug',
  props: {
    // tag: {
    //   type: String,
    //   default: 'div'
    // },
  },
  components: {
    // vConsole,
  },
  computed: {
    // style () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    // classes () {
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
