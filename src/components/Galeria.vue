<template>
  <div class="gallery">
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
    <button class="more-button" @click="goToGaleria">Ver mais</button>
  </div>
</template>

<script>
import imagensData from '@/mocks/galeriaMocks.json';

export default {
  name: 'Galeria',
  data() {
    return {
      imagens: this.resolveImages(imagensData)
    };
  },
  methods: {
    resolveImages(imagens) {
      return imagens.map(imagem => ({
        ...imagem,
        resolvedImage: new URL(`../assets/galeria/${imagem.image}`, import.meta.url).href
      }));
    },
    goToGaleria() {
      this.$router.push('/galeria');
    }
  }
};
</script>

<style src="../components/Galeria.css" scoped></style>
