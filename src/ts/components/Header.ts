import Vue, { ComponentOptions } from 'vue'

import * as octicons from 'octicons'

interface Header extends Vue {
}

export default {
  data: function () {
    return {};
  },

  template: `
    <div id="header">
      <a class="icon" href="https://twitter.com/cubokta" target="_blank" title="twitter">
        <img class="twitter" src="https://raw.githubusercontent.com/cuboktahedron/resources/master/imgs/twitter-icon.png">
      </a><a class="icon" href="https://github.com/cuboktahedron/BLDat" target="_blank"
        title="github" v-html="markGithub" />
    </div>`,

    computed: {
      markGithub() {
        const icon = octicons['mark-github'];
        return icon.toSVG({
          'width': 32,
        });
      }
    }
} as ComponentOptions<Header>