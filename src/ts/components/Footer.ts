import Vue, { ComponentOptions } from 'vue'

interface Footer extends Vue {
}

export default {
  data: function () {
    return {};
  },

  template: `
    <div id="footer">BLD(M2/OP) Analyzer v0.1</div>`,

  } as ComponentOptions<Footer>