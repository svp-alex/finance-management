import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useMenuStore = defineStore('menu', () => {
  const items = ref<Object[]>([])
  const fetchItems = async () => {
    items.value = [
      { id: 1, title: 'Главная', route: 'home', path: '/', icon: 'mdi-home' },
      { id: 2, title: 'Счета', route: 'bills', path: '/bills' ,icon: 'mdi-text-box-outline' },
      { id: 3, title: 'Категории', route: 'categories', path: '/categories' ,icon: 'mdi-soccer' },
      { id: 4, title: 'Выход', route: 'auth', path: '/auth', icon: 'mdi-login' },
    ]
  }
  return { items, fetchItems }
})