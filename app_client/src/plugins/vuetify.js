import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  theme1: {
    primary: '#ee44aa',
    secondary: '#424242',
    accent: '#82B1FF',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107'
  },
  theme: {
    primary: '#3F51B5',
    secondary: '#607D8B',
    accent: '#E040FB',
    error: '#F44336',
    info: '#448AFF',
    success: '#4CAF50',
    warning: '#FF9800'
  },
  iconfont: 'md'
})
