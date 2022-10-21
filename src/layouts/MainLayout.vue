<template>
  <VApp>
    <MenuList/>
    <div class="container">
      <RouterView/>
    </div>
  </VApp>
</template>

<script lang="ts" setup>
import MenuList from '@/components/Menu/MenuList.vue'
</script>

<style scoped>
.container {
  margin-left: 56px;
}
</style>