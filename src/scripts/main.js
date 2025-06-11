import { initScrollAnimation } from '@scripts/ui/scrollAnimation.js';
import { spollers } from './functions/spolers';

//import { initSliders } from './libs/slider.js';

// //initSliders();
// //spollers();

document.addEventListener('DOMContentLoaded', () => {
  //initScrollAnimation();
  spollers();
});

console.log('✅ Все подключенные скрипты подключены!');
