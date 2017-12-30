import EdgeSettings from '../models/EdgeSettings'
import CornerSettings from '../models/CornerSettings'
import ColorSettings from '../models/ColorSettings'

export default class Settings {
  edges: EdgeSettings = new EdgeSettings;
  corners: CornerSettings = new CornerSettings;
  colors: ColorSettings = new ColorSettings;
}
