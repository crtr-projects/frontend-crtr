<template>
  <div class="page-wrapper">
    <main class="content">
      <div class="gallery-container">
        <Galeria /> <!-- Inclui o componente Galeria na view -->
      </div>
    </main>
    <Footer /> <!-- Adiciona o footer ao final do conteúdo -->
  </div>
</template>

<script>
import Galeria from '../components/Galeria.vue'; // Importa o componente Galeria
import Footer from '../components/Footer.vue'; // Importa o componente Footer

export default {
  name: 'GaleriaView',
  components: {
    Galeria, // Registra o componente Galeria
  },
};
</script>

<style src="../views/GaleriaView.css"></style>
