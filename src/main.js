import Vue from 'vue';
import VueResource from 'vue-resource';

import router from './router';

Vue.use(VueResource);

new Vue({
  router,
}).$mount('#app');
