<template lang="pug">
mixin bg-item(photo, title)
    li.wallpaper-item(data-wallpaper=`images/content/${photo}`, @click='swapImageBackground')
        figure.walpaper-figure
            figcaption.wallpaper-title= title
            img.wallpaper-preview(loading="lazy" src=`images/content/preview/${photo}`)

//- aside.wallpaper-side-bar(v-if='wallpaperSideBarOpen')
aside.wallpaper-side-bar(v-if='true')
    button.wallpaper-close(@click='wallpaperPickClose')

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
};
</script>

<style lang="scss" scoped>

</style>
