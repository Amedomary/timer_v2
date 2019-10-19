/* eslint-disable prefer-destructuring */
<template lang="pug">

mixin contentImage(heading, href)
    .wrapper&attributes(attributes)
        h2.heading= heading
        Button(:href=href, text='Подробнее')

section.banner(v-if="isLoading")
    Loader

section.banner(v-else, :class="bannerClass")
    .image.image--1(@mouseenter="activateImg('1')" @mouseleave="activateImg('')" :style="{ backgroundImage: 'url('+page_1.imageSrcBackground+')'}")
        +contentImage('{{page_1.heading}}', 'page_1.buttonHref').left
    .image.image--2(@mouseenter="activateImg('2')" @mouseleave="activateImg('')" :style="{ backgroundImage: 'url('+page_2.imageSrcBackground+')'}")
        +contentImage('{{page_2.heading}}', 'page_2.buttonHref').center
    .image.image--3(@mouseenter="activateImg('3')" @mouseleave="activateImg('')" :style="{ backgroundImage: 'url('+page_3.imageSrcBackground+')'}")
        +contentImage('{{page_3.heading}}', 'page_3.buttonHref').right

</template>

<script>
import Button from '@/components/Button.vue';
import Loader from '@/components/Loader.vue';

export default {
  name: 'Baner',
  components: {
    Button,
    Loader,
  },

  data() {
    return {
      bannerClass: '',
      db: this.$root.database,
      page_1: {},
      page_2: {},
      page_3: {},
      isLoading: true,
    };
  },

  methods: {
    activateImg(param) {
      this.bannerClass = `active-${param}`;
    },
  },

  mounted() {
    console.log(this.db, 2);
    // Получаем данные
    this.db.ref('pages').once('value')
      .then((e) => {
        this.page_1 = e.val()[0];
        this.page_2 = e.val()[106092];
        this.page_3 = e.val()[358169];
        this.isLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "./../assets/variables.scss";
.banner {
  position: relative;
  height: 600px;
}

.image {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 1s;
  background-position: center;
  background-size: cover;

  &--1 {
    z-index: 12;

    clip-path: polygon(0 0, 80% 0, 60% 100%, 0 100%);
  }

  &--2 {
    z-index: 8;

    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
  }

  &--3 {
    z-index: 4;
  }
}

.banner.active {
  &-1 {
    .image--1 {
      clip-path: polygon(0 0, 90% 0, 70% 100%, 0 100%);
    }
    .image--2 {
      clip-path: polygon(0 0, 105% 0, 85% 100%, 0 100%);
    }
  }
  &-2 {
    .image--1 {
      clip-path: polygon(0% 0%, 10% 0%, -10% 100%, 0% 100%);
    }
    .image--2 {
      clip-path: polygon(0% 0%, 110% 0%, 90% 100%, 0% 100%);
    }
  }
  &-3 {
    .image--1 {
      clip-path: polygon(0% 0%, 10% 0%, -10% 100%, 0% 100%);
    }
    .image--2 {
      clip-path: polygon(0% 0%, 25% 0%, 5% 100%, 0% 100%);
    }
  }
}

.wrapper {
  position: absolute;
  bottom: 128px;
  left: 256px;
  display: flex;
  align-items: flex-start;
  flex-flow: column nowrap;

  &.center {
    right: 256px;
    align-items: center;
    text-align: center;
  }

  &.right {
    left: auto;
    right: 312px;
    align-items: flex-end;
    text-align: right;
  }
}

.heading {
  font-family: $font-rubik;
  font-weight: 700;
  font-size: 2rem;
  text-shadow: 2px 2px 6px black;
}
</style>
