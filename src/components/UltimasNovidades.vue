<template>
  <div class="ultimas-novidades">
    <div class="carousel">
      <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-slide" v-for="(newsItem, index) in newsItems" :key="index">
          <img :src="newsItem.image" :alt="newsItem.title" />
          <p>{{ newsItem.title }}</p>
        </div>
      </div>
      <button @click="prevSlide" class="carousel-control prev">&#10094;</button>
      <button @click="nextSlide" class="carousel-control next">&#10095;</button>
    </div>
    <a href="/noticias" class="mais-noticias">Mais notícias</a>
  </div>
</template>

<script>
import '../components/UltimasNovidades.css'; // Importando o CSS separado

export default {
  name: 'UltimasNovidades',
  data() {
    return {
      currentIndex: 0,
      newsItems: [
        { image: '/assets/noticias/news1.png', title: 'Notícia 1' },
        { image: '/assets/noticias/news2.png', title: 'Notícia 2' },
        { image: '/assets/noticias/news3.png', title: 'Notícia 3' },
        // Adicione mais itens conforme necessário
      ],
      interval: null,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.newsItems.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.newsItems.length) % this.newsItems.length;
    },
    startAutoSlide() {
      this.interval = setInterval(this.nextSlide, 3000); // Muda de slide a cada 3 segundos
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
  beforeDestroy() {
    this.stopAutoSlide();
  },
};
</script>

<style src="../components/UltimasNovidades.css" scoped></style>
