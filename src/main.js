import firebase from 'firebase';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'normalize.css';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

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

// Получаем данные
database.ref('pages').once('value')
  .then((e) => {
    store.commit('newData', e.val());
    console.log(store.state);
  })
  .catch((error) => {
    console.log(error);
  });
