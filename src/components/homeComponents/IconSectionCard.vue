<template>
  <div class="icon-section-cards">
      <div class=".container">
          <div class="icon-cards">
              <div class="icon-card">
                  <div class="icon-card-img">
                      <img src="../../assets/icon-1-card-section.png" alt="">
                  </div>

                  <div class="icon-card-content">
                      <h3>POSITIONS</h3>
                      <p>
                          Positions table presents
                            all the open positions
                            you have in your portfolio
                                                </p>
                  </div>
              </div>
              <div class="icon-card">
                  <div class="icon-card-img">
                      <img src="../../assets/icon-2-card-section.png" alt="">
                  </div>

                  <div class="icon-card-content">
                      <h3>CUSTOMIZABLE INTERFACE</h3>
                      <p>Most popular methods: 
                            Visa, MasterCard, 
                            bank transfer</p>
                  </div>
              </div>
              <div class="icon-card">
                  <div class="icon-card-img">
                      <img src="../../assets/icon-3-card-section.png" alt="">
                  </div>

                  <div class="icon-card-content">
                      <h3>SECURITY</h3>
                      <p>Providing services in 99% 
                        countries around the globe.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'IconSectionCard',
}
</script>

<style>
    .icon-cards {
        background: #000;
        height: 525px;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        text-align: center;
        
    }

    .icon-card {
        background: #fff;
        width: 310px;
        height: 330px;
        border-radius: 10px;
        margin: 0 -50px;
        display: flex;
        flex-direction: column;
        align-items: center;
        
        padding: 20px;
    }

    .icon-card:nth-child(2) {
       
        margin: 0 -350px;
    }

    .icon-card-img {
        margin: 15px 0;
    }

    .icon-card-content h3 {
        margin: 3px;
        font-size: 20px;
    }

    .icon-card-content p {
        font-weight: lighter;
        font-size: 20px;
    }
</style>