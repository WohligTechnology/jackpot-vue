// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/styles/fonts.css'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/styles/jackpot-box.css'
import 'animate.css/animate.css'
import VueSocketio from 'vue-socket.io'

Vue.config.productionTip = false

Vue.use(VueSocketio, `http://${window.location.hostname}:1337`)

/* eslint-disable no-new */
new Vue({
  sockets: {
    connect: function () {
      console.log('Socket Connected')
    }
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
