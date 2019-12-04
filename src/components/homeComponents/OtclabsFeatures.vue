<template>
  <div class="otclabs-features">
      <div class="container">
           <div class="otclabs-features-header">
               <div class="otclabs-features-logo">
                   <img src="../../assets/otclabs-logo.png" alt="">
                   <h3>features</h3>
               </div>
           </div> 
      </div>

    <div class="container">
      <div class="otclabs-features-icons">
          <div class="otclabs-features-icon">
              <div class="otclabs-container">
                   <div class="otclabs-features-icon-img">
                  <img src="../../assets/otclabs-card-icon-1.png" alt="">
              </div>

              <div class="otclabs-features-content">
                  <h3>Live Exchange</h3>
                  <p>
                      Cryptocurrency prices and your Wallet
                        information is available 100% of 
                        the time, in real time.

                  </p>
              </div>
              </div>
             
          </div>
          <div class="otclabs-features-icon">
              <div class="otclabs-container">
                   <div class="otclabs-features-icon-img">
                  <img src="../../assets/otclabs-card-icon-2.png" alt="">
              </div>

              <div class="otclabs-features-content">
                  <h3>Dynamic eWallet</h3>
               <p>You have total control with
                    getCrypto to keep currency in
                    your own account or as a secure
                    balance in our eWallet.

                    </p>
              </div>
              </div>
             
          </div>
          <div class="otclabs-features-icon">
              <div class="otclabs-container">
                   <div class="otclabs-features-icon-img">
                  <img src="../../assets/otclabs-card-icon-3.png" alt="">
              </div>

              <div class="otclabs-features-content">
                  <h3>You’re SAFE</h3>
                    <p>Getcrypto is regulated by Estonian
                        Crypto Exchange Regulation
                        (License FVR000515).
                        </p>
              </div>
              </div>
             
          </div>
          <div class="otclabs-features-icon">
              <div class="otclabs-container">
                   <div class="otclabs-features-icon-img">
                  <img src="../../assets/otclabs-card-icon-4.png" alt="">
              </div>

              <div class="otclabs-features-content">
                  <h3>You’re Secured</h3>
                    <p>Protection against DDoS attacks,
                        full data encryption, compliant 
                        with PCI DSS standards.</p>
              </div>
              </div>
             
          </div>
          <div class="otclabs-features-icon">
              <div class="otclabs-container">
                   <div class="otclabs-features-icon-img">
                  <img src="../../assets/otclabs-card-icon-5.png" alt="">
              </div>

              <div class="otclabs-features-content">
                  <h3>Simple Payments</h3>
                    <p>Use your getCrypto wallet to 
                        make payments with digital currency
                        PLUS access special benefits.</p>
              </div>
              </div>
             
          </div>
          <div class="otclabs-features-icon">
              <div class="otclabs-container">
                   <div class="otclabs-features-icon-img">
                  <img src="../../assets/otclabs-card-icon-6.png" alt="">
              </div>

              <div class="otclabs-features-content">
                  <h3>Immediate Execution</h3>
                    <p>Your crypto order is executed 
                        immediately through our 
                        Liquidity Providers.</p>
              </div>
              </div>
             
          </div>
        
          
      </div>
      </div>
  </div>
</template>

<script>
export default {
 name: 'OtclabsFeatures',
}
</script>

<style scoped>
    .otclabs-features {
        height: 840px;
        background: #3ed0d1;
    }

    .otclabs-features-logo {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }

    .otclabs-features-logo img {
        height: 40px;
        margin-right: 20px;
    }

    .otclabs-features-logo h3 {
        font-size: 53px;
        text-transform: uppercase;
        font-weight: lighter;
    }

    .otclabs-features-header {
        padding: 50px 0;
    }

    .otclabs-features-icons {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        
    }

    .otclabs-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        
    }

    .otclabs-features-icon {
       
        margin: 40px;
    }

    .otclabs-features-content p {
        width: 350px;
        font-size: 22px;
          font-weight: lighter;
    }
    .otclabs-features-content h3 {
        font-weight: 400;
        font-size: 22px;
    }

    .otclabs-features-icon-img {
        margin-right: 20px;
    }

 
</style>