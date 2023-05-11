import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer'


// https://vitejs.dev/config/
export default defineConfig({
  base: "/weather-app/",
  preview:{
    port: 1002
  },
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        autoprefixer()
      ]
    }
  }
})
