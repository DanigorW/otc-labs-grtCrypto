<template>
  <div class="navbar-main-page">
      <nav class="main-nav"
      :class="this.$route.path === '/' ? '' : 'border-bottom' " 
      >
        <div class="container">
            <div class="main-nav-logo">
               
                <router-link :to="{name: 'home'}"> <img src="../../assets/otclabs-logo.png" alt=""></router-link>
            </div>       

            <div class="main-nav-spans"
            :class="this.$route.path === '/' ? 'display-signin' : 'display-signin-none' "   
            >
              <span>BUY/SELL</span>
              <span>MARKET DATA</span>
              <span>MARGIN TRADING</span>
            </div>

            <div class="nab-bar-btns">
              <div class="sign-in">
                <button @click="goToSignin"
                 class="signinBg"
                 :class="this.$route.path === '/' ? 'display-signin' : 'display-signin-none' "    
                 >sign in</button>
              </div>

              <div class="register">
                <button class="registerBg">register</button>
              </div>
            </div>
        </div>
      </nav>
  </div>
</template>

<script>

export default {
    name: "NavbarMainPage",

    methods: {
      goToSignin(){
        this.$router.push({name: "signin"})
      }
      
    }
}
</script>

<style scoped> 
    .container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }
    .main-nav {
      height: 120px;
      display: flex;
      align-items: center;
     
    }

    .navbar-main-page {
      position: sticky;
      top:0;
      left: 0;
      z-index: 100;
      background: #fff;
    }

    .main-nav-spans {
      font-size: 14px
    }
    .main-nav-spans span {
        margin: 0 15px;
        font-weight: bold;
    }

    .nab-bar-btns {
      display: flex;
      flex-wrap: wrap;
    }

    .nab-bar-btns button {
      outline: none;
      border: none;
      width: 146px;
      height: 35px;
      color: #fff;
      cursor: pointer;
      text-transform: uppercase;
      font-size: 14px;
      margin: 0 5px;
    }

    .signinBg {
      background: #19afb0;
    }
    .registerBg {
      background: #e7762b;
    }


    .display-signin-none {
      display: none;
      
    }

    .display-signin {
      display: block;
    }

    .border-bottom {
      border-bottom: 1px solid #000;
    }


</style>