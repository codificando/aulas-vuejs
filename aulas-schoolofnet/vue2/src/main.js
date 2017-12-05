import Vue from 'vue'
import {Time} from './time';
import _ from 'lodash'; 

require('style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css');
require('bootstrap');

require('./assets/scss/main.scss');

let meuVue = new Vue({
  el: '#app',
  data: {
  	order: {
  		keys: ['pontos', 'gols_marcados', 'gols_sofridos'],
  		sort: ['desc', 'desc', 'asc']
  	},
  	colunas: ['nome', 'pontos', 'gols marcados', 'gols sofridos', 'saldo'],
  	filter: '',
  	times: [
  		new Time('Palmeiras', require('./assets/img/palmeiras_60x60.png')),
        new Time('Flamengo', require('./assets/img/flamengo_60x60.png')),
        new Time('Atlético-MG', require('./assets/img/atletico_mg_60x60.png')),
        new Time('Santos', require('./assets/img/santos_60x60.png')),
        new Time('Botafogo', require('./assets/img/botafogo_60x60.png')),
        new Time('Atlético-PR', require('./assets/img/atletico-pr_60x60.png')),
        new Time('Corinthians', require('./assets/img/corinthians_60x60.png')),
        new Time('Grêmio', require('./assets/img/gremio_60x60.png')),
        new Time('Fluminense', require('./assets/img/fluminense_60x60.png')),
        new Time('Ponte Preta', require('./assets/img/ponte_preta_60x60.png')),
        new Time('Chapecoense', require('./assets/img/chapecoense_60x60.png')),
        new Time('São Paulo', require('./assets/img/sao_paulo_60x60.png')),
        new Time('Cruzeiro', require('./assets/img/cruzeiro_60x60.png')),
        new Time('Sport', require('./assets/img/sport_60x60.png')),
        new Time('Curitiba', require('./assets/img/coritiba_60x60.png')),
        new Time('Internacional', require('./assets/img/internacional_60x60.png')),
        new Time('Vitória', require('./assets/img/vitoria_60x60.png')),
        new Time('Figueirense', require('./assets/img/figueirense_60x60.png')),
        new Time('Santa Cruz', require('./assets/img/santa_cruz_60x60.png')),
        new Time('América-MG', require('./assets/img/america_mg_60x60.png')),
  	],
  	novoJogo: {
	    casa: {
	        time: null,
	        gols: 0
	    },
	    fora: {
	        time: null,
	        gols: 0
		},
	},
	view: "tabela"
  },	
  methods: {
  	fimJogo() {
  		let timeAdversario = this.novoJogo.fora.time;
  		let gols = +this.novoJogo.casa.gols;
  		let golsAdversario = +this.novoJogo.fora.gols;

        this.novoJogo.casa.time.fimJogo(timeAdversario, gols, golsAdversario);
        this.showView("tabela"); 
  	},
  	createNovoJogo() {	
	  	let indexCasa = Math.floor(Math.random() * 20),
	        indexFora = Math.floor(Math.random() * 20);

	  	//Inicializando 
	  	this.novoJogo.casa.time = this.times[indexCasa];
	  	this.novoJogo.casa.gols = 0;
	  	this.novoJogo.fora.time = this.times[indexFora];
	  	this.novoJogo.fora.gols = 0;

	  	this.showView("novoJogo"); 
  	},
  	showView(view) {
  		this.view = view;
  	},
  	sortBy(coluna){
        this.order.keys = coluna;
        this.order.sort = this.order.sort == 'desc' ? 'asc': 'desc';
    }
  },
  computed: {
  	timesFiltered() {
  		let colecao = _.orderBy(this.times, this.order.keys, this.order.sort);

        return _.filter(colecao , item => {
            return item.nome.indexOf(this.filter) >= 0;
        })
  	}
  },
  filters: {
  	saldo(time) {
  		return time.gols_marcados - time.gols_sofridos;
  	},
  	uppCase(value) {
  		return value.charAt(0).toUpperCase() + value.slice(1);
  	}
  }
});
