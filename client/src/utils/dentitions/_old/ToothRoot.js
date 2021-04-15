import Tooth from './Tooth'
import { rootsPaths } from '../toothPaths.ts'

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

class ToothRoot extends Tooth {
  constructor(data, target, cb = () => {}, selected, size = { x: 60, y: 50 }) {
    super(data, target, cb, selected, size)
  }

  _getStyleChanalByDiagnos() {
    if (this.hadDiagnosis(diagnoses.P)) {
      return '#f44336'
    }
    if (this.hadDiagnosis(diagnoses.KV)) {
      return '#2D7D9A'
    }
    return '#fff'
  }

  _getStyleRootByDiagnos() {
    if (this.hadDiagnosis(diagnoses.Pt)) {
      return '#9C27B0'
    }
    if (this.hadDiagnosis(diagnoses.R)) {
      return '#f44336'
    }
    if (this.getRootStatuses(diagnoses.C)) {
      return '#212121'
    }
    if (this.hadDiagnosis(diagnoses.I)) {
      return '#37474F'
    }
    return '#fff'
  }

  _getStyleGumByDiagnos() {
    if (this.origin.diagnos?.includes(diagnoses.A)) {
      return '#f44336'
    }
    return '#ffcdd2'
  }

  drawGum() {
    const gum = () => this.rootPaper
      .path(
        `M0 0 L0 ${this._H} L5 ${this._H}
        A${this._W - this._W / 2} ${this._W - this._W / 2} 0 0 1 ${this._W - 5} ${this._H}
        L${this._W} ${this._H} L${this._W} 0 Z`)
      .fill(this._getStyleGumByDiagnos())
    this.rotate(gum)
  }

  drawRoot(path, id) {
    return this.rootPaper.path(path)
      .fill(this._getStyleRootByDiagnos(id))
      .stroke(this._getStrokeStyle(id))
      .addClass('figure')
      .on('click', e => {
        this.callback(e, this.getRoot(id), this.rootPaper)
        this._setSelect(id)
        this.render()
      })
  }

  drawChanal(path, id) {
    return this.rootPaper.path(path)
      .fill(this._getStyleChanalByDiagnos())
      .stroke(this._getStrokeStyle(id))
      .addClass('figure')
      .on('click', e => {
        this.callback(e, this.getRoot(id), this.rootPaper)
        this._setSelect(id)
        this.render()
      })
  }

  drawRoots() {
    const getRoots = () => {
      if (this.hadDiagnosis(diagnoses.I)) {
        return (x, y) => {
          const group = this.rootPaper.group()
          const pin = this.drawRoot(rootsPaths.pin, 10)
          group.add(pin)
          return group.width(this._W - 10 * 3).height(this._H - 10 * 2).move(x * 3, y)
        }
      }
      const paths = rootsPaths[this.rootsNumber]
      switch (this.rootsNumber) {
        default: {
          // Один корень
          return (x, y) => {
            const group = this.rootPaper.group()

            const center = this.drawRoot(paths.center.root, 1)
            const centerChanal = this.drawChanal(paths.center.chanal, 1)

            group.add(center)
            group.add(centerChanal)

            return group.width(this._W - 10).height(this._H - 10).move(x, y)
          }
        }
        case 2: {
          // Два Корня
          return (x, y) => {
            const group = this.rootPaper.group()

            const leftRoot = this.drawRoot(paths.left.root, 1)
            const rightRoot = this.drawRoot(paths.right.root, 2)

            const leftChanal = this.drawChanal(paths.left.chanal, 1)
            const rightChanal = this.drawChanal(paths.right.chanal, 2)

            group.add(leftRoot)
            group.add(rightRoot)
            group.add(leftChanal)
            group.add(rightChanal)
            return group.width(this._W - 10).height(this._H - 10).move(x, y)
          }
        }
        case 4: {
          // Четыре Корня
          return (x, y) => {
            const group = this.rootPaper.group()

            const leftRoot = this.drawRoot(paths.left.root, 1)
            const centerLeftRoot = this.drawRoot(paths.centerLeft.root, 2)
            const centerRightRoot = this.drawRoot(paths.centerRight.root, 3)
            const rightRoot = this.drawRoot(paths.right.root, 4)

            const leftChanal = this.drawChanal(paths.left.chanal, 1)
            const centerLeftChanal = this.drawChanal(paths.centerLeft.chanal, 2)
            const centerRightChanal = this.drawChanal(paths.centerRight.chanal, 3)
            const rightChanal = this.drawChanal(paths.right.chanal, 4)

            group.add(leftRoot)
            group.add(centerLeftRoot)
            group.add(centerRightRoot)
            group.add(rightRoot)
            group.add(centerLeftChanal)
            group.add(centerRightChanal)
            group.add(leftChanal)
            group.add(rightChanal)
            return group.width(this._W - 10).height(this._H - 10).move(x, y)
          }
        }
        case 3: {
          // Три корня
          return (x, y) => {
            const group = this.rootPaper.group()

            const leftRoot = this.drawRoot(paths.left.root, 1)
            const centerRoot = this.drawRoot(paths.center.root, 2)
            const rightRoot = this.drawRoot(paths.right.root, 3)

            const leftChanal = this.drawChanal(paths.left.chanal, 2)
            const centerChanal = this.drawChanal(paths.center.chanal, 1)
            const rightChanal = this.drawChanal(paths.right.chanal, 3)

            group.add(leftRoot)
            group.add(centerRoot)
            group.add(rightRoot)
            group.add(leftChanal)
            group.add(centerChanal)
            group.add(rightChanal)
            return group.width(this._W - 10).height(this._H - 10).move(x, y)
          }
        }
      }
    }

    this.rotate(getRoots())
  }

  rotate(draw) {
    switch (this.section) {
      case 1:
      case 2:
      case 5:
      case 6: {
        draw((this._W - (this._W - 10)) / 2, (this._H - (this._H - 10)))
        break;
      }
      default: {
        draw((this._W - (this._W - 10)) / 2, (this._H - (this._H - 10) - 10)).rotate(180)
        break;
      }
    }
  }

  render = () => {
    this.clear()
    this.drawGum()
    if (this.hadDiagnosis(diagnoses.Abs) || this.hadDiagnosis(diagnoses.BP) || this.hadDiagnosis(diagnoses.Br)) {
      return null
    }
    this.drawRoots()
    return this.rootPaper
  }
}

export default ToothRoot
