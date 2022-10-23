import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Category }  from '@/models/category.model'


export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([])
  const fetchCategories = async (): Promise<void> => {
    categories.value = [
      {id: 1, title: 'Транспорт', description: 'Затраты на все виды транспорта', icon: 'mdi-train'},
      {id: 2, title: 'Дом', description: 'Затраты на домашние дела', icon: 'mdi-home'},
      {id: 4, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 5, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 6, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 7, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 8, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 9, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 10, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом' },
    ]
  }

  const addCategory = async (category:Category): Promise<void> => {
    category = {
      ...category,
      id: categories.value.length + 1,
    }
    categories.value.push(category)
  }

  const removeCategory = async (id:Number): Promise<void> => {
    categories.value = categories.value.filter(category => category.id !== id)
  }

  return { categories, fetchCategories, addCategory, removeCategory }
})