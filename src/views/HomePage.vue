<template>
  <div class="home-page">
     <CoinsPriveBar/> 

       <NavbarMainPage/>

         <HeroSection/>

           <CryptoPers/>

              <BuySellBgBlack>
                  <GetCryptoCalc/>
              </BuySellBgBlack>
              
                 <IconSection/>
                    <TradeCrypto/>
                      <IconSectionCard/>
                        <HowToJoin/>
                          <OtclabsFeatures/>
                       
  </div>
</template>

<script>
import CoinsPriveBar from '../components/homeComponents/CoinsPriceBar'
import NavbarMainPage from '../components/homeComponents/NavbarMainPage'
import HeroSection from '../components/homeComponents/HeroSection'
import CryptoPers from '../components/homeComponents/CryptoPers'
import BuySellBgBlack from '../components/homeComponents/BuySellBgBlack'
import GetCryptoCalc from '../components/homeComponents/GetCryptoCalc'
import IconSection from '../components/homeComponents/IconSection'
import TradeCrypto from '../components/homeComponents/TradeCrypto'
import IconSectionCard from '../components/homeComponents/IconSectionCard'
import HowToJoin from '../components/homeComponents/HowToJoin'
import OtclabsFeatures from '../components/homeComponents/OtclabsFeatures'

export default {
    name: 'HomePage',

    components: {
      CoinsPriveBar,  
      NavbarMainPage,
      HeroSection,
      CryptoPers,
      BuySellBgBlack,
      GetCryptoCalc,
      IconSection,
      TradeCrypto,
      IconSectionCard,
      HowToJoin,
      OtclabsFeatures,
      
    }
}
</script>

<style>

</style>