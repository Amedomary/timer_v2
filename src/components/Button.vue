<template lang="pug">
  a.button( :href="href" :title='title' ) {{text}}

</template>

<script>
export default {
  name: 'Button',
  props: ['text', 'href', 'title'],
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
    border-style: solid;
    border-width: 1px;
    border-color: var(--accent);
    border-radius: 0;
    background: none;
    background-color: #00000020;

    &:hover {
        font-size: 15px;
        border-color: var(--accent);
        background-color: #000000dd;
        color: var(--link-hover);
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
