<template lang="pug">
.header(v-if="!checkState('loading')")
    button.link-create(@click="createTimer", type="button", v-if="checkState('new') || checkState('fail')") Create new
    button.link-create(@click="cancelTimer", type="button", v-if="checkState('editing')") Cancel
    button.link-create(@click="editTimer", type="button", v-if="checkState('modified')") Edit

    button.link-create(@click="acceptCreateTimer", v-if="checkState('editing') && $store.state.countdown.unsavedChanged", type="button") Accept

    button.link-create.link-create--release(
            @click="publishNewTimer", v-if="checkState('modified')", type="button"
        ) Publish

    router-link.link-create.link-create--main(to="/") Main page

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
      return this.$store.state.countdown.appState === string;
    },

    createTimer() {
      this.$store.commit('changeAppState', 'edit');
    },

    cancelTimer() {
      // Тут не всегда нью, надо сбрасывать на шаг назад
      this.$store.commit('changeAppState', 'new');
    },

    editTimer() {
      this.$store.commit('changeAppState', 'edit');
    },

    acceptCreateTimer() {
      this.$store.commit('changeAppState', 'mod');
    },

    // Отправляем данные в фаирбэйз
    publishNewTimer() {
      // const idPage = (Math.floor(Math.random() * 1000000));
      // const data = this.timerDate;
      // const dataJSON = {
      //   id: idPage,
      //   likes: 0,
      //   pageTitle: data.pageTitle,
      //   preHeading: data.preHeading,
      //   heading: data.heading,
      //   description: data.description,
      //   finishDate: data.finishDate,
      //   imageSrcBackground: data.imageSrcBackground,
      //   color: data.color,
      //   buttonText: data.buttonText,
      //   buttonHref: data.buttonHref,
      // };

      // database.ref(`pages/${idPage}`).set(dataJSON)
      //   .then(() => {
      //     console.warn('Synchronization succeeded');
      //     // this.createdNewPage(idPage);
      //   })
      //   .catch((error) => {
      //     console.error('Synchronization failed');
      //     console.error(error);
      //   });
    },

  },
};
</script>

<style lang="scss" scoped>
@import "../assets/variables.scss";

.header {
  display: flex;
  flex-flow: row nowrap;
  position: relative;
  padding: 60px 65px 5px;
  color: #ccc;
  font-weight: 100;
  font-size: 14px;
}

.link-create {
  padding: 5px;
  display: inline-block;
  vertical-align: top;
  margin-right: 15px;
  background: none;
  border: none;
  cursor: pointer;

  &--main {
    margin-left: auto;
  }

  &--release {
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
