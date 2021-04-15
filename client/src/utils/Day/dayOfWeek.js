const Radix = 10;
// по дате в формате ДД.ММ.ГГ / ДД.ММ.ГГГГ возвращает сокращенный день недели
export default function dayOfWeek(d) {
  const spl = d.split('.');
  if (spl[2].length === 2) { spl[2] = `20${spl[2]}`; }
  const dt = new Date(
    parseInt(spl[2], Radix), parseInt(spl[1], Radix) - 1, parseInt(spl[0], Radix),
  );
  return dt.toLocaleString('ru', { weekday: 'short' });
}
