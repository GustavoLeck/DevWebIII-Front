<!-- src/App.vue -->
<template>
  ><head>
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
      rel="stylesheet"
    />
  </head>
  <div id="app" class="app-container">
    <Sidebar />
    <div class="main-content">
      <router-view />
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
  font-family: "Lato", sans-serif;
}
.main-content {
  flex-grow: 1; /* Permite que o conteúdo ocupe o restante do espaço */
  padding: 20px; /* Adicione algum preenchimento para o conteúdo */
}
</style>
