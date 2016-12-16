<template>
  <page>
    <group title="500" padded>
      <p>服务器错误</p>
      <button @click="goBack">点击返回</button>
    </group>
  </page>
</template>

<script>
export default {
  name: 'error500',
  methods: {
    goBack() {
      history.go(-1);
    }
  },
}
</script>
