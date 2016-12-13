<template>
  <div class="page">
    <div class="page-header">
      <h3>关于 H5_plus</h3>
    </div>
    <div class="page-content">
      <h2>H5_plus 有以下几个目标：</h2>
      <ol>
        <li>使用简单</li>
        <li>提供扩展的 HTML 标签</li>
        <li>提供经典布局供参考</li>
      </ol>
      <p>说明：编写网页的复杂功能也能像 html 原始标签一样使用简单，这部分通过扩展 HTML 标签来实现功能增强；另外要提供大量的优秀经典布局供参考，以快速实现需求</p>
      <h3>功能页面不要太细分</h3>
      <p>demo 页面各种功能不要太细分，有许多小功能，直接应用即可</p>
      <p>badge、button根本就不用作为组件实现</p>
      <p>实现可以更贴近 app 的实现，各 view 的状态怎么保存也处理一下</p>

      <h2>实现</h2>
      <p>默认使用 reboot 样式，轻量级排版，可以自配置</p>
      <p>详细排版样式 typography.scss，真正开发项目，demo 可用，排版样式在 .typo 下才起作用</p>
      <p>真正使用的项目，自己再定制，比如在 page 里面</p>
      <p>组件实现是一种探究，为了寻找最佳实践，所以可以做多种实现，自主选择</p>

      <h3>使用 rem</h3>
      <section>
        <h3>1.1 关于 rem</h3>
        <p>本项目采用 1rem=16px，项目内全部使用 px2rem 形式按 px 书写，如 px2rem(16) 输出即为1rem</p>
        <p>rem 是相对于 html 元素的 font-size 的一个单位。如果 html 上定义了 font-size: 20px;，则无论在任何地方都是 1rem = 20px 这个大小不会受到父元素的影响。</p>
        <p>我们统一使用rem对页面进行整体缩放。强烈建议大家对需要适应页面大小的任何元素都使用 rem 为单位来定义。</p>
        <p>事实上，除了 border-width 之外，appStyles 中已经没有用到px单位的地方。</p>
        <p>我们在 iphone6 上使用 1rem = 20px 来换算。小于 375px 的设备上不做缩小处理，对 大于 375px 宽度的设备进行等比缩放。</p>
        <p>关于 rem 可以参考 <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/length">MDN 上的定义</a>。</p>
      </section>
      <section>
        <h3>1.2 为什么使用 rem</h3>
        <p>使用 rem 可以实现页面布局的尺寸对应于唯一标准，可实现缩放时，布局字体等，全等比缩放而不会导致布局错乱</p>
        <p>目前实现，建议以 iphone6 为基准参考。而 rem 的基准，建议使用1rem = 20px 或者 16px，但要求所有使用位置，引用函数 px2rem 转px 值为 rem 使用</p>
      </section>
    </div>
  </div>
</template>
