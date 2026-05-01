import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import alpineRouter from 'vite-plugin-alpine-router'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? '/alpine-router/' : '/',
  plugins: [
    tailwindcss(),
    alpineRouter(),
  ],
  build: {
    outDir: 'dist',
  },
})
