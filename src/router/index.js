import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login/Login.vue';
import App from '../App.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/login', component: Login, name: 'login' },
  { path: '/', component: App, name: 'dashboard', meta: { requiresAuth: true } },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const userToken = window.localStorage.getItem('token');
    if (userToken) {
      next();
    } else {
      next({ name: 'login' });
    }
  }
  next();
});

export default router;
