declare function require(x: string): any;

var html = {
  index: require('./html/index.html')
};

var scss = {
  index: require('./scss/style.scss')
};

import Vue from 'vue'

import AnalyzeArea from './ts/components/AnalyzeArea'
import AnalyzerResultArea from './ts/components/AnalyzerResultArea'
import ColorSetting from './ts/components/ColorSetting'
import CornerStickerSettings from './ts/components/CornerStickerSettings'
import EdgeStickerSettings from './ts/components/EdgeStickerSettings'
import FaceColorSettings from './ts/components/FaceColorSettings'
import Footer from './ts/components/Footer'
import Header from './ts/components/Header'
import MainApp from './ts/components/MainApp'
import NullPartSetting from './ts/components/NullPartSetting'
import PartSetting from './ts/components/PartSetting'
import PartStatus from './ts/components/PartStatus'
import Scramble from './ts/components/Scramble'
import ScrambledState from './ts/components/ScrambledState'
import SettingsArea from './ts/components/SettingsArea'
import Settings from './ts/models/Settings'

Vue.component('AnalyzeArea', AnalyzeArea);
Vue.component('AnalyzerResultArea', AnalyzerResultArea);
Vue.component('ColorSetting', ColorSetting);
Vue.component('CornerStickerSettings', CornerStickerSettings);
Vue.component('EdgeStickerSettings', EdgeStickerSettings);
Vue.component('FaceColorSettings', FaceColorSettings);
Vue.component('Footer', Footer);
Vue.component('Header', Header);
Vue.component('MainApp', MainApp);
Vue.component('NullPartSetting', NullPartSetting);
Vue.component('PartSetting', PartSetting);
Vue.component('PartStatus', PartStatus);
Vue.component('Scramble', Scramble);
Vue.component('ScrambledState', ScrambledState);
Vue.component('SettingsArea', SettingsArea);

var app = new Vue({
  el: '#app',
  template: `<MainApp />`
});
