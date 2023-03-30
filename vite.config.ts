/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from '@rollup/plugin-eslint'
import type { UserConfig } from 'vitest'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [{ ...eslint({ include: 'src/**/*.+(js|jsx|ts|tsx)' }), enforce: 'pre' }, react()],
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
})
