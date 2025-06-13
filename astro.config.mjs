// config/astro/astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'node:path';
import sass from 'sass-embedded';
import pkg from '@fullhuman/postcss-purgecss';
const { default: PurgeCSS } = pkg; // Правильный импорт для CommonJS модуля

const isDev = process.env.NODE_ENV === 'development';
const isPreview = process.argv.includes('preview');
const isGHPages = process.env.GITHUB_ACTIONS === 'true';

export default defineConfig({
  site: 'https://web22des.github.io',
  base: isDev || isPreview || !isGHPages ? '/' : '/stellar-star/',
  trailingSlash: 'always',
  output: 'static',

  vite: {
    resolve: {
      alias: {
        '@': path.resolve('./src'),
        '@components': path.resolve('./src/components'),
        '@styles': path.resolve('./src/styles'),
        '@scripts': path.resolve('./src/scripts'),
        '@assets': path.resolve('./src/assets'),
        '@layouts': path.resolve('./src/layouts'),
        '@fonts': path.resolve('./public/fonts'),
        '@images': path.resolve('./public/images'),
        '@icons': path.resolve('./public/icons'),
        '@favicon': path.resolve('./public/favicon'),
      },
    },
    css: {
      postcss: {
        plugins: [
          new PurgeCSS({
            // Используем new для создания экземпляра
            content: ['./src/**/*.astro', './src/**/*.js', './src/**/*.ts', './public/**/*.html'],
            safelist: [/data-astro-cid/, /^:root/, /dark/, /light/, /-(enter|leave)-active/, /\bhljs\b/, /swiper/],
            defaultExtractor: (content) => {
              const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
              const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || [];
              return [...broadMatches, ...innerMatches];
            },
          }),
        ],
      },
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@styles/base/null";
            @use "@styles/themes/v_01/light.scss";
            @use "@styles/themes/v_01/dark.scss";
            @use "@styles/base/media-new" as *;
            @use "@styles/base/variables" as *;
            @use "@styles/utils/_focus-visible.scss" as *;
            @use "@styles/fonts/fonts.scss";
            @use "@styles/fonts/icons.scss";
            @use "@styles/base/common.scss";
            @use "@styles/base/button.scss";
          `,
          implementation: sass,
          sassOptions: {
            sourceMap: true,
            style: 'compressed',
          },
        },
      },
    },
  },
});
