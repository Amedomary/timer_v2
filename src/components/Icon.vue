<template lang="pug">
  i.icon
    slot

</template>

<script>
export default {
  name: 'Icon',
  props: ['children'],
};
</script>

<style lang="scss" scoped>
.icon {
  font-style: normal;
}
</style>
