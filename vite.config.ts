/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import type { UserConfig } from 'vitest'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    strictPort: true,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/test-setup.ts',
    css: true,
  } as UserConfig,
  preview: {
    port: process.env.VITE_PREVIEW_PORT ? parseInt(process.env.VITE_PREVIEW_PORT) : 3000,
    strictPort: true,
  },
})
