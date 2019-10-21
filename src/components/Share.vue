<template lang="pug">
.share share
//- .share(:class='vueShareClass')
    //- +icon--link('vk').--share.--vk
    //- +icon--link('fb').--share

</template>

<script>
export default {
  name: 'Share',
};
</script>

<style lang="scss" scoped>
.share {
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
</style>
