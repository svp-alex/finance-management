<template>
  <PageHeader title="Категории" @add="isDialogVisible = true"/>
  <CategoriesList/>
  <CategoryModal v-model="isDialogVisible"/>
</template>

<script lang="ts" setup>
import CategoriesList from '@/components/Categories/CategoriesList.vue'
import CategoryModal from '@/components/Categories/CategoryModal.vue'
import PageHeader from '@/components/Page/PageHeader.vue'
import { ref } from 'vue'


const isDialogVisible = ref<Boolean>(false)
</script>