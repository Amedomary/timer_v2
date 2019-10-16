<template lang="pug">
.header
    a.link-create(@click="createTimer" href='javascript:void(0)', title='')
        span(v-if='createTimerShow')
            span Отмена
        span(v-else-if='weHaveModificateTimer')
            span Редактировать
        span(v-else)
            span Создать свой

    .link-create(@click="acceptCreateTimer", v-if='stateWasModified', href='javascript:void(0)', title='')
        span Применить изменения

    .link-create(@click="publishNewTimer", v-if='weHaveModificateTimer', href='javascript:void(0)', title='').--release
        span Опубликовать
        //- b таймер

</template>

<script>
export default {
  name: 'Header',
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
