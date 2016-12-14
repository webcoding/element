<template>
  <page>
    <div class="page-header">Cell 组件</div>
    <div class="group">
      <div class="group-header">未读数红点跟在主题信息后，统一在列表左侧</div>
      <div class="list">
        <cell title="简单文本"></cell>
        <cell is-link
        title="这是标题，字大一点"
        desc="这里是描述内容，正文字体大小，但内容要多一点，这里是描述内容，正文字体大小，但内容要多一点"
        ></cell>
        <cell title="标题文字" icon="app" value="带 icon"></cell>
        <cell title="联系人名称">
          <!-- <img height="36" slot="icon" src="http://lorempixel.com/160/160/people/" alt="头像"> -->
          <!-- <svg width="40px" height="40px" slot="icon" xmlns="http://www.w3.org/2000/svg"><circle cx="20" cy="20" r="20" fill="#ebebeb"/></svg> -->
          <svg width="40px" height="40px" slot="icon" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <span>icon 是图片</span>
        </cell>
        <cell title="标题文字" desc="摘要信息">
          <svg slot="icon" width="40px" height="40px" xmlns="http://www.w3.org/2000/svg"><rect x="0" y="0" width="40" height="40" fill="#ebebeb" stroke="#ddd" stroke-width="1"/></svg>
          <badge slot="badge" bg="red">8</badge>
          <span>带 badge</span>
          <badge bg="#f60" color="#fff">28</badge>
        </cell>
        <cell is-link title="我的订单" desc="带链接">
          <span>查看全部订单</span>
        </cell>
        <cell title="标题文字">
          <badge>10</badge>
        </cell>
        <cell title="标题文字">
          <span style="color: green">自定义元素</span>
        </cell>
        <cell title="标题文字">
          <button size="small" type="primary" icon="back">按钮</button>
        </cell>
      </div>
    </div>
    <!-- <cell title="标题" label="描述信息" is-link></cell> -->
    <!-- <cell>

      <div slot="title">这是标题，字大一点 <span class="desc">标题描述或值</span></div>
      <div slot="after" class="cell-after">After</div>
    </cell>

    <cell class="cell cell-space-around">
      <span class="entry-cell cell-column iconfont icon-app">待付款</span>
      <span class="entry-cell cell-column iconfont icon-app">待收货</span>
      <span class="entry-cell cell-column iconfont icon-app">待评价</span>
      <span class="entry-cell cell-column iconfont icon-app">售后</span>
    </cell>
    <cell class="cell cell-sublist">
      <div class="cell-content">
        <div class="cell" data-type="">
          <div class="cell-content">
            <i class="iconfont icon-group"></i> 一级粉丝
          </div>
          <div class="cell-after">10</div>
        </div>
      </div>
    </cell> -->

  </page>
</template>

<script>
export default {
  name: 'page-cell',
  methods: {
    goBack() {
      history.go(-1);
    }
  },
}
</script>
