import Vue, { ComponentOptions } from 'vue'

import ColorSettings from '../models/ColorSettings'
import CubeColor from '../models/CubeColor'

export interface FaceColorSettings extends Vue {
  colors: ColorSettings,
}

export default {
  props: {
    colors: {
      type: ColorSettings,
      required: true,
    },
  },

  data: function () {
    return {
    }
  },

  template: `
    <div id="colors">
      <ColorSetting :color="colors.u" :letter="'u'" @clickColor="onClickColor" />
      <ColorSetting :color="colors.l" :letter="'l'" @clickColor="onClickColor" />
      <ColorSetting :color="colors.f" :letter="'f'" @clickColor="onClickColor" />
      <ColorSetting :color="colors.r" :letter="'r'" @clickColor="onClickColor" />
      <ColorSetting :color="colors.b" :letter="'b'" @clickColor="onClickColor" />
      <ColorSetting :color="colors.d" :letter="'d'" @clickColor="onClickColor" />
    </div>`,

  methods: {
    onClickColor(letter) {
      switch (this.colors[letter]) {
        case CubeColor.white:
          this.colors[letter] = CubeColor.orange;
          break;
        case CubeColor.orange:
          this.colors[letter] = CubeColor.green;
          break;
        case CubeColor.green:
          this.colors[letter] = CubeColor.red;
          break;
        case CubeColor.red:
          this.colors[letter] = CubeColor.blue;
          break;
        case CubeColor.blue:
          this.colors[letter] = CubeColor.yellow;
          break;
        case CubeColor.yellow:
          this.colors[letter] = CubeColor.white;
          break;
      }
    }
  }
} as ComponentOptions<FaceColorSettings>
