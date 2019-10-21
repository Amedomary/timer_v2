<template lang="pug">
button.color-pick(title='', @click='colorPick')
    //- +icon('paint')
    span.legend Сменить цвет

</template>

<script>
export default {
  name: '',
};
</script>

<style lang="scss" scoped>
@import '@/assets/mixins.scss';

.color-pick {
    @include circle-icon(60%);
}

</style>
