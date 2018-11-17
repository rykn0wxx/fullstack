<template>
  <div class="alerts">
    <div class="alerts__container"></div>
  </div>
</template>
<script>
import 'noty/lib/themes/relax.css'
import 'noty/lib/noty.css'
import Noty from 'noty'
import _ from 'lodash'
export default {
  created () {
    this.$store.watch(
      (state) => {
        return this.$store.state.alerts
      },
      (newValue, oldValue) => {
        if (newValue) {
          const alerts = _.compact(newValue)
          _.forEach(alerts, (alert) => {
            new Noty({
              text: alert,
              layout: 'topRight',
              type: 'error',
              theme: 'relax',
              container: '.alerts__container',
              progressBar: false,
              timeout: 2000
            }).show()
          })
          this.$store.dispatch('setAlert', null)
        }
      },
      {
        deep: true
      }
    )
  }
}
</script>
<style lang="scss" scoped>
// @import '../../node_modules/noty/lib/noty.css';
// @import '../../node_modules/noty/lib/themes/relax.css';
.alerts {
  font-family: 'Roboto', sans-serif;
  position: relative;
  &__container {
    z-index: 999999;
    margin: 0 auto;
    margin-top: 50px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 80%;
    .noty_theme__relax {
      &.noty_type__error {
        border: 0px solid rgba(0,0,0,0);
        background-color: rgba(#FF5252, 0.85);
      }
      .noty_body {
        padding: 1.1rem 15px;
        letter-spacing: 1px;
        font-weight: 700;
      }
    }
  }
  &::after {
    clear: both;
    content: '';
    display: table;
  }
}
.alert-container {
  font-family: 'Roboto', sans-serif;
  // top: 20px;
  // right: 20px;
  // width: 80%;
  // position: fixed;
  // margin: 0;
  // padding: 0;
  // z-index: 99999;
  // max-width: 90%;
  // backface-visibility: hidden;
  .noty_type__error {
    border: 0px solid rgba(0,0,0,0);
    background-color: rgba(#FF5252, 0.85);
  }
}
</style>
