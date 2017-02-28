<template>
  <page class="page-demo">
    <group padded>
      <router-link to="about" tag="h2">Web Design Mobile@Vue2.x</router-link>
      <p>移动端组件库</p>
    </group>
    <div class="group" v-for="group in navs">
      <div class="group-header" v-text="`${group.title} ${group.small}`"></div>
      <div class="list">
        <cell
          v-for="item in group.list"
          :to="`/demo/${item.link}`"
          :title="`${item.title} ${item.small}`"
          is-link>
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
.page-demo {
  padding-bottom: 50px;

  .indexicon {
    font-size: 22px;
    color: #26a2ff;
    display: inline-block;
    width: 30px;
    vertical-align: middle;

    &.icon-swipe {
      font-size: 26px;
    }

    &.icon-checklist {
      font-size: 18px;
    }
  }
}
.page-header {
  font-size: 20px;
  margin: 20px 1rem;
  // text-align: center;
  display: block;
  line-height: 1.5;

  p{
    margin-bottom: 10px;
    font-size: 12px;
  }
}

.page-part {
  margin-bottom: 15px;
}
.page-block {
  margin: 16px 0;
}
.page-content{
  padding: 0 16px;
}
</style>
