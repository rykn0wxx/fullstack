<template>
  <HelloWorld />
</template>

<script>
import HelloWorld from '../components/HelloWorld'

export default {
  created () {
    this.$store.dispatch('setHideToolbar', true)
  },
  mounted () {
    this.$store.dispatch('setHideToolbar', true)
  },
  components: {
    HelloWorld
  }
}
</script>
