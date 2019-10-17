<template lang="pug">
    .landing#landing-app(:class='vueAppClass', v-bind:style="styleApp", v-cloak)
        img.landing__background(src='', alt='', title='', :class='vueBackClass', v-bind:src="imageSrcBackground")
        Grid
        Header


</template>

<script>
// @ is an alias to /src
import Grid from '@/components/Grid.vue';
import Header from '@/components/Header.vue';
import bg from '@/assets/botanik.jpg';

export default {
  name: 'home',
  components: {
    Grid,
    Header,
  },

  data() {
    console.log(this.$store.state);

    return {
      imageSrcBackground: bg,
      styleApp: '',
      vueAppClass: '',
      vueBackClass: '',
    };
  },
};
</script>

<style lang="scss">
@import "../assets/variables.scss";

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

  &__description {
    position: absolute;
    left: 60%;
    right: 40px;
    // top: 52%;
    bottom: 20%;
  }
  &__pre-heading {
    font-size: 11px;
    // font-family: @font-sans;
    text-transform: uppercase;
    margin: 0 0 15px 0;

    background: none;
    border: none;
    padding: 0 0 0 3px;
    outline: none;

    // .icon-edit-hover(-22px);
  }
  &__heading {
    font-size: 47px;
    // font-family: @font-base;
    margin: 0 0 15px 0;

    background: none;
    border: none;
    padding: 0;
    outline: none;

    // .icon-edit-hover(-7px);
  }
  &__description-text {
    width: 340px;
    margin: 0;
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 70px;
    min-height: 12px;
    background: none;
    border: none;
    padding: 0 0 0 3px;
    outline: none;

    // .icon-edit-hover(-27px)
  }
  &__description-input-wrapper {
    position: relative;
  }
  &__accept-edit-description {
    cursor: pointer;
    display: block;
    position: absolute;
    top: 0;
    left: -50px;
    width: 36px;
    height: 36px;
    background-color: var(--accent-dark);
    border: 1px solid var(--accent);

    &:after,
    &:before {
      content: "";
      position: absolute;
      top: 16px;
      left: 6px;
      display: block;
      width: 24px;
      height: 2px;
      background-color: var(--accent);
      transform: rotate(-45deg);
      transform-origin: center;
    }
    &:before {
      transform: rotate(45deg);
    }

    &--pre-heading {
      top: -10px;
    }
    &--heading {
      top: 6px;
    }
    &--description {
      top: -10px;
    }

    &.accept {
      &:before {
        width: 11px;
        top: 19px;
        left: 6px;
      }
      &:after {
        left: 12px;
        width: 19px;
      }
    }
  }

  &__button-wrapper {
    position: relative;
    // .icon-edit-hover(-51px);
  }

  &__hide-icon {
    display: none;
  }

  &__circle {
    position: absolute;
    top: 50%;
    left: 40%;
    width: 37%;
    height: auto;
    transform: translate(-50%, -50%);
    overflow: visible;

    &.fade {
      opacity: 0.5;

      .st0,
      .st1,
      .st2,
      .st3,
      .st4,
      .st5 {
        animation-play-state: paused;
      }
    }

    .st0,
    .st1 {
      fill: none;
      // stroke: #fff;
      stroke: var(--accent-light);
      stroke-width: 1px;
      stroke-dasharray: 5, 20;
      transform-origin: center;
      animation-name: rotate-1;
      animation-duration: 60s;
      animation-direction: normal;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    .st1 {
      stroke: var(--accent-light);
      stroke-width: 2px;
      stroke-miterlimit: 10;
      stroke-dasharray: 2, 8;
      animation-duration: 120s;
    }
    .st2,
    .st3,
    .st4,
    .st5 {
      fill: none;
      stroke: var(--accent-light);
      stroke-width: 1px;
      transform-origin: center;
      animation-name: rotate-2;
      animation-duration: 120s;
      animation-direction: normal;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
    }
    .st3 {
      animation-duration: 140s;
      animation-name: rotate-3;
    }
    .st4 {
      animation-duration: 160s;
      animation-name: rotate-4;
    }
    .st5 {
      animation-duration: 180s;
      animation-name: rotate-5;
    }
  }

  // Часы ====================
  &__clock {
    position: absolute;
    bottom: 50%;
    left: 20%;
    font-weight: 100;
    padding-bottom: 10px;
    // =Nova+Mono|Roboto+Mono|VT323&display=swap

    &:after {
      content: "";
      position: absolute;
      bottom: -1px;
      left: 25px;
      right: 3px;
      height: 1px;
      background-color: #fff;
    }

    &.editable {
      cursor: pointer;

      .b-icon--clock-edit {
        display: block;
        opacity: 0.2;
        transition: opacity 0.2s;
      }

      &:after {
        transition: 0.2s;
      }

      .no-touchevents &:hover,
      .touchevents &:active {
        .b-icon--clock-edit {
          opacity: 0.8;
        }

        &:after {
          background-color: var(--accent);
          left: 15px;
          right: -7px;
          height: 2px;
        }
      }
    }
  }
  &__month {
    display: block;
    font-size: 25px;
    margin-bottom: 12px;
    opacity: 0.6;
    padding-left: 10px;
  }
  &__day {
    position: relative;
    display: inline-block;
    font-size: 90px;
    vertical-align: middle;
    margin-right: 25px;
    font-family: "Nova Mono";

    .title {
      position: absolute;
      bottom: -2px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 15px;
      // font-family: @font-base;
    }
  }
  &__hour {
    display: inline-block;
    font-size: 70px;
    vertical-align: middle;
    margin-right: 5px;
    font-family: "Nova Mono";
  }
  &__slash {
    display: inline-block;
    font-size: 38px;
    vertical-align: middle;
    margin-right: 5px;
    opacity: 0.2;
  }
  &__minutes {
    display: inline-block;
    font-size: 40px;
    vertical-align: middle;
    opacity: 0.75;
    margin-right: 5px;
    font-family: "Nova Mono";
  }
  &__clock-form-back {
    cursor: default;
    position: absolute;
    z-index: 560;
    top: 59px;
    left: 41px;
    width: 350px;
    background-color: var(--accent-back);
    padding: 12px;

    &--btn {
      left: -14px;
      top: auto;
      bottom: -14px;
    }
  }
  &__clock-form {
    padding: 24px;
    background-color: var(--accent-dark);
  }
  &__clock-input {
    // font-family: @font-sans;
    font-size: 25px;
    border: none;
    border-bottom: 1px solid var(--accent);
    padding: 0 4px 4px 4px;
    margin: 0;
    background-color: transparent;
  }
  &__clock-form-link-wrap {
    text-align: right;
    margin-top: 35px;
  }
  &__clock-form-link {
    margin-left: 15px;
    // font-family: @font-sans;
    text-transform: uppercase;
    opacity: 0.6;

    &--done {
      opacity: 1;
    }
  }
  &__clock-title {
    margin: 0 0 25px 0;
    font-size: 12px;
    // font-family: @font-sans;
    text-transform: uppercase;
  }
  &__clock-label {
    font-size: 14px;
    color: var(--accent);
    margin-top: 25px;
  }
  &__clock-error {
    padding: 5px;
    font-size: 12px;
    // font-family: @font-sans;
    text-transform: uppercase;
    // color: @cl-red;
  }
  // !Часы ====================

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
