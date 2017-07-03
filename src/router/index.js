import Vue from 'vue';
import VueRouter from 'vue-router';

import store from '../store';

import Login from '../components/login/Login.vue';
import Dashboard from '../components/dashboard/Dashboard.vue';
import Project from '../components/project/Project.vue';
import ProjectDetail from '../components/projectDetail/ProjectDetail.vue';
import Settings from '../components/settings/Settings.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects',
    name: 'projects',
    component: Project,
    meta: { requiresAuth: true },
  },
  {
    path: '/projects/:id',
    name: 'projectDetail',
    component: ProjectDetail,
    meta: { requiresAuth: true },
  },
  {
    path: '/settings',
    name: 'settings',
    component: Settings,
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
