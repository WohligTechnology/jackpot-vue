<template>
  <div class="full-height bg">
    <smart-header v-bind:value="gameType"></smart-header>
    <div class="container-fluid">
      <div class="row" :class="'jackpot-size-'+jackpots.length">
        <jackpot-box
        ref="jackpot"
        v-for="jackpot in jackpots"
        v-bind:value="jackpot"
        v-bind:key="jackpot._id"
        :col="col"
        ></jackpot-box>
      </div>
    </div>
  </div>
</template>

<script>
import SmartHeader from '@/components/SmartHeader'
import JackpotBox from '@/components/JackpotBox'
import JackpotApi from '@/services/api/JackpotServer'
import _ from 'lodash'

export default {
  name: 'jackpot-screen',

  components: {
    JackpotBox,
    SmartHeader
  },

  data () {
    return {
      jackpots: [],
      gameType: '',
      col: ''
    }
  },

  methods: {
    getJackpots (id) {
      JackpotApi.getJackpots(id)
        .then(data => {
          this.jackpots = data.data
        })
    },
    columnValue: function (data) {
      if (data.length > 6) {
        this.col = 'col-md-3'
      } else if (data.length === 6) {
        this.col = 'col-md-4'
      } else if (data.length === 5) {
        this.col = 'col-md-4'
      } else if (data.length === 4) {
        this.col = 'col-md-6'
      } else if (data.length === 3) {
        this.col = 'col-md-6'
      } else if (data.length === 2) {
        this.col = 'col-md-6'
      } else if (data.length === 1) {
        this.col = 'col-md-5'
      }
    }
  },

  watch: { // Watching route params & getting the jackpots on change
    '$route.params.gameType': function (gameType) {
      this.gameType = _.upperFirst(gameType)
      this.getJackpots(this.gameType)
    },
    'jackpots': function (data) {
      this.columnValue(data)
    }
  },

  created () {
    this.gameType = _.upperFirst(this.$route.params.gameType)
    this.getJackpots(this.gameType)

    const gameUpdate = this.gameType + 'Update'
    this.$options.sockets[gameUpdate] = (data) => {
      this.jackpots = data
    }

    const gameWinner = this.gameType + 'Winner'
    this.$options.sockets[gameWinner] = (data) => {
      this.jackpots = data.jackpots
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.full-height {
  min-height: 100vh;
}
.bg {
  background-image: url('./../assets/images/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>
