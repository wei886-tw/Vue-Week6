import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/UserHome.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/userProduct',
      name: 'userProduct',
      component: () => import('../views/UserProduct.vue')
    },
    {
      path: '/userCart',
      name: 'userCart',
      component: () => import('../views/UserCart.vue')
    },
    {
      path: '/adminLogin',
      name: 'adminLogin',
      component: () => import('../views/AdminLogin.vue')
    },
    {
      path: '/adminProducts',
      name: '產品列表',
      component: () => import('../views/AdminProducts.vue')
    },
    {
      path: '/adminProducts/:id',
      name: '產品頁面',
      component: () => import('../views/AdminProducts.vue')
    },

  ]
})

export default router
