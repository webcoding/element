import Vue from 'vue'
import Router from 'vue-router'
import store from './store'

import error404 from './components/404.vue'
import error500 from './components/500.vue'

import demo from './pages/demo.vue'
import index from './pages/index.vue'
// import about from './pages/about.vue'
import login from './pages/login.vue'
import list from './pages/list.vue'

import navList from './navList'
import packages from '../src/packages'

Vue.use(Router)

// import typography from './pages/typography.vue'
// import grid from './pages/grid.vue'
// import icon from './pages/icon.vue'
// import badge from './pages/badge.vue'
// import cell from './pages/cell.vue'
// import switch from './pages/switch.vue'

// import { createListView } from './pages/CreateListView'
// import ItemView from './pages/ItemView.vue'
// import UserView from './pages/UserView.vue'


const registerRoute = (config) => {
  const routes = []
  config.map(nav =>
    nav.list.map((page) => {
      const isPackage = packages.indexOf(page.link) > -1
      // eslint-disable-line global-require
      if (page.status !== 'todo') {
        // console.log(page.link)
        routes.push({
          path: `${page.link}`,
          component: isPackage ? require(`../src/packages/${page.link}/demo/basic.vue`) : require(`./pages/${page.link}.vue`),
          name: `demo/${page.link}`,
          meta: {
            title: `${page.title} ${page.small}`,
            desc: page.desc,
          },
        })
      }
      return false
    })
  )

  return routes
}

const componentRoutes = registerRoute(navList)

const router = new Router({
  // 使用 history 模式（默认 hash）
  // 以下 #后移的事情，比如微信分享等情况下 会变成，而且多次分享，多个参数叠加，太恶心了
  // http://10.0.1.167:8080/?from=singlemessage&isappinstalled=0#/top?from=singlemessage&isappinstalled=0）
  // 如果不是 history 模式的话，经过客户端js运行之后会变成 http://localhost:3000/foo/#!/（经测试暂时没遇到）
  mode: 'history',
  // base: '',
  // 记住页面的滚动位置，仅 history 模式适用(浏览器返回，系统会自动记住处理)
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/index', name: 'index', component: index },
    {
      path: '/demo',
      // 使用默认子路由，则父路由的 name 就得去掉
      name: '',
      component: demo,

      // 否则使用 `:to="{name: 'demo'"` 会导致默认子路由不会render
      children: [{
        path: '/',
        name: 'list',
        component: list,
      }].concat(componentRoutes),
    },
    { path: '/login', name: 'login', component: login },
    {
      path: '/user',
      name: 'user',
      meta: { requiresAuth: true },
      component: resolve => require(['./pages/user.vue'], resolve),
    },
    {
      path: '/about',
      name: 'about',
      component: resolve => require(['./pages/about.vue'], resolve),
    },
    { path: '/', name: 'root', redirect: '/index' },
    { path: '/500', name: 'error', component: error500 },
    { path: '/*', name: 'default', component: error404 },
  ],
  // routes: [
  //   { path: '/index', component: index },
  //   { path: '/demo', component: demo },
  //   { path: '/about', component: about },
  //   { path: '/typography', component: typography },
  //   { path: '/grid', component: grid },
  //   { path: '/icon', component: icon },
  //   { path: '/badge', component: badge },
  //   { path: '/cell', component: cell },
  //   { path: '/switch', component: switch },
  //   // { path: '/', component: Demos },
  //   // { path: '/', component: createListView('top') },
  //   // { path: '/top/:page(\\d+)?', component: createListView('top') },
  //   // { path: '/new/:page(\\d+)?', component: createListView('new') },
  //   // { path: '/show/:page(\\d+)?', component: createListView('show') },
  //   // { path: '/ask/:page(\\d+)?', component: createListView('ask') },
  //   // { path: '/job/:page(\\d+)?', component: createListView('job') },
  //   // { path: '/item/:id(\\d+)', component: ItemView },
  //   // { path: '/user/:id', component: UserView },
  //   { path: '/', redirect: '/index' },
  //   { path: '/*', component: error404 },
  // ],
})

const auth = {
  loggedIn() {
    return Boolean(store.state.user.id)
  },
}

const loginPath = '/login'
// let indexScrollTop = 0
// 权限检测
router.beforeEach((to, from, next) => {
  const { meta, path } = to
  const { requiresAuth = false } = meta

  // if (to.matched.some(record => record.meta.requiresAuth)) {
  if (requiresAuth && !auth.loggedIn() && path !== loginPath) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    return next({
      path: loginPath,
      query: { redirect: to.fullPath },
    })
  }

  // 默认就会记录滚动位置，不做处理
  // if (path !== '/') {
  //   indexScrollTop = document.body.scrollTop
  // }
  // document.title = meta.title || document.title

  // 确保一定要调用 next()
  return next()
})

// router.afterEach(to => {
//   if (to.path !== '/') {
//     document.body.scrollTop = 0
//   }else {
//     Vue.nextTick(() => {
//       document.body.scrollTop = indexScrollTop
//     })
//   }
// })

export default router
