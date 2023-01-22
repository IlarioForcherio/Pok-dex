import Vue from 'vue'
import App from './App.vue'

//bootstrap 

import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/pok-dex/node_modules/bootstrap/dist/css/bootstrap.rtl.min.css'
import '/Users/ilarioforcherio/Desktop/BOOLEAN/esercizi/Vue-Cli/pok-dex/node_modules/bootstrap/dist/js/bootstrap.min.js'

//font-awsome

/* import the fontawesome core */
  import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
/*Import icone solid */
  import { faUserSecret,faQuoteLeft,faMagnifyingGlass,faCircle,faSortUp,faSortDown,faCaretLeft,faCaretRight}  from '@fortawesome/free-solid-svg-icons'

/*Import icone regular */
  import { faFaceSmile, } from '@fortawesome/free-regular-svg-icons'
  import { faFacebook,faTwitter,faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
  library.add(faUserSecret,faFaceSmile,faQuoteLeft,faMagnifyingGlass,faFacebook,faTwitter,faInstagram,faCircle,faSortUp,faSortDown,faCaretLeft,faCaretRight)
 
// <font-awesome-icon icon="fa-brands fa-facebook" />
/* <font-awesome-icon icon="fa-brands fa-twitter" /> */
//<font-awesome-icon icon="fa-brands fa-instagram" />
/* <font-awesome-icon icon="fa-regular fa-circle" /> */
/* <font-awesome-icon icon="fa-solid fa-circle" /> */

//cross

{/* <font-awesome-icon icon="fa-solid fa-sort-up" /> */}
{/* <font-awesome-icon icon="fa-solid fa-sort-down" /> */}
{/* <font-awesome-icon icon="fa-solid fa-caret-left" /> */}
{/* <font-awesome-icon icon="fa-solid fa-caret-right" /> */}
 


// https://github.com/sylar9696/live-coding-cl-77/tree/main/37-vue-cli-axios

//ATTENZIONE: se la stessa icona viene importata con due stili diversi ad esempio: regular e solid, non possiamo usare lo stesso nome per le due icone ma dobbiamo //usare un rieticchetamento con "as", il codice diverrà:

  /* add font awesome icon component */
  Vue.component('font-awesome-icon', FontAwesomeIcon)
    
    

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
