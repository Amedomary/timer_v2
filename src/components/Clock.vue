<template lang="pug">
.clock(v-if="checkState('loading')")
    span.month Загрузка
    span.day
        span ?
        i.title
    span.hour ??
    span.slash :
    span.minutes ??
    span.slash :
    span.minutes ??

.clock(v-else-if="checkState('fail')")
    span.month -
    span.day
        span -
        i.title
    span.hour --
    span.slash :
    span.minutes --
    span.slash :
    span.minutes --

//- если загрузилось
.clock(
    :class="{ editable: checkState('editing') }"
    @click='editClock'
    v-else
)
    span.month {{ cl_month }}
    span.day
        span {{ cl_days }}
        i.title {{ cl_days_title }}
    span.hour {{ cl_hours }}
    span.slash :
    span.minutes {{ cl_minutes }}
    span.slash :
    span.minutes {{ cl_seconds }}

    i.icon-clock-edit
        Icon.fas.fa-pen
    span.clock-legend Изменить дату

    .clock-form-back(v-if='stateEditClock')
        form.clock-form
            p.clock-title Когда мне остановить отсчёт?
            label.clock-label(for='clock_input_date') Дата:
            input.clock-input(ref='elClockInputDate', id='clock_input_date', type='date', tabindex='0')
            label.clock-error(for='clock_input_date' v-if='clockDateInputError') Выберите день
            label.clock-label(for='clock_input_time') Время:
            input.clock-input(ref='elClockInputTime', id='clock_input_time', type='time', tabindex='0')
            label.clock-error(for='clock_input_time' v-if='clockTimeInputError') Выберите время

            .clock-form-link-wrap
                a.clock-form-link(href='javascript:void(0)', title='', @click='cancelEditClock' tabindex="0") Отмена
                a.clock-form-link.clock-form-link--done(href='javascript:void(0)', title='', @click='acceptEditClock' tabindex="0") Готово

