import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSidebarStore = defineStore('sidebar', () => {
  const isSidebarVisible = ref(false)
  const openSidebar = () => isSidebarVisible.value = true
  const closeSidebar = () => isSidebarVisible.value = false

  return {
    isSidebarVisible,
    closeSidebar,
    openSidebar,
  }
})