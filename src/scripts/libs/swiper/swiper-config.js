import Swiper from 'swiper';
import { Navigation, Pagination, EffectFade, EffectCards, Autoplay } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/effect-fade';

export function initSliders() {
  // Мобильный слайдер
  const initMobileSlider = () => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const sliderEl = document.querySelector('.mobile-slider');
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
  // Мобильный слайдер
  const initMobileSliderCard = () => {
    const mediaQuery = window.matchMedia('(max-width: 599px)');
    const sliderEl = document.querySelector('.mobile-slider-card');
    if (!sliderEl) return;

    const handleSwiper = () => {
      if (mediaQuery.matches) {
        if (!sliderEl.swiper) {
          sliderEl.swiper = new Swiper(sliderEl, {
            modules: [Pagination, EffectCards, Autoplay],
            slidesPerView: 'auto',
            speed: 500,
            autoplay: {
              delay: 1000,
            },
            effect: 'cards',
            // Дополнительные параметры для эффекта карточек
            cardsEffect: {
              slideShadows: true, // Включение теней на слайдах
              rotate: true, // Вращение карточек при перелистывании
              perSlideOffset: 8, // Смещение между карточками (в пикселях)
              perSlideRotate: 2, // Угол поворота каждой карточки (в градусах)
            },
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
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
  const initFadeSlider = () => {
    const sliderEl = document.querySelector('.fade-slider');
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

  // section-swiper-sun__slider
  const initGallerySliderSun = () => {
    const sliderEl = document.querySelector('.section-swiper-sun__slider');
    if (!sliderEl || sliderEl.swiper) return;

    sliderEl.swiper = new Swiper(sliderEl, {
      modules: [Navigation, Pagination],
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
  initMobileSliderCard();
  initFadeSlider();
  //initGallerySliderSun();
}

// Оптимальное событие для запуска
//document.addEventListener('DOMContentLoaded', initSliders);

// Именование классов: Замените технические классы (например, .advantages__slider) на семантичные:
// .mobile-slider
// .gallery-slider
// .3d-slider
// .fade-slider
