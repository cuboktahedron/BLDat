import Vue, { ComponentOptions } from 'vue'

import EdgeSettings from '../models/EdgeSettings'
import ColorSettings from '../models/ColorSettings'

export interface EdgeStickerSettings extends Vue {
  edges: EdgeSettings,
  colors: ColorSettings,
}

export default {
  props: {
    edges: {
      type: EdgeSettings,    
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
    <div id="edge-sticker">
      <div class="face face-u" :class="colors.u">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.ub" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.ul" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.ur" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.uf" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-l" :class="colors.l">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.lu" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.lb" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.lf" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.ld" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-f" :class="colors.f">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.fu" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.fl" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.fr" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.fd" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-r" :class="colors.r">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.ru" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.rf" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.rb" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.rd" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-b" :class="colors.b">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.bu" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.br" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.bl" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.bd" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-d" :class="colors.d">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.df" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.dl" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.dr" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.db" />
          <NullPartSetting class="h-r" />
        </div>
      </div>
    </div>`,

  methods: {
  }
} as ComponentOptions<EdgeStickerSettings>
