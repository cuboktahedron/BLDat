import Vue, { ComponentOptions } from 'vue'

import CornerSettings from '../models/CornerSettings'
import ColorSettings from '../models/ColorSettings'

export interface CornerStickerSettings extends Vue {
  corners: CornerSettings,
  colors: ColorSettings,
}

export default {
  props: {
    corners: {
      type: CornerSettings,    
      required: true,
    },

    colors: {
      type: ColorSettings,
      required: true,
    }
  },

  data: function () {
    return {
    }
  },

  template: `
    <div id="corner-sticker">
      <div class="face face-u" :class="colors.u">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.ulb" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.urb" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.ulf" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.urf" />
        </div>
      </div>

      <div class="face face-l" :class="colors.l">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.lub" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.luf" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.ldb" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.ldf" />
        </div>
      </div>

      <div class="face face-f" :class="colors.f">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.ful" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.fur" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.fdl" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.fdr" />
        </div>
      </div>
  
      <div class="face face-r" :class="colors.r">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.ruf" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.rub" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.rdf" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.rdb" />
        </div>
      </div>

      <div class="face face-b" :class="colors.b">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.bur" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.bul" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.bdr" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.bdl" />
        </div>
      </div>
  
      <div class="face face-d" :class="colors.d">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.dlf" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.drf" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.dlb" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.drb" />
        </div>
      </div>
    </div>`,

  methods: {
  }
} as ComponentOptions<CornerStickerSettings>
