<template>
    <div class="col-md-4 text-center">
      <div class="jackpot-box">
        <div class="jackpot-box-outline">
          <div class="pot-money"><div class="pot-money-outline"><h1 class="font-led">RS
              <ICountUp
                :startVal="startVal"
                :endVal="endVal"
                :decimals="decimals"
                :duration="duration"
                :options="options"
                @ready="onReady"
              />
            </h1></div></div>
          <div class="game-type font-merri-bold text-uppercase">{{value.name}}</div>
          <winner
            v-for="winner in value.previousWinners"
            v-bind:key="winner.name"
            v-bind:value="winner"
            v-if="value.previousWinners"
          ></winner>
        </div>
      </div>
    </div>
</template>

<script>
import Winner from '@/components/Winner'
import ICountUp from 'vue-countup-v2'

export default {
  name: 'jackpot-box',
  components: {
    Winner,
    ICountUp
  },

  watch: { // Watching route params & getting the jackpots on change
    'value.currentPot': function (val) {
      this.endVal = val
    }
  },

  data () {
    return {
      startVal: 0,
      endVal: this.value.currentPot,
      decimals: 0,
      duration: 4,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: '',
        decimal: '.',
        prefix: '',
        suffix: ''
      }
    }
  },
  methods: {
    onReady: function (instance, CountUp) {
      const that = this
      instance.update(that.endVal)
    }
  },

  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pot-money h1 {
    font-size: 72px;
    background: -webkit-linear-gradient(#fff859, #848484);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    margin: 0;
  }
  .game-type {
    font-size: 32px;
    background: -webkit-linear-gradient(#d19cff, #dadada);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
