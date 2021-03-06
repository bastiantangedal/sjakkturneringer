/* eslint-disable */
import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api'
import App from './App.vue';
import router from './router';

import 'bulma/css/bulma.css';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
