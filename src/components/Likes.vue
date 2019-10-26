<template lang="pug">

.likes(v-if="this.$store.state.countdown.appState === 'loading'")
  .wrapper
    span#hearContainer
      Icon.fas.fa-heart.--loading#bigHeart
    .count ---
  .text Загрузка


.likes(v-else-if="this.$store.state.countdown.appState === 'new'")
  .wrapper
    span#hearContainer
      Icon.fas.fa-heart#bigHeart
    .count {{likesCount}}
    //- .count {{$store.state.countdownData.likes}}

  .text нажми где угодно что бы лайкнуть

</template>

<script>
/* eslint-disable vars-on-top */
/* eslint-disable no-var */
/* eslint-disable no-plusplus */

import {
  TweenMax,
  Back,
  TweenLite,
  SlowMo,
} from 'gsap/TweenMax';
import _ from 'lodash';
import Icon from '@/components/Icon.vue';

export default {
  name: 'Likes',
  components: {
    Icon,
  },

  data() {
    return {
      likeAnimationWasInit: false,
      likesCount: 0,
      diffCount: 0,
    };
  },

  methods: {
    throttledMethod: _.debounce((localThis) => {
      localThis.updateStoreAndDB();
    }, 500),

    createLikeListener() {
      const container = document.getElementById('hearContainer');
      const bigHeart = document.getElementById('bigHeart');
      const heartSrc = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/183204/heart_(1).png';
      const vueThis = this;

      function clearSelection() {
        const sel = window.getSelection ? window.getSelection() : document.selection;
        if (sel) {
          if (sel.removeAllRanges) {
            sel.removeAllRanges();
          } else if (sel.empty) {
            sel.empty();
          }
        }
      }

      function R(M, m) { return m + (M - m) * Math.random(); }

      function clickForLike() {
        const newH = document.createElement('img');
        const WH = R(30, 18);
        const newDs = [];
        const newRingArr = [];

        function heartAnim(e1, e34, e35) {
          const dur = R(4.5, 2);
          const Path = [];
          const Y = R(-200, -500);
          const xStep = Math.floor(R(5, 2));

          for (let i = 1; i < xStep; i += 1) { Path.push({ x: R(60, -60), y: i * (Y / xStep) }); }
          TweenLite.to(e1, dur, {
            scale: 0.3,
            bezier: { curviness: 1.5, values: Path, autoRotate: 90 },
            onComplete() { container.removeChild(e1); },
          });
          TweenLite.to(e1, dur - 0.2, { force3D: true, opacity: 1, ease: SlowMo.ease.config(0.1, 0.8, true) });
          TweenMax.staggerTo(e34, R(3.5, 1.5), {
            force3D: true,
            opacity: 0,
            scale: 0,
            cycle: {
              bezier() {
                const nPath = [];
                for (let i = 1; i < xStep; i += 1) { nPath.push({ x: R(60, -60), y: i * (Y / xStep) }); }
                return { curviness: 1.5, values: nPath };
              },
            },
          }, R(0.5, 0), () => { for (let i = 3; i--;) { container.removeChild(e34[i]); } });
          TweenMax.staggerTo(e35, R(3.5, 1.5), {
            force3D: true,
            opacity: 0,
            scale: 0,
            cycle: {
              bezier() {
                const nPath = [];
                for (let i = 1; i < xStep; i += 1) { nPath.push({ x: R(60, -60), y: i * (Y / xStep) }); }
                return { curviness: 1.5, values: nPath };
              },
            },
          }, R(0.5, 0), () => { for (let i = 3; i--;) { container.removeChild(e35[i]); } });
        }

        TweenMax.fromTo(bigHeart, 0.15, { scale: 1 }, {
          scale: 0.75, repeat: 1, yoyo: true, ease: Back.easeIn.config(7),
        });

        for (var nRing, newDot, i = 3; i--;) {
          newDot = document.createElement('div');
          newDot.className = 'dots';
          newDs.push(newDot);
          container.insertBefore(newDot, bigHeart);

          nRing = document.createElement('div');
          nRing.className = 'circ';
          newRingArr.push(nRing);
          container.insertBefore(nRing, bigHeart);
        }

        clearSelection();
        vueThis.clickLikeFromDom();
        // -----------------------
        newH.src = heartSrc;
        newH.className = 'hearts';
        TweenLite.set(newH, { width: WH, height: WH });
        container.insertBefore(newH, bigHeart);
        heartAnim(newH, newDs, newRingArr);
      }

      document.getElementsByClassName('background')[0].addEventListener('click', clickForLike);
      document.getElementsByClassName('likes')[0].addEventListener('click', clickForLike);
    },

    clickLikeFromDom() {
      this.likesCount += 1;
      this.diffCount += 1;
      this.throttledMethod(this);
    },

    updateStoreAndDB() {
      let countLike; // init
      // получаем лайки, прибавляем диф, и если фсё ок сбрасываем диф
      this.$store.state.firebaseDB.ref('pages/0/likes').once('value')
        .then((e) => {
          countLike = e.val() + this.diffCount;
          this.$store.state.firebaseDB.ref('pages/0/likes').set(countLike)
            .then(() => {
              this.$store.state.countdownData.likes = countLike;
              this.likesCount = countLike;
              this.diffCount = 0; // сбрасываем диф
            })
            .catch((error) => {
              console.error(error);
            });
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  mounted() {
    this.$store.subscribe((mutation, state) => {
      if (state.countdown.appState === 'new' && !this.likeAnimationWasInit) {
        this.likeAnimationWasInit = true;
        this.likesCount = this.$store.state.countdownData.likes;

        setTimeout(() => {
          this.createLikeListener();
        }, 100);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.likes {
  position: absolute;
  bottom: 45px;
  left: 60px;
  cursor: default;
  padding: 6px;

  &:hover {
    .text {
      opacity: .7;
    }
  }
}

.wrapper {
  display: flex;
  align-items: center;
}

.count {
  font-size: 14px;
}

.icon {
  font-size: 18px;
  color: #ff4f4f;

  &.--loading {
    color: #999;
  }
}

.text {
  margin-top: 5px;
  font-size: 10px;
  line-height: 10px;
  opacity: 0;
  transition: .2s;
  cursor: default;
}

#hearContainer {
  position: relative;
  margin-right: 8px;
}

// .dots {
//   width: 7px;
//   height: 7px;
//   position: absolute;
//   left: 50%;
//   top: 50%;
//   background-color:red;
//   border-radius: 50%;
// }

</style>
