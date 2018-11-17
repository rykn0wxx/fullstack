<template>
  <v-app dark>
    <AlertMessages />
    <TopBar v-if="hideToolbar" />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import AlertMessages from '@/components/AlertMessages'
import TopBar from '@/components/TopBar'

export default {
  name: 'App',
  data () {
    return {
      hideToolbar: false
    }
  },
  components: {
    TopBar,
    AlertMessages
  },
  created () {
    this.$store.watch(
      (state) => {
        return this.$store.state.hideToolbar
      },
      (newValue, oldValue) => {
        this.hideToolbar = newValue
      },
      {
        deep: true
      }
    )
    this.$store.dispatch('setHideToolbar', true)
    this.hideToolbar = true
  }
}
</script>
<style lang="scss" scoped>

</style>
