<template>
    <div>
        <section>
            <div class="box-left container">
                <!-- circle cnt -->
                <div class="row circle-cnt">
                    <div class="col-4 mt-2">
                        <div id='blueCircle'></div>
                    </div>
                    <!-- topCircles -->
                    <div class="col-6 d-flex mt-3">
                        <div class="rCircle"></div>
                        <div class="yCircle"></div>
                        <div class="gCircle"></div>
                    </div>
                </div>
                <!-- Pokeimg -->
                <div class="row justify-content-center align-items-center g-2 poke-img text-center">
                    <div class="col">
                        <img v-if="visualize" :src='pokeimgAppvue' alt="">
                    </div>
                </div>
                <!-- pokeInput -->
                <div class="d-flex justify-content-between align-items-center mt-5">
                    <div>
                        <input type="text" v-model="inputTextLeftComp" @keyup.enter="$emit('emitInputTextLeftComp', inputTextLeftComp, visualize = true ) ">
                    </div>
    
                     
                    <div class="cross">
                        <div class="up d-flex">
                            <div class="prova">
                                <font-awesome-icon icon="fa-solid fa-sort-up" />
                            </div>
                        </div>
                        
                        <div class="d-flex justify-content-between">
                            <div class="left"><font-awesome-icon icon="fa-solid fa-caret-left" /></div>
                          
                              <div class="center d-flex justify-content-center align-items-center">
                                <div class="ccircle" ></div>
                                </div>   
                        
                            <div class="right"><font-awesome-icon icon="fa-solid fa-caret-right" /></div>
                        </div>
                        <div class="down"><font-awesome-icon icon="fa-solid fa-sort-down" /></div>
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
    background-color: #f90c65;
    height: 500px;
    width: 300px;
    border: 3px solid black;
    padding-bottom:50px
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
    background-color: yellow;
}

.gCircle {
    background-color: green;
}

input {
    width: 40%;
    height: 50px;
    background-color: #39b47d; // display: block;
    border-radius: 10px;
    border: 3px solid black;
}

.circle-cnt {
    height: 100px;
}

#blueCircle {
    background-color: aqua;
    border: 4px solid black;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.poke-img {
    background-color: #99cb98;
    border: 3px solid black;
    height: 250px;
}

.poke-img img {
    max-width: 50%;
}

.cross {
    position: relative;
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
   //border: 2px solid black;
}

.up {
    background-color: rgb(67, 66, 66);
    position: absolute;
    left: 34px;
    top: 6px;
    border: 4px solid black;
    border-bottom: 0px;
    padding-bottom: 1px;
    padding-left: 7px;
     padding-right: 7px;
     
     :active{
        box-shadow:0px 5px 10px black;   
      }
     
}


.left {
    background-color: rgb(67, 66, 66);
    position: absolute;
    left: 8px;
    top: 33px;
    border: 4px solid black;
    border-right: 0px;
    padding-right: 10px;
    padding-left: 5px;
    box-shadow: 0px -2px 0px #888 inset; 
    :active{

        box-shadow:0px 0px 10px black;   
      }
}


.center {
    background-color: rgb(67, 66, 66);
    position: absolute;
    top: 35px;
    left: 35px;
    width: 28px;
    height: 28px;
   // border-radius: 50%;
    //border: 2px solid black;
    //border-bottom: 0px;
}
.ccircle{
    border: 2px solid black;
    width: 22px;
    height: 22px;
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
    padding-left:12px;
    padding-right: 4px;
    box-shadow: 0px -2px 0px #888 inset;      
    :active{
        box-shadow:0px 0px 10px black;   
      }
    
}

.down {
    background-color: rgb(67, 66, 66);
    position: absolute;
    bottom: 10px;
    left:35px ;
    border: 4px solid black;
    border-top: 0px;
    padding-top:2px ;
    padding-left: 7px;
    padding-right: 7px;
    box-shadow: 0px -2px 0px #888 inset;
      :active{
        box-shadow:0px 0px 10px black;   
      }
    
}


</style>