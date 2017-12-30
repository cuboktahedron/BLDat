import Vue, { ComponentOptions } from 'vue'

import PartState from '../models/PartState'

export interface PartStatus extends Vue {
}

export default {
  props: {
    state: {
      type: PartState,
      required: true,
    }
  },

  data: function () {
    return {
    }
  },

  template: `<div class="part" :class="state.color" />`,

  methods: {
  }
} as ComponentOptions<PartStatus>
