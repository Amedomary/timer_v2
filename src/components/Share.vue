<template lang="pug">
//- .share(:class='vueShareClass')
.share(v-if="$store.state.countdown.appState !== 'editing'")
    //- +icon--link('vk').--share.--vk
    //- +icon--link('fb').--share
    button(type="button")
        Icon.fab.fa-vk
    button(type="button")
        Icon.fab.fa-facebook-f

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

.icon {
    display: inline-block;
    width: 50px;
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
