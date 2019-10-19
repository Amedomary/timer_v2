import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fireDB: null,
    app: 'new', // new, edit, midified
  },
  mutations: {
    newData(state, data) {
      state.fireDB = data;
    },
  },
  actions: {

  },
  // вычисления из стейта
  getters: {
    // getName: state => state.name,
  },
});
