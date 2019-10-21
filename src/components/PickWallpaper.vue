<template lang="pug">
button.wallpaper-pick(title='', @click='wallpaperPick')
    //- +icon('image')
    span.legend Выбрать фон

</template>

<script>
export default {
  name: '',
};
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.wallpaper-pick {
    @include circle-icon(80%);
}

</style>
