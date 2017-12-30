import Vue, { ComponentOptions } from 'vue'

import ColorSettings from '../models/ColorSettings'
import CubeColor from '../models/CubeColor'
import Analyzer from '../models/Analyzer'
import AnalyzerResult from '../models/AnalyzerResult'
import Settings from '../models/Settings'

export interface AnalyzeArea extends Vue {
  settings: Settings,
  analyzerResult: AnalyzerResult;
}

export default {
  props: {
    settings: {
      type: Settings,
      required: true,
    }
  },

  data: function () {
    return {
      analyzerResult: null,
    }
  },

  template: `
    <div>
      <Scramble @analyze="onAnalyze"/>
      <AnalyzerResultArea :analyzerResult="analyzerResult" />
    </div>`,

  methods: {
    onAnalyze(scramble) {
      const analyzer = new Analyzer(this.settings);
      this.analyzerResult = analyzer.analyze(scramble);
    }
  }
} as ComponentOptions<AnalyzeArea>
