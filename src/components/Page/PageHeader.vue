<template>
  <QHeader elevated class="bg-primary text-white">
    <QToolbar>
      <QToolbarTitle>
        {{ props.title }}
      </QToolbarTitle>

      <QBtn dense flat round icon="add" @click="emits('add')" />
    </QToolbar>
  </QHeader>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'
interface Props {
  title: String,
}
const props = defineProps<Props>()
const emits = defineEmits(['add'])
</script>