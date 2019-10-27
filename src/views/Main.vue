<template lang="pug">
.page
    HeaderBar

    Baner

    h1.heading CountDowns

    .conainer
        .list
            .item(
              v-for="({ heading, imageSrcBackground }, value ) in $store.state.fireDB"
            )
                img.bg(:src="imageSrcBackground")
                router-link.content(:to="'/countdown/' + value")
                  i.hover
                  span.head {{ heading }}

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
    width: 1020px;
    margin: auto;
}

.item {
    position: relative;
    display: inline-block;
    width: 400px;
    height: 200px;
    margin: 10px 0;
    background-image: linear-gradient(120deg, #000000 0%, #58183f 50%, #de186f 100%);
    clip-path: polygon(115px 0, 100% 0, 285px 100%, 0 100%);
    shape-outside: polygon(115px 0, 100% 0, 285px 100%, 0 100%);

    &:nth-child(3n + 2) {
        margin-right: -90px;
        margin-left: -90px;
    }
}

.bg {
    position: absolute;
    top: -2px;
    left: -2px;
    width: 101%;
    height: 101%;
    object-fit: cover;
}

.content {
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover {
    & .hover {
      clip-path: polygon(0 0, 401px 0, 286px 100%, 0 100%);
    }
  }
}

.hover {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: .8s;
    clip-path: polygon(0 0, 155px 0, 40px 100%, 0 100%);
    background-image: linear-gradient(120deg, #00000000 0, #000000 115px, #00000000 100%);
}

.head {
  font-size: 1.1rem;
  position: absolute;
  left: 47px;
  bottom: 5px;
  transition: color .3s;
  transform-origin: left bottom;
  transform: rotate(-60deg);
}

</style>
115
