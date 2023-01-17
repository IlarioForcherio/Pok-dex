<template>
    <div>
        <section>
            <div class="box-right poke-info">
                <div><b>Name:</b>{{singlePokemon.name}}</div>
                <div> <b> N^</b>{{singlePokemon.id}}</div>
                <div><b>Description:</b>{{descriptionAppvue}}</div>
                <div v-for="elem,ind in pokeType " :key="ind"><b>Type:</b>{{elem.type.name}}</div>
                <div> <b>Height:</b> {{singlePokemon.height * 10}} cm </div>
                <div> <b>weight:</b> {{singlePokemon.weight / 10}} kg </div>
            </div>
        </section>
    </div>
</template>

<script>


export default {
    name: 'RightComp',
    components: {

    },
    props: {
        singlePokemon: Object,
        descriptionAppvue:String,
        pokeType:Array,
    },
    data() {
        return {
           
            
        }
    },
    mounted() {
       

    },
    methods: {

    

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