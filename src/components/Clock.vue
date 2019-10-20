<template lang="pug">
.clock
    span.month 1
    span.day
        span 2
        i.title 3
    span.hour 4
    span.slash 5
    span.minutes 6
    span.minutes 7
    span.minutes 8 TODO

//- .clock(:class='vueClockClass', @click='editClock')
    span.month {{ cl_month }}
    span.day
        span {{ cl_days }}
        i.title {{ cl_days_title }}
    span.hour {{ cl_hours }}
    span.slash(v-if="!stateApp.preLoadingApp") :
    span.minutes {{ cl_minutes }}
    span.minutes(v-if="!stateApp.preLoadingApp") :
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
    font-family: "Nova Mono";
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
    font-family: "Nova Mono";
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
    font-family: "Nova Mono";
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
</style>
