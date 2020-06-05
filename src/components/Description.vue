<template lang="pug">
.description(v-if="checkState('loading')")
    h1.heading Loading
    p.description-text Please wait

.description(v-else-if="checkState('fail')")
    h2.pre-heading Ошибка загрузки
    h1.heading 404
    p.description-text Проверьте адрес страницы

.description(
    :class="{ editable: checkState('editing')}"
    v-else
)
    h2.pre-heading(
        :class='vuePreHeadingClass'
        v-if="!stateEditPreHeading"
        @click='editPreHeading'
    )
        | {{$store.state.countdownData.preHeading}}
        Icon.fas.fa-pen
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
        i.accept-edit-description.accept-edit-description--pre-heading(:class='vueAcceptEditDescription')

    //- Заголовок
    h1.heading(v-if="!stateEditHeading", @click='editHeading')
        | {{$store.state.countdownData.heading}}
        Icon.fas.fa-pen
    .description-input-wrapper(v-else)
        input.heading(ref='elInputHeading', id='elInputHeading', type='text', placeholder='Ваш заголовок', name='', v-model="headingMessage", @blur='compleateEditHeading')
        i.accept-edit-description.accept-edit-description--heading(:class='vueAcceptEditDescription')

    //- Описание
    p.description-text(:class='vueDescriptionTextClass', v-if='!stateEditDescriptionText', @click='editDescriptionText')
        | {{$store.state.countdownData.description}}
        Icon.fas.fa-pen
    .description-input-wrapper(v-else)
        input.description-text(ref='elInputDescriptionText', id='elInputDescriptionText', type='text', placeholder='Ваше описание', name='', v-model="descriptionTextMessage", @blur='compleateEditDescriptionText')
        i.accept-edit-description.accept-edit-description--description(:class='vueAcceptEditDescription')

    //- иконка сокрытия
    a.hide-icon(@click='hideDescriptionPanel')

    .button-wrapper(:class='vueButtonClass' @click='editButton')
        Icon.fas.fa-pen
        //- div(title="", class="addeventatc b-button b-button--flower")
        a.button(target="_blank" :href="flowerButton.link")
            span {{ flowerButton.text }}

    .clock-form-back(v-if='stateEditButton').clock-form-back--btn
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
import Icon from "@/components/Icon.vue";

