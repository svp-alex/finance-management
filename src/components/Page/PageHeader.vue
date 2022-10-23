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
interface Props {
  title: String,
}
const props = defineProps<Props>()
const emits = defineEmits(['add'])
</script>