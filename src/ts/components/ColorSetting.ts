import Vue, { ComponentOptions } from 'vue'

import CubeColor from '../models/CubeColor'

export interface ColorSetting extends Vue {
  color: CubeColor,
  letter: string,
}

export default {
  props: {
    letter: {
      type: String,
      required: true,
    },

    color: {
      type: String,
      required: true,
    },
  },

  data: function () {
    return {
    }
  },

  template: `
    <div class="color"
      :class="color"
      @click="onClick">{{upperLetter}}</div>`,

  computed: {
    upperLetter() {
      return this.letter.toUpperCase();
    }
  },

  methods: {
    onClick (e) {
      this.$emit('clickColor', this.letter);
    }
  }
} as ComponentOptions<ColorSetting>
