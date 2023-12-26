import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react(), svgr({ exportAsDefault: true })],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          material_ui: ['@mui/material'],
        },
      },
    },
  },
});
