<template>
  <VList v-if="categoriesStore.categories.length" class="pl-4 pr-4">
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
          <VIcon v-if="category.icon">{{ category.icon }}</VIcon>
        </template>
        <template v-slot:append>
          <VBtn
            color="red"
            icon="mdi-delete"
            variant="text"
            @click="removeCategory(category.id)"
          />
        </template>
      </VListItem>
    </VCard>
  </VList>
  <div v-else class="text-body-1 pa-4">
    Empty list
  </div>
</template>

<script lang="ts" setup>
import { useCategoriesStore } from '@/stores/categories'
import { onMounted } from 'vue'

const categoriesStore = useCategoriesStore()
onMounted(async (): Promise<void> => {
  await categoriesStore.fetchCategories()
})

const removeCategory = async (id: Number) => {
  await categoriesStore.removeCategory(id)
}
</script>
