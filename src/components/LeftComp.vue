<template>
    <div>
        <section>
            <div class="box-left container">
                <!-- circle cnt -->
                <div class="row circle-cnt">
                    <div class="col-4 mt-2">
                        <div class="d-flex justify-content-center align-items-center" id="wBorder">
                            <div id='blueCircle'>
                                <div class="reflex"></div>
                            </div>
                        </div>
                    </div>
                    <!-- topCircles -->
                    <div class="col-6 d-flex mt-3">
                        <div class="rCircle">
                            <div class="reflex"></div>
                        </div>
                        <div class="yCircle">
                            <div class="reflex"></div>
                        </div>
                        <div class="gCircle">
                            <div class="reflex"></div>
                        </div>
                    </div>
                </div>
                <!-- Pokeimg -->
    
                <div class="row">
                    <div class="col">
                        <div class="d-flex flex-column justify-content-center align-items-center poke-img-cnt">
                            <div class="d-flex p-2">
                                <div>
                                    <div class="tiny-rCircle">
                                        <div class="reflex"></div>
                                    </div>
                                </div>
                                <div>
                                    <div class="tiny-rCircle">
                                        <div class="reflex"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-flex justify-content-center align-items-center g-2 poke-img text-center">
                                <img v-if="visualize" :src='pokeimgAppvue' alt="">
                            </div>
                            <div class="p-1 d-flex ">
                                <div>
                                    <div v-for="n in 4" :key="n" class="audio-strings m-1"></div>
                                </div>
                            </div>
    
    
                        </div>
    
                    </div>
                </div>
    
    <button @click="$emit('emitInputTextLeftComp', inputTextLeftComp, visualize = true )"  class="mt-3">GO!</button>
                <!-- pokeInput -->
                <div class="d-flex justify-content-between align-items-center mt-2">
                    <div>
                        <input type="text" v-model="inputTextLeftComp" @keyup.enter="$emit('emitInputTextLeftComp', inputTextLeftComp, visualize = true ) ">
                    </div>
    
    
                    <div class="cross">
                        <div class="up">
                            <div>
                                <font-awesome-icon icon="fa-solid fa-sort-up" />
                            </div>
                        </div>
    
                        <div class="d-flex justify-content-between">
                            <div class="left">
                                <font-awesome-icon icon="fa-solid fa-caret-left" />
                            </div>
    
                            <div class="center d-flex justify-content-center align-items-center">
                                <div class="ccircle"></div>
                            </div>
    
                            <div class="right">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />
                            </div>
                        </div>
                        <div class="down">
                            <font-awesome-icon icon="fa-solid fa-sort-down" />
                        </div>
                    </div>
                </div>
            </div>
    
        </section>
    
    
        <!-- important -->
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
        pokeimgAppvue: String,

    },
    data() {
        return {

            inputTextLeftComp: '',
            visualize: false,
            pokeimg: '',

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
.box-left {
    background-color: #f90c65;
    height: 530px;
    width: 300px;
    border: 3px solid black;
    padding-bottom: 50px
}

.rCircle,
.yCircle,
.gCircle {
    height: 20px;
    width: 20px;
    border: 3px solid black;
    border-radius: 50%;
    margin-right: 5px;
}

.rCircle {
    background-color: red;
}

.yCircle {
    background-color: rgba(255, 255, 0, 0.8);
}

.gCircle {
    background-color: green;
}
button{
    border: 3px solid black;
    background-color:rgba(255, 255, 0, 0.8);
    padding: 10px;
}

input {
    width: 100%;
    height: 50px;
    background-color: #39b47d; // display: block;
    border-radius: 10px;
    border: 3px solid black;
}

.circle-cnt {
    height: 100px;
}

.reflex {
    position: relative;
    top: 15%;
    left: 15%;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    background-color: white;
}

#wBorder {
    background-color: white;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid black;
}

#blueCircle {
    position: absolute;
    background-color: aqua;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    border: 2px solid black;
}

//pokeimg
.poke-img-cnt {
    background-color: #f4f7f4;
    border: 3px solid black;
    height: 250px;
    width: 100%;
}

.poke-img {
    background-color: #99cb98;
    border: 3px solid black;
    height: 90%;
    width: 90%;
}

.poke-img img {
    max-width: 50%;
}

.tiny-rCircle {
    height: 10px;
    width: 10px;
    border: 3px solid black;
    border-radius: 50%;
    margin-right: 5px;
    background-color: red;
}

.audio-strings {
    width: 40px;
    border: 2px solid black;
}

//cross
.cross {
    
    position: relative;
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1; //border: 2px solid black;
}

.up {
    background-color: rgb(67, 66, 66);
    position: absolute;
    left: 34px;
    top: 7px;
    border: 4px solid black;
    border-bottom: 0px;
    padding-bottom: 1px;
    padding-left: 7px;
    padding-right: 7px;
    :active {
        box-shadow: 0px 5px 10px black;
    }
}

.left {
    background-color: rgb(67, 66, 66);
    position: absolute;
    left: 10px;
    top: 33px;
    border: 4px solid black;
    border-right: 0px;
    padding-right: 10px;
    padding-left: 5px;
    box-shadow: 0px -2px 0px #888 inset;
    :active {
        box-shadow: 0px 0px 10px black;
    }
}

.center {
    background-color: rgb(67, 66, 66);
    position: absolute;
    top: 35px;
    left: 35px;
    width: 28px;
    height: 28px; // border-radius: 50%;
    //border: 2px solid black;
    //border-bottom: 0px;
}

.ccircle {
    border: 2px solid black;
    width: 22px;
    height: 22px;
    margin-left:2px;
    margin-bottom:3px;
    border-radius: 50%;
    background: linear-gradient(to bottom, #6d7075 0%, #6d7075 30%, #23272f 70%, #23272f 100%);
}

.right {
    background-color: rgb(67, 66, 66);
    position: absolute;
    right: 10px;
    top: 33px;
    border: 4px solid black;
    border-left: 0px;
    padding-left: 12px;
    padding-right: 4px;
    box-shadow: 0px -2px 0px #888 inset;
    :active {
        box-shadow: 0px 0px 10px black;
    }
}

.down {
    background-color: rgb(67, 66, 66);
    position: absolute;
    bottom: 10px;
    left: 35px;
    border: 4px solid black;
    border-top: 0px;
    padding-top: 2px;
    padding-left: 7px;
    padding-right: 7px;
    box-shadow: 0px -2px 0px #888 inset;
    :active {
        box-shadow: 0px 0px 10px black;
    }
}
</style>