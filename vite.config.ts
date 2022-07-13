import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import macrosPlugin from 'vite-plugin-babel-macros'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), macrosPlugin()],
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
  },
})
