<template lang="pug">
button.wallpaper-pick(title='', @click='wallpaperPick', v-if="$store.state.countdown.appState === 'editing'")
    icon.far.fa-image
    span.legend Выбрать фон

</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: '',
  components: {
    Icon,
  },
  methods: {
    wallpaperPick() {
      this.$store.commit('switchWallpaperPick');
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.wallpaper-pick {
    @include circle-icon(80%);
}

.legend {
  @include circle-icon-legend();
}
</style>
