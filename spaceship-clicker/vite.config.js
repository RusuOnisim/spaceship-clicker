import { defineConfig } from 'vite';

export default defineConfig({
  base: '/spaceship-clicker/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        script: 'script.js',
        index: 'index.html'
      },
    },
  },
});