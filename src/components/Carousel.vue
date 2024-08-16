<template>
  <!-- Contêiner principal do carrossel -->
  <div class="carousel">
    <!-- Contêiner das imagens do carrossel, que será movido horizontalmente -->
    <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <!-- Slides do carrossel -->
      <div class="carousel-slide" v-for="(image, index) in images" :key="index">
        <!-- Imagem de cada slide -->
        <img :src="image" alt="Slide" />
      </div>
    </div>
    <!-- Botão para slide anterior -->
    <button @click="prevSlide" class="carousel-control prev">&#10094;</button>
    <!-- Botão para próximo slide -->
    <button @click="nextSlide" class="carousel-control next">&#10095;</button>
  </div>
</template>

<script>
// Importa as imagens que serão usadas no carrossel
import image1 from '../assets/carousel/image.png';
import image2 from '../assets/carousel/image.png';
import image3 from '../assets/carousel/image.png';
// Importa o arquivo CSS separado para estilização do carrossel
import '../components/Carousel.css';

export default {
  name: 'Carousel',
  data() {
    return {
      currentIndex: 0, // Índice do slide atual
      images: [image1, image2, image3], // Array de imagens para o carrossel
      interval: null, // Referência ao intervalo de slide automático
    };
  },
  methods: {
    // Avança para o próximo slide
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    // Volta para o slide anterior
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    // Inicia o slide automático
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 4000); // Muda de slide a cada 4 segundos
    },
    // Para o slide automático
    stopAutoSlide() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
  },
  mounted() {
    // Inicia o slide automático ao montar o componente
    this.startAutoSlide();
  },
  beforeUnmount() {
    // Para o slide automático antes de desmontar o componente
    this.stopAutoSlide();
  },
};
</script>

<style src="../components/Carousel.css" scoped></style>
