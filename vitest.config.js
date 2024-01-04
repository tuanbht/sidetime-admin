import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['./src/setupTests.jsx'],
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      exclude: ['src/index.jsx', 'src/setupTests.jsx'],
    },
    include: ['src/**/*.test.[jt]s?(x)'],
  },
  plugins: [react()],
});
