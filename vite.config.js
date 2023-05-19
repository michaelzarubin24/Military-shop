import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        product: '../../pages/product/product.html',
        issues: '../../pages/issues/issues.html'
      }
    }
  }
});
