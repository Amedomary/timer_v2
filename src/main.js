// import firebase from 'firebase';
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
  data: {
  },
  mounted() {
    console.clear();
  },
}).$mount('#app');
