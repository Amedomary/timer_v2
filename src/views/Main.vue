<template lang="pug">
.page
    HeaderBar

    Baner

    h1(align="center") Другие таймеры

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
};
</script>

<style lang="scss" scoped>
li {
    width: 400px;
    display: flex;
    justify-content: space-between;
}
</style>
