import Vue, { ComponentOptions } from 'vue'

import Settings from '../models/Settings'

export interface MainApp extends Vue {
  settings: Settings,
}

export default {
  data: function () {
    return {
      settings: null,
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
    } catch (ex) {
      settings = null;
    }

    this.settings = new Settings(settings);
  },

  mounted() {
    setInterval(this.autoSaveSettings, 5000);
  },

  template: `
    <div>
      <SettingsArea :settings="settings" />
      <hr class="separater">
      <AnalyzeArea :settings="settings" />
    </div>`,

  methods: {
    autoSaveSettings() {
      window.localStorage.setItem('settings', JSON.stringify(this.settings));
    }
  }
} as ComponentOptions<MainApp>
