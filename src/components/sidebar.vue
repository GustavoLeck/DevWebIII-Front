<template>
  <div :class="['sidebar', { 'sidebar--collapsed': isCollapsed }]">
    <button class="toggle-button" @click="toggleSidebar">
      {{ isCollapsed ? "☰" : "✕" }}
    </button>
    <div v-if="!isCollapsed">
      <img
        src="/src/assets/icons/favicon-96.png"
        alt="Logo"
        class="sidebar-logo"
      />
      <h2>Menu</h2>
      <ul>
        <li><router-link to="/home">Home</router-link></li>
        <li @click="toggleClientesMenu" class="menu-item">
          Clientes
          <span class="arrow">{{ isClientesMenuOpen ? "▼" : "▶" }}</span>
        </li>
        <ul v-if="isClientesMenuOpen" class="submenu">
          <li>
            <router-link to="/lista-clientes">Lista de Clientes</router-link>
          </li>
          <li>
            <router-link to="/cadastro-cliente"
              >Cadastro de Cliente</router-link
            >
          </li>
        </ul>
        <!-- <li><a href="#">Produtos</a></li>
        <li><a href="#">Fornecedores</a></li> -->
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      isCollapsed: window.innerWidth <= 768,
      isClientesMenuOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    },
    toggleClientesMenu() {
      this.isClientesMenuOpen = !this.isClientesMenuOpen;
    },
    handleResize() {
      this.isCollapsed = window.innerWidth <= 768;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.handleResize);
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
.sidebar-logo {
  width: 100%;
  max-width: 100px;
  margin-bottom: 10px;
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
.submenu {
  list-style-type: none;
  padding-left: 20px; /* Ajuste para a direita */
  margin: 5px; /* Espaço acima e abaixo do submenu */
  margin-left: 20px; /* Espaço acima e abaixo do submenu */
  padding-top: 5px; /* Espaço acima do submenu */
  padding-bottom: 5px; /* Espaço abaixo do submenu */
  transition: margin-left 0.3s ease; /* Transição suave ao abrir o submenu */
}
.submenu li {
  margin-left: 20px; /* Move os itens do submenu para a direita */
}
.menu-item {
  cursor: pointer; /* Indica que é clicável */
}
.arrow {
  margin-left: 5px; /* Espaço entre o texto e a seta */
  font-size: 0.7em; /* Tamanho menor para a seta */
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
