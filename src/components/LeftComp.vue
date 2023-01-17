<template>
    <div>
        <section>
            <div class="box-left">
                <input type="text" v-model="inputTextLeftComp" @keyup.enter="$emit('emitInputTextLeftComp', inputTextLeftComp, visualize = true ) ">
                <div>{{singlePokemon.name}}</div>
               
                <img v-if="visualize"  :src='singlePokemon.sprites.front_shiny' alt="">
                <!-- <img v-else :src='pokeimg' alt=""> -->
                <!-- <div  v-if="visualize"  >{{descriptionArray[1].flavor_text}}</div> -->
            </div>
        </section>
    </div>
</template>

<script>

//import axios from 'axios'

export default {
    name: 'LeftComp',
    components: {
    
    },
    props: {
        singlePokemon: Object,
        
    },
    data() {
        return {
            
            inputTextLeftComp: '',
            visualize: false,
            pokeimg:'',
           
        }
    },
    mounted() {
  
    },
    methods: {

    //  getimg(){

    //    if(this.singlePokemon.name == undefined){
        
    //     axios.get('https://pokeapi.co/api/v2/pokemon-form/bulbasaur/')
    //     .then((response)=>{
    //      //console.log(response.data.sprites.front_shiny)
    //      this.pokeimg = response.data.sprites.front_shiny
    //     })

    //    }


    //  },
             
    },

}
</script>

<style lang="scss" scoped>
.box-left {
    height: 500px;
    width: 300px;
    border: 1px solid black;
}
</style>