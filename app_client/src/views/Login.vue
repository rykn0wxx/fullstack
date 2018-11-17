<template>
  <v-container fluid fill-height pa-0>
    <div class="login"></div>
    <v-layout align-end align-center justify-end>
      <v-card class="login__card elevation-10">
        <div class="login__box">
          <v-form name="user" ref="form" v-model="valid" @submit="submit" class="login__form">
            <router-link to="/">
              <AnonLogo />
            </router-link>
            <h5 class="subheading">
              <span class="text-uppercase font-weight-medium login__box--title">Sign in to Admin</span>
              <small class="caption login__box--caption">Enter your details below</small>
            </h5>
            <v-card-text>
              <v-text-field class="login_form--control" clearable v-model="email" :rules="emailRules" prepend-icon="email" name="email" label="Email" type="email" required autocomplete="off"></v-text-field>
              <v-text-field class="login_form--control" clearable v-model="password" :rules="passwordRules" prepend-icon="lock" name="password" label="Password" type="password" required autocomplete="off"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                type="submit"
                color="info">
                Login
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <p class="login__form--footer">
                Don't have an account?
                <router-link to="register">
                  Sign Up
                </router-link>
              </p>
            </v-card-text>
          </v-form>
        </div>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import AnonLogo from '@/components/AnonLogo'
import AuthenticationService from '@/services/AuthenticationService'
import UserService from '@/services/UserService'
export default {
  data () {
    return {
      errors: null,
      valid: false,
      email: 'qq@qq.com',
      // email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      // password: 'qq',
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^[a-zA-Z0-9]{2,32}$/.test(v) || 'Passwords must contain ONLY the following characters: lower case, upper case, numerics',
        v => v.length >= 2 || 'Password must be greater than 2 characters'
      ]
    }
  },
  methods: {
    async getUser () {
      try {
        const user = await UserService.show(this.email)
        this.$store.dispatch('setUser', user.data)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.$store.dispatch('setAlert', error.response.data)
      }
    },
    async submit (e) {
      e.preventDefault()
      if (this.$refs.form.validate()) {
        const usrLogin = {
          auth: {
            email: this.email,
            password: this.password
          }
        }
        try {
          const usrToken = await AuthenticationService.login(usrLogin)
          this.$store.dispatch('setToken', usrToken.data.jwt)
          this.getUser()
        } catch (error) {
          this.$store.dispatch('setAlert', error.response.data)
        }
      }
    }
  },
  created () {
    this.$store.dispatch('setHideToolbar', false)
  },
  components: {
    AnonLogo
  }
}
</script>
<style lang="scss" scoped>

</style>
