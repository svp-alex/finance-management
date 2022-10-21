<template>
  <VNavigationDrawer
    expand-on-hover
    rail
  >
    <UserInfo/>

    <VDivider></VDivider>

    <VList density="compact" nav>
      <VListItem
        v-for="menuItem in menuStore.items"
        :key="menuItem.id"
        :prepend-icon="menuItem.icon"
        :title="menuItem.title"
        :value="menuItem.id"
        :class="{ 'v-list-item--active': menuItem.route === route.name }"
        @click="redirectToPage(menuItem.path)"
      />
    </VList>
  </VNavigationDrawer>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import UserInfo from '@/components/User/UserInfo.vue'
import { useMenuStore } from '@/stores/menu'

const menuStore = useMenuStore()
onMounted(() => {
  menuStore.fetchItems()
})

const router = useRouter()
const route = useRoute()
const redirectToPage = (route: string) => {
  router.push(route)
}
</script>