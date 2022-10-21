<template>
  <VList class="pl-4 pr-4">
    <VCard
      v-for="category in categoriesStore.categories"
      :key="category.title"
      class="mb-4"
    >
      <VListItem
        :title="category.title"
        :subtitle="category.description"
      >
        <template v-slot:prepend>
          <VIcon>{{ category.icon }}</VIcon>
        </template>
        <template v-slot:append>
          <VBtn
            color="red"
            icon="mdi-delete"
            variant="text"
          ></VBtn>
        </template>
      </VListItem>
    </VCard>
  </VList>
</template>

<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'

const categoriesStore = useCategoriesStore()
onMounted(async () => {
  await categoriesStore.fetchCategories()
})
</script>
