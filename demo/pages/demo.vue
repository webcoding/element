<template>
  <transition>
    <router-view></router-view>
  </transition>
</template>


<script>
export default {

  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
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
