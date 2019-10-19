<template lang="pug">

mixin contentImage(heading)
    .wrapper
        h1= heading
        a(htef="#") Подробнее

section.banner(v-if="$store.state.data", :class="bannerClass")
    .image.image--1(@mouseenter="activateImg('1')" @mouseleave="activateImg('')" :style="{ backgroundImage: 'url('+$store.state.data[0].imageSrcBackground+')'}")
        +contentImage('Казима')
    .image.image--2(@mouseenter="activateImg('2')" @mouseleave="activateImg('')" :style="{ backgroundImage: 'url('+$store.state.data[106092].imageSrcBackground+')'}")
        +contentImage('ВАРИК')
    .image.image--3(@mouseenter="activateImg('3')" @mouseleave="activateImg('')" :style="{ backgroundImage: 'url('+$store.state.data[358169].imageSrcBackground+')'}")
        +contentImage('тёлочка')

</template>

<script>
export default {
  name: 'Baner',
  data() {
    return {
      bannerClass: '',
    };
  },
  methods: {
    activateImg(param) {
      this.bannerClass = `active-${param}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  height: 600px;
  position: relative;
}

.image {
  height: 100%;
  background-size: cover;
  background-position: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: 1s;

  &--1 {
    clip-path: polygon(0 0, 80% 0, 60% 100%, 0 100%);
    z-index: 12;
  }

  &--2 {
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
    z-index: 8;
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
    bottom: 128px;
    left: 256px;
    position: absolute;
}
</style>
