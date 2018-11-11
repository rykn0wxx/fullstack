<template>
  <v-container fluid fill-height>
    <v-layout align-end align-center justify-end>
      <v-card class="elevation-12 card-form">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Register Form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-form :action="action" :method="method" name="user" ref="form" v-model="valid" @submit="submit">
          <v-card-text>
            <v-text-field v-model="email" :rules="emailRules" prepend-icon="email" name="email" label="Email" type="email" required></v-text-field>
            <v-text-field v-model="username" :rules="usernameRules" prepend-icon="person" name="username" label="Username" type="text" required></v-text-field>
            <v-text-field v-model="password" :rules="passwordRules" prepend-icon="lock" name="password" label="Password" type="password" required></v-text-field>
            <v-text-field v-model="password_confirmation" :rules="pcRules" prepend-icon="lock_outline" name="password_confirmation" label="Confirm Password" type="password" required></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              type="submit"
              color="primary">
              Register
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-layout>
  </v-container>
</template>
<script>
import Api from '@/services/Api'
export default {
  data () {
    return {
      valid: false,
      email: 'qq@qq.com',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      username: 'qq',
      usernameRules: [
        v => !!v || 'Username is required',
        v => v.length >= 2 || 'Username must be greater than 2 characters'
      ],
      password: 'qq',
      passwordRules: [
        v => /^[a-zA-Z0-9]{2,32}$/.test(v) || 'Passwords must contain ONLY the following characters: lower case, upper case, numerics',
        v => v.length >= 2 || 'Password must be greater than 2 characters'
      ],
      password_confirmation: 'qq',
      pcRules: [
        v => v === this.password || 'Password does not match'
      ]
    }
  },
  props: {
    method: String,
    action: String
  },
  methods: {
    submit (e) {
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
        Api().post(`${this.action}`, user)
        console.log(user)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.card-form {
  min-width: 400px;
}
</style>
