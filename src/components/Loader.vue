<template lang="pug">
svg.loader(width="72" height="87" viewBox="0 0 72 87" fill="none" xmlns="http://www.w3.org/2000/svg")
    <circle class="war-line-o" cx="35.9999" cy="43" r="20" transform="rotate(27.5574 35.9999 43)" stroke="#E39C16" stroke-width="6"/>
    <path class="war-line-anim war-line-anim--centr1" d="M49.7411 61.4505C52.4362 59.4463 54.7324 56.8179 56.3904 53.6407C61.7967 43.2807 58.5351 30.6934 49.2104 24.1692M45.333 64.0222C39.1498 66.7626 31.8212 66.7628 25.3591 63.3906C19.1787 60.1654 15.0754 54.5257 13.6023 48.2316M12.999 43.4049C12.9302 39.6832 13.7658 35.8918 15.6092 32.3593C21.1741 21.6953 33.9276 17.2153 44.8277 21.7602" stroke-width="6"/>
    <circle class="" cx="36" cy="43" r="30.5" stroke="white" stroke-opacity="0.05"/>
    <path class="war-line-anim war-line-anim--line1" d="M61.595 25.5949C51.9824 11.4592 32.7306 7.79255 18.595 17.4051" />
    <path class="war-line-anim war-line-anim--line3" d="M61.595 25.5949C51.9824 11.4592 32.7306 7.79255 18.595 17.4051" />
    <path class="war-line-anim war-line-anim--line2" d="M53.405 68.5949C39.2694 78.2075 20.0176 74.5408 10.405 60.4051" />

</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style lang="scss" scoped>
.loader {
  margin: auto;
}
.war-line-o {
    transition: 2s;
    animation-name: war-line-o;
    animation-duration: 5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
}
.war-line-anim {
    transition: 2s;
    transform-origin: 36px 43px;
    animation-name: war-line-anim;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;

    &--centr1 {
        animation-name: war-line-c;
        animation-duration: 1.8s;
        animation-direction: reverse;
        stroke: rgb(255, 255, 255);
    }
    &--line1 {
        stroke: #ffffff;
    }
    &--line2 {
        animation-duration: 1.5s;
        stroke: rgb(227, 156, 22);
    }
    &--line3 {
        animation-duration: 0.7s;
        stroke: rgb(218, 95, 14);
    }
}

@keyframes war-line-o {
    0% {
        stroke-width: 8;
    }
    50% {
        stroke-width: 1;
    }
    100% {
        stroke-width: 8;
    }
}
@keyframes war-line-c {
    0% {
        transform: rotate(0);
    }
    100% {
        transform: rotate(360deg);
    }
}
@keyframes war-line-anim {
    0% {
        transform: rotate(0);

        stroke-opacity: 0;
    }
    50% {
        stroke-opacity: 0.9;
    }
    100% {
        transform: rotate(360deg);

        stroke-opacity: 0;
    }
}
</style>
