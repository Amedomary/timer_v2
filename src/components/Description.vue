<template lang="pug">
.description(v-if="!$store.state.countdownData.preHeading")
    h1.heading Загрузка
    p.description-text Пожалуйста подождите

.description(:class='descriptionPanel' v-else="$store.state.countdownData")
    h2.pre-heading(
        :class='vuePreHeadingClass'
        v-if="!stateEditPreHeading"
        @click='editPreHeading'
    )
        | {{$store.state.countdownData.preHeading}}
        //- +icon('pen-solid').--heading-edit
    .description-input-wrapper(v-else)
        input.pre-heading(
            ref='elInputPreHeading'
            id='elInputPreHeading'
            type='text'
            placeholder='Ваша локация'
            name=''
            v-model="preHeadingMessage"
            @blur='compleateEditPreHeading'
        )
        i.accept-edit-description.--pre-heading(:class='vueAcceptEditDescription')

    //- Заголовок
    h1.heading(:class='vueHeadingClass', v-if="!stateEditHeading", @click='editHeading')
        | {{$store.state.countdownData.heading}}
        //- +icon('pen-solid').--heading-edit
    .description-input-wrapper(v-else)
        input.heading(ref='elInputHeading', id='elInputHeading', type='text', placeholder='Ваш заголовок', name='', v-model="headingMessage", @blur='compleateEditHeading')
        i.accept-edit-description.--heading(:class='vueAcceptEditDescription')

    //- Описание
    p.description-text(:class='vueDescriptionTextClass', v-if='!stateEditDescriptionText', @click='editDescriptionText')
        | {{$store.state.countdownData.description}}
        //- +icon('pen-solid').--heading-edit
    .description-input-wrapper(v-else)
        input.description-text(ref='elInputDescriptionText', id='elInputDescriptionText', type='text', placeholder='Ваше описание', name='', v-model="descriptionTextMessage", @blur='compleateEditDescriptionText')
        i.accept-edit-description.--description(:class='vueAcceptEditDescription')

    //- иконка сокрытия
    a.hide-icon(@click='hideDescriptionPanel')

    .button-wrapper(:class='vueButtonClass' @click='editButton')
        //- +icon('pen-solid').--heading-edit
        //- div(title="", class="addeventatc b-button b-button--flower")
        a.button(target="_blank" :href="flowerButton.link")
            span {{ flowerButton.text }}

    .clock-form-back(v-if='stateEditButton').--btn
        form.clock-form
            p.clock-title Что будет делать главная кнопка?
            label.clock-label(for='qprmd7') Текст кнопки:
            input.clock-input(id='qprmd7', ref='elFlowerTextInput', type='text', tabindex='0')
            label.clock-error(for='qprmd7' v-if='flowerButton.textInputError') Поле не заполнено

            label.clock-label(for='vmfhu5z') Ссылка:
            input.clock-input(id='vmfhu5z', ref='elFlowerLinkInput', type='text', tabindex='0')
            label.clock-error(for='vmfhu5z' v-if='flowerButton.linkInputError') Поле не заполнено

            .clock-form-link-wrap
                a.clock-form-link(href='javascript:void(0)', title='', @click='cancelEditButton' tabindex="0") Отмена
                a.clock-form-link--done(href='javascript:void(0)', title='', @click='acceptEditButton' tabindex="0") Готово

</template>

