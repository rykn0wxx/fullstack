<template>
  <v-toolbar app class="main-toolbar">
    <v-toolbar-title class="headline text-uppercase">
      <router-link
        to="/"
        class="brand">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn
        router-link
        flat
        dark
        v-if="!$store.state.isUserLogin"
        to="register">
        <span class="mr-2">Register</span>
      </v-btn>
      <v-btn
        router-link
        flat
        dark
        v-if="!$store.state.isUserLogin"
        to="login">
        <span class="mr-2">Login</span>
      </v-btn>
      <v-btn
        flat
        dark
        v-if="$store.state.isUserLogin"
        @click="userLogout">
        <span class="mr-2">Sign Out</span>
      </v-btn>
      <v-btn
        router-link
        flat
        dark
        to="theme">
        <span class="mr-2">Theme</span>
      </v-btn>
      <v-btn
        flat
        dark
        @click="clearStates">
        <span class="mr-2">Clear Alert</span>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
export default {
  data () {
    return {
      //
    }
  },
  methods: {
    userLogout () {
      this.$store.dispatch('setToken', null)
      this.$store.dispatch('setUser', null)
    },
    clearStates () {
      this.$store.dispatch('setAlert', null)
      this.$store.dispatch('setHideToolbar', true)
      console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-toolbar {
  background-color: #202124;
}
.brand {
  text-decoration: none;
  color: rgba(250,250,250,0.5);
  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1) all;
  &.router-link-exact-active {
    color: rgba(255,255,255,0.87);
  }
  &:hover {
    color: rgba(250,250,250,0.87);
  }
}
.theme--dark {
  .v-btn {
    color: #9e9e9e;
    border: 0 solid rgba(0,0,0,0);
    border-bottom: 2px solid rgba(0,0,0,0);
    letter-spacing: 0.02em;
    &--active {
      border-bottom-color: #fafafa;
      color: #fafafa;
    }
  }
}
</style>
