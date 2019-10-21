<template lang="pug">
header.header
  span.logo CountDown
  nav.nav
    router-link.nav-link(to="/") Main
    router-link.nav-link(to="/countdown/0") Create yourself
    router-link.nav-link(to="/countdown/0") Go random

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "./../assets/variables.scss";

.header {
  position: absolute;
  top: 30px;
  left: 200px;
  right: 200px;
  padding: 0 30px;
  background-color: #00000066;
  z-index: 30;
  display: flex;
  align-items: center;

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
    background-image: linear-gradient(-54deg, #ffffff00 50%, #00000066 51%);
  }

  &:before {
    right: 100%;
    background-image: linear-gradient(-234deg, #ffffff00 50%, #00000066 51%);
  }
}

.logo {
  font-size: 1.5rem;
  margin-right: auto;
  font-weight: 100;
}

.nav {}

.nav-link {
  display: inline-block;
  padding: 18px;
}
</style>
