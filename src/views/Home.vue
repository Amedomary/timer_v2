<template lang="pug">
  div(id="nav")
    router-link(to="/") Home |
    router-link(to="/about") About

    img(alt="Vue logo" src="../assets/logo.png")
    HelloWorld(msg="Welcome to Your Vue.js App")
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
};
</script>
