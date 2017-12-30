import Vue, { ComponentOptions } from 'vue'

import CornerSettings from '../models/CornerSettings'
import ColorSettings from '../models/ColorSettings'

export interface ScrambledState extends Vue {
}

export default {
  props: {
    states: {
      type: Array,
      required: true,
    },
  },

  data: function () {
    return {
    }
  },

  template: `
    <div id="scrambled-status-area">
      <div class="face face-u">
        <div class="v-t">
          <PartStatus class="h-l" :state="states[0]" />
          <PartStatus class="h-c" :state="states[1]"/>
          <PartStatus class="h-r" :state="states[2]"/>
        </div>
        <div class="v-m">
          <PartStatus class="h-l" :state="states[3]" />
          <PartStatus class="h-c" :state="states[4]"/>
          <PartStatus class="h-r" :state="states[5]"/>
        </div>
        <div class="v-b">
          <PartStatus class="h-l" :state="states[6]" />
          <PartStatus class="h-c" :state="states[7]"/>
          <PartStatus class="h-r" :state="states[8]"/>
        </div>
      </div>
      <div class="face face-l">
        <div class="v-t">
          <PartStatus class="h-l" :state="states[9]" />
          <PartStatus class="h-c" :state="states[10]"/>
          <PartStatus class="h-r" :state="states[11]"/>
        </div>
        <div class="v-m">
          <PartStatus class="h-l" :state="states[12]" />
          <PartStatus class="h-c" :state="states[13]"/>
          <PartStatus class="h-r" :state="states[14]"/>
        </div>
        <div class="v-b">
          <PartStatus class="h-l" :state="states[15]" />
          <PartStatus class="h-c" :state="states[16]"/>
          <PartStatus class="h-r" :state="states[17]"/>
        </div>
      </div>
      <div class="face face-f">
        <div class="v-t">
          <PartStatus class="h-l" :state="states[18]" />
          <PartStatus class="h-c" :state="states[19]"/>
          <PartStatus class="h-r" :state="states[20]"/>
        </div>
        <div class="v-m">
          <PartStatus class="h-l" :state="states[21]" />
          <PartStatus class="h-c" :state="states[22]"/>
          <PartStatus class="h-r" :state="states[23]"/>
        </div>
        <div class="v-b">
          <PartStatus class="h-l" :state="states[24]" />
          <PartStatus class="h-c" :state="states[25]"/>
          <PartStatus class="h-r" :state="states[26]"/>
        </div>
      </div>
      <div class="face face-r">
        <div class="v-t">
          <PartStatus class="h-l" :state="states[27]" />
          <PartStatus class="h-c" :state="states[28]"/>
          <PartStatus class="h-r" :state="states[29]"/>
        </div>
        <div class="v-m">
          <PartStatus class="h-l" :state="states[30]" />
          <PartStatus class="h-c" :state="states[31]"/>
          <PartStatus class="h-r" :state="states[32]"/>
        </div>
        <div class="v-b">
          <PartStatus class="h-l" :state="states[33]" />
          <PartStatus class="h-c" :state="states[34]"/>
          <PartStatus class="h-r" :state="states[35]"/>
        </div>
      </div>
      <div class="face face-b">
        <div class="v-t">
          <PartStatus class="h-l" :state="states[36]" />
          <PartStatus class="h-c" :state="states[37]"/>
          <PartStatus class="h-r" :state="states[38]"/>
        </div>
        <div class="v-m">
          <PartStatus class="h-l" :state="states[39]" />
          <PartStatus class="h-c" :state="states[40]"/>
          <PartStatus class="h-r" :state="states[41]"/>
        </div>
        <div class="v-b">
          <PartStatus class="h-l" :state="states[42]" />
          <PartStatus class="h-c" :state="states[43]"/>
          <PartStatus class="h-r" :state="states[44]"/>
        </div>
      </div>
      <div class="face face-d">
        <div class="v-t">
          <PartStatus class="h-l" :state="states[45]" />
          <PartStatus class="h-c" :state="states[46]"/>
          <PartStatus class="h-r" :state="states[47]"/>
        </div>
        <div class="v-m">
          <PartStatus class="h-l" :state="states[48]" />
          <PartStatus class="h-c" :state="states[49]"/>
          <PartStatus class="h-r" :state="states[50]"/>
        </div>
        <div class="v-b">
          <PartStatus class="h-l" :state="states[51]" />
          <PartStatus class="h-c" :state="states[52]"/>
          <PartStatus class="h-r" :state="states[53]"/>
        </div>
      </div>
    </div>`,

  methods: {
  }
} as ComponentOptions<ScrambledState>
