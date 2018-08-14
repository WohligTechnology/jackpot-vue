import axios from 'axios'

const hostname = window.location.hostname
const baseURL = `http://${hostname}:1337/api/`
axios.defaults.baseURL = baseURL

export default {
  getJackpots (gameType) {
    return axios({
      method: 'post',
      url: '/Jackpot/getJackpotForGame',
      data: {
        gameType: gameType
      }
    })
      .then(response => {
        return response.data
      })
      .catch(error => {
        return error
      })
  }
}
