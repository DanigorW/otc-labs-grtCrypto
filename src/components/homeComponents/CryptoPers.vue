<template>
  <div class="crypto-pers">
      <div class="crypto-pers-header">
          <p>More than 100 diffrenet crypto pers</p>
      </div>

      <div class="crypto-pers-cards">
          <div class="crypto-pers-card">
                <h3>Bitcoin</h3>
                    <span>8,457</span>
                    <span>usd</span>
          </div>
          <div class="crypto-pers-card">
                <h3>Bitcoin</h3>
                    <span>8,457</span>
                    <span>usd</span>
          </div>
          <div class="crypto-pers-card">
                <h3>Bitcoin</h3>
                    <span>8,457</span>
                    <span>usd</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'CryptoPers',
}
</script>

<style>
    .crypto-pers-header {
        text-align: center;
        font-size: 22px;
        text-transform: uppercase;
        padding: 30px 0;
    }

    

    .crypto-pers-cards {
        background: #3ed0d1;
        height: 135px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .crypto-pers-card {
        width: 400px;
    
    }

    .crypto-pers-card:nth-child(2){
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    }

    .crypto-pers-card h3 {
        font-size: 22px;
        text-transform: uppercase;
    }
    .crypto-pers-card span {
        font-size: 22px;
        display: block;
    }
    .crypto-pers-card span:last-child {
        font-size: 18px;
        text-transform: uppercase;
    }
</style>