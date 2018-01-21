import Vue, { ComponentOptions } from 'vue'

interface Header extends Vue {
}

export default {
  data: function () {
    return {};
  },

  template: `
    <div id="header">
      <a href="https://twitter.com/cubokta" target="_blank">
        <img class="twitter" src="http://localhost:1313/img/twitter-icon.png">
      </a>
    </div>`,

} as ComponentOptions<Header>