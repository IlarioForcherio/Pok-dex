<template>
    <div>
        <section>
            <div class="box-left">
                <input type="text" v-model="inputTextLeftComp" @keyup.enter="$emit('emitInputTextLeftComp', inputTextLeftComp  ), visualize = true ">
                <div>{{singlePokemon.name}}</div>
                <img v-if='visualize' :src='singlePokemon.sprites.front_shiny' alt="">
            </div>
        </section>
    </div>
</template>

<script>
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
            visualize: false
        }
    },
    mounted() {

    },
    methods: {

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