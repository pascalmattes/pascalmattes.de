import { defineNuxtConfig } from 'nuxt3';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  },
  vite: {
    plugins: [svgLoader()]
  }
});
