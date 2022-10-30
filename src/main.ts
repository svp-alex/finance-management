import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Quasar, Notify, Dialog } from 'quasar'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'

import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'

import 'quasar/src/css/index.sass'

import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA-SeKRx98MhtfjIHZ4qAZpULICY9Z_2zs",
  authDomain: "vue-crm-alex.firebaseapp.com",
  databaseURL: "https://vue-crm-alex.firebaseio.com",
  projectId: "vue-crm-alex",
  storageBucket: "vue-crm-alex.appspot.com",
  messagingSenderId: "778315631192",
  appId: "1:778315631192:web:4449cda070180e8a21d82d",
  measurementId: "G-HH13BHWP54"
};

initializeApp(firebaseConfig);
const pinia = createPinia()
loadFonts()

let app: App
const auth = getAuth()
auth.onAuthStateChanged(() => {
  console.log('change')
  if (!app) {
    createApp(App)
      .use(router)
      .use(pinia)
      .use(Quasar, {
        plugins: { Notify, Dialog },
      })
      .mount('#app')
  }
})