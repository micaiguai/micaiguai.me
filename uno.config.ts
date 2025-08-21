import { defineConfig, presetIcons, presetWind4, transformerDirectives } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  shortcuts: {
    content: 'max-w-160',
    trigger: 'p-1 rounded cursor-pointer hover-bg-gray-100 dark:hover-bg-gray-600',
  },
})
