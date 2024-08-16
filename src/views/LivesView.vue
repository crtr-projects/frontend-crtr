<template>
    <div class="lives-view">
      <div>
        <Lives /> <!-- Inclui o componente Lives na view -->
      </div>
    </div>
  </template>
  
  <script>
  import Lives from '../components/Lives.vue'; // Importa o componente Lives
  
  export default {
    name: 'LivesView',
    components: {
      Lives, // Registra o componente Lives
    },
  };
  </script>
  
  <style src="../views/LivesView.css"></style>
  