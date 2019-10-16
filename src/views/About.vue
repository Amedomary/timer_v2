<template lang="pug">
  div(id="nav")
    router-link(to="/") Home |
    router-link(to="/about") About

    .landing#landing-app(:class='vueAppClass', v-bind:style="styleApp", v-cloak)
      img.landing__background(src='', alt='', title='', :class='vueBackClass', :src="imageSrcBackground")

      grid

</template>

<script>
// @ is an alias to /src
import Grid from "@/components/Grid.vue";

export default {
  name: "home",
  components: {
    Grid
  }
};
</script>