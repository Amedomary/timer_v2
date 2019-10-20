import Vue from 'vue';
import Router from 'vue-router';
import Main from './views/Main.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/countdown/:id',
      name: 'Countdown',
      // route level code-splitting
      // this generates a separate chunk (Countdown.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "Countdown" */ './views/Countdown.vue'),
    },
  ],
});
