<template>
    <div class="text-center jackpot-col" :class="col">
      <div class="jackpot-box">
        <div class="jackpot-box-outline">
          <div class="d-block">
            <div class="pot-money">
              <div class="pot-money-outline">
                <h1 class="font-led">
                  <ICountUp
                    :startVal="startVal"
                    :endVal="endVal"
                    :decimals="decimals"
                    :duration="duration"
                    :options="options"
                    @ready="onReady"
                  />
                  </h1>
                </div>
              </div>
            </div>
          <div class="d-block">
            <div class="game-type font-merri-bold text-uppercase">
              <h2>{{value.name}}</h2>
            </div>
          </div>
          <winner
            v-for="(winner, index) in value.previousWinners"
            v-bind:key="winner.index"
            v-bind:value="winner"
            v-if="value.previousWinners"
            :index="index"
          ></winner>
        </div>
      </div>
    </div>
</template>

<script>
import Winner from '@/components/Winner'
import ICountUp from 'vue-countup-v2'
import _ from 'lodash'

export default {
  name: 'jackpot-box',
  components: {
    Winner,
    ICountUp
  },
  watch: { // Watching route params & getting the jackpots on change
    'value.currentPot': function (val) {
      this.endVal = val
    },
    'value.previousWinners': function () {
      this.value.previousWinners = this.byDefaultThree(this.value.previousWinners)
    }
  },
  created () {
    this.value.previousWinners = this.byDefaultThree(this.value.previousWinners)
  },

  data () {
    return {
      startVal: this.value.currentPot,
      endVal: this.value.currentPot,
      decimals: 0,
      duration: 4,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
        prefix: 'RS ',
        suffix: ''
      }
    }
  },
  methods: {
    onReady: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal)
    },
    byDefaultThree (data) {
      if (data.length === 0) {
        _.times(3, function () {
          data.push({
            name: 'opace',
            date: '2018-08-18T08:09:47.545Z'
          })
        })
      } else if (data.length === 1) {
        _.times(2, function () {
          data.push({
            name: 'opace',
            date: '2018-08-18T08:09:47.545Z'
          })
        })
      } else if (data.length === 2) {
        _.times(1, function () {
          data.push({
            name: 'opace',
            date: '2018-08-18T08:09:47.545Z'
          })
        })
      }
      return data
    }
  },

  props: ['value', 'col']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pot-money h1 {
  font-size: 40px;
  background: -webkit-linear-gradient(#efff00, #f5ffbf);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  margin: 0;
}
.pot-money-outline {
  display: inline-block;
  border: 2px solid white;
  border-radius: 15px;
  padding: 12px 22px 0 25px;
  box-shadow: inset 0 0 55px rgba(255, 212, 0, 0.10);
  width: 100%;
}
.pot-money {
  display: inline-block;
  border: 2px solid #b8fbff;
  border-radius: 22px;
  padding: 6px 8px;
  box-shadow: 0 0 35px rgba(41, 242, 253, 0.5);
  background-color: #110d0e;
  margin-top: -40px;
  min-width: 75%;
}
.game-type {
  display: inline-block;
  border: 2px solid #b8fbff;
  margin-top: -2px;
  border-radius: 20px;
  padding: 10px 15px;
  box-shadow: 0 0 35px rgba(41, 242, 253, 0.5);
  margin-bottom: 20px;
  min-width: 40%;
}
.game-type h2 {
  font-size: 20px;
  background: -webkit-linear-gradient(#d19cff, #dadada);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0;
  font-weight: bold;
}
.jackpot-box {
  margin-top: 55px;
  border: 2px solid #b8fbff;
  border-radius: 30px;
  padding: 10px;
  box-shadow: 0 0 35px rgba(41, 242, 253, 0.6);
}
.jackpot-box-outline {
  border: 2px solid #b8fbff;
  border-radius: 20px;
  box-shadow: 0 0 45px rgba(41, 242, 253, 0.8);
}
</style>
