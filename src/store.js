import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: null,
    name: 'max',
  },
  mutations: {
    newData(state, data) {
      state.data = data;
    },
  },
  actions: {

  },
  // вычисления из стейта
  getters: {
    getName: state => state.name,
  },
});
