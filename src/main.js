import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './routes'
import { store } from './store/store.js'
import App from './App.vue'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import './assets/App.css'

Vue.use(VueRouter)



const router = new VueRouter({
  routes, 
  mode: 'history',
  scrollBehavior(to, from, savePosition) {
    return { x:0, y:0 }
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
