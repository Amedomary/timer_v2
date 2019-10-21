<template lang="pug">
    .landing#landing-app(:class='vueAppClass', v-bind:style="styleApp", v-cloak)
        img.landing__background(src='', alt='', title='', :class='vueBackClass', v-bind:src="imageSrcBackground")
        Grid
        Header
        SvgCircle
        Clock
        Description
        Wallpapers
        Share
        PickColor
        PickWallpaper
        AlertPage

        //- button(@click="publishNewTimer") publishNewTimer
        //- h2 id - {{ $route.params.id }}

</template>

<script>
// @ is an alias to /src
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

import bg from '@/assets/images/content/botanik.jpg';

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
  },

  data() {
    return {
      imageSrcBackground: bg,
      styleApp: '',
      vueAppClass: '',
      vueBackClass: '',
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

  beforeRouteUpdate(to, from, next) {
    // обрабатываем изменение параметров маршрута...
    // console.log(to, from, next);
    // не забываем вызвать next()
    next();
  },

  methods: {
    // Отправляем данные в фаирбэйз
    publishNewTimer() {
      const idPage = (Math.floor(Math.random() * 1000000));
      const data = this.timerDate;
      const dataJSON = {
        id: idPage,
        likes: 0,
        pageTitle: data.pageTitle,
        preHeading: data.preHeading,
        heading: data.heading,
        description: data.description,
        finishDate: data.finishDate,
        imageSrcBackground: data.imageSrcBackground,
        color: data.color,
        buttonText: data.buttonText,
        buttonHref: data.buttonHref,
      };

      this.$root.database.ref(`pages/${idPage}`).set(dataJSON)
        .then(() => {
          console.warn('Synchronization succeeded');
          // this.createdNewPage(idPage);
        })
        .catch((error) => {
          console.error('Synchronization failed');
          console.error(error);
        });
    },
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

html, body, #app {
  height: 100%;
}

:root {
  --theme-color: 53;
  --accent: hsl(var(--theme-color),60%,40%);
  --accent-light: hsl(var(--theme-color),71%,57%);
  --accent-back: hsla(var(--theme-color),53%,29%,.2);
  --accent-hover: hsla(var(--theme-color),53%,29%,.4);
  --accent-dark: hsl(var(--theme-color),80%,6%);
}

.landing {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  ::selection {
    background: var(--accent-light); /* Safari */
  }
  ::-moz-selection {
    background: var(--accent-light); /* Firefox */
  }

  // Фон и его смена
  &__background {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.9;
    // .transitionModOpacity();

    &.fade {
      opacity: 0.1;
    }

    &.hide {
      opacity: 0;
    }
  }
  &__wallpaper-side-bar {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-flow: column nowrap;
    width: 20%;
    min-width: 325px;
    background: var(--accent-dark);
    z-index: 450;
    padding: 25px 0 0 25px;
    // TODO: сделать скролл кастомный
  }
  &__wallpaper-close {
    position: absolute;
    top: 25px;
    left: -15px;
    transform: translateX(-100%);
    width: 43px;
    height: 43px;
    background-color: var(--accent-dark);
    border: 1px solid var(--accent);

    &:after,
    &:before {
      display: block;
      content: "";
      position: absolute;
      top: 19px;
      left: 6px;
      width: 30px;
      height: 2px;
      background-color: var(--accent);
      transform: rotate(-45deg);
      transform-origin: center;
    }
    &:before {
      transform: rotate(45deg);
    }
  }
  &__wallpaper-label {
    display: block;
    width: auto;
    margin-right: 25px;
    margin-bottom: 25px;
    flex: 0 0 auto;
    // font-family: @font-base;
    color: #fff;
    background: none;
    border-radius: 0;
    border: 1px solid var(--accent);
    background-color: var(--accent-dark);
    font-size: 15px;
    padding: 12px 16px;
  }
  &__wallpaper-input {
    display: none;
  }
  &__wallpaper-list {
    padding: 0;
    flex: 1 1 auto;
    overflow-x: auto;
    padding: 0 5px 25px 0;
    width: auto;
    margin-left: -20px;
  }
  &__wallpaper-item {
    list-style: none;
    margin-bottom: 5px;
    cursor: pointer;

    .no-touchevents &:hover,
    .touchevents &:active {
      text-decoration: underline;
    }
  }
  &__walpaper-figure {
    position: relative;
    margin: 0;
    &:hover {
      & .b-landing__wallpaper-preview {
        filter: brightness(1.7);
      }
    }
  }
  &__wallpaper-title {
    padding-bottom: 10px;
    // font-family: @font-sans;
    position: absolute;
    z-index: 800;
    top: 0;
    left: 0;
    right: 0;
    padding: 10px;
    background-color: var(--accent-hover);
  }
  &__wallpaper-preview {
    display: block;
    width: 100%;
    height: 160px;
    object-fit: cover;
    transition: filter 0.5s;
  }

  &__hide-icon {
    display: none;
  }

  &__share {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    left: 40px;
    border: 1px solid rgba(255, 255, 255, 0.2);

    // .transitionModOpacity();

    &.hide {
      opacity: 0;
      pointer-events: none;
    }
  }

  &__color-pick {
    // .circle-icon(60%);
  }

  &__wallpaper-pick {
    // .circle-icon(80%);
  }

  &__legend {
    position: absolute;
    bottom: -24px;
    padding: 64px 12px 0;
    line-height: 1;
    left: 50%;
    transform: translateX(-50%);
    font-size: 14px;
    opacity: 0.8;
    white-space: nowrap;
  }

  &__clock-legend {
    position: absolute;
    bottom: -25px;
    left: 40px;
    color: var(--accent-light);
    opacity: 0;
    transition: opacity 0.2s, transform 0.5s;

    .b-landing__clock.editable:not(.editing):hover & {
      opacity: 1;
      transform: translateX(-25px);
    }
  }

  &__alert {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 55000;
    background-color: rgba(0, 0, 0, 0.95);
    text-align: center;
    font-size: 40px;
    padding: 15px;
    // font-family: @font-sans;

    &-text {
      margin: auto;
      max-width: 700px;
    }

    &-link {
      margin-top: 15px;
      display: block;
      color: #ed1c8a;
    }
  }
}
</style>
