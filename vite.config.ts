import path from 'node:path';
import { fileURLToPath } from 'node:url';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(root, 'src'),
    },
  },
  build: {
    target: 'es2022',
    cssTarget: 'chrome100',
    sourcemap: false,
    rollupOptions: {
      output: {
        // Keep the animation runtime out of the entry chunk; it is only needed
        // once the page is interactive.
        manualChunks: {
          motion: ['motion/react'],
        },
      },
    },
  },
});
