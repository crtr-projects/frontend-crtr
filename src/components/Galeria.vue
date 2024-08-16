<template>
  <div class="gallery">
    <!-- Título da galeria com destaque para a palavra "Fotos" -->
    <h2 class="gallery-title">
      Galeria de <span class="highlight">Fotos</span>
    </h2>
    <!-- Grid de fotos -->
    <div class="gallery-grid">
      <img v-for="(photo, index) in photos" :src="photo" :key="index" class="gallery-photo" alt="Foto da Galeria" />
    </div>
    <!-- Botão "ver mais" -->
    <button class="more-button" @click="goToGaleria">Ver mais</button>
  </div>
</template>

<script>
import image1 from '../assets/galeria/image-1.png';
import image2 from '../assets/galeria/image-2.png';
import image3 from '../assets/galeria/image-3.png';
import image4 from '../assets/galeria/image-4.png';

export default {
  name: 'Galeria',
  data() {
    return {
      photos: [image1, image2, image3, image4],
    };
  },
  methods: {
    // Método para redirecionar para a view "Galeria de Fotos"
    goToGaleria() {
      this.$router.push('/galeria');
    },
  },
};
</script>

<style src="../components/Galeria.css" scoped></style>
