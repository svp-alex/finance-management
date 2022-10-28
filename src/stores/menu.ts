import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useMenuStore = defineStore('menu', () => {
  const items = ref<Object[]>([])
  const fetchItems = async (): Promise<void> => {
    items.value = [
      { id: 1, title: 'Главная', route: 'home', path: '/', icon: 'home' },
      { id: 2, title: 'Счета', route: 'bills', path: '/bills' ,icon: 'payments' },
      { id: 3, title: 'Категории', route: 'categories', path: '/categories' ,icon: 'sports_soccer' },
      { id: 4, title: 'Выход', route: 'auth', path: '/auth', icon: 'login' },
    ]
  }
  return { items, fetchItems }
})