


<template>
  <div>
    <h1 style="color: white;">MENU</h1>
    <div class="digital-menu">
      <div class="menu-item" v-for="item in menuItems" :key="item.id">
    <div class="image">
      <img :src="item.imageUrl" alt="Item Image" width="300" height="200" />
    </div>
        <div class="info">
          <h3>{{ item.name }}</h3>
          <p>{{ item.description }}</p>
          <p>Price: ${{ item.price }}</p>
          <p>Category: {{ item.category }}</p>
        </div>
      </div>
    </div>
      
   
    <div class="restaurant-content">
        <div class="restaurant-video">
          <iframe
            width="360"
            height="202"
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="Restaurant Video"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <div class="restaurant-description">
          <p>
            Welcome to our restaurant! We take pride in offering a variety of delicious dishes, from hearty breakfasts to mouthwatering main courses and delectable desserts. Our menu is designed to satisfy your cravings, and we source the finest ingredients to ensure your dining experience is exceptional.
          </p>
        </div>
      </div>
    <div class="restaurant-map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52992.23057511001!2d35.46308242571277!3d33.88928269511088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151f17215880a78f%3A0x729182bae99836b4!2sBeirut!5e0!3m2!1sen!2slb!4v1697958265144!5m2!1sen!2slb" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  </div>
  </template>

  
  
<script>
export default {
  data() {
    return {
      menuItems: [],
    };
  },
  created() {
    this.loadMenuItemsFromLocalStorage();
  },
  methods: {
    // Load menu items from local storage
    loadMenuItemsFromLocalStorage() {
      const storedMenuItems = localStorage.getItem('menuItems');
      if (storedMenuItems) {
        this.menuItems = JSON.parse(storedMenuItems);
      }
    },
  },
};
</script>
  
  <style scoped>
  .digital-menu {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 20px;
    overflow: hidden; /* Ensure that the entire content is contained within the screen */
  }
  
  .menu-item {
    width: 300px;
    margin: 20px;
    padding: 10px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: transparent;
    border: 2px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);
    color: aliceblue;
    overflow: hidden; /* Contain the menu item within its container */
  }
  
  .image {
    width: 300px;
  }
  
  .image img {
    width: 100%;
    height: 200px; /* Set the desired height for all images */
  }
  
  .restaurant-content {
    display: flex;
    justify-content: space-between;
    padding: 20px;
  }
  
  .restaurant-video {
    width: 50%; /* Video on the left */
  }
  
  .restaurant-description {
    width: 45%; /* Paragraph on the right */
  }
  
  .restaurant-video iframe {
    width: 100%;
  }
  
  .restaurant-description p {
    font-size: 1.5rem;
    color: white;
  }
  
  h3 {
    overflow: hidden;
  }
  </style>
  
  

  