import axios from 'axios'

const baseURL = 'http://localhost:1337/api/'

export default {
  getJackpots (gameType) {
    return axios({
      method: 'post',
      baseURL: baseURL,
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
