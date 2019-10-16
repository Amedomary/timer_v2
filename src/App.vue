<template lang="pug">
  div#app
    router-view

</template>

<style lang="scss">
@import "./assets/variables.scss";

// Theme
*,
*:before,
*:after {
  box-sizing: border-box;
}

*:focus {
  outline: var(--accent-light) auto 5px;
}

html {
  height: 100%;
  font-size: 16px;
  background-image: linear-gradient(32deg, rgb(6, 6, 6) 0%, rgb(0, 0, 0) 100%);
}
@media (max-width: 767px) {
  html {
    font-size: 13px;
  }
}

body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: $font-base;
  vertical-align: top;
  color: var(--cl-font-main);
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

#app {
  height: 100%;
}

// global
img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: var(--cl-font-main);

  &:hover {
    color: $cl-theme-link-hover;
  }
}
</style>
