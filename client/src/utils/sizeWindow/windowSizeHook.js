// Функция для вычисления высоты и ширины экрана и обозначения типа устройства (телефон, планшет или пк)
// Удобно использовать, когда необходимо визуализировать разные компоненты в зависимости от типа устройства.

import { useState, useEffect } from 'react';

export default function useWindowSize() {
  // инициализируем состояние с неопределенными шириной, высотой и типом экрана
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
    typeDisplay: undefined,
  });

  useEffect(() => {
    // Обработчик для вызова при изменении размера экрана
    function handleResize() {
      // Задаем ширину, высоту и тип экрана
      if ((window.innerWidth <= 460 && window.innerHeight <= 740) || (window.innerHeight <= 460 && window.innerWidth <= 740)) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          typeDisplay: 'Mobile',
        })
      } else if (
        ((window.innerWidth > 460 && window.innerWidth < 1224) && (window.innerHeight > 720 && window.innerHeight < 800))
        || ((window.innerHeight > 460 && window.innerHeight < 1224) && (window.innerWidth > 720 && window.innerWidth < 800))
      ) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          typeDisplay: 'Tablet',
        })
      } else if (window.innerWidth >= 1224 && window.innerHeight >= 800) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
          typeDisplay: 'Desktop',
        })
      }
    }
    // Прослушиваем событие
    window.addEventListener('resize', handleResize);

    handleResize();

    // Удаление прослушивателя события при очистке
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Пустой массив гарантирует, что эффект запускается только при монтировании (on mount)

  return windowSize;
}
