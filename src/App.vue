<template>
  <div id="app">
   
  <div class="d-flex justify-content-center" >
    <LeftComp />
    <RightComp /> 
  </div>

  </div>
</template>

<script>

import LeftComp from './components/LeftComp.vue'
import RightComp from './components/RightComp.vue'
//import axios from 'axios'

export default {
  name: 'App',
  components: {
    RightComp,
    LeftComp,
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
