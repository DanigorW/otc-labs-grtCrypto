<template>
  <div class="trade-crypto">
      <div class="container">
          <div class="trade-crypto-content">
              <div class="left-content">
                  <img src="../../assets/trade-crypto-trade-img.png" alt="">
              </div>

              <div class="rigth-content">
                  <div class="rigth-content-header">
                      <h1>trade crypto</h1>
                  </div>

                  <div class="rigth-content-p">
                      <p>getcrypto is the easiest and most
                            trustedplace to buy, sell, and 
                            manage your digital currency. 
                            You can buy bitcoin, ethereum, 
                            and more instantly with a bank 
                            account or debit card.
                            </p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'TradeCrypto',
}
</script>

<style>
    .trade-crypto {
        background: #3ed0d1;
        }

    .trade-crypto-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        height: 480px;
    }

    .rigth-content {
        width: 400px
    }

    .rigth-content-header h1 {
        text-transform: uppercase;
        font-size: 53px;
    }
    .rigth-content-p  {
        font-weight: lighter;
        font-size: 22px;
        width: 360px;
        margin: 20px 0;
       
    }
</style>