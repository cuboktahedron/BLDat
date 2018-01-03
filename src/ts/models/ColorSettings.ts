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
}
