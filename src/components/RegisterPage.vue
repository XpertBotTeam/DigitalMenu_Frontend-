
<template>
  <div class="wrapper">
    <form  @submit.prevent="register">
      <h3 style="overflow: hidden;">Sign Up</h3>

      <div class="input-box name">
        <input type="text" v-model="firstname" placeholder="First Name">
        <input type="text" v-model="lastname" placeholder="Last Name">
      </div>

      <div class="input-box">
        <input type="email" v-model="email" placeholder="Email">
        <i class='bx bx-envelope' style='color:#ffffff'></i>
      </div>

      <div class="input-box">
        <input type="password" v-model="password" placeholder="Password">
        <i class='bx bx-lock-alt'></i>
      </div>

      <div class="input-box">
        <input type="password" v-model="confirmpassword" placeholder="Confirm Password">
        <i class='bx bx-lock-alt'></i>
      </div>

      <button class="btn btn-primary btn-block" type="submit">Sign Up</button>

      <div class="register-link">
        <p>I Already Have an Account?
          <router-link to="/login"><a href="#">Login</a></router-link>
        </p>
      </div>
    </form>
  </div>
</template>




<script>
import axios from "axios";

export default {
  name: "RegisterPage",

  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: "",
      errorMessage: null,
    };
  },

  methods: {
    async register() {
      const userData = {
        first_name: this.firstname,
            last_name: this.lastname,
            email: this.email,
            password: this.password,
            confirm_password: this.confirmpassword,
      };
      try {
        const response = await axios.post(
          "https://sfa.xpertbotacademy.online/api/register", userData );

        if (response.data.status === true) {
          this.registrationSuccess();
        } else if (response.data.status === false) {
          this.handleRegistrationError(response.data.message);
        } else {
          this.handleUnexpectedResponse(response.data.status);
        }
      } catch (error) {
        this.handleRequestError(error);
      }
    },

    registrationSuccess() {
      console.log("Registration successful");
      this.$router.push("/login");
    },

    handleRegistrationError(message) {
      console.error("Registration failed:", message);
      this.errorMessage = message;
      this.showErrorMessage(message);
    },

    handleUnexpectedResponse(status) {
      console.error("Unexpected response:", status);
    },

    handleRequestError(error) {
      console.error("An error occurred:", error);
      this.errorMessage = "An error occurred during registration. Please try again.";
      this.showErrorMessage(this.errorMessage);
    },

    showErrorMessage(message) {
      window.alert(message);
    },
  },
};
</script>




 
<style>


.name {
    display: flex;
    gap: 10px;
}

.table{
  position: relative;
        left: 50%;
        top: 10%;
        transform: translate(-50%,-10%);
        margin: 1.5rem;
        padding: 1.5rem;
}


table {

  margin: 0 auto; 
  border-collapse: collapse; /* Collapse borders */
}

th, td {
  padding: 10px; /* Add padding to table cells */
  border: 1px solid #ccc; /* Add a border to table cells */
}

th {
  background: transparent;
        border: 2px solid #ffffff4d;
        box-shadow: 0 0 10px rgba(0,0,0,.9);
        color: #fff;
}

td {
  background-color: #f5f5f5; /* Cell background color */
  color: #000000;
}

button {
  background-color: #817e7e;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px; /* Add margin between buttons */
}


</style>