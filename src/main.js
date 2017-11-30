import 'onsenui';
import Vue from 'vue';
import Vuex from 'vuex';
import VueCookie from 'cookie-in-vue';
import VueOnsen from 'vue-onsenui';
import storeLike from './store.js';

// Onsen UI Styling and Icons
require('onsenui/css-components-src/src/onsen-css-components.css');
require('onsenui/css/onsenui.css');

import App from './App.vue';

Vue.use(VueOnsen);
Vue.use(Vuex);
Vue.use(VueCookie);

var eventHub = new Vue();
window.Event = eventHub;

new Vue({
  el: '#app',
  store: new Vuex.Store(storeLike),
  template:'<app></app>',
  components: { App }
});

