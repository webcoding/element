<template>
  <page class="page-user">
    <div class="page-header">
      <h3>用户中心 <small>user</small></h3>
    </div>
    <group padded>
      访问此页面需要登录权限，如果未登录，你不能访问。

      <button v-on:click="submitLogout">注销</button>
    </group>
  </page>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { USER_SIGNOUT } from '../store/user'

// function randomBy(under, over){
//   switch(arguments.length){
//     case 1: return parseInt(Math.random()*under + 1, 10);
//     case 2: return parseInt(Math.random()*(over - under + 1) + under, 10);
//     default: return 0;
//   }
// }

export default {
  // data() {
  //   return {
  //     // user: {
  //     //   id: randomBy(10) > 2,
  //     // },
  //   }
  // },
  computed: mapState({ user: state => state.user }),
  ready: function () {
    console.log(111);
  },
  attached: function () {},
  methods: {
    // ...mapActions([USER_SIGNOUT]),

    submitLogout() {
      // this.USER_SIGNOUT()
      this.$router.replace({ path: '/login' })
    }
  },
  components: {}
}
</script>

<style>
.abc-demo .abc{
  margin-right: 0.5rem;
}
</style>
