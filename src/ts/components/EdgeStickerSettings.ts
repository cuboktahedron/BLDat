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
          <PartSetting class="h-c" :data="edges.ub" @setBuffer="onSetBuffer(edges.ub)" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.ul" @setBuffer="onSetBuffer(edges.ul)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.ur" @setBuffer="onSetBuffer(edges.ur)" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.uf" @setBuffer="onSetBuffer(edges.uf)" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-l" :class="colors.l">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.lu" @setBuffer="onSetBuffer(edges.lu)" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.lb" @setBuffer="onSetBuffer(edges.lb)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.lf" @setBuffer="onSetBuffer(edges.lf)" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.ld" @setBuffer="onSetBuffer(edges.ld)" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-f" :class="colors.f">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.fu" @setBuffer="onSetBuffer(edges.fu)" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.fl" @setBuffer="onSetBuffer(edges.fl)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.fr" @setBuffer="onSetBuffer(edges.fr)" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.fd" @setBuffer="onSetBuffer(edges.fd)" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-r" :class="colors.r">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.ru" @setBuffer="onSetBuffer(edges.ru)" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.rf" @setBuffer="onSetBuffer(edges.rf)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.rb" @setBuffer="onSetBuffer(edges.rb)" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.rd" @setBuffer="onSetBuffer(edges.rd)" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-b" :class="colors.b">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.bu" @setBuffer="onSetBuffer(edges.bu)" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.br" @setBuffer="onSetBuffer(edges.br)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.bl" @setBuffer="onSetBuffer(edges.bl)" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.bd" @setBuffer="onSetBuffer(edges.bd)" />
          <NullPartSetting class="h-r" />
        </div>
      </div>

      <div class="face face-d" :class="colors.d">
        <div class="v-t">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.df" @setBuffer="onSetBuffer(edges.df)" />
          <NullPartSetting class="h-r" />
        </div>
        <div class="v-m">
          <PartSetting class="h-l" :data="edges.dl" @setBuffer="onSetBuffer(edges.dl)" />
          <NullPartSetting class="h-c" />
          <PartSetting class="h-r" :data="edges.dr" @setBuffer="onSetBuffer(edges.dr)" />
        </div>
        <div class="v-b">
          <NullPartSetting class="h-l" />
          <PartSetting class="h-c" :data="edges.db" @setBuffer="onSetBuffer(edges.db)" />
          <NullPartSetting class="h-r" />
        </div>
      </div>
    </div>`,

  methods: {
    onSetBuffer(parts) {
      this.edges.setBuffer(parts);
    }
  }
} as ComponentOptions<EdgeStickerSettings>
