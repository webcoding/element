<template>
  <div class="page">
    <div class="page-header">
      <h3>徽章 <small>badge</small></h3>
    </div>
    <group padded>
      <badge type="todo">1</badge>
      <badge type="doing">2</badge>
      <badge type="done">3</badge>
      <!-- <badge type="todo" text="1"></badge>
      <badge type="doing" text="2"></badge>
      <badge type="done" text="3"></badge> -->
      <br/>
      <badge type="todo">123</badge>
      <badge type="done">new</badge>
      <br/>
      <badge bg="red">自定义背景色</badge>
      <badge color="orange">自定义颜色</badge>
      <br/>
    </group>
    <div class="group">
      <div class="group-header">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="list">
        <cell title="标题文字" desc="摘要信息">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" bg="red" point>3</badge>
          <span>icon 是图片</span>
        </cell>
        <cell title="标题文字" desc="摘要信息">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" bg="red">6</badge>
          <span>icon 是图片</span>
        </cell>
        <cell title="标题文字">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" bg="red">28</badge>
          <span>icon 是图片</span>
        </cell>
      </div>
    </div>
    <div class="group">
      <div class="group-header">新消息提示跟摘要信息后，统一在列表右侧</div>
      <div class="list">
        <cell title="单行列表">
          <span>有新消息</span>
          <badge bg="red" point></badge>
        </cell>
        <cell title="我的订单">
          <span>未评价</span>
          <badge type="doing" size="small">10</badge>
        </cell>

        <!-- 不建议 badge 放左侧
        <cell>
          <div slot="title"><span class="text">未读消息</span> <badge bg="red">100</badge></div>
        </cell> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
    }
  },
  computed: {},
  ready: function () {
    console.log(111);
  },
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="css">
</style>
