<template>
  <page>
    <search-bar autofocus v-model="value" :result="filterResult"></search-bar>
    <div class="page-header">
      <h3>示例页面 <small>SearchBar</small></h3>
    </div>
  </page>
</template>

<script>
import { FRUIT } from '../../data'

export default {
  // name: 'page-search',

  data() {
    return {
      value: '',
      defaultResult: FRUIT,
    };
  },

  computed: {
    filterResult() {
      return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
    }
  }
};
</script>

<style lang="css">
.page-search {
  height: 100%;
}
</style>
