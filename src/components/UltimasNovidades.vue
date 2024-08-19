<template>
  <div class="ultimas-novidades">
    <div class="section-header">
      <h1>Últimas Notícias</h1>
      <p>Confira as últimas atualizações e novidades diretamente aqui!</p>
    </div>
    <div class="carousel">
      <div class="carousel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="carousel-slide" v-for="(newsItem, index) in newsItems" :key="index">
          <div class="slide-content">
            <img :src="newsItem.image" :alt="newsItem.title" class="slide-image" />
            <div class="slide-text">
              <h2>{{ newsItem.title }}</h2>
              <p>{{ newsItem.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="carousel-control prev">&#10094;</button>
      <button @click="nextSlide" class="carousel-control next">&#10095;</button>
    </div>
    <a href="/noticias" class="mais-noticias">Mais notícias</a>
  </div>
</template>

<script>
import news1 from '../assets/noticias/news1.png';
import news2 from '../assets/noticias/news2.png';
import news3 from '../assets/noticias/news3.png';
import '../components/UltimasNovidades.css'; // Importando o CSS separado

export default {
  name: 'UltimasNovidades',
  data() {
    return {
      currentIndex: 0,
      newsItems: [
        { image: news1, title: 'Notícia 1', description: 'Descrição breve da notícia 1.' },
        { image: news2, title: 'Notícia 2', description: 'Descrição breve da notícia 2.' },
        { image: news3, title: 'Notícia 3', description: 'Descrição breve da notícia 3.' },
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
      this.interval = setInterval(this.nextSlide, 5000);
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
