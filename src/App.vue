<template>
    <div id="app">
    
        <div class="d-flex justify-content-center">
            <LeftComp @emitInputTextLeftComp="searchPokemon" :singlePokemon="singlePokemon" :descriptionArrayAppvue='descriptionArray' />
            <RightComp :singlePokemon="singlePokemon"  />
              <div>{{description}}</div>
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
        }
    },
    mounted() {
        this.searchPokemon()
      

    },
    methods: {



        searchPokemon(inputTextLeftComp) {

            this.inputTextAppue = inputTextLeftComp

            if (this.inputTextAppue == undefined) {
                
                // axios.get(" https://pokeapi.co/api/v2/pokemon/bulbasaur/")
                //     .then((resp) => {
                //         this.singlePokemon = resp.data
                //         //console.log(this.singlePokemon)
                //     })

                return
            } else {

                axios.get("https://pokeapi.co/api/v2/pokemon/" + this.inputTextAppue)
                    .then((response) => {
                       
                       //oggetto -> singolo pokemon in base all'input utente
                        this.singlePokemon = response.data
                       
                       //variabile pokeimg contiene url dell'immagine
                       this.pokeimg =  this.singlePokemon.sprites.front_shiny
                       
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
                        console.log(this.description);
                    })

        }

    },


}
</script>

<style lang="scss">
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
