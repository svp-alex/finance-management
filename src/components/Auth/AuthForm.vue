<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        v-if="props.isRegister"
        filled
        v-model="user.name"
        label="Введите имя"
        hint="Имя и фамилия"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Поле должно быть не пустое']"
      />

      <q-input
        filled
        v-model="user.email"
        label="Введите email *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Поле должно быть не пустое']"
      />

      <q-input
        filled
        v-model="user.password"
        label="Введите пароль *"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Поле не должно быть не пустое']"
      />

      <q-toggle v-model="isAccept" label="Согласен на обработку персональных данных" />

      <div>
        <q-btn :label="submitButtonTitle" type="submit" color="primary"/>
        <q-btn
          :label="redirectButtonTitle"
          type="reset"
          color="primary"
          flat class="q-ml-sm"
          @click="router.push(redirectButtonRoute)"
        />
      </div>
    </q-form>

  </div>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { ref, reactive, defineProps, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

interface Props {
  isRegister?: Boolean,
}

const props = defineProps<Props>()
const $q = useQuasar()
const router = useRouter()
const authStore = useAuthStore()
const user = reactive({
  name: '',
  email: '',
  password: '',
})
const isAccept = ref(false)

const submitButtonTitle = computed(() => props.isRegister ? 'Зарегаться' : 'Войти')
const redirectButtonTitle = computed(() => props.isRegister ? 'На страницу авторизации' : 'На страницу регистрации')
const redirectButtonRoute = computed(() => props.isRegister ? '/auth' : '/register')

const onSubmit = async () => {
  if (!isAccept.value) {
    $q.notify({
      type: 'negative',
      message: 'Нужно согласиться'
    })
    return
  }
  router.push('/')
  await authStore.signIn(user)

}

const onReset = () => {

}

</script>
