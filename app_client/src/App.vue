<template>
  <v-app dark>
    <TopBar />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import TopBar from '@/components/TopBar'

export default {
  name: 'App',
  components: {
    TopBar
  },
  data () {
    return {
      //
    }
  }
}
</script>
