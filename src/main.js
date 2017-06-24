import Vue from 'vue';
import VueResource from 'vue-resource';

import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons';

import App from './components/app/App.vue';
import router from './router';
import store from './store';

import Auth from './components/common/auth';


Vue.component('icon', Icon);
Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  const token = window.localStorage.getItem('token');

  if (token) {
    request.headers.set('x-auth', token);
    if (request.headers.map.spinner) {
      store.dispatch('setLoading', true);
    }
  }

  next((response) => {
    if (request.url === response.url && request.headers.map.spinner) {
      store.dispatch('setLoading', false);
    }
    if (response.status === 401) {
      Auth.logout(router);
    }
  });
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
