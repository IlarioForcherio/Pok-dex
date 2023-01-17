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
//import axios from 'axios'

export default {
    name: 'RightComp',
    components: {

    },
    props: {
        singlePokemon: Object,
        
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