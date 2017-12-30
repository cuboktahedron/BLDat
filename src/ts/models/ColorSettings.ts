import CubeColor from '../models/CubeColor'

export default class ColorSettings {
  u: CubeColor;
  l: CubeColor;
  f: CubeColor;
  r: CubeColor;
  b: CubeColor;
  d: CubeColor;

  constructor() {
    this.u = CubeColor.white;
    this.l = CubeColor.orange;
    this.f = CubeColor.green;
    this.r = CubeColor.red;
    this.b = CubeColor.blue;
    this.d = CubeColor.yellow;
  }

  copy(): ColorSettings {
    const newColor = new ColorSettings;
    newColor.u = this.u;
    newColor.l = this.l;
    newColor.f = this.f;
    newColor.r = this.r;
    newColor.b = this.b;
    newColor.d = this.d;

    return newColor;
  }
}
