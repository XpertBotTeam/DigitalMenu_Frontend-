<template>
  <div class="wrapper">
    <form @submit.prevent="login">
      <h3>Login</h3>

      <div class="input-box">
        <input type="email" placeholder="Email" v-model="email" required>
        <i class='bx bxs-user'></i>
      </div>

      <div class="input-box">
        <input type="password" placeholder="Password" v-model="password" required>
        <i class='bx bx-lock-alt'></i>
      </div>

      <div class="remember-forget">
        <label for="remember-me">
          <input id="remember-me" type="checkbox" v-model="rememberMe"> Remember Me
        </label> 
        <a href="#" @click="forgotPassword">Forget password?</a>
      </div>

      <button type="submit" class="btn"> Login</button>

      <div class="register-link">
        <p>Don't have an account?
          <router-link to="/register"><a href="#">Register</a></router-link>
        </p>
      </div>
    </form>
  </div>
</template>


<script>
import axios from "axios";

export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
    };
  },

  created() {
    // Check if there's a stored email in local storage
    const storedEmail = localStorage.getItem('rememberedEmail');
    if (storedEmail) {
      this.email = storedEmail; // Set the email field to the stored email
      this.rememberMe = true; // Check the "Remember Me" checkbox
    }
  },

  methods: {
    async login() {
      try {
        let response = await axios.post(
          "https://sfa.xpertbotacademy.online/api/login",
          {
            email: this.email,
            password: this.password,
          }
        );
        if (response.status === 200) {
          console.log(response);
          localStorage.setItem(
            "user-info",
            JSON.stringify(response.data.success)
          );
          this.$router.push("/");
        }
        console.log(response.data.success);
      } catch (error) {
        console.log(error);
      }
      if (this.rememberMe) {
        localStorage.setItem('rememberedEmail', this.email);
      } else {
        
        localStorage.removeItem('rememberedEmail');
      }
    },
    forgotPassword() {
      const email = this.email; // Get the user's email from the input field

      if (!email) {
        alert('Please enter your email to reset your password.');
        return;
      }

      
      alert('Password reset request sent to ' + email);
    },
  },
};
</script>