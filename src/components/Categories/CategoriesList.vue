<template>
  <div v-if="categoriesStore.categories.length" class="q-pa-md">
    <QList>
      <QItem v-for="category in categoriesStore.categories" :key="category.id" class="q-mb-sm" clickable v-ripple>
        <QItemSection avatar>
          <QAvatar :icon="category.icon"/>
        </QItemSection>

        <QItemSection>
          <QItemLabel>{{ category.title }}</QItemLabel>
          <QItemLabel caption lines="1">{{ category.description }}</QItemLabel>
        </QItemSection>

        <QItemSection side>
          <QIcon name="mdi-delete" color="grey" @click="removeCategory(category.id)" />
        </QItemSection>
      </QItem>
    </QList>
  </div>
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
