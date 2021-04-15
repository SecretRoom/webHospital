// Принимает элемент который необходимо выделить - element
// класс который необходимо установить элементу targetElement
export function toggleClass(element, activeClassName) {
  if (element.classList.contains(activeClassName)) element.classList.remove(activeClassName);
  else element.classList.add(activeClassName);
}

// Для отключения редактирования полей
// Принимает набор прав аргументами(0, 1, '0', '1', true, false), возращает true или false
// Необходимо обратить внимание на логическое значение передаваемого права
// если аргумент true - редактирование разрешено, false - запрещено
// функция вернет true - редактирование запрещено

export function isAccessDenied(...args) {
  const rights = args.map((arg) => !!+arg);
  return rights.some((right) => right === false);
}

// Селект с мультиселектом по ктрл
// const handleSelect = (e, rowId) => {
//   if (e.currentTarget.classList.contains(styles.active)) {
//     const rows = document.querySelectorAll('.rt-tr')
//     Array.prototype.forEach.call(rows, (row) => row.classList.remove(styles.active))
//   } else {
//     if (!e.ctrlKey) {
//       const rows = document.querySelectorAll('.rt-tr')
//       Array.prototype.forEach.call(rows, (row) => row.classList.remove(styles.active))
//     }
//     e.currentTarget.classList.add(styles.active)
//   }
//   return true
// };
