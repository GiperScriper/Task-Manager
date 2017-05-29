import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

import Login from '../components/login/Login.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import Project from '../components/project/Project.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  {
    path: '/dashboard',
    component: Dashboard,
    name: 'dashboard',
    meta: { requiresAuth: true },
  },
  {
    path: '/projects',
    component: Project,
    name: 'projects',
    meta: { requiresAuth: true },
  },
  {
    path: '*',
    redirect: '/dashboard',
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  store.commit('setCurrentState', to.name);
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
