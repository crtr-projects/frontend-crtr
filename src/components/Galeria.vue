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
      <button class="more-button">Ver mais</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Galeria',
    data() {
      return {
        // Array de URLs de fotos para a galeria
        photos: [
          'path/to/photo1.jpg',
          'path/to/photo2.jpg',
          'path/to/photo3.jpg'
        ],
      };
    },
  };
  </script>
  
  <style src="../components/Galeria.css" scoped></style>
  