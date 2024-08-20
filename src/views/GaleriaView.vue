<template>
  <div class="galeria-view">
    <main class="content">
      <h2 class="gallery-title">
        Galeria de <span class="highlight">Fotos</span>
      </h2>
      <div class="gallery-grid">
        <div v-for="(imagem, index) in imagens" :key="index" class="gallery-photo-card" @click="openImageModal(index)">
          <img :src="imagem.resolvedImage" :alt="imagem.title" class="gallery-photo" />
          <p class="gallery-photo-title">{{ imagem.title }}</p>
          <p class="gallery-photo-description">{{ imagem.description }}</p>
        </div>
      </div>
    </main>

    <!-- Modal de Imagens -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeImageModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeImageModal">X</button>
        <img :src="currentImage?.resolvedImage" alt="Imagem da galeria" class="modal-image" />
<!-- Botões de navegação no modal -->
<button class="navigation-button prev-button" @click="previousImage">&#10094;</button>
<button class="navigation-button next-button" @click="nextImage">&#10095;</button>

      </div>
    </div>
  </div>
</template>

<script>
import galeriaData from '../mocks/galeriaMocks.json';

export default {
  name: 'GaleriaView',
  data() {
    return {
      imagens: this.resolveImages(galeriaData),
      isModalOpen: false,
      currentIndex: 0,
    };
  },
  computed: {
    currentImage() {
      return this.imagens[this.currentIndex];
    }
  },
  methods: {
    resolveImages(imagens) {
      return imagens.map(imagem => ({
        ...imagem,
        resolvedImage: new URL(`../assets/galeria/${imagem.image}`, import.meta.url).href
      }));
    },
    openImageModal(index) {
      this.currentIndex = index;
      this.isModalOpen = true;
    },
    closeImageModal() {
      this.isModalOpen = false;
    },
    prevImage() {
      this.currentIndex = (this.currentIndex - 1 + this.imagens.length) % this.imagens.length;
    },
    nextImage() {
      this.currentIndex = (this.currentIndex + 1) % this.imagens.length;
    }
  }
};
</script>

<style src="../views/GaleriaView.css" scoped></style>
