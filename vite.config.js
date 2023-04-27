import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      'shared':'/src/shared',
      '#':"/src/components",
      'state':"/src/state",
      'assets':"/src/assets",
      'icons':"/src/assets/icons",
      '@':"/src/pages"
    }
  }
})
