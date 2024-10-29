<template>
  <div :class="['sidebar', { 'sidebar--collapsed': isCollapsed }]">
    <button class="toggle-button" @click="toggleSidebar">
      {{ isCollapsed ? "☰" : "✕" }}
    </button>
    <img src="/public/icons/favicon-96.png" alt="Logo" class="sidebar-logo" />
    <div v-if="!isCollapsed">
      <h2>Menu</h2>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li>
          <router-link to="/lista-clientes">Lista de Clientes</router-link>
        </li>
        <li>
          <router-link to="/cadastro-cliente">Cadastro de Cliente</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapsed: window.innerWidth <= 768, // Define o menu como colapsado em telas menores
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.isCollapsed = window.innerWidth <= 768;
    },
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
  },
};
</script>

<style scoped>
.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  position: relative;
  transition: transform 0.3s ease;
}
.sidebar--collapsed {
  transform: translateX(-100%);
}
.sidebar h2 {
  color: #ecf0f1;
}
.sidebar ul {
  list-style-type: none;
  padding: 0;
}
.sidebar ul li {
  margin: 15px 0;
}
.sidebar ul li a {
  color: #ecf0f1;
  text-decoration: none;
}
.sidebar ul li a:hover {
  color: #3498db;
}
.toggle-button {
  position: absolute;
  top: 20px;
  right: -40px;
  background-color: #3498db;
  color: #fff;
  border: none;
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}
.toggle-button:hover {
  background-color: #2980b9;
}
</style>
