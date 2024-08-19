<template>
  <div class="galeria-view">
    <main class="content">
      <h2 class="gallery-title">
        Galeria de <span class="highlight">Fotos</span>
      </h2>
      <div class="gallery-grid">
        <div v-for="(imagem, index) in imagens" :key="index" class="gallery-photo-card">
          <img :src="imagem.resolvedImage" :alt="imagem.title" class="gallery-photo" />
          <p class="gallery-photo-title">{{ imagem.title }}</p>
          <p class="gallery-photo-description">{{ imagem.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import galeriaData from '../mocks/galeriaMocks.json'; // Importa o arquivo JSON com os dados da galeria

export default {
  name: 'GaleriaView',
  data() {
    return {
      imagens: this.resolveImages(galeriaData) // Resolve os caminhos das imagens
    };
  },
  methods: {
    resolveImages(imagens) {
      return imagens.map(imagem => ({
        ...imagem,
        resolvedImage: new URL(`../assets/galeria/${imagem.image}`, import.meta.url).href
      }));
    }
  }
};
</script>

<style src="../views/GaleriaView.css" scoped></style>
