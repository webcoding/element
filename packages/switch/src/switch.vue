<template>
  <label class="switch">
    <input class="switch-input" :disabled="disabled" @change="$emit('change', currentValue)" type="checkbox" v-model="currentValue">
    <span class="switch-core" :disabled="disabled"></span>
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
 * @param {string} [name] - switch的name
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
    complex: String,
    value: {
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
      currentValue: this.value
    };
  },

  computed: {
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
  }
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
    display: inline-block;
    position: relative;
    // size: 52px 32px;
    width: 52px;
    height: 32px;
    border: 1px solid $switch-border;
    border-radius: 16px;
    box-sizing: border-box;
    background: $switch-border;

    &::after, &::before {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      transition: transform .3s;
      border-radius: 15px;
    }

    &::after {
      // size: 30px;
      width: 30px;
      height: 30px;
      background-color: $switch-check;
      box-shadow: 0 1px 3px rgba(0, 0, 0, .4);
    }

    &::before {
      // size: 50px 30px;
      width: 50px;
      height: 30px;
      background-color: #fdfdfd;
    }
  }

  .switch-input {
    display: none;

    &:checked + .switch-core {
      border-color: $switch-checked;
      background-color: $switch-checked;

      &::before {
        transform: scale(0);
      }

      &::after {
        transform: translateX(20px);
      }
    }
  }

}
</style>
