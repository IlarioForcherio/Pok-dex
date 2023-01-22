<template>
    <div>
        <section>
            <div class="box-left container">
                <!-- circle cnt -->
                <div class="row circle-cnt">
                    <div class="col ">
                        <div id='blueCircle'></div>
                    </div>
                    <div class="col d-flex">
                        <div>O</div>
                        <div>O</div>
                        <div>O</div>
                    </div>
                </div>
                <!-- Pokeimg -->
                <div class="row justify-content-center align-items-center g-2 poke-img">
                    <div class="col">
                        <img v-if="visualize" :src='pokeimgAppvue' alt="">
                    </div>
                </div>
                <!-- pokeInput -->
                <div class="d-flex justify-content-between align-items-center mt-5">
                    <div>
                        <input type="text" v-model="inputTextLeftComp" @keyup.enter="$emit('emitInputTextLeftComp', inputTextLeftComp, visualize = true ) ">
                    </div>
    
                    <!-- pokeCross-->
                    <div class="controls">
                        <div class="dpad">
                            <div class="up text-center"><font-awesome-icon icon="fa-solid fa-sort-up" /></div>
                            <div class="right text-end"><font-awesome-icon icon="fa-solid fa-caret-right" /></div>
                            <div class="down text-center"><font-awesome-icon icon="fa-solid fa-sort-down" /></div>
                            <div class="left"><font-awesome-icon icon="fa-solid fa-caret-left" /> </div>
                            <div class="middle"></div>
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
.box-left {
    background-color: rgb(168, 3, 3);
    height: 500px;
    width: 300px;
    border: 1px solid black;
}

input {
    width: 100%;
    height: 50px;
    background-color: green; // display: block;
}

.circle-cnt {
    height: 100px;
}

#blueCircle {
    background-color: aqua;
    border: 1px solid black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.poke-img {
    background-color: white;
    border: 3px solid black;
    height: 250px;
}

.poke-img img {
    max-width: 50%;
}






.controls {
    display: flex;
    justify-content: space-between;
    .dpad {
        position: relative;
        display: inline-block;
        width: 90px;
        height: 90px;
        z-index: 5;
        >* {
            width: 33%;
            height: 33%;
            position: absolute;
            background-color: #565e6a;
            cursor: pointer;
            i {
                position: relative;
                display: block;
                margin: 0 auto;
                text-align: center;
                height: 100%;
                font-size: 28px;
                color: #333a4a;
                text-shadow: 0px -0.5px 0px #aaa;
            }
        }
        .up {
            top: calc(0% + 4px);
            left: 33%;
            border-top: 4px solid black;
            border-left: 4px solid black;
            border-right: 4px solid black;
            border-radius: 5px 5px 0px 0px;
            &:active {
                background: linear-gradient(to top, #565e6a 0%, #333 100%);
            }
            i {
                top: -5px;
            }
        }
        .right {
            text-align: right;
            padding-left: 0px;
            top: 33%;
            left: calc(66% - 4px);
            border-top: 4px solid black;
            border-bottom: 4px solid black;
            border-right: 4px solid black;
            border-radius: 0px 5px 5px 0px;
            box-shadow: 0px -2px 0px #888 inset;
            &:active {
                background: linear-gradient(to right, #565e6a 0%, #333 100%);
            }
            .fa-caret-right {
                padding-left:15px;
                top: -5px;
            }
        }
        .down {
            top: calc(66% - 4px);
            left: 33%;
            border-left: 4px solid black;
            border-bottom: 4px solid black;
            border-right: 4px solid black;
            border-radius: 0px 0px 5px 5px;
            box-shadow: 0px -2px 0px #888 inset;
            &:active {
                background: linear-gradient(to bottom, #565e6a 0%, #333 100%);
            }
        }
        .left {
            top: 33%;
            left: calc(0% + 4px);
            border-top: 4px solid black;
            border-bottom: 4px solid black;
            border-left: 4px solid black;
            border-radius: 5px 0px 0px 5px;
            box-shadow: 0px -2px 0px #888 inset;
            i {
                top: -5px;
            }
            &:active {
                background: linear-gradient(to left, #565e6a 0%, #333 100%);
            }
        }
        .middle {
            top: 33%;
            left: 33%;
            z-index: -5;
            &::after {
                content: '';
                position: absolute;
                top: 20%;
                left: 20%;
                display: inline-block;
                border: 1px solid #6e737a;
                background: linear-gradient(to bottom, #6d7075 0%, #6d7075 30%, #23272f 70%, #23272f 100%);
                border-radius: 50%;
                height: 60%;
                width: 60%;
            }
        }
        .up-down {
            background-color: #565e6a;
            border: 4px solid black;
            border-radius: 5px;
            width: 20px;
            height: 60px;
        }
        .left-right {
            background-color: #565e6a;
            border: 4px solid black;
            border-radius: 5px;
            width: 60px;
            height: 20px;
        }
    }
}
</style>