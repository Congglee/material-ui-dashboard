import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: { port: 3000 },
  css: { devSourcemap: true },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
