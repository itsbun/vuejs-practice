import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),

      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),

      '@router': fileURLToPath(new URL('./src/router', import.meta.url)),

      '@shared': fileURLToPath(new URL('./src/shared', import.meta.url)),

      '@assets': fileURLToPath(new URL('./src/shared/assets', import.meta.url)),

      '@composables': fileURLToPath(new URL('./src/shared/composables', import.meta.url)),

      '@constants': fileURLToPath(new URL('./src/shared/constants', import.meta.url)),

      '@ui': fileURLToPath(new URL('./src/shared/ui', import.meta.url)),
    },
  },
})