<script>
export default {
  name: '',
  data() {
    return {
      descriptionPanel: 'hide',
      vuePreHeadingClass: '',
      vueAcceptEditDescription: '',
      vueDescriptionTextClass: '',
      vueButtonClass: '',

      stateEditPreHeading: false, // изменяется ли под-Заголовок
      stateEditHeading: false, // изменяется ли Заголовок
      stateEditDescriptionText: false, // изменяется ли Описание
      stateEditClock: false, // изменяются ли часы
      stateEditButton: false, // изменяют ли кнопку?

      wallpaperSideBarOpen: false, // Открыт ли сайд бар для фона

      headingMessage: '', // текст заголовка
      lastEditHeadingMessage: '',
      oldHeadingMessage: '', // ячейка для сохранения предыдущего текста
      newHeadingMessage: '', // ячейка для нового текста

      descriptionTextMessage: '', // текст описания
      lastEditDescriptionTextMessage: '', // описание предыдущего сохранения
      oldDescriptionTextMessage: '', // ячейка для сохранения предыдущего описания во время редактирования
      newDescriptionTextMessage: '', // ячейка для нового описания

      preHeadingMessage: '', // текст пред Заголовка
      lastEditPreHeadingMessage: '',
      oldPreHeadingMessage: '', // ячейка для сохранения предыдущего пред Заголовка
      newPreHeadingMessage: '', // ячейка для нового пред Заголовка

      flowerButton: {
        text: 'Подать заявку', // текст описания
        lastEditText: '', // описание предыдущего сохранения
        oldText: '', // ячейка для сохранения предыдущего описания во время редактирования
        newText: '', // ячейка для нового описания
        link: '', // текст описания
        lastEditLink: '', // описание предыдущего сохранения
        oldLink: '', // ячейка для сохранения предыдущего описания во время редактирования
        newLink: '', // ячейка для нового описания
        textInputError: false,
        linkInputError: false,
      },
    };
  },
  methods: {
    hideDescriptionPanel() {
      console.log('hideDescriptionPanel');
    },
    editPreHeading() {
      console.log('editPreHeading');
    },
    vueHeadingClass() {
      console.log('vueHeadingClass');
    },
    editHeading() {
      console.log('editHeading');
    },
    editDescriptionText() {
      console.log('editDescriptionText');
    },
    editButton() {
      console.log('editButton');
    },
  },
};
</script>

<style lang="scss" scoped>
.description {
    position: absolute;
    right: 40px;
    // top: 52%;
    bottom: 20%;
    left: 60%;
}
.pre-heading {
    margin: 0 0 15px 0;
    padding: 0 0 0 3px;
    font-size: 11px;
    text-transform: uppercase;
    border: none;
    outline: none;
    background: none;

    // .icon-edit-hover(-22px);
}
.heading {
    margin: 0 0 15px 0;
    padding: 0;
    font-size: 47px;
    border: none;
    outline: none;
    background: none;

    // .icon-edit-hover(-7px);
}
.description-text {
    width: 340px;
    min-height: 12px;
    margin: 0;
    margin-bottom: 70px;
    padding: 0 0 0 3px;
    font-size: 12px;
    line-height: 1.5;
    border: none;
    outline: none;
    background: none;

    // .icon-edit-hover(-27px)
}
.description-input-wrapper {
    position: relative;
}
.accept-edit-description {
    position: absolute;
    top: 0;
    left: -50px;
    display: block;
    width: 36px;
    height: 36px;
    cursor: pointer;
    border: 1px solid var(--accent);
    background-color: var(--accent-dark);

    &:after,
    &:before {
        position: absolute;
        top: 16px;
        left: 6px;
        display: block;
        width: 24px;
        height: 2px;
        content: '';
        transform: rotate(-45deg);
        transform-origin: center;
        background-color: var(--accent);
    }
    &:before {
        transform: rotate(45deg);
    }

    &--pre-heading {
        top: -10px;
    }
    &--heading {
        top: 6px;
    }
    &--description {
        top: -10px;
    }

    &.accept {
        &:before {
            top: 19px;
            left: 6px;
            width: 11px;
        }
        &:after {
            left: 12px;
            width: 19px;
        }
    }
}
.button-wrapper {
    position: relative;
    // .icon-edit-hover(-51px);
}
.button {
    position: absolute;
    bottom: 0;
    display: inline-block;
    padding: 16px 22px;
    // padding: 15px;
    // font-family: @font-base;
    // font-size: 15px;
    font-size: 1rem;
    line-height: 1;
    transition: .2s;
    text-align: center;
    text-decoration: none;
    color: #ffffff !important;
    border: 1px solid var(--accent);
    // border-width: 1px;
    // border-color: var(--accent);
    border-radius: 0;
    // border-radius: 5px;
    // background: none;
    background-color: var(--accent-back);

    &:hover {
        // font-size: 15px;
        border-color: var(--accent);
        background-color: var(--accent-hover);
    }

    &:active {
        top: auto;
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
