import { createI18n } from 'vue-i18n'
import messages from 'src/i18n'

//@ts-ignore
export default (app) => {
  const i18n = createI18n({
    legacy: false,
    locale: 'en-US',
    globalInjection: true,
    messages,
  })

  app.use(i18n)
}