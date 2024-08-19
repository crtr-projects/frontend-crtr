<template>
  <div class="page-wrapper">
    <main class="content">
      <div class="gallery-container">
        <div v-for="(imagem, index) in imagens" :key="index" class="image-card">
          <img :src="imagem.resolvedImage" :alt="imagem.title" class="image" />
          <p class="image-title">{{ imagem.title }}</p>
        </div>
      </div>
    </main>
    <Footer /> <!-- Adiciona o footer ao final do conteúdo -->
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'; // Importa o componente Footer
import galeriaData from '../mocks/galeriaMocks.json'; // Importa o arquivo JSON com os dados da galeria

export default {
  name: 'GaleriaView',
  components: {
    Footer,
  },
  data() {
    return {
      imagens: this.resolveImages(galeriaData) // Resolve os caminhos das imagens
    };
  },
  methods: {
    resolveImages(imagens) {
      return imagens.map(imagem => ({
        ...imagem,
        resolvedImage: new URL(`../assets/${imagem.image}`, import.meta.url).href
      }));
    }
  }
};
</script>

<style src="../views/GaleriaView.css" scoped></style>
