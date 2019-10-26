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
    fireDB: {},
    topList: null,
    countdown: {
      appState: 'loading', // new, editing, midified, loading, error
      unsavedChanged: false, // изменения в редактировании
      alertIsOpen: false, // открыт алерт
      wallpaperIsOpen: false,
    },
    countdownData: {},
    firebaseDB: database,
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
        case 'new': // загружено новое
          state.countdown.appState = 'new';
          // TODO: тут мб сбрасывать данные на пропсы
          break;
        case 'edit': // состояние редактора
          state.countdown.appState = 'editing';
          break;
        case 'mod': // исть изменения для публикации
          state.countdown.appState = 'modified';
          // тут последние сохранённые скидывать
          break;
        case 'loading': // Загрузка
          state.countdown.appState = 'loading';
          break;
        case 'fail': // Ошибка получения данных
          state.countdown.appState = 'fail';
          break;
        default:
          break;
      }
    },

    switchWallpaperPick(state) {
      state.countdown.wallpaperIsOpen = !state.countdown.wallpaperIsOpen;
    },

    addCountdownData(state, data) {
      state.countdownData = data;
      this.commit('changeAppState', 'new');
    },
  },
  actions: {
    // получаем дааные для таймера
    getDataForId({ commit, state }, id) {
      // если значение уже есть
      if (state.countdownData.id === id) {
        return;
      }

      // если значение есть в общей базе
      if (state.fireDB[id]) {
        commit('addCountdownData', state.fireDB[id]);
        return;
      }

      // Запрашиваем если ничего нет
      database.ref(`pages/${id}`).once('value')
        .then((e) => {
          commit('addCountdownData', e.val());
        })
        .catch((error) => {
          console.error(error);
          this.commit('changeAppState', 'fail');
        });
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
