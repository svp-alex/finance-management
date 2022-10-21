import { defineStore } from 'pinia'
import { ref } from 'vue'


export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Object[]>([])
  const fetchCategories = async () => {
    categories.value = [
      {id: 1, title: 'Транспорт', description: 'Затраты на все виды транспорта', icon: 'mdi-train'},
      {id: 2, title: 'Дом', description: 'Затраты на домашние дела', icon: 'mdi-home'},
      {id: 4, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 5, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 6, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 7, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 8, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 9, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 10, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 11, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 12, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 13, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 14, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
      {id: 15, title: 'Сопрт', description: 'Затраты на всё, что связано со спортом', icon: 'mdi-soccer'},
    ]
  }

  const addCategory = async (category:Object) => {
    category = {
      ...category,
      id: categories.value.length + 1,
    }
    categories.value.push(category)
  }

  return { categories, fetchCategories, addCategory }
})