import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { VitePluginGhPages } from 'vite-plugin-gh-pages'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh(), VitePluginGhPages()]
})
