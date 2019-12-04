<template>
  <div class="get-crypto-calc">
      <div class="calc-container">
           <div class="get-crypto-logo">
               <img src="../../assets/get-crypto-logo.png" alt="">
           </div>
           <div class="border-1px-eee"></div>

           
      <div class="get-crypto-calc-content">
          <select name="coin" id="coinList">
             <option class="btcOption" value="btc">BTC</option> 
             <option class="btcOption" value="btc">coin-1</option> 
             <option class="btcOption" value="btc">coin-2</option> 
             <option class="btcOption" value="btc">coin-3</option> 
          </select>


    <div class="get-crypto-calc-inputs">
            <div class="input-amount">
             <input type="text" placeholder="Amount in EUR">
         </div>   

         <div class="equalSign">
             =
         </div>

         <div class="input-output">
             <input type="text" placeholder="Amount in BTC">
         </div>
    </div>

    <div class="get-crypto-calc-buttons">
        <button class="get-crypto-calc-buttons-btn-1">1 BTC = 5979.33 EUR</button>
        <button class="get-crypto-calc-buttons-btn-2">BUY</button>
    </div>
         

      </div>
      </div>

  </div>
</template>

<script>
export default {
    name: "GetCryptoCalc",

}
</script>

<style>


    
    .get-crypto-logo {
        text-align: center;
        padding: 20px 0;
       
    }

    .border-1px-eee {
        border-bottom: 1px solid #eee;
        margin: 0 auto;
        margin: 0 20px;
    }

    .calc-container {
        width: 450px;
        height: 370px;
        
        
        background: url("../../assets/get-crypto-bg.png") no-repeat center/cover;
    }

    .get-crypto-calc-content {
        margin: 0 auto;
        text-align: center;
    }

    .get-crypto-calc-inputs {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 25px 0 ;
    }

    .get-crypto-calc-inputs input {
        width: 122px;
        height: 44px;
        padding: 10px;
    }

    .equalSign {
        margin: 0 10px;
    }

    .get-crypto-calc-buttons-btn-1 {
        background: #41bc76;
        color: #fff;
        border: none;
        outline: none;
        width: 286px;
        height: 33px; 
        margin: 20px 0 ;
    }

    
    .get-crypto-calc-buttons-btn-2 {
        background: #b77ee5;
        color: #fff;
        border: none;
        outline: none;
        width: 300px;
        height: 40px; 
    }

    .get-crypto-calc-content {
        margin-top: 20px;
    }

  
</style>