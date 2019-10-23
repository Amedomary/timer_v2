<template lang="pug">
.page
    HeaderBar

    Baner

    h1.heading CountDowns

    .conainer
        .list
            .item(v-for="({ heading, imageSrcBackground }, value ) in $store.state.fireDB")
                img.bg(:src="imageSrcBackground")
                .content
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

.list {
    margin: auto;
    width: 1020px;
}

.item {
    position: relative;
    display: inline-block;
    width: 400px;
    height: 200px;
    margin: 10px 0;
    background: #cccccc;

    clip-path: polygon(115px 0, 100% 0, 285px 100%, 0 100%);
    shape-outside: polygon(115px 0, 100% 0, 285px 100%, 0 100%);

    &:nth-child(3n + 2) {
        margin-right: -90px;
        margin-left: -90px;
    }
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.content {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
