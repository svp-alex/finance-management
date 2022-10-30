<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
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
        <q-btn label="Зарегистрироваться" type="submit" color="primary"/>
        <q-btn label="Отмена" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script lang="ts" setup>
import { useQuasar } from 'quasar'
import { ref, reactive } from 'vue'
import { useAuthStore } from '@/stores/auth'

const $q = useQuasar()
const authStore = useAuthStore()
const user = reactive({
  name: '',
  email: '',
  password: '',
})
const isAccept = ref(false)

const onSubmit = async () => {
  if (!isAccept.value) {
    $q.notify({
      type: 'negative',
      message: 'Нужно подтвердить обработку'
    })
    return
  }
  await authStore.signIn(user)
}

const onReset = () => {

}

</script>
