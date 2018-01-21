import Vue, { ComponentOptions } from 'vue'

import Settings from '../models/Settings'

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
        console.log(settings);
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
          <icon name="fold" width="24" v-if="showsSettings"></icon>
          <icon name="unfold" width="24" v-if="!showsSettings"></icon>
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
    }
  }
} as ComponentOptions<MainApp>
