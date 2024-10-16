import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Website_Visitcard_Lawyer/',
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern',
      },
    },
  },
});
