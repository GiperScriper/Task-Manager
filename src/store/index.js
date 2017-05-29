import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: {
    isAuthenticated: '',
    data: '',
  },
  currentState: '',
};

const getters = {
  user: state => state.user,
  currentState: state => state.currentState,
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
};

const actions = {
  setUser({ commit }, payload) {
    commit('signIn');
    commit('setUser', payload);
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
