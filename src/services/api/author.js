import axios from 'axios'

export default {
  getAuthor(payload) {
    return axios.get('https://reststop.randomhouse.com/resources/authors?lastName=' + payload.lastName)
  },
}
