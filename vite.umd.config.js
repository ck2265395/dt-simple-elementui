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
    vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  publicDir: 'empty',
  build:{
    outDir: 'dist/umd',
    lib:{
        entry: resolve(__dirname, 'src/bundle.js'),
        name: 'DtSimpleElementUI',
        fileName: 'dt-simple-elementUI',
        formats: ['umd'],
    },
    commonjsOptions: {
      transformMixedEsModules: true // 强制转换混合的 ES 模块
    },
    // rollup 配置
    rollupOptions: {
        external: [
            'vue',
            'vue-demi'
        ],  //排除
        output:{
            exports: 'named',
            //主要设置第三方依赖对应external,通过什么名字全局去拿依赖
            globals: {
                vue: 'Vue',
                'vue-demi': 'VueDemi',
            },
            format: 'umd',
        }
    }
  }
})