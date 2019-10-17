<template lang="pug">
nav.nav
    router-link(to="/") Main |
    router-link(to="/Countdown")  Countdown
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.nav {
  position: absolute;
  top: 30px;
  left: 200px;
  right: 200px;
  padding: 15px;
  background-color: #00000066;

  &::before,
  &::after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 48px;
  }

  &:after {
      left: 100%;
      background-image: linear-gradient(-75deg, #ffffff00 50%, #00000066 50%);
  }

  &:before {
      right: 100%;
      background-image: linear-gradient(-255deg, #ffffff00 50%, #00000066 50%);
  }
}
</style>
