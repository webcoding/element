<template>
  <page class="page-flex">
    <div class="page-header">
      <h3>弹性布局 <small>Flex</small></h3>
      <p>布局的传统解决方案，基于盒状模型，依赖 display属性 + position属性 + float属性。它对于那些特殊布局非常不方便，比如，垂直居中就不容易实现。</p>
      <p>2009年，W3C提出了一种新的方案----Flex布局，可以简便、完整、响应式地实现各种页面布局。</p>
      <p>Flex是Flexible Box的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性。</p>
      <p class="note"><b>注意</b> 设为Flex布局以后，子元素的float、clear和vertical-align属性将失效。</p>
    </div>
    <group title="适用场景" padded>
      <p>Flex布局意为弹性布局，所以需要弹性设计的地方，即是最适用Flex 布局的地方。以下场景，优先选择 Flex 布局</p>
      <ul>
        <li>垂直居中，尤其是不定高</li>
        <li>弹性自适应宽度</li>
        <li></li>
        <li></li>
      </ul>
    </group>
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
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
