import { SVG } from '@svgdotjs/svg.js'

class Tooth {
  constructor(data, target, cb, selected, size) {
    this._strokeStyle = { color: '#aaa', width: 1, linecap: 'round', linejoin: 'round' }
    this._fillColor = '#fff'
    this._H = size.y
    this._W = size.x
    this._centerCoords = { x: this._H / 2, y: this._W / 2 }

    this.origin = data
    this._number = data.number
    this._crownParts = data.crownParts
    this._roots = data.roots

    this._target = target
    this._cb = cb
    this._selected = selected

    this._init()
  }

  get number() {
    return this._number
  }

  get firstNumber() {
    return +(this._number.toString()[0])
  }

  get secondNumber() {
    return +(this._number.toString()[1])
  }

  get crownPartsNumber() {
    return Object.keys(this._crownParts).length
  }

  get rootsNumber() {
    return this._roots.length
  }

  getCrownPart(id) {
    return this.origin.crownParts[id]
  }

  getRoot(id) {
    return this.origin.roots.find(root => root.id === id)
  }

  _hadDiagnosis(diagnosId) {
    return this.origin.diagnos?.includes(diagnosId)
  }

  getRootStatuses(rootId) {
    return this.origin.roots.find(root => root.id === rootId)?.diagnos
  }

  getCrownStatuses(partId) {
    return this.getCrownPart(partId)?.status
  }

  isLowerTooth() {
    return this.firstNumber === 3 || this.firstNumber === 4
  }

  isUpperTooth() {
    return this.firstNumber === 1 || this.firstNumber === 2
  }

  _select = (id) => {
    // if (this._selected === id) {
    //   this._selected = undefined
    // } else {
    //   this._selected = id
    // }
    this._selected = id
  }

  _getStrokeStyle = (id) => {
    if (this._selected === id) return { color: '#2185d0', width: 2, linecap: 'miter', linejoin: 'miter' }
    return this._strokeStyle
  }

  callback = (e, data = {}) => {
    if (!this._cb) return false
    this._cb(data, this.origin, e)
    return true
  }

  _init() {
    this.paper = this._target && SVG().addTo(this._target).size(this._W, this._H)
  }

  rotate(draw) {
    switch (this.firstNumber) {
      case 1:
      case 2:
      case 5:
      case 6: {
        draw()
        break;
      }
      default: {
        draw().rotate(180)
        break;
      }
    }
  }

  clear() {
    this.paper.clear()
  }

  render = () => { this.paper.text('Зуб') }
}

export default Tooth
