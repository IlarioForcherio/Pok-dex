<template>
    <div>
        <section>
            <div class="box-right  container  ">
                <!-- pokeInfo -->
                <div class="row justify-content-center">
                    <div class="col-10  poke-info mt-2">
                        <ul class="text-end">
                            <li><b>Name:</b>{{singlePokemon.name}}</li>
                            <li><b> N^</b>{{singlePokemon.id}}</li>
                            <li>{{descriptionAppvue}}</li>
                            <li v-for="elem,ind in pokeType " :key="ind"><b>Type:</b>{{elem.type.name}}</li>
                            <!-- <li><b>Height:</b> {{singlePokemon.height * 10}} cm </li>
                            <li><b>Weight:</b> {{singlePokemon.weight / 10}} kg </li> -->
                        </ul>
                    </div>
                </div>
                <!-- blueGrid -->
                <div class="w-75 m-auto bGrid mt-4 d-flex flex-wrap justify-content-center">
                    <div v-for="n in 12" :key="n" class="bSquare"></div>
                </div>
                <!-- buttons -->
                <!-- bButton -->
                <div class="w-75 m-auto mt-2 d-flex justify-content-end">
                    <div class="ms-2 bButton"></div>
                    <div class="bButton"></div>
                </div>
    
                <div class="w-75 m-auto d-flex justify-content-between">
                    <!-- rButton -->
                    <div>
                        <div class=" mt-2 d-flex ">
                            <div class="ms-2 rButton">
                                <div class="reflex"></div>
                            </div>
                            <div class="rButton">
                                <div class="reflex"></div>
                            </div>
                        </div>
                        <!-- wSquares -->
                        <div class="d-flex" >
                            <div class="mt-2 wSquares"></div>
                             <div class="mt-2 wSquares"></div>
                        </div>
                    </div>
                    <!-- yButton -->
                    <div class="mt-3">
                        <div class="yButton">
                            <div class="reflex"></div>
                        </div>
                    </div>
                </div>
                <!-- gSlots -->
                <div class="mt-4 d-flex justify-content-between" >
                    <div class="text-center gSlot"><b>Height:</b> {{singlePokemon.height * 10}} cm </div>
                    <div class="gSlot"><b>Weight:</b> {{singlePokemon.weight / 10}} kg </div>
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
        descriptionAppvue: String,
        pokeType: Array,
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
section{
    font-family: 'Press Start 2P', cursive; 
}
li{
    list-style-type:none;
}
.box-right {
    font-size: 0.75rem;
    background-color: #f90c65;
    width: 300px;
    height: 500px;
    border: 3px solid black;
}

.poke-info {
    height: 220px;
    background-color: rgb(158, 157, 157);
    border: 1px solid black;
}

//.gGrid {}

.bSquare {
    background-color: #7ba9f9;
    width: calc(100% / 6);
    height: 30px;
    border: 1px solid black;
   box-shadow: -5px -6px 10px rgb(68, 68, 68) inset; 
}

.bButton {
    background-color: black;
    width: 40px;
    height: 8px;
}

.rButton {
    background-color: red;
    border: 3px solid black;
    width: 20px;
    height: 20px;
    border-radius: 50%;
}

.wSquares {
    background-color: white;
    border: 1px solid black;
    width: 40px;
    height: 40px;
    box-shadow: -5px -6px 12px rgb(89, 89, 89) inset; 
}

.yButton {
    background-color:rgba(255, 255, 0, 0.8);
    border: 3px solid black;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}

.reflex{
    position:relative;
    top:15%;
    left:15%;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background-color: white;
}
.gSlot{
    background-color: rgb(158, 157, 157);
    border: 1px solid black;
    width: 100px;
    height: 40px;
}


</style>