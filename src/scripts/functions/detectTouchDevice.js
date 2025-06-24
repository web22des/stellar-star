/**
 * Определяет тип устройства и добавляет класс touch/no-touch к тегу <html>
 * @returns {boolean} true для touch-устройств, false для обычных
 */
export const detectTouchDevice = () => {
  // Проверяем различные признаки touch-устройства
  const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

  // Получаем элемент html
  const htmlElement = document.documentElement;

  // Удаляем оба класса перед добавлением нужного
  htmlElement.classList.remove('touch', 'no-touch');

  // Добавляем соответствующий класс
  htmlElement.classList.add(isTouchDevice ? 'touch' : 'no-touch');

  return isTouchDevice;
};

// Инициализация (вариант для main.js)
export const initTouchDetection = () => {
  // Первичный вызов
  detectTouchDevice();

  // Слушатели событий
  document.addEventListener('DOMContentLoaded', detectTouchDevice);
  window.addEventListener('orientationchange', detectTouchDevice);
};
