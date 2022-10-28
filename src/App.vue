<template>
  <component v-if="layout" :is="layout"/>
</template>

<script lang="ts" setup>
import MainLayout from './layouts/MainLayout.vue'
import { useRoute } from 'vue-router'
import { markRaw, watch } from 'vue'
import { useSidebarStore } from '@/stores/sidebar'

const layout = markRaw(MainLayout)
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

<!--<script lang="ts" setup>-->
<!--import { onMounted, watch, markRaw } from 'vue'-->
<!--import { useRoute } from 'vue-router'-->
<!--import MainLayout from '@/layouts/MainLayout.vue'-->
<!--const layout = markRaw(MainLayout)-->
<!--const route = useRoute()-->
<!--watch(-->
<!--  () => route.meta,-->
<!--  async meta => {-->
<!--    try {-->
<!--      // console.log('m', meta)-->
<!--      const component = await import(`@/layouts/${meta.layout}.vue`)-->
<!--      layout.value = component?.default || MainLayout-->
<!--    } catch (e) {-->
<!--      // console.log('bb')-->
<!--      layout.value = MainLayout-->
<!--    }-->
<!--  },-->
<!--  { immediate: true }-->
<!--)-->
<!--onMounted(() => {-->
<!--  // console.log('mounted')-->
<!--})-->

<!--</script>-->