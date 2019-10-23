<template lang="pug">
.clock(v-if="$store.state.countdown.appState === 'loading'")
    p ГРУЖУ

.clock(v-else-if="$store.state.countdown.appState === 'error'")
    p 404

//- если загрузилось
.clock(:class='vueClockClass', @click='editClock', v-else)
    span.month {{ cl_month }}
    span.day
        span {{ cl_days }}
        i.title {{ cl_days_title }}
    span.hour {{ cl_hours }}
    span.slash :
    span.minutes {{ cl_minutes }}
    span.minutes :
    span.minutes {{ cl_seconds }}

    //- +icon('pen-solid').--clock-edit TODO::
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
                a.clock-form-link--done(href='javascript:void(0)', title='', @click='acceptEditClock' tabindex="0") Готово

</template>

<script>
export default {
  name: '',
  data() {
    return {
      vueClockClass: '',
      // Таймер =================
      finishDate: '1575765288276', // (year, month, date, hours, minutes, seconds, ms)
      monthName: '',

      interval: '',
      intervalInit: '',
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
    // запускаем таймер
    startTimer() {
      this.intervalInit = this.clockFunc();
      this.interval = setInterval(() => {
        this.clockFunc();
      }, 1000);
    },
    // Clock ================
    clockFunc() {
      // // создаём дату новую
      const nowDate = new Date();

      const result = (this.finishDate - nowDate); // получаем разницу
      //   this.finishDate instanceof Date && !isNaN(this.finishDate);

      // Если таймер прошёл
      if (result < 0) {
        this.cl_month = "It's over";
        this.cl_days = '0';
        this.cl_hours = '00';
        this.cl_minutes = '00';
        this.cl_seconds = '00';
        this.cl_days_title = 'день';
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
        month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric',
      });
    },
    editClock() {

    },
  },
  created() {
    this.startTimer();
  },
};
</script>

<style lang="scss" scoped>
.clock {
    position: absolute;
    bottom: 50%;
    left: 20%;
    padding-bottom: 10px;
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

        .b-icon--clock-edit {
            display: block;
            transition: opacity 0.2s;
            opacity: 0.2;
        }

        &:after {
            transition: 0.2s;
        }

        .no-touchevents &:hover,
        .touchevents &:active {
            .b-icon--clock-edit {
                opacity: 0.8;
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
    margin-right: 5px;
    font-family: var(--font-mono);
    font-size: 70px;
    vertical-align: middle;
}
.slash {
    display: inline-block;
    margin-right: 5px;
    font-size: 38px;
    vertical-align: middle;
    opacity: 0.2;
}
.minutes {
    display: inline-block;
    margin-right: 5px;
    font-family: var(--font-mono);
    font-size: 40px;
    vertical-align: middle;
    opacity: 0.75;
}
.clock-form-back {
    position: absolute;
    z-index: 560;
    top: 59px;
    left: 41px;
    width: 350px;
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
    margin: 0;
    padding: 0 4px 4px 4px;
    font-size: 25px;
    border: none;
    border-bottom: 1px solid var(--accent);
    background-color: transparent;
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
    transition: opacity 0.2s, transform 0.5s;
    opacity: 0;
    color: var(--accent-light);

    .b-landing__clock.editable:not(.editing):hover & {
        transform: translateX(-25px);
        opacity: 1;
    }
}
</style>
