import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { Quasar } from 'quasar'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/material-icons-round/material-icons-round.css'

// Import Quasar css
import 'quasar/src/css/index.sass'

const pinia = createPinia()
loadFonts()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .use(Quasar, {
  })
  .mount('#app')
