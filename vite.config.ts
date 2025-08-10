import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Info from 'unplugin-info/vite'
import Components from 'unplugin-vue-components/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import VueRouter from 'unplugin-vue-router/vite'
import { defineConfig } from 'vite'
import RemoteAssets from 'vite-plugin-remote-assets'

export default defineConfig({
  base: '/me/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    UnoCSS(),
    VueRouter(),
    vue(),
    AutoImport({
      imports: [
        'vue',
        VueRouterAutoImports,
        '@vueuse/core',
      ],
    }),
    Components({}),
    RemoteAssets(),
    Info(),
  ],
})
