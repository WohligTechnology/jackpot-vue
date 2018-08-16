<template>
  <div class="winner-row font-led text-left">
    <div class="row-1">
      <span class="float-right">{{value.prizeMoney}}</span>
      <span>{{value.name}}</span>
    </div>
    <div class="row-2">
      <span class="color-1">{{value.date | moment('dMMMYY')}}</span>
      <span class="color-1">{{value.date | moment('h:mmA')}}</span>
      <span class="color-2">Table {{value.tableNumber}}</span>
      <span class="color-2">Pocket {{value.pocketNumber}}</span>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'winner',
  props: ['value'],
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
  font-size: 22px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-1 {
  font-size: 20px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.color-2 {
  font-size: 20px;
  background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
