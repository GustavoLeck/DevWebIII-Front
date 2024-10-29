<!-- src/views/Home.vue -->
<template>
    <div class="home">
      <h1>Bem-vindo à Página Inicial</h1>
      <p>Esta é a página inicial do seu aplicativo.</p>
      <p>Aqui você pode adicionar informações relevantes ou links para outras seções do site.</p>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'Home',
  });
  </script>
  
  <style scoped>
  .home {
    padding: 20px;
    text-align: center;
  }
  
  h1 {
    color: #333;
  }
  
  p {
    color: #555;
  }
  </style>
  