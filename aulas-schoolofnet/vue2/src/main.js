import Vue from 'vue'
// import App from './App.vue'

import {Time} from './time';

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

new Vue({
  el: '#app',
  data: {
  	times: [
  		new Time('America MG' , require('./assets/america_mg_60x60.png')),
  		new Time('Atlético PR' , require('./assets/atletico-pr_60x60.png')),
  	],
  	alfabeto: {
  		a: 'A',
  		b: 'B',
  		c: 'C',
  		d: 'D',
  	}
  }
  // render: h => h(App)
})
