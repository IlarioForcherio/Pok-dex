<template>
    <div>
        <section>
            <div class="box-right">
    
                <div>{{singlePokemon.id}}</div>
            </div>
    
        </section>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RightComp',
    components: {

    },
    props: {
        singlePokemon: Object
    },
    data() {
        return {
            singleId: {},
            descriptionText: [],
        }
    },
    mounted() {
        this.pokemonId()

    },
    methods: {

        pokemonId() {
            
            this.singleId = this.singlePokemon.id
            console.log(this.singleId)
            
            axios.get("https://pokeapi.co/api/v2/pokemon-species/" +  this.singleId  + "/")
            .then((response) => {
                
                console.log(response.data)

                this.descriptionText = response.data.flavor_text[0]

                console.log(this.descriptionText)

            })
        }
    },

}
</script>

<style lang="scss" scoped>
.box-right {
    height: 500px;
    width: 300px;
    border: 1px solid black;
}
</style>