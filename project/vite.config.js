// vite.config.js
import { defineConfig } from 'vite';
import { createVuePlugin } from 'vite-plugin-vue';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    createVuePlugin()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${resolve(__dirname, 'src/styles/global.scss')}";`
      }
    }
  }
});
