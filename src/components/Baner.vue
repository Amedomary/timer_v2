<template lang="pug">

section.banner(v-if="isLoading", style="display:flex")
    Loader

section.banner(v-else, :class="bannerClass")
    .image.image--1(@mouseenter="activateImg('1')" @mouseleave="activateImg('')"
            :style="{ backgroundImage: `url('${page_1.localImg}')`}"
        )
        .wrapper.left
            p.likes ❤ {{page_1.likes}}
            h2.heading {{page_1.heading}}
            router-link.button(:to="{ name: 'countdown', params: { id: page_1.id }}") Подробнее

    .image.image--2(@mouseenter="activateImg('2')" @mouseleave="activateImg('')"
            :style="{ backgroundImage: `url('${page_2.localImg}')`}"
        )
        .wrapper.center
            p.likes ❤ {{page_2.likes}}
            h2.heading {{page_2.heading}}
            router-link.button(:to="{ name: 'countdown', params: { id: page_2.id }}") Подробнее

    .image.image--3(@mouseenter="activateImg('3')" @mouseleave="activateImg('')"
            :style="{ backgroundImage: `url('${page_3.localImg}')`}"
        )
        .wrapper.right
            p.likes ❤ {{page_3.likes}}
            h2.heading {{page_3.heading}}
            router-link.button(:to="{ name: 'countdown', params: { id: page_3.id }}") Подробнее

</template>

<script>
// import _ from 'lodash';
import Button from '@/components/Button.vue';
import Loader from '@/components/Loader.vue';
import paths from '@/createPathImages';

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
      const imagesPaths = paths();
      [this.page_0, this.page_1, this.page_2, this.page_3] = this.$store.state.topList;
      this.page_1.localImg = imagesPaths[this.page_1.imageSrcBackground];
      this.page_2.localImg = imagesPaths[this.page_2.imageSrcBackground];
      this.page_3.localImg = imagesPaths[this.page_3.imageSrcBackground];
      this.isLoading = false;
    },

    // sortData(data) {
    //   const sortList = _.sortBy(data, ['likes']);
    //   [this.page_3, this.page_2, this.page_1] = sortList;
    //   this.isLoading = false;
    // },
  },

  mounted() {
    //   проверяем стор
    if (!this.$store.state.topList) {
      this.$store.subscribe((mutation, state) => {
        this.createBaner();
      });

      //   получаем значения из бд и запускае формирование банера
      this.$store.dispatch('getDataFromServer', {
        ref: 'topList',
        mutations: 'newTopList',
      });
    } else {
      this.createBaner();
    }
  },
};
</script>

<style lang="scss" scoped>
@import './../assets/variables.scss';
.banner {
    position: relative;
    height: 620px;
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
    font-size: 2rem;
    font-weight: 700;
    text-shadow: 2px 2px 6px black;
}

.button {
    position: relative;
    bottom: 0;
    display: inline-block;
    padding: 15px;
    padding: 16px 22px;
    font-size: 1rem;
    font-size: 15px;
    line-height: 1;
    transition: .2s;
    text-align: center;
    text-decoration: none;
    border-style: solid;
    border-width: 1px;
    border-color: var(--accent);
    border-radius: 0;
    background: none;
    background-color: #00000020;

    &:hover {
        font-size: 15px;
        border-color: var(--accent);
        background-color: #000000dd;
        color: var(--link-hover);
    }

    &:focus {
        border-radius: 10px;
        border-color: var(--accent);
        color: var(--link-hover);
        background-color: #0000009f;
    }
}

</style>
