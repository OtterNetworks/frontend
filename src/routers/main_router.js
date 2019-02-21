import Vue from 'vue'
import Router from 'vue-router'

import CreateItem from '../CreateItem.vue'


Vue.use(Router)

const routes = [
  {
    path: '/items',
    name: 'items',
    component: CreateItem
  },

  // if nothing matched, go home
  { path: '*', redirect: '/items' }
]

export default new Router({
  mode: 'history',
  base: __dirname,
  routes
})
