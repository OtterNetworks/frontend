import Vue from 'vue'
import Router from 'vue-router'

import CreateItem from '../CreateItem.vue'
import Auth from '../Auth.vue'
import Callback from '../Callback.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'default',
    component: CreateItem
  },
  {
    path: '/items',
    name: 'items',
    component: CreateItem
  },
  {
    path: '/auth',
    name: 'auth',
    component: Auth
  },
  {
    path: '/oauth_callback',
    name: 'callback',
    component: Callback
  },

  // if nothing matched, go home
  { path: '*', redirect: '/' }
]

let router = new Router({
  mode: 'history',
  base: __dirname,
  routes
})


export default router
