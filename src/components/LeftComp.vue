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
                <div class="row mt-5">
                    <div class="col-7">
                        <input type="text" v-model="inputTextLeftComp" @keyup.enter="$emit('emitInputTextLeftComp', inputTextLeftComp, visualize = true ) ">
                    </div>
                    <div class="col-5">
                        <div id='cross'>
                            <div id='topCross'></div>
                            <div id='midCross'></div>
                            <div id='rightCross'></div>
                            <div id='downCross'></div>
                            <div id='leftCross'></div>
                        </div>
                    </div>
                </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
    background-color: green;
   // display: block;
}

.circle-cnt {
    height: 100px;
}
#blueCircle{
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

#cross {
    width: 100px;
    height: 100px;
    border: 1px solid black;
    position: absolute;
    bottom: 70px;
}

// div#cross {
//     width: 90px;
//     height: 90px;
//      position: absolute;
//      top: 394px;
//      left: 230px;
// }
// div#topcross {
//     width: 30px;
//     height: 30px;
//     background-color: #222;
//     position: absolute;
//     top: 0;
//     left: 30px;
//     box-shadow: -3px 2px #010101;
//     -webkit-box-shadow: -3px 2px #010101;
//     -moz-box-shadow: -3px 2px #010101;
//     -o-box-shadow: -3px 2px #010101;
//     border-top-left-radius: 5px;
//     -webkit-border-top-left-radius: 5px;
//     -moz-border-top-left-radius: 5px;
//     -o-border-top-left-radius: 5px;
//     border-top-right-radius: 5px;
//     -webkit-border-top-right-radius: 5px;
//     -moz-border-top-right-radius: 5px;
//     -o-border-top-right-radius: 5px;
// }
// div#leftcross {
//     width: 30px;
//     height: 30px;
//     background-color: #222;
//     z-index: 1;
//     position: absolute;
//     left: 0;
//     top: 30px;
//     box-shadow: -3px 2px #010101;
//     -webkit-box-shadow: -3px 2px #010101;
//     -moz-box-shadow: -3px 2px #010101;
//     -o-box-shadow: -3px 2px #010101;
//     border-top-left-radius: 5px;
//     -webkit-border-top-left-radius: 5px;
//     -moz-border-top-left-radius: 5px;
//     -o-border-top-left-radius: 5px;
//     border-bottom-left-radius: 5px;
//     -webkit-border-bottom-left-radius: 5px;
//     -moz-border-bottom-left-radius: 5px;
//     -o-border-bottom-left-radius: 5px;
// }
// div#midcross {
//     width: 30px;
//     height: 30px;
//     background-color: #222;
//     position: absolute;
//     top: 30px;
//     left: 30px;
//     box-shadow: -3px 2px #010101;
//     -webkit-box-shadow: -3px 2px #010101;
//     -moz-box-shadow: -3px 2px #010101;
//     -o-box-shadow: -3px 2px #010101;
// }
// div#rightcross {
//     width: 30px;
//     height: 30px;
//     background-color: #222;
//     position: absolute;
//     top: 30px;
//     right: 0;
//     box-shadow: -3px 2px #010101;
//     -webkit-box-shadow: -3px 2px #010101;
//     -moz-box-shadow: -3px 2px #010101;
//     -o-box-shadow: -3px 2px #010101;
//     border-top-right-radius: 5px;
//     -webkit-border-top-right-radius: 5px;
//     -moz-border-top-right-radius: 5px;
//     -o-border-top-right-radius: 5px;
//     border-bottom-right-radius: 5px;
//     -webkit-border-bottom-right-radius: 5px;
//     -moz-border-bottom-right-radius: 5px;
//     -o-border-bottom-right-radius: 5px;
// }
// div#botcross {
//     width: 30px;
//     height: 30px;
//     background-color: #222;
//     position: absolute;
//     bottom: 0;
//     left: 30px;
//     box-shadow: -3px 2px #010101;
//     -webkit-box-shadow: -3px 2px #010101;
//     -moz-box-shadow: -3px 2px #010101;
//     -o-box-shadow: -3px 2px #010101;
//     border-bottom-left-radius: 5px;
//     -webkit-border-bottom-left-radius: 5px;
//     -moz-border-bottom-left-radius: 5px;
//     -o-border-bottom-left-radius: 5px;
//     border-bottom-right-radius: 5px;
//     -webkit-border-bottom-right-radius: 5px;
//     -moz-border-bottom-right-radius: 5px;
//     -o-border-bottom-right-radius: 5px;
// }
// div#upT {
//     width: 0;
//     height: 0;
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-bottom: 10px solid #111;
//     position: absolute;
//     top: 5px;
//     left: 4px;
// }
// div#downT {
//     width: 0;
//     height: 0;
//     border-left: 10px solid transparent;
//     border-right: 10px solid transparent;
//     border-top: 10px solid #111;
//     position: absolute;
//     bottom: 5px;
//     left: 4px;
// }
// div#leftT {
//     width: 0;
//     height: 0;
//     border-top: 10px solid transparent;
//     border-right: 10px solid #111;
//     border-bottom: 10px solid transparent;
//     position: absolute;
//     top: 5px;
//     left: 4px;
// }
// div#rightT {
//     width: 0;
//     height: 0;
//     border-top: 10px solid transparent;
//     border-left: 10px solid #111;
//     border-bottom: 10px solid transparent;
//     position: absolute;
//     top: 5px;
//     right: 5px;
// }
// div#midCircle {
//     width: 20px;
//     height: 20px;
//     position: absolute;
//     top: 5px;
//     left: 4px;
//     border-radius: 30px;
//     -webkit-border-radius: 30px;
//     -moz-border-radius: 30px;
//     -o-border-radius: 30px;
//     background: radial-gradient(#111, #222);
//     background: -webkit-radial-gradient(#111, #222);
//     background: -moz-radial-gradient(#111, #222);
//     background: -o-radial-gradient(#111, #222);
// }
//HTML
//    <!-- Cross -->
//     <div id="cross">
//         <div id="leftcross">
//             <div id="leftT"></div>
//         </div>
//         <div id="topcross">
//             <div id="upT"></div>
//         </div>
//         <div id="rightcross">
//             <div id="rightT"></div>
//         </div>
//         <div id="midcross">
//             <div id="midCircle"></div>
//         </div>
//         <div id="botcross">
//             <div id="downT"></div>
//         </div>
//     </div>
</style>