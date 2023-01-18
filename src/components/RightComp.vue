<template>
    <div>
        <section>
            <div class="box-right  container ">
                <div class="row">
                    <div class="col poke-info mt-5">
                        <ul class="text-end" >
                            <li><b>Name:</b>{{singlePokemon.name}}</li>
                            <li><b> N^</b>{{singlePokemon.id}}</li>
                            <li><b>Description: <br></b>{{descriptionAppvue}}</li>
                            <li v-for="elem,ind in pokeType " :key="ind"><b>Type:</b>{{elem.type.name}}</li>
                            <li><b>Height:</b> {{singlePokemon.height * 10}} cm </li>
                            <li><b>Weight:</b> {{singlePokemon.weight / 10}} kg </li>
                        </ul>

                    </div>
                </div>
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
.poke-info{

    border: 1px solid black;
}
</style>