<template>
  <div>
    <smart-header v-bind:value="gameType"></smart-header>
    <span>Jackpot Screen</span>
    <div class="row">
      <jackpot-box
      ref="jackpot"
      v-for="jackpot in jackpots"
      v-bind:value="jackpot"
      v-bind:key="jackpot._id"
      ></jackpot-box>
    </div>
  </div>
</template>

<script>
import SmartHeader from '@/components/SmartHeader'
import JackpotBox from '@/components/JackpotBox'
import JackpotApi from '@/services/api/JackpotServer'
export default {
  name: 'jackpot-screen',

  components: {
    JackpotBox,
    SmartHeader
  },

  data () {
    return {
      jackpots: [],
      gameType: this.$route.params.gameType
    }
  },

  created () {
    JackpotApi.getJackpots(this.gameType)
      .then(data => {
        this.jackpots = data.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
