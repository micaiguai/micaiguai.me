import { defineConfig, presetIcons, presetWind4 } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetIcons({ /* options */ }),
  ],
})
