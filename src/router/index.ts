import { createRouter, createWebHistory } from 'vue-router'
import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
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
        auth: true,
      },
      component: HomeView,
    },
    {
      path: '/bills',
      name: 'bills',
      meta: {
        layout: 'MainLayout',
        title: 'Счета',
        auth: true,
      },
      component: () => import('../views/BillsView.vue'),
    },
    {
      path: '/categories',
      name: 'categories',
      meta: {
        layout: 'MainLayout',
        title: 'Категории',
        auth: true,
      },
      component: () => import('../views/CategoriesView.vue'),
    },
    {
      path: '/auth',
      name: 'auth',
      meta: {
        layout: 'AuthLayout',
      },
      component: () => import('../views/AuthView.vue'),
    },
    {
      path: '/register',
      name: 'register',
      meta: {
        layout: 'AuthLayout',
      },
      component: () => import('../views/AuthView.vue'),
    },
  ]
})

router.beforeEach((to: RouteLocationNormalized, from:RouteLocationNormalized , next: NavigationGuardNext) => {
  const authStore = useAuthStore()
  const requireAuth = to.matched.some(record => record.meta.auth)

  console.log('r', requireAuth)
  console.log('u', authStore.userUid)
  if (requireAuth && !authStore.userUid) {
    next('/auth')
  } else {
    next()
  }
})

export default router
