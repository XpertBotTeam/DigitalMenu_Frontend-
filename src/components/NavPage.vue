<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <router-link to="/addItem" class="navbar-brand">AddItem</router-link>
  
        <div class="navbar-nav ml-auto">
          <router-link to="/login" class="nav-item nav-link">Login</router-link>
          <router-link to="/register" class="nav-item nav-link">Register</router-link>
        </div>
      </div>
    </nav>
  </template>  

<script>
export default{
name:'NavPage'
}
</script>

