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
      const color = this.$store.state.countdownData.color_i;
      this.$store.state.countdownData.color_i = color + Math.floor(Math.random() * 17) + 9; // Добавляем рандомный цвет от 9 - 28
      this.$store.state.countdown.unsavedChanged = true;
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
