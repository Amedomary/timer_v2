<template lang="pug">
.share(v-if="$store.state.countdown.appState === 'loading'")

.share(v-else-if="$store.state.countdown.appState !== 'editing'")
    button.button(type="button" style="--color-share-hover: var(--accent-light)")
        Icon.far.fa-calendar-alt
    button.button(type="button" style="--color-share-hover: #4d7198")
        Icon.fab.fa-vk
    button.button(type="button" style="--color-share-hover: #3b5998")
        Icon.fab.fa-facebook-f
    button.button(type="button" style="--color-share-hover: #02ABEF")
        Icon.fab.fa-twitter

</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Share',
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.share {
    position: absolute;
    top: 50%;
    left: 40px;
    width: 50px;
    transform: translateY(-50%);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.button {
    & + & {
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    &:hover {
        background-color: var(--color-share-hover);
    }
}

.icon {
    display: inline-block;
    width: 48px;
    height: 50px;
    padding: 15px;
    line-height: 20px;
    transition: opacity 0.2s, color 0.2s;
    text-align: center;
    vertical-align: top;

    .no-touchevents &:hover,
    .touchevents &:active {
        opacity: 1;
    }
}
</style>
