<template>
  Bills content
  <QDrawer v-if="sidebarStore.isSidebarVisible" show-if-above side="right" bordered>
    Bills sidebar
  </QDrawer>
</template>

<script lang="ts" setup>
import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()
</script>
