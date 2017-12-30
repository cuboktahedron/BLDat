import Vue, { ComponentOptions } from 'vue'

import AnalyzerResult from '../models/AnalyzerResult'

export interface AnalyzerResultArea extends Vue {
  analyzerResult: AnalyzerResult;
}

export default {
  props: {
    analyzerResult: {
      type: AnalyzerResult,
      required: false,
    }
  },

  data: function () {
    return {
    }
  },

  template: `
    <div id="result-area" v-if="analyzerResult != null">
      <h1>RESULT</h1>
      <div class="result-title">EDGE</div>
      <div id="edge-result">
        <p v-for="(edge, index) in analyzerResult.edges" :key="index">{{edge}}</p>
      </div>
      <div class="result-title">CORNER</div>
      <div id="corner-result">
        <p v-for="(corner, index) in analyzerResult.corners" :key="index">{{corner}}</p>
      </div>
      <div class="result-title">PARITY</div>
      <div id="parity-result">
        <p>{{parity}}</p>
      </div>

      <ScrambledState :states="analyzerResult.states" />
      <div class="result-title">SCRAMBLE</div>
      <div id="scramble-result">
        <p>{{analyzerResult.scramble}}</p>
      </div>
    </div>`,

  computed: {
    parity() {
      return this.analyzerResult.hasParity ? 'Yes' : 'no';
    }
  },

  methods: {
  }
} as ComponentOptions<AnalyzerResultArea>
