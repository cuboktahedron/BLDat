import Vue, { ComponentOptions } from 'vue'

import Settings from '../models/Settings'
import * as octicons from 'octicons'

export interface MainApp extends Vue {
  settings: Settings,
  showsSettings: boolean,
}

export default {
  data: function () {
    return {
      settings: null,
      showsSettings: true,
    }
  },

  beforeMount() {
    let settings: Object;
    try {
      const settingsJson = window.localStorage.getItem('settings');
      if (settingsJson == null) {
        settings = null;
      } else {
        settings = JSON.parse(settingsJson);
      }

      this.settings = new Settings(settings);
    } catch (ex) {
      this.settings = new Settings(null);
    }
  },

  template: `
    <div id="container">
      <Header />
      <div id="contents-area">
        <SettingsArea :settings="settings" v-show="showsSettings"
          @save="onSave" />
        <div class="folder" @click="toggleSettings">
          <div class="icon" v-if="showsSettings" v-html="markUnfold" />
          <div class="icon" v-if="!showsSettings" v-html="markFold" />
        </div>
        <AnalyzeArea :settings="settings" />
      </div>
      <Footer />
    </div>`,

  methods: {
    toggleSettings() {
      this.showsSettings = !this.showsSettings;
    },

    onSave() {
      window.localStorage.setItem('settings', JSON.stringify(this.settings.saveData));
    },
  },

  computed: {
    markFold() {
      const icon = octicons['chevron-down'];
      return icon.toSVG({
        'height': 24,
      });
    },

    markUnfold() {
      const icon = octicons['chevron-up'];
      return icon.toSVG({
        'height': 24,
      });
    }
  }
} as ComponentOptions<MainApp>
