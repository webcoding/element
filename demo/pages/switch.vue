<template>
  <page>
    <div class="page-header">
      <h3>滑动开关 <small>Switch</small></h3>
      <p></p>
    </div>
    <group class="page-part" padded>
      <x-switch v-model="value1" @change="handleChange">
        <label v-text="value1"></label>
      </x-switch>

      <!-- 禁用属性可以使用精简的 checked 来设定默认值 -->
      <x-switch disabled checked @change="handleChange">默认开，禁用</x-switch>
      <x-switch disabled @change="handleChange">默认关，禁用</x-switch>
    </group>

    <group class="page-part" padded title="支持自定义开关状态描述">
      <p>支持自适应内容宽度，如果开关描述字符长度不一致（ON/OFF)，请设定宽度属性</p>
      <x-switch v-model="value2" text="on/off" @change="handleChange">
        <label v-text="value2"></label>
      </x-switch>
      <x-switch v-model="value3" width="64" text="ON/OFF" @change="handleChange">
        <label v-text="value3"></label>
      </x-switch>
      <x-switch class="switch-big" v-model="value4" text="···/ABC" @change="handleChange">
        <label v-text="value4"></label>
      </x-switch>
      <x-switch v-model="value5" text="开/关" @change="handleChange">
        <label v-text="value5"></label>
      </x-switch>

    </group>

    <group>
      <cell :title="'选项 ' + value7">
        <x-switch disabled v-model="value7" @change="handleChange"></x-switch>
      </cell>
      <cell :title="'选项 ' + value8">
        <x-switch v-model="value8" @change="handleChange"></x-switch>
      </cell>
    </group>

    <group class="help" padded>
      <h3>还需要什么?</h3>
      <p>还要支持设定 on/off 或 ···/ABC 字样</p>
    </group>
  </page>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: true,
      value2: false,
      value3: true,
      value4: false,
      value5: true,
      value6: false,
      value7: false,
      value8: true,
    };
  },

  methods: {
    handleChange(event) {
      console.log(event);
    }
  }
};
</script>

<style scope>
.page-part .switch{
  margin-bottom: 0.5rem;
}
</style>

<style lang="sass">
// TODO：这里怎么会无法覆盖 switch 组件中的样式 font-size
// 这应该是打包顺序的问题导致的
// .switch-big {
.switch.switch-big {
  .switch-core{
    width: 64px;
    .switch-text{
      font-size: 30px;
      transform: translateX(-2px);
    }
  }
  .switch-input:checked + {
    .switch-core{
      .switch-text{
        font-size: 12px;
        transform: scale(0.8);
      }
    }
  }
}
</style>
