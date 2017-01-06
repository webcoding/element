<!--  不能使用 router-link（必须有 to 属性，且会拦截点击事件）
如果想实现动态 tag，就自己实现一个类似 router-link 的标签 x-tag -->

<!-- TODO: 还需要控制 cell 的大小间距 8/16-->

<template>
  <x-tag class="cell" :href="href" :tag="tag">
    <!-- <span class="cell-mask" v-if="isLink"></span> -->
    <div class="cell-wrapper" :class="{ 'cell-link' : isLink }" >
        <div class="cell-media">
          <slot name="icon" class="media">
            <i v-if="icon" class="media iconfont" :class="'icon-' + icon"></i>
          </slot>
          <slot name="badge"></slot>
        </div>
        <div class="cell-content">
          <div class="cell-title">
            <slot name="title">
              <span class="text" v-text="title"></span>
              <!-- <span v-if="label" class="cell-label" v-text="label"></span> -->
            </slot>
          </div>
          <div class="cell-desc" v-if="desc">{{desc}}</div>
        </div>
        <div class="cell-after">
          <slot>
            <span v-text="value"></span>
          </slot>
        </div>
      </div>
      <!-- <div class="cell-after">
        <slot>
          <span v-text="after"></span>
        </slot>
      </div> -->
    </div>
    <!-- <i v-if="isLink" class="iconfont icon-arrow-right"></i> -->
  </x-tag>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('mint-ui/packages/font/style.css');
// }

function cleanPath(path) {
  return path.replace(/\/\//g, '/');
}

/**
 * cell
 * @module packages/cell
 * @desc 单元格
 * @param {string} [to] - 跳转链接
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {string} [title] - 标题
 * @param {string} [label] - 备注信息
 * @param {boolean} [is-link=false] - 可点击的链接
 * @param {string} [value] - 右侧显示文字
 * @param {slot} - 同 value, 会覆盖 value 属性
 * @param {slot} [title] - 同 title, 会覆盖 title 属性
 * @param {slot} [icon] - 同 icon, 会覆盖 icon 属性，例如可以传入图片
 *
 * @example
 * <cell title="标题文字" icon="back" is-link value="描述文字"></cell>
 * <cell title="标题文字" icon="back">
 *   <div slot="value">描述文字啊哈</div>
 * </cell>
**/
export default {
  name: 'cell',

  props: {
    to: String,
    media: String,
    icon: String,
    title: String,
    small: String,
    // subTitle: String,
    desc: String,
    // after: String,
    label: String,
    isLink: Boolean,
    value: {}
  },

  // 注意，这里 cell-media 不为空时，会出现一个间距

  computed: {
    tag() {
      // return 'div';
      return this.isLink ? 'a' : 'div';
    },
    href() {
      let href;

      if (this.$router && this.to) {
        const base = this.$router.history.base;
        const resolved = this.$router.match(this.to);
        const fullPath = resolved.redirectedFrom || resolved.fullPath;

        href = base ? cleanPath(base + fullPath) : fullPath;
      } else {
        href = this.to;
      }

      if (href && !this.added && this.$router) {
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener('click', this.handleClick);
        });
      }
      return href;
    }
  },

  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>

<style lang="sass">

</style>
