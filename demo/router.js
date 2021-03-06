import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import error404 from './components/404.vue'
import error500 from './components/500.vue'

import demo from './pages/demo.vue'
import index from './pages/index.vue'
import about from './pages/about.vue'
// import typography from './pages/typography.vue'
// import grid from './pages/grid.vue'
// import icon from './pages/icon.vue'
// import badge from './pages/badge.vue'
// import cell from './pages/cell.vue'
// import switch from './pages/switch.vue'

// import { createListView } from './pages/CreateListView'
// import ItemView from './pages/ItemView.vue'
// import UserView from './pages/UserView.vue'

import navList from './navList'

const registerRoute = (config) => {
  let routes = []
  config.map(nav =>
    nav.list.map(page => {
      if (page.status !== 'todo') {
        console.log(page.link)
        routes.push({
          path: `/${page.link}`,
          component: require(`./pages/${page.link}.vue`),
          meta: {
            title: page.title + ' ' + page.small,
            description: page.description,
          },
        })
      }
    })
  )

  return routes
}

const routes = registerRoute(navList)

export default new Router({
  // 使用 history 模式（默认 hash）
  // 以下 #后移的事情，比如微信分享等情况下 会变成，而且多次分享，多个参数叠加，太恶心了
  // http://10.0.1.167:8080/?from=singlemessage&isappinstalled=0#/top?from=singlemessage&isappinstalled=0）
  // 如果不是 history 模式的话，经过客户端js运行之后会变成 http://localhost:3000/foo/#!/（经测试暂时没遇到）
  mode: 'history',
  // 记住页面的滚动位置，仅 history 模式适用(浏览器返回，系统会自动记住处理)
  scrollBehavior: () => ({ y: 0 }),
  routes: routes.concat([
    { path: '/index', component: index },
    { path: '/demo', component: demo },
    { path: '/about', component: about },
    { path: '/', redirect: '/index' },
    { path: '/500', component: error500 },
    { path: '/*', component: error404 },
  ]),
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
