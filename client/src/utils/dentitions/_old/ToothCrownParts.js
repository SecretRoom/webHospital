import { describeArc, describeSector } from '../index.ts';
import Tooth from './Tooth';

const diagnoses = {
  C: 1,
  P: 2,
  Pt: 3,
  A: 4,
  K: 5,
  I: 6,
  Abs: 7,
  R: 8,
  Pl: 9,
  Mob: [10, 11, 12, 13],
  KV: 14,
  BP: 15,
  Br: 16,
}
class ToothCrownParts extends Tooth {
  constructor(data, target, cb = () => {}, selected, size = { x: 60, y: 60 }) {
    super(data, target, cb, selected, size)
    this._outerRadius = (this._H / 2) - 2
    this._innerRadiuses = {
      4: 0,
      5: this._H / 3.8,
      6: this._H / 3.8,
    }
    this._centerCoords = { x: this._H / 2, y: this._W / 2 }
    this._circleDiametr = this._H / 2.3
    this._angles = { start: -45, end: 45 }
    this._cb = cb
  }

  _getStyleByDiagnos = (id) => {
    const part = this.getCrownPart(id)
    if (this.hadDiagnosis(diagnoses.K) || this.hadDiagnosis(diagnoses.I)) {
      return '#1976D2'
    }
    if (this.hadDiagnosis(diagnoses.Br)) {
      if (this.isLowerTooth() && id === 3) return '#e67e22'
      if (this.isUpperTooth() && id === 1) return '#e67e22'
      return '#009688'
    }
    if (this.hadDiagnosis(diagnoses.BP)) {
      return '#1B5E20'
    }
    if (this.hadDiagnosis(diagnoses.KV)) {
      return '#2D7D9A'
    }
    return {
      0: '#fff',
      1: '#9E9E9E',
      2: '#4CAF50',
      3: '#212121',
    }[part?.status] || '#fff'
  }

  _getStyle = (id) => {
    if (this._setSelected === id) return { 'z-index': 9999 }
    return { }
  }

  _getInnerRadius = () => {
    return this._innerRadiuses[this.crownPartsNumber]
  }

  _drawPieces = (crownPaper, outerRadius, innerRadius, centerCoords, angles) => {
    for (let i = 0; i < 360; i += 90) {
      const id = (i + 90) / 90
      const section = crownPaper.path(describeSector(centerCoords.x, centerCoords.y, outerRadius, innerRadius, angles.start + i, angles.end + i))
        .fill(this._getStyleByDiagnos(id))
        .stroke(this._getStrokeStyle(id))
        .addClass(`figure piece-${i}`)
        .on('click', e => {
          this.handleClick(e, this.getCrownPart(id), this.crownPaper)
          this._setSelect(id)
          this.render()
        })
        .style(this._getStyle())
      if (this._setSelected === id) {
        section.front()
      }
    }
  }

  _drawCenter = () => {
    const figures = {
      4: () => null,
      5: (centerCoords, circleDiametr) => this.crownPaper.circle(circleDiametr)
        .fill(this._getStyleByDiagnos(5))
        .stroke(this._getStrokeStyle(5))
        .addClass('figure center')
        .move(centerCoords.x - (circleDiametr / 2), centerCoords.y - (circleDiametr / 2))
        .on('click', e => {
          this.handleClick(e, this.getCrownPart(5))
          this._setSelect(5)
          this.render()
        }),
      6: (centerCoords, circleDiametr) => {
        this.crownPaper.path(`${describeArc(centerCoords.x, centerCoords.y, circleDiametr / 2, 2, 178)}Z`)
          .fill(this._getStyleByDiagnos(6))
          .stroke(this._getStrokeStyle(6))
          .addClass('figure center-right')
          .on('click', e => {
            this.handleClick(e, this.getCrownPart(6))
            this._setSelect(6)
            this.render()
          })
        this.crownPaper.path(`${describeArc(centerCoords.x, centerCoords.y, circleDiametr / 2, 182, 358)}Z`)
          .fill(this._getStyleByDiagnos(5))
          .stroke(this._getStrokeStyle(5))
          .addClass('figure center-left')
          .on('click', e => {
            this.handleClick(e, this.getCrownPart(5))
            this._setSelect(5)
            this.render()
          })
      },
    }
    return figures[this.crownPartsNumber](this._centerCoords, this._circleDiametr)
  }

  render = () => {
    this.clear()
    if (this.hadDiagnosis(diagnoses.Abs) && !this.hadDiagnosis(diagnoses.Br)) {
      return null
    }
    if (this.hadDiagnosis(diagnoses.R)) {
      return null
    }
    this._drawPieces(this.crownPaper, this._outerRadius, this._getInnerRadius(), this._centerCoords, this._angles)
    this._drawCenter()
    return this.crownPaper
  }
}

export default ToothCrownParts
