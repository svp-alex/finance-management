<template>
  <component v-if="layout" :is="layout"/>
</template>

<script lang="ts" setup>
import { useRoute } from 'vue-router'
import { computed, defineAsyncComponent } from 'vue'

const route = useRoute()
const layout = computed(() => {
  const layout = route?.meta.layout || null
  return layout ? defineAsyncComponent(() => import(`@/layouts/${layout}.vue`)) : null
})
</script>