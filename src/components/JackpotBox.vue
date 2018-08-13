<template>
    <div class="col-md-3">
        <span>{{value.name}}</span>
        <span>{{value.currentPot}}</span>
        <winner
          v-for="winner in value.previousWinners"
          v-bind:key="winner.name"
          v-bind:value="winner"
          v-if="value.previousWinners"
        ></winner>
    </div>
</template>

<script>
import Winner from '@/components/Winner'
export default {
  name: 'jackpot-box',
  components: {
    Winner
  },

  props: ['value']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
