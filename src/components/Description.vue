<template lang="pug">
.description
    h2.pre-heading heading
    h1.heading Head
    p.description-text desck

//- .description(:class='descriptionPanel')
    //- TODO: +e('span').legend Изменить описание
    h2.pre-heading(:class='vuePreHeadingClass', v-if="!stateEditPreHeading", @click='editPreHeading') {{ preHeadingMessage }}
        +icon('pen-solid').--heading-edit
    .description-input-wrapper(v-else)
        input.pre-heading(ref='elInputPreHeading', id='elInputPreHeading', type='text', placeholder='Ваша локация', name='', v-model="preHeadingMessage", @blur='compleateEditPreHeading')
        i.accept-edit-description.--pre-heading(:class='vueAcceptEditDescription')

    //- Заголовок
    h1.heading(:class='vueHeadingClass', v-if="!stateEditHeading", @click='editHeading') {{ headingMessage }}
        +icon('pen-solid').--heading-edit
    .description-input-wrapper(v-else)
        input.heading(ref='elInputHeading', id='elInputHeading', type='text', placeholder='Ваш заголовок', name='', v-model="headingMessage", @blur='compleateEditHeading')
        i.accept-edit-description.--heading(:class='vueAcceptEditDescription')

    //- Описание
    p.description-text(:class='vueDescriptionTextClass', v-if='!stateEditDescriptionText', @click='editDescriptionText') {{ descriptionTextMessage }}
        +icon('pen-solid').--heading-edit
    .description-input-wrapper(v-else)
        input.description-text(ref='elInputDescriptionText', id='elInputDescriptionText', type='text', placeholder='Ваше описание', name='', v-model="descriptionTextMessage", @blur='compleateEditDescriptionText')
        i.accept-edit-description.--description(:class='vueAcceptEditDescription')

    //- иконка сокрытия
    a.hide-icon(@click='hideDescriptionPanel')

    .button-wrapper(:class='vueButtonClass' @click='editButton')
        +icon('pen-solid').--heading-edit
        //- div(title="", class="addeventatc b-button b-button--flower")
        a(title="", class="b-button b-button--flower", target="_blank" :href="flowerButton.link")
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
      // font-family: @font-sans;
      text-transform: uppercase;
      border: none;
      outline: none;
      background: none;

      // .icon-edit-hover(-22px);
  }
  .heading {
      // font-family: @font-base;
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

</style>
