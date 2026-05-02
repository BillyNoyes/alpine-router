import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import alpineComponents from 'vite-plugin-alpine-components'

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [
    tailwindcss(),
    alpineComponents(),
  ],
  build: {
    outDir: 'dist',
  },
})
