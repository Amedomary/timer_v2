<template lang="pug">
.page
    HeaderBar

    Baner

    h1.heading CountDowns

    .conainer
        ul
            li(v-for="({ heading, imageSrcBackground }, value ) in $store.state.fireDB")
                span {{ heading }}
                span {{ value }}

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
  mounted() {
    this.$store.dispatch('getDataFromServer', {
      ref: 'pages',
      mutations: 'newData',
    }); // получаем данные для таймера
  },
};
</script>

<style lang="scss" scoped>
.heading {
    margin: 3rem 0;
    font-weight: 100;
    text-align: center;
}

li {
    display: inline-flex;
    justify-content: space-between;
    width: 33%;
    padding: 2rem 4rem;
}

</style>
