<template>
  <div class="footer">
      <div class="footer-container">
          <div class="footer-links">
              
              <div class="footer-links-services">
                    <div class="footer-links-header">
                        <h3>SERVICES</h3>
                        <ul>
                            <li><a href="">Buy Bitcoins</a></li>
                            <li><a href="">Buy Ethereum</a></li>
                            <li><a href="">Buy DASH</a></li>
                            <li><a href="">BTC to USD</a></li>
                            <li><a href="">Sell Bitcoins</a></li>
                            <li><a href="">Bitcoin Trading</a></li>
                            <li><a href="">Margin Trading</a></li>
                        </ul>
                    </div>
              </div>
              <div class="footer-links-information">
                    <div class="footer-links-header">
                        <h3>INFORMATION</h3>
                         <ul>
                            <li><a href="">Payment Options</a></li>
                            <li><a href="">Fee Schedule</a></li>
                            <li><a href="">Getting Started</a></li>
                            <li><a href="">Identity Verification Guide</a></li>
                            <li><a href="">Card Verification Guide</a></li>
                          
                        </ul>
                    </div>
                    
              </div>
              <div class="footer-links-tools">
                    <div class="footer-links-header">
                        <h3>TOOLS</h3>
                         <ul>
                            <li><a href="">API</a></li>
                            <li><a href="">Bitcoin Calculator</a></li>
                            <li><a href="">Bitcoin Price Widget</a></li>
                            <li><a href="">Mobile App</a></li>
                            <li><a href="">Affiliate Program</a></li>
                            <li><a href="">Donations</a></li>
                          
                        </ul>
                    </div>
              </div>
              <div class="footer-links-about">
                    <div class="footer-links-header">
                        <h3>ABOUT</h3>
                           <ul>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Legal & Security</a></li>
                            <li><a href="">Terms of Use</a></li>
                            <li><a href="">Refund Policy</a></li>
                            <li><a href="">Press</a></li>
                            <li><a href="">Blog</a></li>
                            <li><a href="">Help Centre</a></li>
                          
                        </ul>
                    </div>
              </div>
          </div>


          <div class="footer-right-side">
              <div class="footer-right-side-content">
                  <div class="footer-btn">
                      <button>OTCLABS STATUS</button>
                  </div>

                  <div class="footer-credit-logos">
                      <img src="../../assets/footer-credit-logos.png" alt="">
                  </div>

                  <div class="social-media-buttons">
                      <div>
                          <button><a href=""><img src="../../assets/facebook-icon.png" alt=""></a></button>
                      </div>
                      <div>
                          <button><a href=""><img src="../../assets/twiter-icon.png" alt=""></a></button>
                      </div>
                      <div>
                          <button><a href=""><img src="../../assets/google-plus.png" alt=""></a></button>
                      </div>
                      
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "Footer",
}
</script>

<style scoped>
    ul {
        list-style: none;
    }

    a {
        text-decoration: none;
        color: #fff;
        font-size: 18px;
        font-weight: lighter;
    }

    li {
        margin: 10px 0;
    }

    .footer {
        background: #000;
        height: 450px;
        color: #fff;
    }

    .footer-container {
        width: 1400px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }

    .footer-links {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        height: 450px;
        width: 830px;
    }

    .footer-right-side {
        margin-left: 300px;
    }

    .footer-btn button {
        color: #fff;
        background: #3ed0d1;
        text-transform: uppercase;
        width: 220px;
        height: 40px;
        border-radius: 10px;
        font-size: 18px;
       border: none;
        margin: 15px 0;
    }

    .social-media-buttons button {
        cursor: pointer;
        background: none;
        outline: none;
        border: none;
        margin: 10px 0;
        margin-right: 15px;
    }

    .social-media-buttons {
        display: flex;
        flex-wrap: wrap;
    }

    .footer-links-header {
        margin-top: 100px;
    }
</style>