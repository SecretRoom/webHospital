import * as R from 'ramda'

let isMouseEnter = false
const propsForUpdate = (idParam: string, paramType: string|number, handleUpdateParam: () => any): any => {
  const history = window.location.href
  if (R.includes('/protocols/', history)) {
    return {
      id: idParam,
      onMouseLeave: (): void => {
        isMouseEnter = false
        switch (+paramType) {
          case 45:
          case 26:
            handleUpdateParam()
            break;
          default:
            break;
        }
      },
      // onMouseMove: isMouseEnter ? debounce(() => handleUpdateParam, 1000) : null, // доработать сохранение при отсутвии движения
      onMouseEnter: (): void => { isMouseEnter = true },
    }
  }
  return {}
}

export default propsForUpdate
