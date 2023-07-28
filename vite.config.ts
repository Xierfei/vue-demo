import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import { liveDesigner } from '@pinegrow/vite-plugin'
import AutoImportComponents from 'unplugin-vue-components/vite'
import AutoImportAPIs from 'unplugin-auto-import/vite'
import VueRouter from 'unplugin-vue-router/vite'
import { VueRouterAutoImports } from 'unplugin-vue-router'
import Layouts from 'vite-plugin-vue-layouts'
import Unocss from 'unocss/vite'
import presetIcons from '@unocss/preset-icons'
import VueDevTools from 'vite-plugin-vue-devtools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    liveDesigner({
      //...
    }),
    VueRouter({
      // routesFolder: 'src/pages', // default
      dts: 'typed-router.d.ts',
    }),
    VueDevTools(),
    /* IMPORTANT: Vue must be placed after VueRouter()  */
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Layouts(),
    // For details, refer to https://github.com/antfu/unplugin-auto-import#configuration
    AutoImportAPIs({
      include: [
        /.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /.vue$/,
        /.vue?vue/, // .vue
        /.md$/, // .md
      ],
      imports: [
        // 'vue',
        VueRouterAutoImports, // Remove 'vue-router',
        // 'vue-i18n',
        // 'vue/macros',
        // '@vueuse/head',
        // '@vueuse/core',
        // 'pinia',
      ],
      dirs: [
        // 'src/composables',
        // 'src/stores',
      ],
      vueTemplate: true,
      cache: true,
      dts: 'auto-imports.d.ts',
    }),
    AutoImportComponents({
      extensions: ['vue', 'md'],
      // allow auto load markdown components under `./src/content/`
      dirs: ['src/components' /* default */, 'src/content'],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      // resolvers: [], // Auto-import using resolvers
      dts: 'components.d.ts',
    }),
    Unocss({
      presets: [
        presetIcons({
          prefix: 'i-', // default prefix, do not change
        }),
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./src', import.meta.url)),
      '~~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
})
