import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../components/login/Login.vue';
import App from '../App.vue';


Vue.use(VueRouter);

const routes = [
  { path: '/', component: App, name: 'dashboard' },
  { path: '/login', component: Login, name: 'login' },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
