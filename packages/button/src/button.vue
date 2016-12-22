<template>
  <button
    class="btn"
    :class="classes"
    :type="nativeType"
    :disabled="disabled"
    @click="handleClick">
    <span class="btn-icon" v-if="icon || $slots.icon">
      <slot name="icon">
        <i v-if="icon" class="iconfont" :class="'icon-' + icon"></i>
      </slot>
    </span>
    <label class="btn-text"><slot></slot></label>
  </button>
</template>

<script>
// if (process.env.NODE_ENV === 'component') {
//   require('ui/packages/font/style.css');
// }

/**
 * button
 * @module packages/button
 * @desc 按钮
 * @param {string} [type=default] - 显示类型，接受 default, primary, danger
 * @param {boolean} [disabled=false] - 禁用
 * @param {boolean} [plain=false] - 幽灵按钮
 * @param {string} [size=normal] - 尺寸，接受 normal, small, large
 * @param {string} [native-type] - 原生 type 属性，接受 button, reset, submit, menu
 * @param {string} [icon] - 图标，提供 more, back，或者自定义的图标（传入不带前缀的图标类名，最后拼接成 .mintui-xxx）
 * @param {slot} - 显示文本
 * @param {slot} [icon] 显示图标
 *
 * @example
 * <button size="large" icon="back" type="primary">按钮</button>
 */
export default {
  name: 'x-button',

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  },

  props: {
    icon: String,
    disabled: Boolean,
    loading: Boolean,
    plain: Boolean,
    type: {
      type: String,
      default: '',
      validator(value) {
        return value ? [
          'primary',
          'ghost',
          'dashed',
        ].indexOf(value) > -1 : true;
      }
    },
    size: {
      type: String,
      default: '',
      validator(value) {
        return value ? [
          'xs',
          'sm',
          'md',
          'lg',
          'xl',
        ].indexOf(value) > -1 : true;
      }
    },
    shape: {
      type: String,
      default: 'radius',
      validator(value) {
        return [
          'radius',
          'circle',
          'round',
          'square',
        ].indexOf(value) > -1;
      }
    },
    nativeType: {
      type: String,
      default: 'button',
      validator(value) {
        return [
          'button',
          'reset',
          'submit',
          'menu',
        ].indexOf(value) > -1;
      }
    },
  },

  computed: {
    // style () {
    //   return [
    //     this.color ? {color: this.color} : {},
    //     this.bg ? {backgroundColor: this.bg} : {},
    //   ]
    // },
    classes () {
      return [
        this.type ? `btn-${this.type}` : '',
        this.size ? `btn-${this.size}` : '',
        this.shape ? `is-${this.shape}` : '',
        {
          'disabled': this.disabled,
          'plain': this.plain,
        }
      ]
    },
  },

};
</script>

<style>

</style>
