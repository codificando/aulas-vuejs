import Vue from 'vue'
// import App from './App.vue'

import {Time} from './time'

new Vue({
  el: '#app',
  data: {
    time: new Time('America MG' , require('./assets/america_mg_60x60.png'))
  }
  // render: h => h(App)
})
