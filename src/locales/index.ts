import { createI18n } from 'vue-i18n'
import en from './en.json'
import ja from './ja.json'
import zhCN from './zh-CN.json'

export const i18n = createI18n({
  locale: 'en',
  messages: {
    'en': en,
    'zh-CN': zhCN,
    'ja': ja,
  },
})
