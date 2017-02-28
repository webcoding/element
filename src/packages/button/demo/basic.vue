<template>
  <page class="page-btn">
    <div class="page-header">
      <h3>按钮 <small>button</small></h3>
      <p>主按钮和次按钮可独立使用，空心按钮用于和主按钮组合。需要强引导用主按钮，切记主按钮在同一个操作区域最多出现一次。</p>
    </div>
    <group padded title="普通按钮">
      <h4>默认</h4>
      <x-button type="primary">主按钮</x-button>
      <x-button>默认次按钮</x-button>
      <x-button type="ghost">空心按钮</x-button>
      <x-button type="dashed">虚线按钮</x-button>

      <p>要避免并列过多操作让用户选择，在不得不并列多个操作时，需区分操作主次，减轻用户的选择难度。</p>
      <x-button type="primary" is-block>主要操作</x-button>
      <x-button type="default" is-block>次要操作</x-button>

      <h4>尺寸大小</h4>
      <x-button size="xs">超小按钮</x-button>
      <x-button size="sm">小按钮</x-button>
      <x-button size="md">默认中按钮</x-button>
      <x-button size="lg">大按钮</x-button>

      <h4>形状 - shape="circle"</h4>
      <x-button shape="square">默认方角</x-button>
      <x-button shape="radius">小圆角</x-button>
      <x-button shape="circle">大圆角</x-button>
      <x-button shape="round">大圆角</x-button>
      <h4>功能 - nativeType="button/reset/submit/menu"</h4>
      <x-button>BUTTON</x-button>
      <x-button nativeType="reset">RESET</x-button>
      <x-button nativeType="submit">SUBMIT</x-button>
      <x-button nativeType="menu">MENU</x-button>

    </group>
    <group padded title="带图标的按钮">
      <x-button icon="home">按钮</x-button>
      <x-button icon="search" shape="circle"></x-button>
      <x-button icon="search">搜索</x-button>
      <x-button icon="plus">按钮</x-button>
      <x-button icon="del">按钮</x-button>
    </group>
    <group padded title="带数字的按钮">

    </group>
    <group padded title="加载中的按钮">
      <x-button loading>加载中...</x-button>

    </group>
  </page>
</template>

<style>
.page-btn .btn{
  margin: 0 1em 1em 0;
}
</style>
