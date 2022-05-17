import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// @ts-nocheck
import { svgstore } from './src/plugins/svgstore';

// https://vitejs.dev/config/
export default defineConfig({
  // build path
  // base: '/mangosteen/dist/',
  plugins: [
    vue(),
    vueJsx({
      transformOn: true,
      mergeProps: true,
    }),
    svgstore(),
  ],
});
