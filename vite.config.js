import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',  // Stellt sicher, dass alle Pfade relativ zur Root-Domain aufgelöst werden
  build: {
    rollupOptions: {
      output: {
        // Legt sicherere Namen für die Assets fest
        assetFileNames: 'assets/[name].[hash].[ext]',
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
      }
    }
  }
})
