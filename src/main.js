import Vue from 'vue';
import VueResource from 'vue-resource';

import App from './components/app/App.vue';
import router from './router';
import store from './store';

import Auth from './components/common/auth';

Vue.use(VueResource);

Vue.http.interceptors.push((request, next) => {
  const token = window.localStorage.getItem('token');
  if (token) {
    request.headers.set('x-auth', token);
  }
  next((response) => {
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
