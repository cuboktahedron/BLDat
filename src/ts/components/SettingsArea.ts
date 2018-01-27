import Vue, { ComponentOptions } from 'vue'

import Settings from '../models/Settings'
import EdgeSettings from '../models/EdgeSettings'
import CornerSettings from '../models/CornerSettings'
import ColorSettings from '../models/ColorSettings'

export interface SettingsArea extends Vue {
  settings: Settings,
}

export default {
  props: {
    settings: {
      type: Settings,
      required: true,
    }
  },

  data: function () {
    return {
    }
  },

  template: `
    <div id="setting-area">
      <a class="title">EDGE</a>
      <EdgeStickerSettings :edges="settings.edges" :colors="settings.colors" />
      <a class="title">CORNER</a>
      <CornerStickerSettings :corners="settings.corners" :colors="settings.colors" />
      <a class="title">COLOR</a>
      <FaceColorSettings :colors="settings.colors" />
      <div class="button-area">
        <a class="button" @click="onClickSave">Save</a>
      </div>
    </div>`,

  methods: {
    onClickSave() {
      this.$emit('save');
    }
  }
} as ComponentOptions<SettingsArea>
