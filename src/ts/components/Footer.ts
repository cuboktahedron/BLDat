import Vue, { ComponentOptions } from 'vue'

interface Footer extends Vue {
}

export default {
  data: function () {
    return {};
  },

  template: `
    <div id="footer">BLDat v0.1</div>`,

  } as ComponentOptions<Footer>