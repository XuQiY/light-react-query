import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path' 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/hooks/index.js'), 
      name: 'light-react-query', 
      fileName: (format) => `light-react-query.${format}.js`
    },
    sourcemap: false, 
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          vue: 'React'
        }
      }
    }
  }
})
