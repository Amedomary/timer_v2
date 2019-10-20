import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fireDB: null,
    topList: null,
    appState: ['new'], // new, edit, midified
  },
  mutations: {
    newData(state, data) {
      state.fireDB = data;
    },

    newTopList(state, data) {
      state.topList = data;
    },

    changeAppState(state, code) {
      switch (code) {
        case 0:
          state.appState = ['new'];
          break;
        case 1:
          state.appState = ['editing'];
          break;
        case 2:
          state.appState = ['editing', 'have-changed'];
          break;
        case 3:
          state.appState = ['modified'];
          break;
        case 4:
          state.appState = ['editing', 'modified'];
          break;
        case 5:
          state.appState = ['editing', 'modified', 'have-changed'];
          break;

        default:
          break;
      }
    },
  },
  actions: {

  },
  // вычисления из стейта
  getters: {
    // getName: state => state.name,
  },
});
