import Vue from 'vue'
import App from './App.vue'
// import Demos from './Demos.vue'
// import store from './store'
import router from './router'
// import { sync } from 'vuex-router-sync'
import * as filters from './filters'

import vueUI from '../src/index'
// 注入组件库
Vue.use(vueUI)

// sync the router with the vuex store.
// this registers `store.state.route`
// sync(store, router)

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
  // store,
}, App))

// let indexScrollTop = 0
// router.beforeEach((route, redirect, next) => {
//   if (route.path !== '/') {
//     indexScrollTop = document.body.scrollTop
//   }
//   document.title = route.meta.title || document.title
//   next()
// })
//
// router.afterEach(route => {
//   if (route.path !== '/') {
//     document.body.scrollTop = 0
//   } else {
//     Vue.nextTick(() => {
//       document.body.scrollTop = indexScrollTop
//     })
//   }
// })

// expose the app, the router and the store.
// note we are not mounting the app here, since bootstrapping will be
// different depending on whether we are in a browser or on the server.
// export { app, router, store }
export { app, router }
