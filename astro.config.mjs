// config/astro/astro.config.mjs
import { defineConfig } from 'astro/config';
import path from 'node:path';
import sass from 'sass-embedded';

const isDev = process.env.NODE_ENV === 'development';
const isPreview = process.argv.includes('preview');
const isGHPages = process.env.GITHUB_ACTIONS === 'true'; // Автоопределение GitHub Actions

export default defineConfig({
  site: 'https://web22des.github.io',
  base: isDev || isPreview || !isGHPages ? '/' : '/stellar-star/',
  trailingSlash: 'always',
  output: 'static', // Явно указываем статический режим

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
      preprocessorOptions: {
        scss: {
          // 1. Глобальные переменные/миксины (доступны во всех файлах)
          additionalData: `
					@use "@styles/base/null";
					@use "@styles/themes/v_01/light.scss";
					@use "@styles/themes/v_01/dark.scss";
					@use "@styles/base/media-new" as *;
					@use "@styles/base/variables" as *;
					@use "@styles/fonts/fonts.scss";
					@use "@styles/fonts/icons.scss";
					@use "@styles/base/common.scss";
					`,
          // 2. Настройки встроенного Sass
          implementation: sass,
          sassOptions: {
            // Примеры настроек:
            sourseMap: true,
            style: 'compressed', // Минификация (или "expanded")
          },
        },
      },
    },
  },
});
