import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

i18next
  .use(LanguageDetector)
  .init({
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
      'zh-CN': {
        translation: {
          my: {
            name: '米才怪',
            introduce: '你好！我是米才怪，一个全栈开发者。',
          },
        },
      },
    },
  })
