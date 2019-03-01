import Vue from 'vue'
import Router from 'vue-router'

import CreateItem from '../CreateItem.vue'
import Auth from '../Auth.vue'


Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'default',
    component: Auth
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

  // if nothing matched, go home
  { path: '*', redirect: '/' }
]

export default new Router({
  mode: 'history',
  base: __dirname,
  routes
})
