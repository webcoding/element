<template>
  <div class="page">
    <div class="page-content">
      <div class="text-center">
        <img src="../assets/logo.png" height="200"/>
      </div>
      <hello></hello>
    </div>
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
