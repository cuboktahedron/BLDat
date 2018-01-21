import CubeColor from '../models/CubeColor'

export default class ColorSettings {
  u: CubeColor;
  l: CubeColor;
  f: CubeColor;
  r: CubeColor;
  b: CubeColor;
  d: CubeColor;

  constructor(colors: Object) {
    for (let p in colors) {
      let color = colors[p];
      this[p] = color;
    }
  }

  get saveData(): Object {
    return {
      u: this.u,
      l: this.l,
      f: this.f,
      r: this.r,
      b: this.b,
      d: this.d,
    }
  }
}
