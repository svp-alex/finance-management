<template>
  Home view
  <QDrawer v-if="sidebarStore.isSidebarVisible" show-if-above side="right" bordered>
    Home Sidebar
  </QDrawer>
</template>

<script lang="ts" setup>
import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()
</script>
