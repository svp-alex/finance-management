<template>
  <PageHeader title="Категории" @add="isSidebarVisible = true"/>
  <CategoriesList/>
  <CategorySidebar/>
</template>

<script lang="ts" setup>
import CategoriesList from '@/components/Categories/CategoriesList.vue'
import CategorySidebar from '@/components/Categories/CategorySidebar.vue'
import PageHeader from '@/components/Page/PageHeader.vue'
import { ref } from 'vue'

const isSidebarVisible = ref(false)
</script>