import axios from 'axios'
import store from '@/store'

export default {
  base () {
    return axios.create({
      baseURL: `http://localhost:3000/`
    })
  },
  auth () {
    return axios.create({
      baseURL: `http://localhost:3000/`,
      headers: {
        ContentType: 'application/json',
        Authorization: `JWT ${store.state.token}`
      }
    })
  }
}
