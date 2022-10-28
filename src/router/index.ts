import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'MainLayout',
        title: 'Главная страница',
      },
      component: HomeView,
    },
    {
      path: '/bills',
      name: 'bills',
      meta: {
        layout: 'MainLayout',
        title: 'Счета',
      },
      component: () => import('../views/BillsView.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {
        layout: 'MainLayout',
        title: 'Категории',
      },
      component: () => import('../views/CategoriesView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      meta: {
        layout: 'AuthLayout'
      },
      component: () => import('../views/AuthView.vue'),
    },
  ]
})

export default router
