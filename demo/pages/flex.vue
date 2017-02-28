<template>
  <page class="page-flex">
    <div class="page-header">
      <h3>弹性布局 <small>Flex</small></h3>
      <p>布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p>
      <p>2009年，W3C提出了一种新的方案----Flex布局，可以简便、完整、响应式地实现各种页面布局。</p>
      <p>Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。</p>
      <p class="note"><b>注意</b> 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。</p>
    </div>
    <group title="示例集合" padded>
      <div class="x-row">
        <div class="x-col">item</div>
      </div>
      <div class="x-row">
        <div class="x-col">item</div>
        <div class="x-col">item</div>
        <div class="x-col">item</div>
        <div class="x-col">item</div>
      </div>
      <div class="x-row">
        <div class="x-col">item</div>
        <div class="x-col">item</div>
        <div class="x-col">item</div>
      </div>
      <div class="x-row">
        <div class="x-col">item</div>
        <div class="x-col">item</div>
      </div>
      <div class="x-row">
        <div class="x-col">item</div>
        <div class="x-col">item</div>
      </div>
    </group>
    <group title="适用场景" padded>
      <p>Flex布局意为弹性布局，所以需要弹性设计的地方，即是最适用Flex 布局的地方。以下场景，优先选择 Flex 布局</p>
      <ul>
        <li>垂直居中，尤其是不定高</li>
        <li>弹性自适应宽度</li>
      </ul>
    </group>
  </page>
</template>

<script>
export default {
  data: () => {
    return {}
  },
  computed: {},
  ready: () => {
    console.log(111)
  },
  attached: () => {},
  methods: {},
  components: {},
}
</script>

<style>
.page-flex .flex{
  margin-right: 0.5rem;
}
.page-flex .x-row{
  display: flex;
  margin-bottom: 10px;
}
.page-flex .x-col{
  flex: 1 1 auto;

  background: #dedede;
  text-align: center;
  border: 1px solid #fff;
}

</style>
