// Обрезать строку и добавить точки
export function addDots(string, length = 10) {
  if (string.length > length) {
    return `${string.slice(0, length - 3)}...`;
  }
  return string;
}
