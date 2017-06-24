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
};

const getters = {
  user: state => state.user,
  currentState: state => state.currentState,
  isLoading: state => state.isLoading,
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
};

const actions = {
  setUser({ commit }, payload) {
    commit('signIn');
    commit('setUser', payload);
  },
  setLoading({ commit }, payload) {
    commit('setLoading', payload);
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
});

export default store;
