import Vue, { ComponentOptions } from 'vue'

export interface NullPartSetting extends Vue {
}

export default {
  data: function () {
    return {}
  },

  template: `<div class="part" />`,

} as ComponentOptions<NullPartSetting>
