<template>
  <QLayout view="lHr LpR fFf">
    <PageHeader />
    <MenuList />
    <QPageContainer>
      <RouterView />
    </QPageContainer>
  </QLayout>
</template>

<script lang="ts" setup>
import MenuList from '@/components/Menu/MenuList.vue'
import PageHeader from '@/components/Page/PageHeader.vue'
</script>