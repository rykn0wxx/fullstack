import Api from '@/services/Api'

export default {
  index () {
    return Api.auth().get('users')
  },
  show (userId) {
    return Api.auth().get(`users/${userId}`)
  },
  update (userParms) {
    return Api.auth().put(`users/${userParms.id}`, userParms)
  },
  delete (userId) {
    return Api.auth().delete(`users/${userId}`)
  }
}
