<template>
    <div class="galeria-view">
      <div class="gallery-container">
        <Galeria /> <!-- Inclui o componente Galeria na view -->
      </div>
    </div>
  </template>
  
  <script>
  import Galeria from '../components/Galeria.vue'; // Importa o componente Galeria
  
  export default {
    name: 'GaleriaView',
    components: {
      Galeria, // Registra o componente Galeria
    },
  };
  </script>
  
  <style src="../views/GaleriaView.css"></style>
  