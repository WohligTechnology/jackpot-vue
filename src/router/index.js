import Vue from 'vue'
import Router from 'vue-router'
import JackpotScreen from '@/components/JackpotScreen'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/:gameType',
      name: 'Jackpot Screen',
      component: JackpotScreen
    }
  ]
})
