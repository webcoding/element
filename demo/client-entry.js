import 'es6-promise/auto'
// import { app, store } from './app'
import { app } from './app'

// prime the store with server-initialized state.
// the state is determined during SSR and inlined in the page markup.
// store.replaceState(window.__INITIAL_STATE__)

// actually mount to DOM
app.$mount('#root')

// service worker
if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
  console.log('register serviceWorker')
  navigator.serviceWorker.register('/service-worker.js')
} else {
  console.log('none serviceWorker')
}
