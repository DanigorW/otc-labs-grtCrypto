<template>
  <div class="signin">
      <CoinsPriceBar/>
      <NavbarMainPage/>
      <Singin/>


  </div>
</template>

<script>
import NavbarMainPage from '../components/homeComponents/NavbarMainPage'
import CoinsPriceBar from '../components/homeComponents/CoinsPriceBar'
import Singin from '../components/signinComponents/Singin'
export default {
    name: 'Signin',

    components: {
        NavbarMainPage,
        CoinsPriceBar,
        Singin

    },

    data(){
        return{
            email: '',
            password: ''
        }
    }

}
</script>

<style>

</style>