<template>
  <div class="winner-row font-led text-left" :class="value.name">
    <div class="anime" :class="animationClass">
      <div class="row-1">
        <span class="float-right">RS {{value.prizeMoney}}</span>
        <span>{{value.name}}</span>
      </div>
      <div class="row-2">
        <div class="float-right">
          <span class="color-2">Table {{value.tableNumber}}</span>
          <span class="color-2">Pocket {{value.pocketNumber}}</span>
        </div>
        <span class="color-1">{{value.date | moment('DMMMYY')}}</span>
        <span class="color-1">{{value.date | moment('h:mmA')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'winner',
  props: ['value', 'index'],
  watch: {
    'value': function (a, b) {
      if (a.name + a.date !== b.name + b.date) {
        if (this.index === 0) {
          this.animationClass = 'pulse animated infinite'
          setTimeout(() => {
            this.animationClass = ''
          }, 30000)
        }
      }
    }
  },
  data () {
    return {
      animationClass: ''
    }
  },
  filters: {
    moment: function (value1, value2) {
      if (value1) {
        return moment(String(value1)).format(value2)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row-1 {
  font-size: 20px;
  background: -webkit-linear-gradient(#f5f5f5, #c482ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.row-2 {
  font-size: 18px;
}
.color-1 {
  background: -webkit-linear-gradient(#a0f8ff, #3ae4f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 2px;
  text-transform: uppercase;
}
.color-2 {
  background: -webkit-linear-gradient(#f6ff82, #fcfddc);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.winner-row {
  border-top: 2px solid #b8fbff;
  padding: 10px 20px;
  box-shadow: 0 -5px 15px -5px rgba(41, 242, 253, 0.8), inset 0 5px 8px -4px rgba(41, 242, 253, 0.8);
}
.opace .anime > div {
  opacity: 0 !important;
}
</style>
