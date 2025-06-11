/**
 * Инициализирует анимацию элементов при скролле
 * @param {Object} options - Настройки анимации
 * @param {string} [options.baseClass='fade'] - Базовый класс элемента
 * @param {string} [options.activeClass='--active'] - Класс для активации анимации
 * @param {number} [options.threshold=0.1] - Процент видимости элемента для срабатывания (10%)
 * @param {boolean} [options.animateOnce=true] - Анимировать только один раз
 */
export function initScrollAnimation({ baseClass = 'fade', activeClass = '--active', threshold = 0.7, animateOnce = true } = {}) {
  // Находим все элементы с базовым классом
  const elements = document.querySelectorAll(`.${baseClass}`);
  if (!elements.length) return;

  // Создаем Intersection Observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Добавляем класс для активации анимации
          entry.target.classList.add(activeClass);

          // Отключаем наблюдение для этого элемента, если анимация одноразовая
          if (animateOnce) {
            observer.unobserve(entry.target);
          }
        } else if (!animateOnce) {
          // Убираем класс, если анимация должна срабатывать повторно
          entry.target.classList.remove(activeClass);
        }
      });
    },
    {
      threshold, // Срабатывает, когда 10% элемента видно
    }
  );

  // Начинаем наблюдение за всеми элементами
  elements.forEach((element) => observer.observe(element));
}
