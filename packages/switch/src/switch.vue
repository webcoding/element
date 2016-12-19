<template>
  <label class="switch">
    <input class="switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="switch-core" :style="style" :disabled="disabled"><span v-if="text" class="switch-text" v-text="currentValue ? texts[1] : texts[0]"></span><span class="switch-blank"></span></span>
    <div class="switch-label"><slot></slot></div>
  </label>
</template>

<script>
/**
 * switch
 * @module packages/switch
 * @desc 滑动开关/表单开关
 * @using 在两个互斥对象进行选择，eg：选择开或关。
 * @rules
 *   - 只在 List 中使用
 *   - 避免增加额外的文案来描述当前 Switch 的值
 *   - 可调整 Switch 的样式来满足 app 的视觉风格
 * @param {string} [name] - switch的 name
 * @param {string} [text] - switch的 text
 * @param {boolean} [value] - 是否默认选中，绑定值，支持双向绑定
 * @param {boolean} [disabled] - 是否不可修改
 * @param {function} [onChange] - change事件触发的回调函数,参数是 value 的值
 * @param {slot} - 显示内容
 *
 * @example
 * <mt-switch v-model="value"></mt-switch>
 */
export default {
  name: 'x-switch',

  props: {
    name: String,
    text: {
      type: String,
      default: '', // on/off 开/关 ABC/···　等
      validator: function (value) {
        // 开关提示，有值则必须成对
        return value.length > 0 ? value.indexOf('/') > -1 : true
      }
    },
    complex: String,
    width: {
      type: String,
      default: '', // Number
      validator: function (value) {
        return value ? value > 0 : true
      }
    },
    checked: Boolean,
    value: {
      // 这里能使用一个属性 checked 来做么，可以更简化使用
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      currentValue: this.value || this.checked,
      texts: this.text ? this.text.split('/') : [],
    };
  },

  computed: {
    style () {
      return [
        this.width ? {width: this.width + 'px'} : {},
      ]
    },
    // classes () {
    //   return [
    //     {
    //       'is-disabled': this.disabled,
    //       'is-plain': this.plain,
    //     },
    //   ]
    // }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    }
  },
};
</script>

<style lang="sass" scope>
$switch-check: #fff;
$switch-checked: #4dd865;
$switch-border: #d9d9d9;

.switch {
  display: flex;
  align-items: center;
  position: relative;

  .switch-label {
    margin-left: 10px;
    display: inline-block;

    &:empty {
      margin-left: 0;
    }
  }



  .switch-core {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
    position: relative;
    // size: 52px 32px;
    min-width: 52px;
    height: 32px;
    line-height: 30px;
    border: 1px solid $switch-border;
    border-radius: 16px;
    box-sizing: border-box;
    background: $switch-border;

    .switch-text{
      flex-grow: 1;
      position: relative;
      display: block;
      min-width: 16px;
      padding: 0 6px 0 4px;
      font-size: 12px;
      text-align: center;
      user-select: none;
    }

    &::after, &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      transition: left 0.3s, transform 0.3s;
      // transition-property: left, transform;
      // transition-duration: 0.3s, 0.3s;
      border-radius: 15px;
    }

    .switch-blank{
      // 占位符
      opacity: 0;
    }

    .switch-blank,
    &::after {
      // position: relative;
      flex-shrink: 0;
      // size: 30px;
      width: 30px;
      height: 30px;
      background-color: $switch-check;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }

    &::before {
      // z-index: 1;
      // size: 50px 30px;
      width: 100%;
      height: 30px;
      background-color: #fdfdfd;
    }
  }

  .switch-input {
    display: none;

    &:checked + .switch-core {
      border-color: $switch-checked;
      background-color: $switch-checked;
      flex-direction: row;

      .switch-text{
        padding: 0 4px 0 6px;
        text-align: left;
        color: #fff;
      }

      &::before {
        transform: scale(0);
      }

      &::after {
        // 完成自适应宽度的开关动画支持
        left: 100%;
        transform: translateX(-100%);
      }

    }
  }

}
</style>
