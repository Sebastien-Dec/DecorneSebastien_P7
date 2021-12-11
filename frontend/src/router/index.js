import { createRouter, createWebHashHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: Welcome
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import(/* webpackChunkName: "signup" */ '../views/Signup.vue')
  },
  {
    path: '/newPost',
    name: 'newPost',
    component: () => import(/* webpackChunkName: "newPost" */ '../views/NewPost.vue')
  },
  {
    path: '/publications',
    name: 'publications',
    component: () => import(/* webpackChunkName: "publications" */ '../views/Publications.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
