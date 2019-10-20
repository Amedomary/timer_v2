<template lang="pug">

section.banner(v-if="isLoading")
    Loader

section.banner(v-else, :class="bannerClass")
    .image.image--1(@mouseenter="activateImg('1')" @mouseleave="activateImg('')"
            :style="{ backgroundImage: `url('${page_1.imageSrcBackground}')`}"
        )
        .wrapper.left
            p.likes ❤ {{page_1.likes}}
            h2.heading {{page_1.heading}}
            Button(:href="page_1.buttonHref", text='Подробнее')

    .image.image--2(@mouseenter="activateImg('2')" @mouseleave="activateImg('')"
            :style="{ backgroundImage: `url('${page_2.imageSrcBackground}')`}"
        )
        .wrapper.center
            p.likes ❤ {{page_2.likes}}
            h2.heading {{page_2.heading}}
            Button(:href="page_2.buttonHref", text='Подробнее')

    .image.image--3(@mouseenter="activateImg('3')" @mouseleave="activateImg('')"
            :style="{ backgroundImage: `url('${page_3.imageSrcBackground}')`}"
        )
        .wrapper.right
            p.likes ❤ {{page_3.likes}}
            h2.heading {{page_3.heading}}
            Button(:href="page_3.buttonHref", text='Подробнее')

</template>

<script>
// import _ from 'lodash';
import Button from '@/components/Button.vue';
import Loader from '@/components/Loader.vue';
import imagesPaths from '@/createPathImages';

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

    createBaner() {
      [this.page_0, this.page_1, this.page_2, this.page_3] = this.$store.state.topList;
      this.page_1.imageSrcBackground = imagesPaths[this.page_1.imageSrcBackground];
      this.page_2.imageSrcBackground = imagesPaths[this.page_2.imageSrcBackground];
      this.page_3.imageSrcBackground = imagesPaths[this.page_3.imageSrcBackground];
      this.isLoading = false;
    },

    // sortData(data) {
    //   const sortList = _.sortBy(data, ['likes']);
    //   [this.page_3, this.page_2, this.page_1] = sortList;
    //   this.isLoading = false;
    // },
  },

  mounted() {
    //   получаем значения из бд и запускае формирование банера
    this.$root.database.ref('topList').once('value')
      .then((e) => {
        this.$store.commit('newTopList', e.val());
        this.createBaner();
      })
      .catch((error) => {
        console.error(error);
      });

    // this.$store.subscribe((mutation, state) => {
    //   this.sortData(state.fireDB);
    // });
  },
};
</script>

<style lang="scss" scoped>
@import './../assets/variables.scss';
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
        right: 312px;
        left: auto;
        align-items: flex-end;
        text-align: right;
    }
}
.likes {
    margin: 0 0 .3rem;
    text-shadow: 2px 2px 6px black;
}

.heading {
    margin: 0 0 1.5rem;
    font-family: $font-rubik;
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 2px 2px 6px black;
}

</style>
