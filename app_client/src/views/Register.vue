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
              <span class="text-uppercase font-weight-medium login__box--title">Register Now</span>
              <small class="caption login__box--caption">Create your account and enjoy</small>
            </h5>
            <v-card-text>
              <v-text-field class="login_form--control" clearable v-model="email" :rules="emailRules" prepend-icon="email" name="email" label="Email" type="email" required autocomplete="off"></v-text-field>
              <v-text-field class="login_form--control" clearable v-model="username" :rules="usernameRules" prepend-icon="person" name="username" label="Username" type="text" required autocomplete="off"></v-text-field>
              <v-text-field class="login_form--control" clearable v-model="password" :rules="passwordRules" prepend-icon="lock" name="password" label="Password" type="password" required autocomplete="off"></v-text-field>
              <v-text-field class="login_form--control" clearable v-model="password_confirmation" :rules="pcRules" prepend-icon="lock_outline" name="password_confirmation" label="Confirm Password" type="password" required autocomplete="off"></v-text-field>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                flat
                type="submit"
                color="info">
                Register
              </v-btn>
            </v-card-actions>
            <v-card-text>
              <p class="login__form--footer">
                Already have an account?
                <router-link to="login">
                  Sign In
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
import AuthenticationService from '@/services/AuthenticationService'
import AnonLogo from '@/components/AnonLogo'
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
      username: 'qq',
      // username: '',
      usernameRules: [
        v => !!v || 'Username is required',
        v => v.length >= 2 || 'Username must be greater than 2 characters'
      ],
      // password: 'qq',
      password: '',
      passwordRules: [
        v => !!v || 'Password is required',
        v => /^[a-zA-Z0-9]{2,32}$/.test(v) || 'Passwords must contain ONLY the following characters: lower case, upper case, numerics',
        v => v.length >= 2 || 'Password must be greater than 2 characters'
      ],
      // password_confirmation: 'qq',
      password_confirmation: '',
      pcRules: [
        v => !!v || 'Password confirmation is required',
        v => v === this.password || 'Password does not match'
      ]
    }
  },
  created () {
    this.$store.dispatch('setHideToolbar', false)
  },
  methods: {
    async login () {
      const tokenParms = {
        auth: {
          email: this.email,
          password: this.password
        }
      }
      try {
        const usrToken = await AuthenticationService.login(tokenParms)
        this.$store.dispatch('setUser', {
          username: this.username,
          email: this.email
        })
        this.$store.dispatch('setToken', usrToken.data.jwt)
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
        const user = {
          user: {
            email: this.email,
            username: this.username,
            password: this.password,
            password_confirmation: this.password_confirmation,
            admin: false
          }
        }
        try {
          await AuthenticationService.register(user)
          this.login()
        } catch (error) {
          this.$store.dispatch('setAlert', error.response.data)
        }
      }
    }
  },
  components: {
    AnonLogo
  }
}
</script>
<style lang="scss">
@import '../assets/scss/variables';
.login {
  background-image: url(../assets/register-bg.jpeg);
  // background: url(../assets/register-bg.jpeg);
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  filter: blur(2px) grayscale(0.7);
  &__card {
    position: absolute;
    right: 0;
    margin: 0 auto;
    height: 100%;
    width: 400px;
  }
  &__box {
    padding: 25px;
    margin-bottom: 30px;
    &--title {
      letter-spacing: 0.03em;
    }
    &--caption {
      font-weight: 300;
      display: block;
      line-height: 1.5;
    }
  }
  &__form {
    .v-text-field__slot {
      font-size: 14px !important;
    }
    .v-input .v-label {
      font-size: 14px !important;
      color: #96a2b4;
    }
    &--footer {
      margin-bottom: 0;
      a {
        color: $accent;
        text-decoration: none;
      }
    }
  }
}
</style>
