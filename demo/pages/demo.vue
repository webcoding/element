<template>
  <section class="page">
    <router-link class="content-block-title" to="about" tag="div">Welcome To h5Plus@Vue2.x</router-link>
    <div class="group" v-for="group in navs">
      <div class="group-header" v-text="group.title"></div>
      <div class="list">
        <cell
          v-for="item in group.list"
          :to="item.link"
          :title="item.title + ' ' + item.small"
          is-link>
          <i solt="media" v-if="item.icon" :class="['iconfont', 'icon-' + item.icon]"></i>
          <badge :type="item.status">{{item.status}}</badge>
        </cell>
      </div>
    </div>
  </section>
</template>


<script>
import navs from '../navList';

export default {
  data() {
    return {
      navs: []
    };
  },

  created() {
    this.navs = navs;
  },

  methods() {
    // 修改 item 中某个数据的显示？
    // itemTitle(item) {
    //   return item.title + ' ' + item.small.toString()[0].toUpperCase() + item.small.toString().slice(1)
    // },
  },
};
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
  margin: 20px auto;
  text-align: center;
  display: block;
  line-height: 1;

  p{
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
