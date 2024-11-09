import { createRouter, createWebHistory } from 'vue-router'
import MainView from '@/views/content/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/Login.vue') 
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('@/views/login/SignUp.vue')
    }
  ]
})

export default router
