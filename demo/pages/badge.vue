<template>
  <page>
    <div class="page-header">
      <h3>徽章 <small>badge</small></h3>
    </div>
    <group padded class="badge-demo">
      <h4>默认</h4>
      <badge status="todo" text="1"></badge>
      <badge status="doing" text="new"></badge>
      <badge status="done" text="new"></badge>
      <br/>
      <badge status="todo">123</badge>
      <badge status="doing">99+</badge>
      <badge status="todo">...</badge>
      <badge status="done">new</badge>
      <br/>
      <badge color="blue">自定义背景色</badge>
      <badge textColor="yellow">自定义颜色</badge>
      <h4>特定形状</h4>
      <badge status="todo" shape="square">1</badge>
      <badge status="doing" shape="radius">2</badge>
      <badge status="done" shape="circle">3</badge>
      <badge isDot>2</badge>
      <h4>Size 尺寸大小？</h4>
      <p>这个暂无必要</p>
    </group>
    <div class="group">
      <div class="group-header">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="list">
        <cell title="标题文字" desc="摘要信息">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" isDot>3</badge>
          <span>icon 是图片</span>
        </cell>
        <cell title="标题文字" desc="摘要信息">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge">6</badge>
          <span>icon 是图片</span>
        </cell>
        <cell title="标题文字">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge">28</badge>
          <span>icon 是图片</span>
        </cell>
      </div>
    </div>
    <div class="group">
      <div class="group-header">新消息提示跟摘要信息后，统一在列表右侧</div>
      <div class="list">
        <cell title="单行列表">
          <span>有新消息</span>
          <badge isDot></badge>
        </cell>
        <cell title="我的订单">
          <span>未评价</span>
          <badge status="doing" size="small">10</badge>
        </cell>

        <!-- 不建议 badge 放左侧
        <cell>
          <div slot="title"><span class="text">未读消息</span> <badge bg="red">100</badge></div>
        </cell> -->
      </div>
    </div>
  </page>
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

<style>
.badge-demo .badge{
  margin-right: 0.5rem;
}
</style>
