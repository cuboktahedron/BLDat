import Vue, { ComponentOptions } from 'vue'

import PartData from '../models/PartData'

export interface PartSetting extends Vue {
  data: PartData,
  timerId: number,

  setBuffer(),
  onLongTouch(),
}

export default {
  props: {
    data: {
      timerId: null,
      type: PartData,
      required: true,
    }
  },

  data: function () {
    return {
    }
  },

  template: `
    <div class="part" :class="{ buffer : data.isBuffer }"
      @dblclick="onDblClick"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd">
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
    },

    onDblClick: function() {
      this.setBuffer();
    },

    onTouchStart: function() {
      this.timerId = window.setTimeout(this.onLongTouch, 500);
    },

    onTouchEnd: function() {
      clearTimeout(this.timerId);
    },

    onLongTouch: function() {
      this.setBuffer();
    },

    setBuffer: function() {
      this.$emit('setBuffer');
    }
  }
} as ComponentOptions<PartSetting>
