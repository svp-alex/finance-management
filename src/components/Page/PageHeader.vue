<template>
  <VToolbar color="grey-lighten-3">
    <VToolbarTitle>
      {{ props.title }}
    </VToolbarTitle>
    <VBtn icon @click="emits('add')">
      <VSpacer/>
      <VIcon>mdi-plus</VIcon>
    </VBtn>
  </VToolbar>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps(['title'])
const emits = defineEmits(['add'])
</script>