<template>
  <div class="header">
    <div class="inner">
      <router-link to="/" exact>
        <img class="logo" src="~public/logo.png" alt="logo">
      </router-link>
      <router-link to="/index">Index</router-link>
      <!-- <router-link to="/new">New</router-link>
      <router-link to="/show">Show</router-link>
      <router-link to="/ask">Ask</router-link> -->
      <router-link to="/demo">Demo</router-link>
      <a class="github" href="https://github.com/vuejs/vue-hackernews-2.0" target="_blank">
        Built with Vue.js
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'v-header'
}
</script>
