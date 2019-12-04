<template>
  <div id="app">
    <router-view/>
    <Footer/>
  </div>
</template>


<script>
import Footer from './components/homeComponents/Footer'
export default {
  
  data(){
    return{

    }
  },
  components: {
    Footer,
  }

  

}
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body,html {
    font-family: 'Roboto', sans-serif;
  }

  .container {
    width: 1400px;
    margin: 0 auto;
  }

  
</style>
