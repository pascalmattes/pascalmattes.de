import { defineNuxtConfig } from 'nuxt3';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  vite: {
    resolve: {
      mainFields: ['module', 'jsnext:main', 'jsnext']
    },
    plugins: [svgLoader()]
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {}
        }
      }
    }
  }
});
