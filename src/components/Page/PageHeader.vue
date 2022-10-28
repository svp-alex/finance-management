<template>
  <QHeader elevated class="bg-primary text-white">
    <QToolbar>
      <QToolbarTitle>
        {{ route.meta.title }}
      </QToolbarTitle>

      <QBtn dense flat round icon="add" @click="sidebarStore.openSidebar" />
    </QToolbar>
  </QHeader>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { useSidebarStore } from '@/stores/sidebar'
const sidebarStore = useSidebarStore()
const route = useRoute()
</script>