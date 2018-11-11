<template>
  <v-toolbar app class="indigo">
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
        to="register">
        <span class="mr-2">Register</span>
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
  }
}
</script>
<style lang="scss" scoped>
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
</style>
