import vue from '@vitejs/plugin-vue';
import UnoCSS from 'unocss/vite';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: [
      './vitest.setup.ts',
    ],
  },
});
