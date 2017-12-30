import Vue, { ComponentOptions } from 'vue'

import PartData from '../models/PartData'

export interface PartSetting extends Vue {
  data: PartData,
}

export default {
  props: {
    data: {
      type: PartData,
      required: true,
    }
  },

  data: function () {
    return {
    }
  },

  template: `
    <div class="part" :class="{ buffer : data.isBuffer }">
      <input type="text"
        maxlength="1"
        placeholder="X"
        v-model="data.letter"
        @focus="onFocus"
      >
    </div>`,

  methods: {
    onFocus: function(e) {
      e.target.select();
    }
  }
} as ComponentOptions<PartSetting>
