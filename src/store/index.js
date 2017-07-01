import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: {
    isAuthenticated: '',
    data: {
      firstName: '',
      lastName: '',
    },
  },
  currentState: '',
  isLoading: false,
  isOpenMenu: true,
};

const getters = {
  user: state => state.user,
  currentState: state => state.currentState,
  isLoading: state => state.isLoading,
  isOpenMenu: state => state.isOpenMenu,
};

const mutations = {
  setUser(state, data) {
    state.user.data = data;
  },
  setCurrentState(state, currentState) {
    state.currentState = currentState;
  },
  signIn(state) {
    state.user.isAuthenticated = true;
  },
  setLoading(state, flag) {
    state.isLoading = flag;
  },
  setMenuState(state, flag) {
    state.isOpenMenu = flag;
  }
};

const actions = {
  setUser({ commit }, payload) {
    commit('signIn');
    commit('setUser', payload);
  },
  setLoading({ commit }, payload) {
    commit('setLoading', payload);
  },
  setMenuState({ commit }, payload) {
    commit('setMenuState', payload);
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
