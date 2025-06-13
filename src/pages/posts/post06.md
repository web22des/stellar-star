---
layout: ../../layouts/MarkdownLayout.astro
title: 'Документация по работе и подключению `swiper`'

date: 2025-06-13
description: 'Описание отсутствует`'
---

# Документация по работе и подключению `swiper`

Данный файл `swiper-config.js` содержит конфигурацию для трех различных слайдеров на сайте с использованием библиотеки [Swiper](https://swiperjs.com/). Ниже представлено подробное описание каждого компонента.

## Содержание всего файла

```js
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, EffectCube } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

export function initSliders() {
  // Мобильный слайдер
  const initMobileSlider = () => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const sliderEl = document.querySelector('.advantages__slider');
    if (!sliderEl) return;

    const handleSwiper = () => {
      if (mediaQuery.matches) {
        if (!sliderEl.swiper) {
          sliderEl.swiper = new Swiper(sliderEl, {
            modules: [Navigation, Pagination],
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
          });
        }
      } else {
        sliderEl.swiper?.destroy();
      }
    };

    handleSwiper();
    mediaQuery.addEventListener('change', handleSwiper);
  };

  // Галерейный слайдер
  const initExampleWorkSlider = () => {
    const sliderEl = document.querySelector('.examples-work__slider');
    if (!sliderEl || sliderEl.swiper) return;

    sliderEl.swiper = new Swiper(sliderEl, {
      modules: [Navigation, Pagination, EffectFade],
      slidesPerView: 1,
      speed: 1000,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  // 3d-slider
  const initGallerySliderSun = () => {
    const sliderEl = document.querySelector('.3d-slider');
    if (!sliderEl || sliderEl.swiper) return;

    sliderEl.swiper = new Swiper(sliderEl, {
      modules: [Navigation, Pagination, EffectCube],
      slidesPerView: 1,
      effect: 'cube',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  };

  initMobileSlider();
  initExampleWorkSlider();
  initGallerySliderSun();
}
```

## 📌 Импорты

```javascript
import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, EffectCube } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';
```

- Swiper: Основной класс библиотеки для создания слайдеров.

- Модули:

  - `Navigation` — добавляет кнопки "вперед/назад".
  - `Pagination` — добавляет точки-индикаторы текущего слайда.
  - `EffectFade` — включает эффект плавного перехода между слайдами (затухание).
  - `EffectCube` — включает эффект 3D куба.

- Стили: Подключаются SCSS-файлы для базовых стилей и модулей.

## 📌 Функция initSliders()

Главная функция, которая инициализирует все слайдеры на странице. Важно: В текущей версии активирован только `initExampleWorkSlider()` (остальные закомментированы).

## 1️⃣ Мобильный слайдер (initMobileSlider)

Назначение: Адаптивный слайдер, который работает только на экранах ≤ 767px.

```javascript
const initMobileSlider = () => {
  const mediaQuery = window.matchMedia('(max-width: 767px)');
  const sliderEl = document.querySelector('.mobile-slider');

  const handleSwiper = () => {
    if (mediaQuery.matches && !sliderEl.swiper) {
      sliderEl.swiper = new Swiper(sliderEl, {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto', // Автоподбор ширины слайдов
        pagination: { el: '.swiper-pagination', clickable: true },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    } else {
      sliderEl.swiper?.destroy(); // Уничтожает слайдер на больших экранах
    }
  };

  handleSwiper();
  mediaQuery.addEventListener('change', handleSwiper); // Реакция на изменение размера окна
};
```

#### Особенности:

- Использует `matchMedia` для отслеживания ширины экрана.
- Автоматически уничтожается при переходе на десктоп.

## 2️⃣ Галерейный слайдер (initExampleWorkSlider)

Назначение: Слайдер с эффектом затухания (`fade`) для галерей.

```js
const initExampleWorkSlider = () => {
  const sliderEl = document.querySelector('.gallery-slider');
  if (!sliderEl || sliderEl.swiper) return;

  sliderEl.swiper = new Swiper(sliderEl, {
    modules: [Navigation, Pagination, EffectFade],
    slidesPerView: 1,
    speed: 1000, // Длительность анимации (мс)
    effect: 'fade',
    fadeEffect: { crossFade: true }, // Плавное перекрытие слайдов
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
```

#### Особенности:

- Эффект `fade` делает переходы между слайдами более плавными.

- Фиксированная скорость анимации (1 секунда).

## 3️⃣ 3D-слайдер (`initGallerySliderSun`)

Назначение: Слайдер с эффектом "куба" (3D-вращение).

```js
const initGallerySliderSun = () => {
  const sliderEl = document.querySelector('.3d-slider');
  if (!sliderEl || sliderEl.swiper) return;

  sliderEl.swiper = new Swiper(sliderEl, {
    modules: [Navigation, Pagination, EffectCube],
    slidesPerView: 1,
    effect: 'cube', // Требуется импорт 'swiper/modules/effect-cube'
    pagination: { el: '.swiper-pagination', clickable: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
};
```

## 📌Инициализация

```astro
// Инициализация в Astro-компоненте
<script>
import { initSliders } from './swiper-config';
import { onMount } from 'astro';
onMount(() => initSliders());
</script>
```

#### Либо в main.js

```js
import { initSliders } from '../scripts/libs/swiper/swiper-config.js';

document.addEventListener('DOMContentLoaded', () => {
  // Другие функции

  initSliders();
});
```

#### Примечание:

`onMount` — это специальная функция из Astro, которая позволяет выполнять JavaScript-код только после полной загрузки и отрисовки HTML-страницы в браузере.

## 📌 Важно:

Все современные версии Swiper (2025) поддерживают `Tree Shaking` — убедитесь, что в проекте включена минификация неиспользуемого кода.

## 📌 Стилизация:

Общие стили вынесены в `src\styles\base\common.scss`

```scss
.my-class {
  .swiper {
    //--swiper-navigation-color: #fff !important;
    // стилизация цвета пагинации
    --swiper-pagination-color: var(--md-sys-color-tertiary);
    --swiper-pagination-bullet-inactive-color: var(--md-sys-color-tertiary);
  }
  .swiper-wrapper {
  }
  .swiper-slide {
  }
  .swiper-pagination {
  }

  .swiper-pagination-bullet {
    border-radius: 0; // по желанию можно сделать буллеты квадратными
    border: 1px solid #f1efef; // задаем border буллетам, для того что бы буллеты на темном фоне не сливались, так как их основной цвет темный
  }
  .swiper-pagination-bullet-active {
  }

  .swiper-button-prev,
  .swiper-button-next {
    color: var(--md-sys-color-on-surface);
    &::after {
      font-size: var(--font-size-xxxl);
      font-family: 'icomoon'; // Подключение иконочного шрифта
    }
    // Подложка, для контастного восприятия стрелок на темном и светлом фоне
    &::before {
      content: '';
      position: absolute;
      width: 36px;
      height: 36px;
      border-radius: var(--border-radius-full);
      background-color: var(--md-sys-color-on-tertiary);
      z-index: -1;
    }
  }
  .swiper-button-prev {
    &::after {
      content: '\e967'; // Иконочны шрифт icomoon
    }
  }
  .swiper-button-next {
    &::after {
      content: '\e968'; // Иконочны шрифт icomoon
    }
  }
  .swiper-scrollbar {
  }
}
```

Класс `.my-class` весит на body для удобства
