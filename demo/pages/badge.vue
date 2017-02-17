<template>
  <page>
    <div class="page-header">
      <h3>徽章 <small>badge</small></h3>
    </div>
    <group padded class="badge-demo">
      <h4>默认</h4>
      <badge status="todo" text="1"></badge>
      <badge status="doing" text="2"></badge>
      <badge status="done" text="3"></badge>
      <br/>
      <badge text="12" />
      <badge text="5" :style="{backgroundColor: '#fff', color: '#999999', border: '1px solid #d9d9d9'}"></badge>
      <badge color="#87d068" text="123" :max="99" />
      <badge status="done" text="1201" :max="999" :style="{borderRadius: '2px'}"></badge>
      <badge status="todo" text="..."></badge>
      <badge status="doing" text="券" shape="radius"></badge>
      <badge status="done" :style="{backgroundColor: '#fff', color: '#f19736', border: '1px solid #f19736', borderRadius: '2px'}" text="自动缴费"></badge>
      <br/>
      <badge color="blue" text="自定义背景色"></badge>
      <badge textColor="yellow" text="自定义颜色"></badge>
      <br/>
      <h4>特定状态类型，未完成</h4>
      <badge status="success" />
      <badge status="error" />
      <badge status="default" />
      <badge status="processing" />
      <badge status="warning" />
      <h4>特定形状</h4>
      <badge status="done" shape="dot"></badge>
      <badge status="todo" shape="square" text="1"></badge>
      <badge status="doing" shape="radius" text="2"></badge>
      <badge status="done" shape="circle" text="3"></badge>
      <badge isDot>2</badge>
      <h4>Size 尺寸大小？</h4>
      <p>这个暂时无必要</p>
    </group>
    <div class="group">
      <div class="group-header">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="list">
        <cell title="社交中的群消息通知" desc="当用户只需知道大致有内容更新时，应该使用红点型">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" v-show="isShow" text="3" isDot></badge>
          <span><x-switch v-model="isShow"></x-switch></span>
        </cell>
        <cell title="社交中的一对一的消息通知" desc="当用户有必要知晓每条更新时，应该使用数字型">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" text="6"></badge>
          <badge text="NEW"></badge>
        </cell>
        <cell title="超出99" desc="数字显示可以设定上限 max，默认99">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" text="100" :max="99"></badge>
          <span>加减操作</span>
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
          <badge status="doing" size="small" text="NEW"></badge>
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
// TODO: 貌似 99+ 中的 + 号有点未垂直居中
export default {
  data: function () {
    return {
      isShow: true,
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
