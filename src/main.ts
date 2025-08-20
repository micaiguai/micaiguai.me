import i18next from 'i18next'
import I18NextVue from 'i18next-vue'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import './i18n/index'
import './main.css'
import 'virtual:uno.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import '~build/console'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  ({ app }) => {
    app.use(I18NextVue, { i18next })
  },
)
