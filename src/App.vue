<template>
    <div id="app">
    
        <div class="d-flex justify-content-center">
            <LeftComp @emitInputTextLeftComp="searchPokemon" :singlePokemon="singlePokemon" />
            <RightComp :singlePokemon="singlePokemon" />
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
            inputTextAppue: '',
            singlePokemon: {},
        }
    },
    mounted() {
        this.searchPokemon()
      
    },
    methods: {



        searchPokemon(inputTextLeftComp) {
           
           this.inputTextAppue = inputTextLeftComp

            if (this.inputTextAppue == " ") {
                axios.get( " https://pokeapi.co/api/v2/pokemon/bulbasaur/?limit=151" )
                .then((resp) => {
                    this.singlePokemon = resp.data
                })
            } else {

                axios.get("https://pokeapi.co/api/v2/pokemon/" + this.inputTextAppue + "/?limit=151")
                    .then((response) => {

                        this.singlePokemon = response.data
                        //console.log(this.singlePokemon)
                    })
            }


        },

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
