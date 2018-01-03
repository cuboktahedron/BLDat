import Vue, { ComponentOptions } from 'vue'

interface Header extends Vue {
}

export default {
  data: function () {
    return {};
  },

  template: `
    <div id="header"></div>`,

} as ComponentOptions<Header>