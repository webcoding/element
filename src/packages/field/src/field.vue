<template>
  <!-- v-clickoutside="doCloseActive" -->
  <cell
    class="field"
    :title="label"
    :class="[{
      'is-textarea': type === 'textarea',
      'is-nolabel': !label
    }]">
    <textarea
      ref="textarea"
      class="field-core"
      @change="$emit('change', currentValue)"
      :placeholder="placeholder"
      v-if="type === 'textarea'"
      :rows="rows"
      :disabled="disabled"
      :readonly="readonly"
      v-model="currentValue">
    </textarea>
    <input
      ref="input"
      class="field-core"
      @change="$emit('change', currentValue)"
      :placeholder="placeholder"
      :number="type === 'number'"
      v-else
      :type="type"
      @focus="active = true"
      :disabled="disabled"
      :readonly="readonly"
      :value="currentValue"
      @input="handleInput">
    <div
      @click="handleClear"
      class="field-clear"
      v-if="!disableClear"
      v-show="currentValue && type !== 'textarea' && active">
      <i class="iconfont icon-field-error"></i>
    </div>
    <span class="field-state" v-if="state" :class="['is-' + state]">
      <i class="iconfont" :class="['icon-field-' + state]"></i>
    </span>
    <div class="field-other">
      <slot></slot>
    </div>
  </cell>
</template>

<script>
/**
 * field
 * @module packages/field
 * @desc 编辑器，依赖 cell
 *
 * @param {string} [type=text] - field 类型，接受 text, textarea 等
 * @param {string} [label] - 标签
 * @param {string} [rows] - textarea 的 rows
 * @param {string} [placeholder] - placeholder
 * @param {string} [disabled] - disabled
 * @param {string} [readonly] - readonly
 * @param {string} [state] - 表单校验状态样式，接受 error, warning, success
 *
 * @example
 * <field v-model="value" label="用户名"></field>
 * <field v-model="value" label="密码" placeholder="请输入密码"></field>
 * <field v-model="value" label="自我介绍" placeholder="自我介绍" type="textarea" rows="4"></field>
 * <field v-model="value" label="邮箱" placeholder="成功状态" state="success"></field>
 */
// import Clickoutside from 'utils/clickoutside';
export default {
  name: 'field',
  data() {
    return {
      active: false,
      currentValue: this.value
    };
  },
  // components: { XCell },
  directives: {
    // Clickoutside,
  },
  props: {
    type: {
      type: String,
      default: 'text'
    },
    rows: String,
    label: String,
    placeholder: String,
    readonly: Boolean,
    disabled: Boolean,
    disableClear: Boolean,
    state: {
      type: String,
      default: 'default'
    },
    value: {},
    attr: Object
  },

  methods: {
    doCloseActive() {
      this.active = false;
    },

    handleInput(e) {
      this.currentValue = e.target.value;
    },

    handleClear() {
      if (this.disabled || this.readonly) return;
      this.currentValue = '';
    }
  },

  watch: {
    value(val) {
      this.currentValue = val;
    },

    currentValue(val) {
      this.$emit('input', val);
    },

    attr: {
      immediate: true,
      handler(attrs) {
        this.$nextTick(() => {
          const target = [this.$refs.input, this.$refs.textarea];
          target.forEach(el => {
            if (!el || !attrs) return;
            Object.keys(attrs).map(name => el.setAttribute(name, attrs[name]));
          });
        });
      }
    }
  },
}
</script>

<style>
$error-color: #f44336;
$warning-color: #ffc107;
$success-color: #4caf50;


@component-namespace {
  @component field {
    display: flex;

    .cell-after {
      flex-grow: 1;
    }

    @when textarea {
      align-items: inherit;

      .cell-title {
        padding: 10px 0;
      }

      .cell-value {
        padding: 5px 0;
      }
    }

    .cell-title {
      flex: none;
    }

    .cell-value {
      flex: 1;
      color: inherit;
      display: flex;
    }

    @descendent core {
      appearance: none;
      border-radius: 0;
      border: 0;
      flex: 1;
      outline: 0;
      line-height: 1.6;
      font-size: inherit;
      width: 100%;
      min-height: 36px;
    }

    @descendent clear {
      opacity: .2;
    }

    @descendent state {
      color: inherit;
      margin-left: 20px;

      .mintui {
        font-size: 20px;
      }

      @when error {
        color: $error-color;
      }

      @when warning {
        color: $warning-color;
      }

      @when success {
        color: $success-color;
      }

      @when default {
        margin-left: 0;
      }
    }

    @descendent other {
      position: absolute 0 0 * *;
    }

    @when nolabel {
      .cell-title {
        display: none;
      }
    }
  }
}
</style>