export default {
  name: "Description",
  components: {
    Icon
  },
  data() {
    return {
      //   descriptionPanel: 'hide',
      vuePreHeadingClass: "",
      vueAcceptEditDescription: "",
      vueDescriptionTextClass: "",
      vueButtonClass: "",

      stateEditPreHeading: false, // изменяется ли под-Заголовок
      stateEditHeading: false, // изменяется ли Заголовок
      stateEditDescriptionText: false, // изменяется ли Описание
      stateEditClock: false, // изменяются ли часы
      stateEditButton: false, // изменяют ли кнопку?

      wallpaperSideBarOpen: false, // Открыт ли сайд бар для фона

      headingMessage: "", // текст заголовка
      lastEditHeadingMessage: "",
      oldHeadingMessage: "", // ячейка для сохранения предыдущего текста
      newHeadingMessage: "", // ячейка для нового текста

      descriptionTextMessage: "", // текст описания
      lastEditDescriptionTextMessage: "", // описание предыдущего сохранения
      oldDescriptionTextMessage: "", // ячейка для сохранения предыдущего описания во время редактирования
      newDescriptionTextMessage: "", // ячейка для нового описания

      preHeadingMessage: "", // текст пред Заголовка
      lastEditPreHeadingMessage: "",
      oldPreHeadingMessage: "", // ячейка для сохранения предыдущего пред Заголовка
      newPreHeadingMessage: "", // ячейка для нового пред Заголовка

      flowerButton: {
        text: "Подать заявку", // текст описания
        lastEditText: "", // описание предыдущего сохранения
        oldText: "", // ячейка для сохранения предыдущего описания во время редактирования
        newText: "", // ячейка для нового описания
        link: "", // текст описания
        lastEditLink: "", // описание предыдущего сохранения
        oldLink: "", // ячейка для сохранения предыдущего описания во время редактирования
        newLink: "", // ячейка для нового описания
        textInputError: false,
        linkInputError: false
      }
    };
  },
  methods: {
    hideDescriptionPanel() {
      console.log("hideDescriptionPanel");
    },

    editPreHeading() {
      if (this.checkState("editing")) {
        this.stateEditPreHeading = true;
        this.oldPreHeadingMessage = this.$store.state.countdownData.preHeading; // Запоминаем старое название
        this.preHeadingMessage = ""; // и меняем текст в форме на пустое

        // ищем вновь созданый инпут и добавляем в него курсор
        setTimeout(() => {
          this.$refs.elInputPreHeading.focus();
          const thisVue = this;
          this.$refs.elInputPreHeading.oninput = () => {
            if (thisVue.preHeadingMessage === "") {
              thisVue.vueAcceptEditDescription = "";
            } else {
              thisVue.vueAcceptEditDescription = "accept";
            }
          };
        }, 100);
      }
    },
    compleateEditPreHeading() {
      if (this.checkState("editing")) {
        this.stateEditPreHeading = false;
        this.vueAcceptEditDescription = "";
        this.$store.state.countdownData.preHeading = this.preHeadingMessage;

        // если форма пустая и не такая же
        if (this.$store.state.countdownData.preHeading === "") {
          this.$store.state.countdownData.preHeading = this.oldPreHeadingMessage;
        } else {
          this.$store.state.countdown.unsavedChanged = true;
        }
      }
    },

    vueHeadingClass() {
      console.log("vueHeadingClass"); // todo
    },

    // Начинаем редактировать заголовок
    editHeading() {
      if (this.checkState("editing")) {
        this.stateEditHeading = true;
        this.oldHeadingMessage = this.$store.state.countdownData.heading; // Запоминаем старое название
        this.headingMessage = ""; // и меняем текст в форме на пустое

        // ищем вновь созданый инпут и добавляем в него курсор
        setTimeout(() => {
          this.$refs.elInputHeading.focus();
          const thisVue = this;
          this.$refs.elInputHeading.oninput = () => {
            if (thisVue.headingMessage === "") {
              thisVue.vueAcceptEditDescription = "";
            } else {
              thisVue.vueAcceptEditDescription = "accept";
            }
          };
        }, 100);
      }
    },
    // Сохроняем редактирование
    compleateEditHeading() {
      if (this.checkState("editing")) {
        this.stateEditHeading = false;
        this.vueAcceptEditDescription = "";
        this.$store.state.countdownData.heading = this.headingMessage;

        // если форма пустая и не такая же
        if (this.$store.state.countdownData.heading === "") {
          this.$store.state.countdownData.heading = this.oldHeadingMessage;
        } else {
          this.$store.state.countdown.unsavedChanged = true;
        }
      }
    },

    editDescriptionText() {
      if (this.checkState("editing")) {
        this.stateEditDescriptionText = true;
        this.oldDescriptionTextMessage = this.$store.state.countdownData.description; // Запоминаем старое название
        this.descriptionTextMessage = ""; // и меняем текст в форме на пустое

        // ищем вновь созданый инпут и добавляем в него курсор
        setTimeout(() => {
          this.$refs.elInputDescriptionText.focus();
          const thisVue = this;
          this.$refs.elInputDescriptionText.oninput = () => {
            if (thisVue.descriptionTextMessage === "") {
              thisVue.vueAcceptEditDescription = "";
            } else {
              thisVue.vueAcceptEditDescription = "accept";
            }
          };
        }, 100);
      }
    },
    compleateEditDescriptionText() {
      if (this.checkState("editing")) {
        this.stateEditDescriptionText = false;
        this.vueAcceptEditDescription = "";
        this.$store.state.countdownData.description = this.descriptionTextMessage;

        // если форма пустая и не такая же
        if (this.$store.state.countdownData.description === "") {
          this.$store.state.countdownData.description = this.oldDescriptionTextMessage;
        } else {
          this.$store.state.countdown.unsavedChanged = true;
        }
      }
    },

    editButton() {
      console.log("editButton");
    },

    checkState(string) {
      return this.$store.state.countdown.appState === string;
    }
  }
};
</script>

<style lang="scss" scoped>
@mixin icon-edit-hover($mixin-top) {
  .icon {
    opacity: 0.2;
  }

  .editable & {
    position: relative;
    cursor: pointer;
    transition: color 0.2s;

    .icon {
      top: $mixin-top;
      display: block;
      transition: opacity 0.2s;
      opacity: 0.1;
    }

    &:hover {
      opacity: 1;
      color: var(--accent-light);

      .icon {
        opacity: 1;
        color: var(--accent);
      }
    }
  }
}

.description {
  position: absolute;
  right: 40px;
  // top: 52%;
  bottom: 20%;
  left: 60%;
}
.pre-heading {
  margin: 0 0 10px 0;
  padding: 0 0 0 3px;
  font-size: 12px;
  text-transform: uppercase;
  border: none;
  outline: none;
  background: none;
  text-shadow: 1px 1px 1px black;
  font-weight: normal;
  @include icon-edit-hover(-22px);
}
.heading {
  width: 400px;
  margin: 0 0 15px 0;
  padding: 0;
  font-size: 47px;
  border: none;
  outline: none;
  background: none;
  text-shadow: 1px 1px 3px black;
  font-weight: bold;

  @include icon-edit-hover(-2px);
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
  text-shadow: 1px 1px 2px black;
  font-family: var(--font-sans-serif);
  @include icon-edit-hover(-15px);
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
    content: "";
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

  @include icon-edit-hover(-58px);
}
.button {
  position: absolute;
  bottom: 0;
  display: inline-block;
  padding: 16px 22px;
  font-size: 1rem;
  line-height: 1;
  transition: 0.2s;
  text-align: center;
  text-decoration: none;
  color: #ffffff !important;
  border: 1px solid var(--accent);
  border-radius: 0;
  background-color: var(--accent-back);

  &:hover {
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
    content: "";
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

  @media (max-width: 767px) {
    position: fixed;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;

    &.fade {
      opacity: 0.1;
    }
  }
}

.icon {
  position: absolute;
  left: -50px;
  display: none;
  padding: 20px 30px 10px 10px;
  font-size: 18px;
}
</style>
