import { defineStore } from 'pinia'
import { ref } from 'vue'

interface MenuItem {
  id: number,
  title: string,
  route: string,
  path: string,
  icon: string,
}


export const useMenuStore = defineStore('menu', () => {
  const items = ref<MenuItem[]>([])
  const fetchItems = async (): Promise<void> => {
    items.value = [
      { id: 1, title: 'Главная', route: 'home', path: '/', icon: 'home' },
      { id: 2, title: 'Счета', route: 'bills', path: '/bills' ,icon: 'payments' },
      { id: 3, title: 'Категории', route: 'categories', path: '/categories' ,icon: 'sports_soccer' },
    ]
  }
  return { items, fetchItems }
})