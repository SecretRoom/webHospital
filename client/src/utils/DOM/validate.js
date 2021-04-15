/* eslint-disable no-use-before-define */

import validator from 'validator';
// el - Input text элемент
// type - тип проверки, типы из библиотеки validator https://github.com/validatorjs/validator.js
// Объект с параметрами:
// className - класс устанавливаемый элементу, если проверка не пройдена
// success, fail - func - функция вызываемая в случае успешно/неуспешной проверки
// require - bool - обязательное поле или нет(принудительно устанавливает фокус на input)
// regexp - регулярное выражение
export function checkInputValue(el, type, {
  className = 'not-valid', success, fail, required, regexp,
}) {
  if (el.value === '') return toogleClassName(el);
  // валидация регулярным выражением
  if (type === 'regular') {
    if (regexp.test(el.value)) {
      toogleClassName(el)
      return true
    }
    el.classList.add(className)
    return false
  }
  // валидация библиотекой validator
  const locale = type === 'isAlpha' ? 'ru-RU' : undefined;
  if (!validator[type](el.value, locale)) {
    if (required) el.focus();
    el.classList.add(className);
    if (fail) fail();
    return false;
  }
  // eslint-disable-next-line no-unused-expressions
  function toogleClassName(el) {
    return el.classList.contains(className) ? el.classList.remove(className) : false;
  }
  toogleClassName(el);
  if (success) success();
  return true;
}
