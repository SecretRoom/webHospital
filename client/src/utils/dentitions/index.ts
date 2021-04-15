interface Coords {
  x: number
  y: number
}

/**
 * Перевод из полярной системы координат в декартову
 *
 * @param {*} cx - координаты центра
 * @param {*} cy - координаты центра
 * @param {*} r - радиус
 * @param {*} angle - угол
 * @returns {string} - координаты начала/конца дуги
 */
export function polarToCartesian(cx: number, cy: number, r: number, angle: number): Coords {
  angle = (angle - 90) * Math.PI / 180
  const x = cx + r * Math.cos(angle)
  const y = cx + r * Math.sin(angle)
  return { x, y }
}
/**
 * Описание дуги
 *
 * @param {*} cx - координаты центра
 * @param {*} cy - координаты центра
 * @param {*} r - радиус
 * @param {*} startAngle - угол начала
 * @param {*} endAngle - угол конца
 * @returns {string} - строку для описания дуги в svg path
 */
export function describeArc(cx: number, cy: number, r: number, startAngle: number, endAngle: number, continueLine = 'M'): string {
  const start = polarToCartesian(cx, cy, r, startAngle %= 360)
  const end = polarToCartesian(cx, cy, r, endAngle %= 360)
  const large = Math.abs(endAngle - startAngle) >= 180
  const alter = endAngle > startAngle
  return `${continueLine}${start.x} ${start.y} A${r} ${r} 0 ${large ? 1 : 0} ${alter ? 1 : 0} ${end.x} ${end.y}`
}
/**
 *
 *
 * @export
 * @param {*} cx
 * @param {*} cy
 * @param {*} r
 * @param {*} startAngle
 * @param {*} endAngle
 * @returns
 */
export function describeSector(cx: number, cy: number, r: number, r2: number, startAngle: number, endAngle: number): string {
  const coff = r2 || 2
  const outerArc = describeArc(cx, cy, r, startAngle + 1, endAngle - 1)
  const innerArc = describeArc(cx, cy, r2, endAngle - (r / coff), startAngle + (r / coff), 'L')

  return `${outerArc} ${innerArc}Z`
}
