import Vue from 'vue'
import App from './App.vue'
// import Demos from './Demos.vue'
import store from './store/index'
import router from './router'
// import { sync } from 'vuex-router-sync'
import * as filters from './filters'
// import FastClick from 'fastclick';

import vueUI from '../src/index'

// 错误统计
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
Raven
  .config('https://37695669ab8e4d0688819f320de4a73a@sentry.io/144523')
  .addPlugin(RavenVue, Vue)
  .install()


// 注入组件库
Vue.use(vueUI)

// sync the router with the vuex store.
// this registers `store.state.route`
// sync(store, router)

// FastClick.attach(document.body);
// document.addEventListener('DOMContentLoaded', function() {
//   if (window.FastClick) window.FastClick.attach(document.body);
// }, false);

// register global utility filters.
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key])
})



// create the app instance.
// here we inject the router and store to all child components,
// making them available everywhere as `this.$router` and `this.$store`.
const app = new Vue(Vue.util.extend({
  router,
  store,
}, App))

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
// export { app, router, store }
export { app, router }
