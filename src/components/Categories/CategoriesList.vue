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
          <QIcon name="delete" color="grey" @click="removeCategory(category.id)" />
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
import { useQuasar } from 'quasar'

const $q = useQuasar()
const categoriesStore = useCategoriesStore()
onMounted(async (): Promise<void> => {
  await categoriesStore.fetchCategories()
})

const removeCategory = (id: Number) => {
  $q.dialog({
    title: 'Confirm',
    message: 'Would you like to turn on the wifi?',
    cancel: true,
    persistent: true
  }).onOk(async () => {
    await categoriesStore.removeCategory(id)
  })
}
</script>
