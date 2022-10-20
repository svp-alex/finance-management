<template>
  <VNavigationDrawer
    expand-on-hover
    rail
  >
    <VList>
      <VListItem
        prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
        title="Sandra Adams"
        subtitle="sandra_a88@gmailcom"
      ></VListItem>
    </VList>

    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem
        v-for="menuItem in menuItems"
        :key="menuItem.id"
        :prepend-icon="menuItem.icon"
        :title="menuItem.title"
        :value="menuItem.id"
        @click="redirectToPage(menuItem.route)"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const menuItems = [
  { id: 1, title: 'Главная', route: '/', icon: 'mdi-folder' },
  { id: 2, title: 'Счета', route: '/bills', icon: 'mdi-folder' },
  { id: 3, title: 'Авторизация', route: '/auth', icon: 'mdi-account-multiple' },
]

const router = useRouter()
const redirectToPage = (route: string) => {
  router.push(route)
}
</script>