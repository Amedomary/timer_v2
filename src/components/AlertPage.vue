<template lang="pug">
.alert(v-show='alertIsOpen')
    .alert-text
        span Готово! Теперь ваша страница доступна по адресу:
        a.alert-link(href='', title='', ref="alertLink") amedomary.tmweb.ru/1
</template>

<script>
export default {
  name: '',
};
</script>

<style lang="scss" scoped>

</style>
