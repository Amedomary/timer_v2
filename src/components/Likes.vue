<template lang="pug">
.likes(v-if="$store.state.countdownData.likes && this.$store.state.countdown.appState !== 'editing'")
  .wrapper
    Icon.fas.fa-heart
    .count {{$store.state.countdownData.likes}}
  .text нажми где угодно что бы лайкнуть

</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Likes',
  components: {
    Icon,
  },
};
</script>

<style lang="scss" scoped>
.likes {
  position: absolute;
  bottom: 45px;
  left: 65px;

  &:hover {
    .text {
      opacity: .7;
    }
  }
}

.wrapper {
  display: flex;
  align-items: center;
}

.count {
  font-size: 14px;
}

.icon {
  margin-right: 8px;
  font-size: 18px;
  color: #ff4f4f;
  // text-shadow: 0 0 15px rgba(0, 0, 0, 0.6);
}

.text {
  margin-top: 5px;
  font-size: 10px;
  line-height: 10px;
  opacity: 0;
  transition: .2s;
  cursor: default;
}

</style>
