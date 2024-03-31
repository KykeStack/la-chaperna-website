import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'VUE')
  const processEnv = (values: Record<string, string>) => {
    const newEnv: Record<string, string> = {}
    for (const [key, value] of Object.entries(values)) {
      newEnv[`process.env.${key}`] = JSON.stringify(value)
    }
    return newEnv
  }
  return {
    define: processEnv(env),
    plugins: [vue(), vueJsx(), VueDevTools()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
