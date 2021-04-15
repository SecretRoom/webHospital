/**
 * Функция для вычисления возраста по дате рождения типа string.
 * Поддерживает два формата даты: 'гггг-мм-дд' и 'дд-мм-гггг'
 *
 *
 * @param {string} drogd - Дата рождения 'гггг-мм-дд' или 'дд-мм-гггг'
 * @param {boolean} yearsText - Если true, то функция вернет с количеством лет текст 'лет' или 'год'
 * @return {string} Количество лет + 'лет' или 'год'
 *
 */

const getAge = (drogd, yearsText) => {
  const currentDate = new Date();
  const dateString = '';
  const ageYears = '';
  let dateOfBirth = '';
  let years = '';
  let age = 0;

  // Отличать даты будем по тому, где стоит год: в начале или в конце. Сперва переведем даты формата string в формат data.
  if (drogd) {
    // если формат 'дд-мм-гггг'
    if (drogd.slice(5, 6) !== '-') {
      dateOfBirth = new Date(dateString.concat(drogd.slice(6, 10), '-', drogd.slice(3, 5), '-', drogd.slice(0, 2), 'T00:00:00'));
    }
    // если формат 'гггг-мм-дд'
    if (drogd.slice(4, 5) === '-') {
      dateOfBirth = new Date(dateString.concat(drogd, 'T00:00:00'));
    }
    // вычисление возраста на основе даты рождения и сегодняшней даты
    age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    if (currentDate.getMonth() < dateOfBirth.getMonth()) age--;
    if ((dateOfBirth.getMonth() === currentDate.getMonth()) && (currentDate.getDate() < dateOfBirth.getDate())) age--;

    // вычисление лет/год
    if (yearsText) {
      if ((age >= 10 && age <= 19) || (age >= 110 && age <= 119)) {
        years = ' лет';
      } else if (age % 10 === 1) {
        years = ' год';
      } else if (age % 10 <= 4 && age % 10 >= 2) {
        years = ' года';
      } else {
        years = ' лет';
      }
    }

    return (ageYears.concat(age, years));
  }
  return null
}

export default getAge