</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: '',
  components: {
    Icon,
  },
  data() {
    return {
      // Таймер =================
      finishDate: '', // (year, month, date, hours, minutes, seconds, ms)
      monthName: '',

      cl_month: '',
      cl_days: '',
      cl_hours: '',
      cl_minutes: '',
      cl_seconds: '',
      cl_days_title: '',

      clockDateInputError: false,
      clockTimeInputError: false,
      stateEditClock: false,
    };
  },
  methods: {
    checkEditing() {
      return this.checkState('editing');
    },
    // запускаем таймер
    startTimer() {
      this.clockFunc();
      setInterval(() => {
        if (!this.checkState('editing')) {
          this.clockFunc();
        }
      }, 1000);
    },
    // Clock ================
    clockFunc() {
      // // создаём дату новую
      const nowDate = new Date();
      const result = this.finishDate - nowDate; // получаем разницу

      // Если таймер прошёл
      if (result < 0) {
        this.cl_month = "It's over";
        this.cl_days = '0';
        this.cl_hours = '00';
        this.cl_minutes = '00';
        this.cl_seconds = '00';
        this.cl_days_title = 'деней';
      } else {
        let seconds = Math.floor((result / 1000) % 60);
        let minutes = Math.floor((result / 1000 / 60) % 60);
        let hours = Math.floor((result / 1000 / 60 / 60) % 24);
        const days = Math.floor(result / 1000 / 60 / 60 / 24);

        if (seconds < 10) seconds = `0${seconds}`;
        if (minutes < 10) minutes = `0${minutes}`;
        if (hours < 10) hours = `0${hours}`;

        this.cl_month = this.monthName;
        this.cl_days = days;
        this.cl_hours = hours;
        this.cl_minutes = minutes;
        this.cl_seconds = seconds;
        this.cl_days_title = 'дней';

        if (this.cl_days <= 1) {
          this.cl_days_title = 'день';
        }
      }
    },
    createNameOfFinishDate() {
      this.monthName = this.finishDate.toLocaleString('ru-RU', {
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
      });
    },
    // включаем состояние редактирования даты
    editClock() {
      if (this.checkEditing()) {
        this.stateEditClock = true;
      }
    },
    cancelEditClock() {
      setTimeout(() => {
        // таймаут для удаления самого себя
        this.stateEditClock = false; // off состояние редактирования даты
        this.clockDateInputError = false;
        this.clockTimeInputError = false;
      }, 30);
    },
    acceptEditClock() {
      const $clockInputDate = this.$refs.elClockInputDate;
      const $clockInputTime = this.$refs.elClockInputTime;

      this.clockDateInputError = ($clockInputDate.value === '');
      this.clockTimeInputError = ($clockInputTime.value === '');

      // Проверка. Ввели-ли мы значения?
      if (!this.clockDateInputError && !this.clockTimeInputError) {
        const clockDateImputYear = Number(
          $clockInputDate.value.split('-')[0],
        );
        const clockDateImputMouth = Number($clockInputDate.value.split('-')[1]) - 1;
        const clockDateImputDay = Number(
          $clockInputDate.value.split('-')[2],
        );
        const clockDateImputHour = Number(
          $clockInputTime.value.split(':')[0],
        );
        const clockDateImputMinutes = Number(
          $clockInputTime.value.split(':')[1],
        );

        this.finishDate = new Date(
          clockDateImputYear,
          clockDateImputMouth,
          clockDateImputDay,
          clockDateImputHour,
          clockDateImputMinutes,
          0,
        );
        this.$store.state.countdownData.finishDate = this.finishDate.toString();
        this.createNameOfFinishDate();
        this.clockFunc();
        this.$store.state.countdown.unsavedChanged = true;
        // таймаут для удаления самого себя
        setTimeout(() => {
          this.stateEditClock = false;
        }, 100); // off состояние редактирования даты
      }
    },
    checkState(string) {
      return this.$store.state.countdown.appState === string;
    },
  },
  beforeMount() {
    if (this.$store.state.countdownData.heading) {
      this.finishDate = new Date(this.$store.state.countdownData.finishDate);
      this.createNameOfFinishDate();
      this.startTimer();
    }

    this.$store.subscribe((mutation, state) => {
      if (state.countdownData.heading) {
        this.finishDate = new Date(state.countdownData.finishDate);
        this.createNameOfFinishDate();
        this.startTimer();
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.clock {
    position: absolute;
    bottom: 50%;
    left: 20%;
    padding: 10px;
    font-weight: 100;

    &:after {
        position: absolute;
        right: 3px;
        bottom: -1px;
        left: 25px;
        height: 1px;
        content: "";
        background-color: #ffffff;
    }

    &.editable {
        cursor: pointer;

        .icon-clock-edit {
            display: block;
            opacity: 0.2;
        }

        &:after {
            transition: 0.2s;
        }

        &:hover {
            .icon-clock-edit {
                opacity: 1;
                color: var(--accent);
            }

            &:after {
                right: -7px;
                left: 15px;
                height: 2px;
                background-color: var(--accent);
            }
        }
    }
}
.month {
    display: block;
    margin-bottom: 12px;
    padding-left: 10px;
    font-size: 25px;
    opacity: 0.6;
}
.day {
    position: relative;
    display: inline-block;
    margin-right: 25px;
    font-family: var(--font-mono);
    font-size: 90px;
    vertical-align: middle;

    .title {
        position: absolute;
        bottom: -2px;
        left: 50%;
        font-size: 15px;
        transform: translateX(-50%);
    }
}
.hour {
    display: inline-block;
    padding: 0 3px;
    font-family: var(--font-mono);
    font-size: 70px;
    line-height: 80px;
    vertical-align: middle;
}
.slash {
    display: inline-block;
    padding: 0 3px;
    font-size: 38px;
    line-height: 80px;
    vertical-align: middle;
    opacity: 0.2;
}
.minutes {
    display: inline-block;
    padding: 0 3px;
    font-family: var(--font-mono);
    font-size: 40px;
    line-height: 80px;
    vertical-align: middle;
    opacity: 0.75;
}
.clock-form-back {
    position: absolute;
    z-index: 560;
    top: -10px;
    left: -10px;
    width: calc(100% + 20px);
    padding: 12px;
    cursor: default;
    background-color: var(--accent-back);

    &--btn {
        top: auto;
        bottom: -14px;
        left: -14px;
    }
}
.clock-form {
    padding: 24px;
    background-color: var(--accent-dark);
}
.clock-input {
    display: block;
    zoom: 1;
    width: 100%;
    margin: 0;
    padding: 0 4px 4px 4px;
    font-size: 25px;
    border: none;
    border-bottom: 1px solid var(--accent);
    background-color: transparent;
    box-shadow: none;
    color: #fff;
}
.clock-form-link-wrap {
    margin-top: 35px;
    text-align: right;
}
.clock-form-link {
    margin-left: 15px;
    text-transform: uppercase;
    opacity: 0.6;

    &--done {
        opacity: 1;
    }
}
.clock-title {
    margin: 0 0 25px 0;
    font-size: 12px;
    text-transform: uppercase;
}
.clock-label {
    display: block;
    margin-top: 25px;
    font-size: 14px;
    color: var(--accent);
}
.clock-error {
    padding: 5px;
    font-size: 12px;
    text-transform: uppercase;
    color: red;
}
.clock-legend {
    position: absolute;
    bottom: -25px;
    left: 40px;
    transition: opacity 0.2s, transform 0.3s;
    opacity: 0;
    color: var(--accent-light);

    .clock.editable:not(.editing):hover & {
        transform: translateX(-25px);
        opacity: 1;
    }
}
.icon-clock-edit {
    display: none;
    position: absolute;
    font-size: 18px;
    top: 59px;
    left: -48px;
    padding: 20px 30px 20px 10px;
    transition: 0.2s;
}
</style>
