import Vue from 'vue';
import Vuex from 'vuex';
import firebase from 'firebase';

Vue.use(Vuex);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAPq6A0sDX_unr33Qy8aqrAbvo2ErIRHDs',
  authDomain: 'timer-ba52d.firebaseapp.com',
  databaseURL: 'https://timer-ba52d.firebaseio.com',
  projectId: 'timer-ba52d',
  storageBucket: 'timer-ba52d.appspot.com',
  messagingSenderId: '448597589119',
  appId: '1:448597589119:web:1bb480c0904707ea',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

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
    countdownData: {
      // id: json
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
          // тут последние сохранённые скидывать
          break;
        default:
          break;
      }
    },

    addCountdownData(state, id, data) {
      state.countdown[id] = data;
    },


  },
  actions: {
    getDataForId({ commit, state }, id) {
      // если значение уже есть
      if (state.countdownData[id]) {
        return;
      }
      // если значение есть в базе
      if (state.fireDB[id]) {
        commit('addCountdownData', id, state.fireDB[id]);
      }
      console.log(id);
      // TODO
    },

    getDataFromServer({ commit }, param) {
      // Получаем данные
      database.ref(param.ref).once('value')
        .then((e) => {
          commit(String(param.mutations), e.val());
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
  // вычисления из стейта
  getters: {
    // getName: state => state.name,
  },
});
