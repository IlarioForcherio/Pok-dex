<template>
    <div id="app">
    
        <div class="d-flex justify-content-center">
            <LeftComp @emitInputTextLeftComp="searchPokemon"
             :singlePokemon="singlePokemon"
             :pokeimgAppvue='pokeimg'
              />
            <RightComp 
             :singlePokemon="singlePokemon"
             :descriptionAppvue="description"
             :pokeType='type' />
        </div>
    </div>
</template>

<script>
import LeftComp from './components/LeftComp.vue'
import RightComp from './components/RightComp.vue'
import axios from 'axios'

export default {
    name: 'App',
    components: {
        RightComp,
        LeftComp,
    },
    data() {
        return {
            // input che riceve informazioni da leftComp
            inputTextAppue: '',
            // oggetto pokemon derivante da chiamata API
            singlePokemon: {},
            //array generale di tutte le descizioni
            descriptionArray: [],
            // stringa descrizione desiderata
            description:'',
            //stringa con url immagine
            pokeimg:'',

            type:[],
        }
    },
    mounted() {
        this.searchPokemon()
      

    },
    methods: {



        searchPokemon(inputTextLeftComp) {

            this.inputTextAppue = inputTextLeftComp

            if (this.inputTextAppue == undefined) {
                
                // con solo: return, se l'input che proviene da leftcomp e' undefined non da errore
                //(soluzione usata al posto di mettere una chiamata API di un pokemon "segnaposto")
                return
            
            } else {

                axios.get("https://pokeapi.co/api/v2/pokemon/" + this.inputTextAppue)
                    .then((response) => {
                       
                       //oggetto -> singolo pokemon in base all'input utente
                        this.singlePokemon = response.data
                       console.log(this.singlePokemon);
                       
                       //get types e' un aray, sara' quindi necessario ciclarlo per ottenere l'informazione del tipo
                       this.type = this.singlePokemon.types
                      
                       //variabile pokeimg contiene url dell'immagine
                       //this.pokeimg =  this.singlePokemon.sprites.front_shiny
                       this.pokeimg =  this.singlePokemon.sprites.other.dream_world.front_default
                    })
            }

              this.getDescription(inputTextLeftComp)


        },


        getDescription(inputTextLeftComp) {

           
                    
                     axios.get("https://pokeapi.co/api/v2/pokemon-species/" + inputTextLeftComp + "/")
                    .then((response) => {
                        //array dei testi
                        this.descriptionArray = response.data.flavor_text_entries
                       ////stringa attribuita a variabile description
                        this.description = this.descriptionArray[1].flavor_text
                        //console.log(this.description);
                    })

        }

    },


}
</script>

<style lang="scss">
#app {
    font-family: 'Press Start 2P',cursive;
    
   //font-family: 'VT323', monospace;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    
    color: #2c3e50;
    margin-top: 60px;
}

*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;

}
</style>
