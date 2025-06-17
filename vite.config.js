import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import viteCompression from 'vite-plugin-compression';
import { imagetools } from 'vite-imagetools';
import { visualizer } from 'rollup-plugin-visualizer';
// import { VitePWA } from 'vite-plugin-pwa'; // Uncomment when ready

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false,
    }),
    imagetools(), // 🔥 Enables lazy/responsive image optimization
    visualizer({
      filename: './dist/stats.html',
      open: true,
      template: 'treemap',
    }),
    // VitePWA({ registerType: 'autoUpdate' }) // Optional: enable when you're ready
  ],
  build: {
    minify: 'esbuild',
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
});
