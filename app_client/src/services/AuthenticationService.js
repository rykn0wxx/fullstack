import Api from '@/services/Api'

export default {
  register (cred) {
    return Api().post('users', cred)
  },
  login (cred) {
    return Api().post('user_token', cred)
  }
}