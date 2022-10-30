<template>
  <QDrawer show-if-above side="left" bordered>
    <QList padding class="text-primary">
      <QItem
        v-for="menuItem in menuStore.items"
        :key="menuItem.id"
        clickable
        v-ripple
        :active="menuItem.route === route.name"
        @click="clickHandler(menuItem.path)"
        active-class="my-menu-link"
      >
        <QItemSection avatar>
          <QIcon :name="menuItem.icon"/>
        </QItemSection>

        <QItemSection>
          {{ menuItem.title }}
        </QItemSection>
      </QItem>
    </QList>
  </QDrawer>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted } from 'vue'
import { useMenuStore } from '@/stores/menu'
import { useAuthStore } from '@/stores/auth'

const menuStore = useMenuStore()
const authStore = useAuthStore()
onMounted(async (): Promise<void> => {
  await menuStore.fetchItems()
})

const router = useRouter()
const route = useRoute()
const clickHandler = (route: string) => {
  if (!route) {
    authStore.logout()
    return
  }
  router.push(route)
}
</script>