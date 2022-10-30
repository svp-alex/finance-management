<template>
  <component v-if="layout" :is="layout" :key="layout" />
</template>

<script lang="ts" setup>
import MainLayout from './layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import { markRaw, watch, shallowRef, onMounted } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'
import { useAuthStore } from '@/stores/auth'

const authStore = useAuthStore()

onMounted(() => {
  console.log('m')
  authStore.register({
    email: 'svpnastya@gmail.com5',
    password: '123456',
    name: 'Nastya',
  })
})

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