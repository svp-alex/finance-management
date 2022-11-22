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
      <QItem
        key="logout"
        clickable
        v-ripple
        @click="logout"
      >
        <QItemSection avatar>
          <QIcon name="login"/>
        </QItemSection>

        <QItemSection>
          logout
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
  router.push(route)
}

const logout = async () => {
  await authStore.logout()
  router.push('/auth')
}
</script>