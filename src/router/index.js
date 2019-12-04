import Vue from 'vue'
import VueRouter from 'vue-router'

import HomePage from '../views/HomePage'
import Signin from '../views/Signin'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePage
  
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin
  
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
