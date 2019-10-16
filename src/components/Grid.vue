<template lang="pug">
  svg.svg-grid
    //- фоновая сетка
    g
        line.svg-grid__line(x1="20%" y1="0" x2="20%" y2="100%").--mobile-hide
        line.svg-grid__line(x1="40%" y1="0" x2="40%" y2="100%")
        line.svg-grid__line(x1="60%" y1="0" x2="60%" y2="100%").--mobile-hide
        line.svg-grid__line(x1="80%" y1="0" x2="80%" y2="100%")

        line.svg-grid__line(x1="0" y1="20%" x2="100%" y2="20%")
        line.svg-grid__line(x1="0" y1="50%" x2="100%" y2="50%")
        line.svg-grid__line(x1="0" y1="80%" x2="100%" y2="80%")

    //- рамка
    g
        line.svg-grid__line(x1="40px" y1="40px" x2="40px" y2="100px")
        line.svg-grid__line(x1="40px" y1="40px" x2="100px" y2="40px")

        line.svg-grid__line(x1="calc(100% - 40px)" y1="40px" x2="calc(100% - 40px)" y2="100px")
        line.svg-grid__line(x1="calc(100% - 100px)" y1="40px" x2="calc(100% - 40px)" y2="40px")

        line.svg-grid__line(x1="40px" y1="calc(100% - 40px)" x2="40px" y2="calc(100% - 100px)")
        line.svg-grid__line(x1="40px" y1="calc(100% - 40px)" x2="100px" y2="calc(100% - 40px)")

        line.svg-grid__line(x1="calc(100% - 40px)" y1="calc(100% - 40px)" x2="calc(100% - 40px)" y2="calc(100% - 100px)")
        line.svg-grid__line(x1="calc(100% - 100px)" y1="calc(100% - 40px)" x2="calc(100% - 40px)" y2="calc(100% - 40px)")

    //- белые плюсики
    g
        rect.svg-grid__plus(x="40px" y="35px" width="1px" height="11px")
        rect.svg-grid__plus(x="35px" y="40px" width="11px" height="1px")

        rect.svg-grid__plus(x="calc(100% - 40px)" y="35px" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(100% - 45px)" y="40px" width="11px" height="1px")

        rect.svg-grid__plus(x="calc(100% - 40px)" y="calc(100% - 45px)" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(100% - 45px)" y="calc(100% - 40px)" width="11px" height="1px")

        rect.svg-grid__plus(x="40px" y="calc(100% - 45px)" width="1px" height="11px")
        rect.svg-grid__plus(x="35px" y="calc(100% - 40px)" width="11px" height="1px")

        //- ----------------------------------------------------------------------
        // 1
        rect.svg-grid__plus(x="20%" y="calc(20% - 5px)" width="1px" height="11px").--mobile-hide
        rect.svg-grid__plus(x="calc(20% - 5px)" y="20%" width="11px" height="1px").--mobile-hide
        // 2
        rect.svg-grid__plus(x="40%" y="calc(20% - 5px)" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(40% - 5px)" y="20%" width="11px" height="1px")
        // 3
        rect.svg-grid__plus(x="60%" y="calc(20% - 5px)" width="1px" height="11px").--mobile-hide
        rect.svg-grid__plus(x="calc(60% - 5px)" y="20%" width="11px" height="1px").--mobile-hide
        // 4
        rect.svg-grid__plus(x="80%" y="calc(20% - 5px)" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(80% - 5px)" y="20%" width="11px" height="1px")

        // 5
        rect.svg-grid__plus(x="20%" y="calc(50% - 5px)" width="1px" height="11px").--mobile-hide
        rect.svg-grid__plus(x="calc(20% - 5px)" y="50%" width="11px" height="1px").--mobile-hide
        // 6
        rect.svg-grid__plus(x="40%" y="calc(50% - 5px)" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(40% - 5px)" y="50%" width="11px" height="1px")
        // 7
        rect.svg-grid__plus(x="60%" y="calc(50% - 5px)" width="1px" height="11px").--mobile-hide
        rect.svg-grid__plus(x="calc(60% - 5px)" y="50%" width="11px" height="1px").--mobile-hide
        // 8
        rect.svg-grid__plus(x="80%" y="calc(50% - 5px)" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(80% - 5px)" y="50%" width="11px" height="1px")

        // 9
        rect.svg-grid__plus(x="20%" y="calc(80% - 5px)" width="1px" height="11px").--mobile-hide
        rect.svg-grid__plus(x="calc(20% - 5px)" y="80%" width="11px" height="1px").--mobile-hide
        // 10
        rect.svg-grid__plus(x="40%" y="calc(80% - 5px)" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(40% - 5px)" y="80%" width="11px" height="1px")
        // 11
        rect.svg-grid__plus(x="60%" y="calc(80% - 5px)" width="1px" height="11px").--flower.--mobile-hide
        rect.svg-grid__plus(x="calc(60% - 5px)" y="80%" width="11px" height="1px").--flower.--mobile-hide
        // 12
        rect.svg-grid__plus(x="80%" y="calc(80% - 5px)" width="1px" height="11px")
        rect.svg-grid__plus(x="calc(80% - 5px)" y="80%" width="11px" height="1px")
</template>

<script>
export default {
  name: "Grid"
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.svg-grid {
  position: absolute;
  display: block;
  width: 100%;
  height: 100%;

  &__line {
    stroke-width: 1px;
    stroke: rgba(255, 255, 255, 0.1);
  }

  &__plus {
    fill: #fff;

    &--flower {
      fill: var(--accent);
    }
  }
}
</style>
