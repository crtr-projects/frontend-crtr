<template>
  <div class="carousel">
    <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-slide" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="Slide" />
      </div>
    </div>
    <button @click="prevSlide" class="carousel-control prev">&#10094;</button>
    <button @click="nextSlide" class="carousel-control next">&#10095;</button>
  </div>
</template>

<script>
import image1 from '../assets/carousel/image.png';
import image2 from '../assets/carousel/image.png';
import image3 from '../assets/carousel/image.png';
import '../components/Carousel.css'; // Importando o CSS separado

export default {
  name: 'Carousel',
  data() {
    return {
      currentIndex: 0,
      images: [image1, image2, image3],
      interval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 4000); // Muda de slide a cada 3 segundos
    },
    stopAutoSlide() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    },
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeUnmount() {
    this.stopAutoSlide();
  },
};
</script>

<style src="./Carousel.css" scoped></style>
