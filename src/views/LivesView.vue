<template>
  <div class="lives-view">
    <Lives :showMoreButton="false" /> <!-- Passa a prop para esconder o botão -->
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
