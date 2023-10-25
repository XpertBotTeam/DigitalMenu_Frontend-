import { createRouter, createWebHistory } from 'vue-router'; // Import createRouter and createWebHistory functions
import Home from './components/HomePage.vue';
import Login from './components/LoginPage.vue';
import Register from './components/RegisterPage.vue';
import addItem from './components/AddItem.vue';


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register},
    { path: '/addItem', component: addItem},
    
  ]
});

export default router; // Export the router instance
