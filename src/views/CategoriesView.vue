<template>
  <CategoriesList/>
  <QDrawer v-if="sidebarStore.isSidebarVisible" show-if-above side="right" bordered>
    Cats Sidebar
  </QDrawer>
</template>

<script lang="ts" setup>
import CategoriesList from '@/components/Categories/CategoriesList.vue'
import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()
</script>