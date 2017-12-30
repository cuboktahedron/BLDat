import Vue, { ComponentOptions } from 'vue'

import CubeUtils from '../models/CubeUtils'

export interface Scrampble extends Vue {
  scramble: string;
  validate: boolean;
}

export default {
  data: function () {
    return {
      scramble: '',
    }
  },

  template: `
    <div id="scramble-area">
      <h1>SCRAMBLE</h1>
      <input id="scramble" type="text"
        v-model="scramble"
        @keydown="onKeyDown">
      <p class="has-error" v-show="!validate">This is not supported scramble.</p>
    </div>`,

  computed: {
    validate: function (): boolean {
      const r = /^((([UDRLFB]w?'*)|([EMSxyz]'*))([0-9]*))*$/;
      return r.test(this.scramble);
    },
  },

  methods: {
    onKeyDown(e) {
      if (e.which !== 13) { // not Enter
        return;
      }

      if (!this.validate) {
        return;
      }

      this.$emit('analyze', this.scramble);
    },
  }
} as ComponentOptions<Scrampble>