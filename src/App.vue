<!-- src/App.vue -->
<template>
  <div id="app" class="app-container">
    <Sidebar />
    <div class="main-content">
      <router-view />
      <!-- Este é o ponto onde as rotas renderizam -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Sidebar from "./components/sidebar.vue";

export default defineComponent({
  name: "App",
  components: {
    Sidebar,
  },
});
</script>

<style>
.app-container {
  display: flex; /* Usar flex para alinhar sidebar e conteúdo */
}

.main-content {
  flex-grow: 1; /* Permite que o conteúdo ocupe o restante do espaço */
  padding: 20px; /* Adicione algum preenchimento para o conteúdo */
}
</style>
