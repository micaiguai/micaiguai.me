import FloatingVue from 'floating-vue'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import { i18n } from './locales'

import './main.css'
import 'virtual:uno.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import 'floating-vue/dist/style.css'

import '~build/console'

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
  ({ app }) => {
    app.use(i18n)
    app.use(FloatingVue)
  },
)
