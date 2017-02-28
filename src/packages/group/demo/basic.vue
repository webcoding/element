<template>
  <page>
    <div class="page-header">
      <h3>组别 <small>group</small></h3>
    </div>
    <group title="组别1：容器" padded>
      默认提供为普通内容容器效果
    </group>
    <group title="组别2：列表" type="list">
      <cell title="列表项"></cell>
      <cell title="列表项"></cell>
      <cell title="列表项"></cell>
    </group>
    <group type="index">
      <div slot="header" class="group-header">组别3：索引列表 未完成</div>
      <div slot="footer"># A-G H-Z</div>
      <group title="A-G">
        <cell title="apple">🍎</cell>
        <cell title="banana">🍌</cell>
        <cell title="cherry">🍒</cell>
        <cell title="grape">🍇</cell>
        <cell title="green apple">🍏</cell>
      </group>
      <group title="H-Z">
        <cell title="hami melon">🍈</cell>
        <cell title="lemon">🍋</cell>
        <cell title="orange">🍊</cell>
        <cell title="peach">🍑</cell>
        <cell title="pear">🍐</cell>
        <cell title="pineapple">🍍</cell>
        <cell title="strawberry">🍓</cell>
        <cell title="watermelon">🍉</cell>
      </group>
    </group>
  </page>
</template>
