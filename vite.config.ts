import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  define: {
    'import.meta.env.VITE_APP_TITLE': JSON.stringify(process.env.VITE_APP_TITLE || '2025 Investment Calendar'),
    'import.meta.env.VITE_APP_LOGO': JSON.stringify(process.env.VITE_APP_LOGO || '/logo.png'),
    'import.meta.env.VITE_ANALYTICS_ENDPOINT': JSON.stringify(process.env.VITE_ANALYTICS_ENDPOINT || ''),
    'import.meta.env.VITE_ANALYTICS_WEBSITE_ID': JSON.stringify(process.env.VITE_ANALYTICS_WEBSITE_ID || ''),
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-dialog', '@radix-ui/react-toast', '@radix-ui/react-tooltip'],
        },
      },
    },
  },
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
});
