import Vue, { ComponentOptions } from 'vue'

import CubeUtils from '../models/CubeUtils'

export interface Scramble extends Vue {
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
      const r = /^((([UDRLFB]w?'*)|([EMSxyz]'*))([0-9]*))*$/i;
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
  },

  watch: {
    scramble() {
      let scramble: string = this.scramble.replace(/[ \t]/g, '');
      const paths = [];
      for (let i = 0, len = scramble.length; i < len; i++) {
        const s = scramble[i];
        if (s >= 'a' && s <= 'v') {
          paths.push(s.toUpperCase());
        } else if (s >= 'W' && s <= 'Z') {
          paths.push(s.toLowerCase());
        } else {
          paths.push(s);
        }
      }

      this.scramble = paths.join('');
    },
  }
} as ComponentOptions<Scramble>
