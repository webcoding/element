<template>
  <div class="tabs__active-bar" :style="barStyle"></div>
</template>

<script>
export default {
  name: 'tabbar',

  props: {
    tabs: Array,
  },

  computed: {
    barStyle: {
      cache: false,
      get() {
        const $tabs = this.$parent.$refs.tabs
        if (!$tabs) return {}
        const style = {}
        let offset = 0
        let tabWidth = 0

        this.tabs.every((tab, index) => {
          const $el = $tabs[index]
          if (!$el) { return false }

          if (!tab.active) {
            offset += $el.clientWidth
            return true
          }
          tabWidth = $el.clientWidth
          return false
        })

        const transform = `translateX(${offset}px)`
        style.width = `${tabWidth}px`
        style.transform = transform
        style.msTransform = transform
        style.webkitTransform = transform

        return style
      },
    },
  },
}
</script>
