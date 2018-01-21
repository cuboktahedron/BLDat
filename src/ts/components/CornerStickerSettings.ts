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
          <PartSetting class="h-l" :data="corners.ulb" @setBuffer="onSetBuffer(corners.ulb)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.urb" @setBuffer="onSetBuffer(corners.urb)" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.ulf" @setBuffer="onSetBuffer(corners.ulf)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.urf" @setBuffer="onSetBuffer(corners.urf)" />
        </div>
      </div>

      <div class="face face-l" :class="colors.l">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.lub" @setBuffer="onSetBuffer(corners.lub)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.luf" @setBuffer="onSetBuffer(corners.luf)" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.ldb" @setBuffer="onSetBuffer(corners.ldb)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.ldf" @setBuffer="onSetBuffer(corners.ldf)" />
        </div>
      </div>

      <div class="face face-f" :class="colors.f">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.ful" @setBuffer="onSetBuffer(corners.ful)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.fur" @setBuffer="onSetBuffer(corners.fur)" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.fdl" @setBuffer="onSetBuffer(corners.fdl)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.fdr" @setBuffer="onSetBuffer(corners.fdr)" />
        </div>
      </div>
  
      <div class="face face-r" :class="colors.r">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.ruf" @setBuffer="onSetBuffer(corners.ruf)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.rub" @setBuffer="onSetBuffer(corners.rub)" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.rdf" @setBuffer="onSetBuffer(corners.rdf)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.rdb" @setBuffer="onSetBuffer(corners.rdb)" />
        </div>
      </div>

      <div class="face face-b" :class="colors.b">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.bur" @setBuffer="onSetBuffer(corners.bur)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.bul" @setBuffer="onSetBuffer(corners.bul)" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.bdr" @setBuffer="onSetBuffer(corners.bdr)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.bdl" @setBuffer="onSetBuffer(corners.bdl)" />
        </div>
      </div>
  
      <div class="face face-d" :class="colors.d">
        <div class="v-t">
          <PartSetting class="h-l" :data="corners.dlf" @setBuffer="onSetBuffer(corners.dlf)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.drf" @setBuffer="onSetBuffer(corners.drf)" />
        </div>
        <div class="v-m">
          <NullPartSetting class="h-l" />
          <NullPartSetting class="h-c" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-b">
          <PartSetting class="h-l" :data="corners.dlb" @setBuffer="onSetBuffer(corners.dlb)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="corners.drb" @setBuffer="onSetBuffer(corners.drb)" />
        </div>
      </div>
    </div>`,

  methods: {
    onSetBuffer(parts) {
      this.corners.setBuffer(parts);
    }
  }
} as ComponentOptions<CornerStickerSettings>
