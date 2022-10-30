<template>
  <component v-if="layout" :is="layout" :key="layout" />
</template>

<script lang="ts" setup>
import MainLayout from './layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import { markRaw, watch, shallowRef } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'

const layout = shallowRef({})
layout.value = markRaw(MainLayout)
const route = useRoute()
const sidebarStore = useSidebarStore()
watch(
  () => route.meta,
  async meta => {
    try {
      sidebarStore.closeSidebar()
      const component = await import(`./layouts/${meta.layout}.vue`)
      layout.value = component?.default || MainLayout
    } catch (e) {
      layout.value = MainLayout
    }
  },
  { immediate: true }
)
</script>