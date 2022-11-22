import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import { getDatabase, ref, set } from 'firebase/database'
import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useQuasar } from 'quasar'

interface User {
  email: string,
  password: string,
  name?: string,
}

export const useAuthStore = defineStore('auth', () => {
  const auth = getAuth()
  const db = getDatabase()
  const $q = useQuasar()

  const userUid = computed(() => {
    return auth.currentUser?.uid || null
  })

  const signIn = async (user: User) => {
    try {
      await signInWithEmailAndPassword(auth, user.email, user.password)
      $q.notify({
        type: 'positive',
        message: 'Успешная авторизация',
      })
    } catch {
      $q.notify({
        type: 'negative',
        message: 'Ошибка при авторизации',
      })
    }
  }

  const register = async (user: User) => {
    try {
      await createUserWithEmailAndPassword(auth, user.email, user.password)
      await set(ref(db, 'users/' + userUid.value), {
        username: user.name,
        email: user.email,
      });
      $q.notify({
        type: 'positive',
        message: 'Успешная регистрация',
      })
    } catch {
      $q.notify({
        type: 'negative',
        message: 'Ошибка при регистрации',
      })
    }
  }

  const logout = async () => {
    await auth.signOut()
  }

  return { signIn, register, logout, userUid }
})
