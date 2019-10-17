<template lang="pug">
.page
    HeaderBar

    section.banner(v-if="$store.state.data")
        img.banner__image(:src="$store.state.data[0].imageSrcBackground")

    ul
        li(v-for="({ heading, imageSrcBackground }, value ) in $store.state.data")
            //- img(:src="imageSrcBackground")
            | {{ heading }} : {{ value }}

</template>

<script>
// @ is an alias to /src
import HeaderBar from '@/components/HeaderBar.vue';

export default {
  name: 'Main',
  components: {
    HeaderBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.banner {
    height: 600px;

    &__image {
        height: 100%;
        object-fit: cover;
        width: 100%;
    }
}
</style>
