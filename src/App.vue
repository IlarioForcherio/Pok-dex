<template>
  <div id="app">
   
  
    <LeftComp />
  </div>
</template>

<script>

import LeftComp from './components/LeftComp.vue'
//import axios from 'axios'

export default {
  name: 'App',
  components: {
   
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
