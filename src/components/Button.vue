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
    position: relative;
    bottom: 0;
    display: inline-block;
    padding: 15px;
    padding: 16px 22px;
    font-size: 1rem;
    font-size: 15px;
    line-height: 1;
    transition: .2s;
    text-align: center;
    text-decoration: none;
    color: #ffffff !important;
    border-width: 1px;
    border-color: var(--accent);
    border-radius: 0;
    background: none;
    background-color: var(--accent-back);

    &:hover {
        font-size: 15px;
        border-color: var(--accent);
        background-color: var(--accent-hover);
    }

    &:focus {
        border-width: 1px;
        border-color: var(--accent);
        border-radius: 0;
    }

    &:after,
    &:before {
        position: absolute;
        width: 1px;
        height: 1px;
        content: '';
        background-color: var(--accent);
    }
    &:after {
        top: -1px;
        right: -5px;
        width: 11px;
    }
    &:before {
        top: -5px;
        right: -1px;
        height: 11px;
    }
}

</style>
