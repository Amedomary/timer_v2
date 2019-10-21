import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    fireDB: null,
    topList: null,
    countdown: {
      appState: 'new', // new, editing, midified
      unsavedChanged: false, // изменения в редактировании
      alertIsOpen: false, // открыт алерт
      wallpaperIsOpen: false,
    },
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
        case 'new':
          state.countdown.appState = 'new';
          // TODO: тут мб сбрасывать данные на пропсы
          break;
        case 'edit':
          state.countdown.appState = 'editing';
          break;
        case 'mod':
          state.countdown.appState = 'modified';
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
