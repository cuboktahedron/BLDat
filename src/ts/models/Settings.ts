import EdgeSettings from '../models/EdgeSettings'
import CornerSettings from '../models/CornerSettings'
import ColorSettings from '../models/ColorSettings'
import CubeColor from '../models/CubeColor'

export default class Settings {
  edges: EdgeSettings;
  corners: CornerSettings;
  colors: ColorSettings;

  constructor(pSettings?: Object) {
    let settings = pSettings;

    if (settings == null) {
      settings = this.createDefaultSettings();
    }

    try {
      this.edges = new EdgeSettings(settings['edges']);
      this.corners = new CornerSettings(settings['corners']);
      this.colors = new ColorSettings(settings['colors']);
    } catch (ex) {
      settings = this.createDefaultSettings();
      this.edges = new EdgeSettings(settings['edges']);
      this.corners = new CornerSettings(settings['corners']);
      this.colors = new ColorSettings(settings['colors']);
    }
  }

  createDefaultSettings(): Object {
    const edges: Object = {};
    edges['ub'] = { no: 1, letter: 'あ', group: 'ub', isBuffer: false };
    edges['ul'] = { no: 3, letter: 'か', group: 'ul', isBuffer: false };
    edges['ur'] = { no: 5, letter: 'さ', group: 'ur', isBuffer: false };
    edges['uf'] = { no: 7, letter: 'え', group: 'uf', isBuffer: false };
    edges['lu'] = { no: 10, letter: 'な', group: 'ul', isBuffer: false };
    edges['lb'] = { no: 12, letter: 'に', group: 'lb', isBuffer: false };
    edges['lf'] = { no: 14, letter: 'ね', group: 'lf', isBuffer: false };
    edges['ld'] = { no: 16, letter: 'ぬ', group: 'ld', isBuffer: false };
    edges['fu'] = { no: 19, letter: 'て', group: 'uf', isBuffer: false };
    edges['fl'] = { no: 21, letter: 'け', group: 'lf', isBuffer: false };
    edges['fr'] = { no: 23, letter: 'せ', group: 'fr', isBuffer: false };
    edges['fd'] = { no: 25, letter: 'つ', group: 'fd', isBuffer: false };
    edges['ru'] = { no: 28, letter: 'ら', group: 'ur', isBuffer: false };
    edges['rf'] = { no: 30, letter: 'れ', group: 'fr', isBuffer: false };
    edges['rb'] = { no: 32, letter: 'り', group: 'rb', isBuffer: false };
    edges['rd'] = { no: 34, letter: 'る', group: 'rd', isBuffer: false };
    edges['bu'] = { no: 37, letter: 'た', group: 'ub', isBuffer: false };
    edges['br'] = { no: 39, letter: 'し', group: 'rb', isBuffer: false };
    edges['bl'] = { no: 41, letter: 'き', group: 'lb', isBuffer: false };
    edges['bd'] = { no: 43, letter: 'ち', group: 'bd', isBuffer: false };
    edges['df'] = { no: 46, letter: 'う', group: 'fd', isBuffer: true };
    edges['dl'] = { no: 48, letter: 'く', group: 'ld', isBuffer: false };
    edges['dr'] = { no: 50, letter: 'す', group: 'rd', isBuffer: false };
    edges['db'] = { no: 52, letter: 'い', group: 'bd', isBuffer: false };

    const corners: Object = {};
    corners['ulb'] = { no: 0, letter: 'あ', group: 'ulb', isBuffer: true };
    corners['urb'] = { no: 2, letter: 'た', group: 'urb', isBuffer: false };
    corners['ulf'] = { no: 6, letter: 'え', group: 'ulf', isBuffer: false };
    corners['urf'] = { no: 8, letter: 'て', group: 'urf', isBuffer: false };
    corners['lub'] = { no: 9, letter: 'な', group: 'ulb', isBuffer: false };
    corners['luf'] = { no: 11, letter: 'ね', group: 'ulf', isBuffer: false };
    corners['ldb'] = { no: 15, letter: 'に', group: 'ldb', isBuffer: false };
    corners['ldf'] = { no: 17, letter: 'ぬ', group: 'ldf', isBuffer: false };
    corners['ful'] = { no: 18, letter: 'け', group: 'ulf', isBuffer: false };
    corners['fur'] = { no: 20, letter: 'せ', group: 'urf', isBuffer: false };
    corners['fdl'] = { no: 24, letter: 'く', group: 'ldf', isBuffer: false };
    corners['fdr'] = { no: 26, letter: 'す', group: 'fdr', isBuffer: false };
    corners['ruf'] = { no: 27, letter: 'れ', group: 'urf', isBuffer: false };
    corners['rub'] = { no: 29, letter: 'ら', group: 'urb', isBuffer: false };
    corners['rdf'] = { no: 33, letter: 'る', group: 'fdr', isBuffer: false };
    corners['rdb'] = { no: 35, letter: 'り', group: 'rdb', isBuffer: false };
    corners['bur'] = { no: 36, letter: 'さ', group: 'urb', isBuffer: false };
    corners['bul'] = { no: 38, letter: 'か', group: 'ulb', isBuffer: false };
    corners['bdr'] = { no: 42, letter: 'し', group: 'rdb', isBuffer: false };
    corners['bdl'] = { no: 44, letter: 'き', group: 'ldb', isBuffer: false };
    corners['dlf'] = { no: 45, letter: 'う', group: 'ldf', isBuffer: false };
    corners['drf'] = { no: 47, letter: 'つ', group: 'fdr', isBuffer: false };
    corners['dlb'] = { no: 51, letter: 'い', group: 'ldb', isBuffer: false };
    corners['drb'] = { no: 53, letter: 'ち', group: 'rdb', isBuffer: false };

    const colors: Object = {};
    colors['u'] = CubeColor.white;
    colors['l'] = CubeColor.orange;
    colors['f'] = CubeColor.green;
    colors['r'] = CubeColor.red;
    colors['b'] = CubeColor.blue;
    colors['d'] = CubeColor.yellow;

    return {
      edges: edges,
      corners: corners,
      colors: colors,
    };
  }

  get saveData(): Object {
    return {
      edges: this.edges.saveData,
      corners: this.corners.saveData,
      colors: this.colors.saveData,
    }
  }
}
