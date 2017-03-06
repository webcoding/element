<template>
  <page class="page-demo">
    <group padded>
      <router-link to="about" tag="h2">Web Design Mobile@Vue2.x</router-link>
      <p>移动端组件库</p>
    </group>
    <div class="group" v-for="group in navs">
      <div class="group-header" v-text="`${group.title} ${group.small}`"></div>
      <div class="list">
        <cell v-for="item in group.list" :to="`/demo/${item.link}`" :title="`${item.title} ${item.small}`" is-link>
          <i solt="media" v-if="item.icon" :class="['iconfont', `icon-${item.icon}`]"></i>
          <badge :status="item.status" :text="item.status"></badge>
        </cell>
      </div>
    </div>
  </page>
</template>


<script>
  import navs from '../navList'

  export default {
    data() {
      return {
        navs: [],
      }
    },

    created() {
      this.navs = navs
    },

    methods() {
      // 修改 item 中某个数据的显示？
      // itemTitle(item) {
      //   return item.title + ' ' + item.small.toString()[0].toUpperCase() + item.small.toString().slice(1)
      // },
    },
  }

</script>

<style lang="sass">

</style>
