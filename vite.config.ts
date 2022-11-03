import { defineConfig } from 'vite';
import { join } from 'path';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import styleImport, { VantResolve } from 'vite-plugin-style-import';
// @ts-nocheck
import { svgstore } from './src/plugins/svgstore';

// https://vitejs.dev/config/
export default defineConfig({
  // build path
  // base: '/mangosteen/dist/',
  resolve: {
    alias: {
      '@': join(__dirname, 'src'),
    },
  },
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
    styleImport({
      resolves: [VantResolve()],
    }),
  ],
  server: {
    proxy: {
      '/api/v1': {
        target: 'http://127.0.0.1:3000/',
      },
    },
  },
});
