<template lang="pug">
//- svg.circle(x="0px" y="0px" viewBox="0 0 705 705", :class='vueCircleClass')
svg.circle(x="0px" y="0px" viewBox="0 0 705 705" :class="{fade: $store.state.countdown.appState === 'editing'}")
    circle.st0( cx="352.5" cy="352.5" r="350.5")
    circle.st1( cx="352.5" cy="352.5" r="225.5")
    circle.st2( cx="70" cy="352.5" r="4")
    circle.st3( cx="70" cy="352.5" r="5")
    circle.st4( cx="70" cy="352.5" r="3")
    circle.st5( cx="70" cy="352.5" r="6")
</template>

<script>
export default {
  name: 'circle',
};
</script>

<style lang="scss" scoped>

.circle {
  position: absolute;
  top: 50%;
  left: 40%;
  overflow: visible;
  width: 37%;
  height: auto;
  transform: translate(-50%, -50%);

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
    transform-origin: center;
    animation-name: rotate-1;
    animation-duration: 60s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
    fill: none;
    stroke: var(--accent-light);
    stroke-width: 1px;

    stroke-dasharray: 5, 20;
  }
  .st1 {
    animation-duration: 120s;
    stroke: var(--accent-light);
    stroke-width: 2px;

    stroke-dasharray: 2, 8;
    stroke-miterlimit: 10;
  }
  .st2,
  .st3,
  .st4,
  .st5 {
    transform-origin: center;
    animation-name: rotate-2;
    animation-duration: 120s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: normal;
    fill: none;
    stroke: var(--accent-light);
    stroke-width: 1px;
  }
  .st3 {
    animation-name: rotate-3;
    animation-duration: 140s;
  }
  .st4 {
    animation-name: rotate-4;
    animation-duration: 160s;
  }
  .st5 {
    animation-name: rotate-5;
    animation-duration: 180s;
  }
}

@keyframes rotate-1 {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(180deg);
  }
}
@keyframes rotate-2 {
  from {
    transform: rotate(600deg);
  }
  to {
    transform: rotate(240deg);
  }
}
@keyframes rotate-3 {
  from {
    transform: rotate(800deg);
  }
  to {
    transform: rotate(440deg);
  }
}
@keyframes rotate-4 {
  from {
    transform: rotate(100deg);
  }
  to {
    transform: rotate(460deg);
  }
}
@keyframes rotate-5 {
  from {
    transform: rotate(220deg);
  }
  to {
    transform: rotate(580deg);
  }
}
</style>
