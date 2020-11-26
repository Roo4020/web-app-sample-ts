import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Top from '../views/Top.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import TermsOfService from '../views/TermsOfService.vue'

import store from "@/store/index";
import { nextTick } from 'vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Top',
    component: Top
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tos',
    name: 'TermsOfService',
    component: TermsOfService
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, next) => {
  if (to.fullPath === "/") {
    if (store.state.auth.state) {
      router.replace("/home");
    }
  } else {
    if (store.state.auth.state) {
      next;
    } else {
      router.replace("/");
    }
  }
})

export default router