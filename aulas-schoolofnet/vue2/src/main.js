import Vue from 'vue'
// import App from './App.vue'

import {Time} from './time'

new Vue({
  el: '#app',
  data: {
    time: new Time('Time x' , 'escudo')
  }
  // render: h => h(App)
})
