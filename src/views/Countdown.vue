<template lang="pug">
.landing(
  :class='vueAppClass'
  v-bind:style="{'--theme-color': $store.state.countdownData.color_i}"
  v-cloak
)
  img.background(
    src='', alt='', title='',
    :class="{fade: $store.state.countdown.appState === 'editing'}"
    v-bind:src="imageSrcBackground"
  )
  Grid
  Header
  SvgCircle
  Clock
  Description
  Wallpapers
  Share
  Likes

  PickColor
  PickWallpaper

  AlertPage

</template>

<script>
// @ is an alias to /src
// import firebase from 'firebase';
import Grid from '@/components/Grid.vue';
import Header from '@/components/Header.vue';
import SvgCircle from '@/components/SvgCircle.vue';
import Clock from '@/components/Clock.vue';
import Description from '@/components/Description.vue';
import Share from '@/components/Share.vue';
import Wallpapers from '@/components/Wallpapers.vue';
import PickColor from '@/components/PickColor.vue';
import PickWallpaper from '@/components/PickWallpaper.vue';
import AlertPage from '@/components/AlertPage.vue';
import Likes from '@/components/Likes.vue';

import bg from '@/assets/images/content/botanik.jpg';

// const database = firebase.database();

export default {
  name: 'home',
  components: {
    Grid,
    Header,
    SvgCircle,
    Clock,
    Description,
    Share,
    Wallpapers,
    PickColor,
    PickWallpaper,
    AlertPage,
    Likes,
  },

  data() {
    return {
      imageSrcBackground: bg,
      styleApp: '',
      vueAppClass: '',
      timerDate: {
        pageTitle: 'headingMessage',
        preHeading: 'preHeadingMessage',
        heading: 'headingMessage',
        description: 'descriptionTextMessage',
        finishDate: 'finishDate.toString()',
        imageSrcBackground: 'imageSrcBackground',
        color: 'color',
        buttonText: 'flowerButton.text',
        buttonHref: 'flowerButton.link',
      },
    };
  },

  created() {
    this.$store.dispatch('getDataForId', 0); // получаем данные для таймера
  },

  beforeRouteUpdate(to, from, next) {
    // обрабатываем изменение параметров маршрута...
    // не забываем вызвать next()
    next();
  },

  methods: {

  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

html, body, #app {
  height: 100%;
}

.landing {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  --theme-color: 311;
  --accent: hsl(var(--theme-color), 60%, 40%);
  --accent-light: hsl(var(--theme-color), 71%, 57%);
  --accent-back: hsla(var(--theme-color), 53%, 29%, 0.2);
  --accent-hover: hsla(var(--theme-color), 53%, 29%, 0.4);
  --accent-dark: hsl(var(--theme-color), 80%, 6%);

  ::selection {
    background: var(--accent-light); /* Safari */
  }
  ::-moz-selection {
    background: var(--accent-light); /* Firefox */
  }

  &__hide-icon {
    display: none;
  }
}

  // Фон и его смена
.background {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    opacity: .9;
    object-fit: cover;
    transition: opacity .7s;
    user-select: none;

    &.fade {
        opacity: .1;
    }

    &.hide {
        opacity: 0;
    }
}

// like animation
.dots {
  width: 6px;
  height: 6px;
  position: absolute;
  top: 2px;
  left: 4px;
  background-color:rgb(255, 0, 0);
  border-radius: 50%;
}

.hearts {
  transform: translate(-50%, -50%);
  position: absolute;
  left: 50%;
  top: 50%;
  opacity: 0;
}

.circ {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  position: absolute;
  top: 3px;
  left: 6px;
  transform: translate(-4px, 0px);
  cursor: pointer;
  border: 1px solid rgb(255, 255, 255);
}
</style>
