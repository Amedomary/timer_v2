<template lang="pug">
mixin bg-item(photo, title)
    li.wallpaper-item(data-wallpaper=`images/content/${photo}`, @click='swapImageBackground')
        figure.wallpaper-figure
            figcaption.wallpaper-title= title
            img.wallpaper-preview(loading="lazy" src=`images/content/preview/${photo}`)

aside.wallpaper-side-bar(v-if='$store.state.countdown.wallpaperIsOpen')
    button.wallpaper-close(@click='wallpaperClose')

    label.wallpaper-label(for="input_File_Background") Добавить своё изображение
    input.wallpaper-input(id='input_File_Background', type="file", name="background", @change="changeImageBackground")

    h5 Галерея:
    ul.wallpaper-list
        +bg-item('road-sun.jpg', 'Солнечная дорога')
        +bg-item('trava.jpg', 'Батанический сад')
        +bg-item('spiderman.jpg', 'Человек паук')
        +bg-item('botanik.jpg', 'Божья коровка')
        +bg-item('man.jpg', 'Смотрящий вдаль')
        +bg-item('winter.jpg', 'Зима')
        +bg-item('flower.jpg', 'Кровавый цветок')
        +bg-item('forest.jpg', 'Лес')
        +bg-item('space.jpg', 'Рассвет галактики')
        +bg-item('abstract.jpg', 'Звёздное дыханье')

</template>

<script>
export default {
  name: 'Wallpapers',
  methods: {
    swapImageBackground() {
      // TODO pick wallpapers
      this.$store.commit('switchWallpaperPick');
    },
    wallpaperClose() {
      this.$store.commit('switchWallpaperPick');
    },
  },
};
</script>

<style lang="scss" scoped>
// Фон и его смена
.wallpaper-side-bar {
    position: fixed;
    z-index: 450;
    top: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-flow: column nowrap;
    width: 20%;
    min-width: 325px;
    padding: 25px 0 0 25px;
    background: var(--accent-dark);
    // TODO: сделать скролл кастомный
}
.wallpaper-close {
    position: absolute;
    top: 25px;
    left: -15px;
    width: 43px;
    height: 43px;
    transform: translateX(-100%);
    border: 1px solid var(--accent);
    background-color: var(--accent-dark);

    &:after,
    &:before {
        position: absolute;
        top: 19px;
        left: 6px;
        display: block;
        width: 30px;
        height: 2px;
        content: '';
        transform: rotate(-45deg);
        transform-origin: center;
        background-color: var(--accent);
    }
    &:before {
        transform: rotate(45deg);
    }
}
.wallpaper-label {
    display: block;
    flex: 0 0 auto;
    width: auto;
    margin-right: 25px;
    margin-bottom: 25px;
    padding: 12px 16px;
    font-size: 15px;
    color: #ffffff;
    border: 1px solid var(--accent);
    border-radius: 0;
    background: none;
    background-color: var(--accent-dark);
}
.wallpaper-input {
    display: none;
}
.wallpaper-list {
    overflow-x: auto;
    flex: 1 1 auto;
    width: auto;
    margin-left: -20px;
    padding: 0;
    padding: 0 5px 25px 0;
}
.wallpaper-item {
    margin-bottom: 5px;
    list-style: none;
    cursor: pointer;

    .no-touchevents &:hover,
    .touchevents &:active {
        text-decoration: underline;
    }
}
.wallpaper-figure {
    position: relative;
    margin: 0;
    &:hover {
        & .b-landing__wallpaper-preview {
            filter: brightness(1.7);
        }
    }
}
.wallpaper-title {
    position: absolute;
    z-index: 800;
    top: 0;
    right: 0;
    left: 0;
    padding: 10px;
    padding-bottom: 10px;
    background-color: var(--accent-hover);
}
.wallpaper-preview {
    display: block;
    width: 100%;
    height: 160px;
    transition: filter .5s;
    object-fit: cover;
}

</style>
