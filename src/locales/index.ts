import { createI18n } from 'vue-i18n'
import en from './en.json'
import ja from './ja.json'
import zhCN from './zh-CN.json'

export const languages = ['en', 'zh-CN', 'ja'] as const
export const languageLabels = ['English', '中文', '日本語']

export type Language = typeof languages[number]

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    'en': en,
    'zh-CN': zhCN,
    'ja': ja,
  },
})
