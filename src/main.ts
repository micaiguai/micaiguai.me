import { init } from 'i18next'
import { ViteSSG } from 'vite-ssg'
import { routes } from 'vue-router/auto-routes'
import App from './App.vue'
import './main.css'
import 'virtual:uno.css'
import '@unocss/reset/sanitize/sanitize.css'
import '@unocss/reset/sanitize/assets.css'
import '~build/console'

init({
  lng: 'zh-cn', // if you're using a language detector, do not define the lng option
  debug: true,
  resources: {
    'en': {
      translation: {
        my: {
          name: 'Micaiguai',
          introduce: 'Hi! I\'m Micaiguai, a Fullstack Developer.',
        },
      },
    },
    'zh-cn': {
      translation: {
        my: {
          name: '米才怪',
          introduce: '你好！我是米才怪，一个全栈开发者。',
        },
      },
    },
  },
})

export const createApp = ViteSSG(
  App,
  {
    routes,
    base: import.meta.env.BASE_URL,
  },
)
