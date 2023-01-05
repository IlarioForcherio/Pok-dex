import Vue from 'vue'
import App from './App.vue'

//bootstrap 

import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/pok-dex/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/pok-dex/node_modules/bootstrap/dist/js/bootstrap.min.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
