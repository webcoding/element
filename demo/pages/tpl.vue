<template>
  <div class="tpl">
    <v-header></v-header>
    <transition :name="transition">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
//不能用已有标签，比如 header
import vHeader from '../components/vHeader.vue'
export default {
  components: {
    vHeader,
  },
  data() {
    return {
      transition: "slide-left",
    }
  },
  watch: {
    "$route"(to, from){
      // 默认使用 'slide-left' 如果使用的是 back（暂判断不出来），也使用 slide-left
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transition = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      this.transition = this.checkDirecition(to.name, from.name) ? "slide-left" : "slide-right";
    }
  },
  methods: {
    checkDirecition(to, from) {
      let map = ["index", "demo", "about", "login", "component"].reverse();
      // 不存在为 -1，设置默认匹配小于零，对应 slide-left
      return (map.indexOf(to) - map.indexOf(from)) < 0;
    }
  },
}
</script>
