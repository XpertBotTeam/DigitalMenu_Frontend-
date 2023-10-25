<template>
  <div class="menu-item-creation">
    <h2 >Create a New Menu Item</h2>
    <form @submit.prevent="submitMenuItem">
      <div class="form-group">
        <label for="name">Item Name</label>
        <input type="text" id="name" v-model="menuItem.name" required />
      </div>

      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" id="price" v-model="menuItem.price" required />
      </div>

      <div class="form-group">
        <label for="category">Category</label>
        <select id="category" v-model="menuItem.category">
          <option value="Breakfast">Breakfast</option>
          <option value="main_course">Main Course</option>
          <option value="dessert">Dessert</option>
        </select>
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <textarea id="description" v-model="menuItem.description" rows="4"></textarea>
      </div>

  

      <!-- Add file input for uploading images -->
      <div class="form-group">
        <label for="image">Image</label>
        <div class="custom-file">
          <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" class="custom-file-input" id="imageInput" />
        </div>
      </div>
      

      <button type="submit">Create Menu Item</button>
    </form>
  </div>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in menuItems" :key="item.id">
          <td>
            <template v-if="isEditing && item.id === editedMenuItem.id">
              <input type="text" v-model="editedMenuItem.name" />
            </template>
            <template v-else>
              <span>{{ item.name }}</span>
            </template>
          </td>
          <td>
            <template v-if="isEditing && item.id === editedMenuItem.id">
              <input type="number" v-model="editedMenuItem.price" />
            </template>
            <template v-else>
              <span>{{ item.price }}</span>
            </template>
          </td>
          <td>
            <template v-if="isEditing && item.id === editedMenuItem.id">
              <select v-model="editedMenuItem.category">
                <option value="Breakfast">Breakfast</option>
                <option value="main_course">Main Course</option>
                <option value="dessert">Dessert</option>
              </select>
            </template>
            <template v-else>
              <span>{{ item.category }}</span>
            </template>
          </td>
          <td>
            <template v-if="isEditing && item.id === editedMenuItem.id">
              <textarea v-model="editedMenuItem.description" rows="4"></textarea>
            </template>
            <template v-else>
              <span>{{ item.description }}</span>
            </template>
          </td>
          <td>
  <template v-if="isEditing && item.id === editedMenuItem.id">
    <input type="file" ref="fileInput" @change="handleImageEdit" accept="image/*" class="custom-file-input" />
    <img v-if="editedMenuItem.imageUrl" :src="editedMenuItem.imageUrl" alt="Menu Item" width="100" />
  </template>
  <template v-else>
    <img v-if="item.imageUrl" :src="item.imageUrl" alt="Menu Item" width="100" />
  </template>
</td>

          <td>
            <template v-if="isEditing && item.id === editedMenuItem.id">
              <button @click="toggleEditMode(item)">Save</button>
            </template>
            <template v-else>
              <button @click="toggleEditMode(item)">Edit</button>
              <button @click="deleteMenuItem(index)">Delete</button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


export default {
  data() {
    return {
      menuItem: {
        name: "",
        price: 0,
        category: "Breakfast",
        description: "",
        options: [
          { id: 1, label: "Spicy", selected: false },
          { id: 2, label: "Gluten-free", selected: false },
          { id: 3, label: "Vegetarian", selected: false },
        ],
      },
      editedMenuItem: null,
      imageFile: null,
      menuItems: [],
      isEditing: false,
    };
  },
  created() {
    // Load menu items from local storage
    this.loadMenuItemsFromLocalStorage();
  },
  methods: {
    submitMenuItem() {
      if (!this.menuItem.name || this.menuItem.price <= 0) {
        alert("Item Name and Price are required.");
        return;
      }
      if (this.imageFile === null) {
    alert("An image is required.");
    return;
  }

  // Create a new menu item with the image
  const newItem = {
    id: Date.now(),
    name: this.menuItem.name,
    price: this.menuItem.price,
    category: this.menuItem.category,
    description: this.menuItem.description,
    imageUrl: this.imageFile, // Store the image data
  };

      this.menuItems.push(newItem);
      this.saveMenuItemsToLocalStorage();

      // Clear the form
      this.clearForm();

      // Clear the selected image file
      this.imageFile = null;
    },
     
    handleFileChange(event) {
      // Handle the selected image and save it
      const selectedFile = event.target.files[0];

      // Check if a file was selected
      if (selectedFile) {
        this.imageFile = URL.createObjectURL(selectedFile);
      }
    },

    clearForm() {
      this.menuItem = {
        name: "",
        price: 0,
        category: "Breakfast",
        description: "",
        options: this.menuItem.options.map(option => ({
          ...option,
          selected: false,
        })),
      };
    },

    saveMenuItemsToLocalStorage() {
      localStorage.setItem('menuItems', JSON.stringify(this.menuItems));
    },
    
    loadMenuItemsFromLocalStorage() {
      const storedMenuItems = localStorage.getItem('menuItems');
      if (storedMenuItems) {
        this.menuItems = JSON.parse(storedMenuItems);
      }
    },
    
    toggleEditMode(item) {
  if (this.isEditing && item.id === this.editedMenuItem.id) {
    this.saveEditedData();
  } else {
    this.editedMenuItem = JSON.parse(JSON.stringify(item));
    this.isEditing = true;
  }
},


    saveEditedData() {
      const index = this.menuItems.findIndex(item => item.id === this.editedMenuItem.id);

      if (index !== -1) {
        this.menuItems[index] = { ...this.editedMenuItem };
        this.saveMenuItemsToLocalStorage();
        this.isEditing = false;
      }
    },

    deleteMenuItem(index) {
      // Remove the menu item by its index in the array
      this.menuItems.splice(index, 1);
      this.saveMenuItemsToLocalStorage();
    },
 
    navigateToHomePage() {
  // Use Vue Router to navigate to the home page and pass the menuItems data
  this.$router.push({ name: 'home', params: { menuItems: this.menuItems } });
},
handleImageEdit(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      this.editedMenuItem.imageUrl = URL.createObjectURL(selectedFile);
    }
  },
  },
};
</script>

<style>
* {
  overflow-x: hidden;
}

.menu-item-creation {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
}

label {
  font-weight: bold;
  display: block;
}

input[type="text"],
input[type="number"],
select,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 16px;
}

textarea {
  height: 100px;
}

button[type="submit"] {
  background-color: #817e7e;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 5px;
}

.table-container {
  margin: 5% auto; /* Center the table horizontally and add margin on top and bottom */
  min-width: 60%; /* Adjust the max-width to make the table smaller */
  overflow: auto; /* Add horizontal scrolling if needed */
  padding-bottom: 5%;
}

table {
  min-width: 90%;
  border-collapse: collapse;
  /* Add any other table styles here */
}
</style>
