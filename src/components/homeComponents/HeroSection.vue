<template>
  <div class="hero">
      <div class="hero-container">
          <div class="hero-content">
              <h1>buy crypto</h1>
            <h2>easily and instanly</h2>
          </div>
                      
      </div>
  </div>
</template>

<script>
export default {
    name: 'HeroSection',
}
</script>

<style scoped >
    .hero-container {
        margin: 0 auto;
        width: 1400px;
    }
    .hero {
        height: 600px;
        background: url("../../assets/hero-bg.png") no-repeat center/cover;
        position: relative;
    }

    .hero-content {
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
    }

    .hero-container h1 {
        font-size: 53px;
        text-transform: uppercase;
        font-weight: lighter;
    }
    .hero-container h2 {
        font-size: 53px;
        text-transform: uppercase;
    }
</style>