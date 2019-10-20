<template lang="pug">
.header
    button.link-create(@click="createTimer", type="button", v-if="checkState('new')") Создать свой
    button.link-create(@click="cancelTimer", type="button", v-if="checkState('editing')") Отмена
    button.link-create(@click="editTimer", type="button", v-if="checkState('modified')") Редактировать
    button.link-create(@click="acceptCreateTimer", v-if="checkState('have-changed')", type="button") Применить изменения
    button.link-create.link-create--release(
            @click="publishNewTimer", v-if="checkState('modified')", type="button"
        ) Опубликовать

</template>

<script>
export default {
  name: 'Header',

  data() {
    return {
      weHaveModificateTimer: false,
      stateWasModified: false,
    };
  },

  methods: {
    checkState(string) {
      return this.$store.state.appState.some(e => e === string);
    },

    createTimer() {
      this.$store.commit('changeAppState', 1);
    },

    cancelTimer() {
      this.$store.commit('changeAppState', 0);
    },

  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.header {
  text-transform: uppercase;
  position: relative;
  padding: 60px 65px 5px;
  color: #ccc;
  font-weight: 100;
  font-family: $font-sans;
  font-size: 12px;
}

.link-create {
  padding: 5px;
  display: inline-block;
  vertical-align: top;
  margin-right: 15px;
  background: none;
  border: none;
  cursor: pointer;

  &--release {
    font-family: $font-base;
    border-radius: 0;
    border-color: var(--accent);
    border-width: 1px;
    border-style: solid;
    background-color: var(--accent-back);
    font-size: 15px;
    padding: 12px 18px;
    margin-top: -7px;
    margin-left: 25px;

    animation-name: release-link;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
  }
}
</style>
