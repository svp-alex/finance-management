import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import BillsView from '../views/BillsView.vue'
import CategoriesView from '../views/CategoriesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        layout: 'MainLayout'
      },
      component: HomeView,
    },
    {
      path: '/bills',
      name: 'bills',
      meta: {
        layout: 'MainLayout'
      },
      component: () => BillsView,
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {
        layout: 'MainLayout'
      },
      component: () => CategoriesView,
    },
    {
      path: '/auth',
      name: 'auth',
      meta: {
        layout: 'AuthLayout'
      },
      component: () => AuthView,
    },
  ]
})

export default router
