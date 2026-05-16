import { fileURLToPath, URL } from 'node:url'
import { resolve, dirname } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  publicDir: 'empty',
   build:{
    outDir: 'dist/es',
    lib:{
        entry: resolve(__dirname, 'src/bundle.js'),
        name: 'DtSimpleElementUI',
        fileName: 'dt-simple-elementui',
        formats: ['es'],
    },
    // rollup 配置
    rollupOptions: {
        external: [
            'vue',
            '@fortawesome/fontawesome-svg-core',
            '@fortawesome/free-solid-svg-icons',
            '@fortawesome/vue-fontawesome',
            '@popperjs/core',
            'lodash-es',
        ],  //排除
    },
  }
})