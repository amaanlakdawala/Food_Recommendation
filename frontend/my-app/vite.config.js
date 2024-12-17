import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8000', // Django server URL
        changeOrigin: true,
        secure: false, // Set to true if using HTTPS on the backend
      },
    },
  },
});