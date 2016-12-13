<template>
  <div>
    <img src="../assets/logo.png" width="100%"/>
    <hello></hello>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue'

export default {
  name: 'app',
  components: {
    Hello
  }
}
</script>
