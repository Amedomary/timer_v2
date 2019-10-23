<template lang="pug">

button.color-pick(title='', @click='colorPick', v-if="$store.state.countdown.appState === 'editing'")
    Icon.fas.fa-paint-roller
    span.legend Сменить цвет

</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: '',
  components: {
    Icon,
  },
  methods: {
    // Выбор цвета ==============
    colorPick() {
      this.styleApp = { '--theme-color': this.color_i };
      this.color_i = this.color_i + Math.floor(Math.random() * 17) + 9; // Добавляем рандомный цвет от 9 - 28
      this.stateWasModified = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.color-pick {
    @include circle-icon(60%);
}

.legend {
  @include circle-icon-legend();
}

</style>
