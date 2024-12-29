import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: './index.html'
      },
      output: {
        entryFileNames: 'assets/Script.js', // For main JavaScript
        chunkFileNames: 'assets/Script2.js', // For dynamic imports
        assetFileNames: (assetInfo) => {
          // Customize file naming for CSS and other assets
          if (assetInfo.name && assetInfo.name.endsWith('.css')) {
            return 'assets/Styles.css'; // CSS files get a specific name
          }
          return 'assets/[name].[ext]'; // Other assets follow this pattern
        }
      }
    },
  },
  server: {
    watch: {
      ignored: ['**/service-worker.js']
    }
  }
})
