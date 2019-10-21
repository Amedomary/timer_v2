<template lang="pug">
.alert(v-show='$store.state.countdown.alertIsOpen')
    .alert-text
        span Готово! Теперь ваша страница доступна по адресу:
        a.alert-link(href='', title='', ref="alertLink") amedomary.tmweb.ru/1
</template>

<script>
export default {
  name: 'Alert',
};
</script>

<style lang="scss" scoped>
.alert {
    display: flex;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 55000;
    background-color: rgba(0, 0, 0, 0.95);
    text-align: center;
    font-size: 40px;
    padding: 15px;

    &-text {
      margin: auto;
      max-width: 700px;
    }

    &-link {
      margin-top: 15px;
      display: block;
      color: #ed1c8a;
    }
  }
</style>
