<template>
  <div class="signin">
      <div class="signin-header">
          <p>WELCOME BACK TO getCRYPTO!</p>
      </div>
      <form class="sign-in-form">
          <span>SIGN IN</span>
          <input type="text" name="email" id="email" placeholder="Your Email">
          <input type="password" name="password" id="password" placeholder="Your Password">
          <button>getCRYPTO</button>
      </form>
  </div>
</template>

<script>
export default {
    name: 'Signin',

}
</script>

<style>
    .signin-header {
        text-align: center;
        font-size: 25px;
        margin: 20px 0 ;
    }

    .sign-in-form {
        margin: 0 auto;
        margin-bottom: 45px;
        width: 450px;
        height: 245px;
        background: #3ed0d1;
        padding: 20PX;
    }

    .sign-in-form span {
        color: #fff;
        display: block;
    }

    .sign-in-form input {
        padding: 10px;
        display: block;
        height: 38px;
        width: 100%;
        margin: 10px 0;
    }

    .sign-in-form input::placeholder {
        color: #000;
    }

    .sign-in-form button {
        font-size: 14px;
        width: 100%;
        background: #000;
        color: #fff;
        outline: none;
        border: none;
        height: 38px;
        margin: 20px 0;

    }
</style>