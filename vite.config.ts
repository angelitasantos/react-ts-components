import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/react-ts-components/',
  server: {
    open: '/react-ts-components/',
  },
  preview: {
    open: '/react-ts-components/',
  }
})