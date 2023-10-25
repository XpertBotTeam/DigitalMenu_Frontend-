


<template>
    <div id="app">
      <Nav />
     
      <div class="auth-wrapper">
        <router-view />
      </div>
    </div>
  </template>
  

<script>

  import  Nav from './components/NavPage.vue'
  
export default {
  name: 'App',
  components: {
    Nav,

  }
}
</script>

<style>


*{
    box-sizing: border-box;
}

body{
    background: #414b55 !important;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
}

h1, h2, h3, h4, h5, h5, h6, label,span{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    overflow: hidden;
}

body, html, #app, #root, .auth-wrapper{
    width: 100%;
    height: 100%;
}

#app{
    text-align: center;
}

.navbar-light{
    background: #fff;
    box-shadow: 0px 14px 80px rgba(34, 35, 58, .2);
    position: relative;
}

    .wrapper{
        width: 420px;
        background: transparent;
        border: 2px solid rgba(255,255,255,.3);
        box-shadow: 0 0 10px rgba(0,0,0,.9);
        color: #fff;
        border-radius: 10px;
        padding: 30px 40px;
        position: relative;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        margin: 1.5rem;
    }

    .wrapper h3{
        font-size: 36px;
        text-align: center;
    }

    .input-box{
        position: relative;
        width: 100%;
        height: 50px;
        margin: 30px 0;
    }

    .input-box input{
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        border: 2px solid rgba(255,255,255,.2);
        border-radius: 40px;
        font-size: 16px;
        color: #fff;
        padding: 20px 45px 20px 20px;
    }

    .input-box input::placeholder{
        color: #fff;
    }

    .input-box i{
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
        font-size: 20px;
    }

    .wrapper .remember-forget{
        display: flex;
        justify-content: space-between;
        font-size: 14.5px;
        margin: -15px 0 15px;
    }

    .remember-forget label input{
        accent-color: #fff;
        margin-right: 3px;
    }

    .remember-forget a{
        color: #fff;
        text-decoration: none;
    }

    .remember-forget a:hover{
        text-decoration: underline;
    }

    .wrapper .btn{
        width: 100%;
        height: 45px;
        background: #fff;
        border: none;
        outline: none;
        border-radius: 40px;
        box-shadow: 0 0 10px rgba(0,0,0,.1);
        cursor: pointer;
        font-size: 16px;
        color: #333;
        font-weight: 600;
    }

    .wrapper .register-link{
        font-size: 14.5px;
        text-align: center;
        margin: 20px 0 15px;
    }

    .register-link p a{
        color: #fff;
        text-decoration: none;
        font-weight: 600;
    }

    .register-link p a:hover{
        text-decoration: underline;
    }
</style>
