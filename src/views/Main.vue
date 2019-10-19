<template lang="pug">
.page
    HeaderBar

    Baner

    ul
        li(v-for="({ heading, imageSrcBackground }, value ) in $store.state.data")
            | {{ heading }} : {{ value }}

</template>

<script>
import HeaderBar from '@/components/HeaderBar.vue';
import Baner from '@/components/Baner.vue';

export default {
  name: 'Main',
  components: {
    HeaderBar,
    Baner,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>
