<template>
  <VApp>
    <MenuList/>
    <VContainer>
      <RouterView/>
    </VContainer>
  </VApp>
</template>

<script lang="ts" setup>
import MenuList from '@/components/Menu/MenuList.vue'
</script>