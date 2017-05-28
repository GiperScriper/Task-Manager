import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
