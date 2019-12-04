<template>
  <div class="buy-sell-bg-black">
      <div class="container">
          
          <div class="left-side">
              <div class="left-side-header">
                  <p>BUY / SELL</p>
              </div>

              <div class="left-side-p1">
                  <p>getCrypto is the easiest and most trusted place to
                        buy, sell, and manage your digital currency.
                        You can buy bitcoin, ethereum, and more instantly 
                        with a bank account or debit card.</p>
              </div>
             
              
          </div>

          <div class="rigth-side">
              <slot></slot>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        height: 450px;
    }

    .buy-sell-bg-black {
        display: flex;
        justify-content: space-between;
    }

    .buy-sell-bg-black {
        
        background: #000;
        color: #fff;
    }

    .left-side-header {
        font-size: 53px;
        margin-bottom: 20px;
    }

    .left-side-p1 {
        width: 470px;
        font-size: 22px;
        font-weight: lighter;
    }

    /* .rigth-side {
        margin-right: 200px;
    } */
</style>