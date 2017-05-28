import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
  user: {},
  currentState: '',
};

const getters = {
  user: state => state.user,
  currentState: state => state.currentState,
};

const mutations = {
  setUser(state, data) {
    state.user = data;
  },
  setCurrentState(state, currentState) {
    state.currentState = currentState;
  },
  setUserIsAuthenticated(state) {
    state.user.isAuthenticated = true;
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
});

export default store;
