const Radix = 10;
//  добавление i дней к дате d в формате ДД.ММ.ГГГГ
export default function addDay(d, i) {
  const spl = d.split('.');
  const nextDate = new Date(
    parseInt(spl[2], Radix), parseInt(spl[1], Radix) - 1, parseInt(spl[0], Radix) + i,
  );
  let day = String(nextDate.getDate());
  if (day.length < 2) day = `0${day}`;
  let month = String(nextDate.getMonth() + 1);
  if (month.length < 2) month = `0${month}`;
  return `${day}.${month}.${String(nextDate.getFullYear())}`;
}
