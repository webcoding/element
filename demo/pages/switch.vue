<template>
  <page>
    <div class="page-header">
      <h3>滑动开关 <small>Switch</small></h3>
      <p></p>
    </div>

    <div class="page-part page-content">
      <x-switch v-model="value1" @change="handleChange">
        <label v-text="value1"></label>
      </x-switch>

      <x-switch v-model="value4" @change="handleChange">
        <label v-text="value4"></label>
      </x-switch>

      <x-switch disabled v-model="value5" @change="handleChange">
        <!-- <label v-text="value5"></label> -->
        禁用
      </x-switch>

      <x-switch disabled v-model="value6" @change="handleChange">
        <!-- <label v-text="value6"></label> -->
        禁用
      </x-switch>
    </div>

    <div class="group">
      <div class="list">
        <cell :title="'选项 ' + value2">
          <x-switch v-model="value2" @change="handleChange"></x-switch>
        </cell>
        <cell :title="'选项禁用 ' + value3">
          <x-switch disabled v-model="value3" @change="handleChange"></x-switch>
        </cell>
      </div>
    </div>
  </page>
</template>

<script>
export default {
  name: 'page-switch',

  data() {
    return {
      value1: false,
      value2: false,
      value3: true,
      value4: true,
      value5: false,
      value6: true,
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
.page-content .switch{
  margin-bottom: 0.5rem;
}
</style>
