<template lang="pug">
  a.button( href="javascript:void(0);" title='' ) Подробнее кнопка

</template>

<script>
export default {
  name: 'Button',
};
</script>

<style lang="scss" scoped>
.button {
  --accent: red;
  --accent-hover: rgba(255, 0, 0, 0.445);
  display: inline-block;
  text-decoration: none;
  font-size: 1rem;
  line-height: 1;
  padding: 15px;
  border: 1px solid white;
  border-radius: 5px;
  text-align: center;
  transition: 0.2s;
  color: #fff !important;
  background: none;
  position: relative;
  bottom: 0;
  border-radius: 0;
  border-color: var(--accent);
  border-width: 1px;
  background-color: var(--accent-back);
  font-size: 15px;
  padding: 16px 22px;

  &:hover {
      background-color: var(--accent-hover);
      font-size: 15px;
      border-color: var(--accent);
  }

  &:focus {
    border-radius: 0;
    border-color: var(--accent);
    border-width: 1px;
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 1px;
    background-color: var(--accent);
  }
  &:after {
    width: 11px;
    right: -5px;
    top: -1px;
  }
  &:before {
    height: 11px;
    top: -5px;
    right: -1px;
  }
}
</style>
