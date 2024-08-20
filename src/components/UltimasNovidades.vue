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

    <!-- Botão "Mais notícias" condicionado pela prop -->
    <button v-if="showMoreButton" class="more-button" @click="goToAgenda">Mais notícias</button>
  </div>
</template>

<script>
import news1 from '../assets/noticias/news1.png';
import news2 from '../assets/noticias/news2.png';
import news3 from '../assets/noticias/news3.png';
import '../components/UltimasNovidades.css'; // Importando o CSS separado

export default {
  name: 'UltimasNovidades',
  props: {
    showMoreButton: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      currentIndex: 0,
      newsItems: [
        { image: news1, title: 'Fivela Oficial CRTR MELHOR TOURO DA ETAPA ', description: 'A Cia de Rodeio Felipe Correia levou a Fivela Oficial CRTR MELHOR TOURO DA ETAPA ✔️ a Fivela Oficial CRTR MELHOR TOURO DA FEDERAÇÃO e também a Fivela Oficial CRTR MELHOR BOIADA na noite de ontem 11/08/24, premiação da 7ª Etapa da Temporada 2024 que aconteceu nos dias 09 a 11 de Agosto, na 22ª Festa de Venda Nova do Imigrante/ES.' },
        { image: news2, title: 'Campeões do Rodeio 🏆', description: 'Campeões do Rodeio 🏆 , na 48ª Expoagro de Alegre/ES, realizado nos dias 16 a 18 de Agosto. Classificação: 🐴 Modalidade em cutiano:' },
        { image: news3, title: 'Vem aí a 8ª Etapa da temporada 2024. ', description: 'E a @madrinheira_mariana_monthana está confirmada para a 48ª Expoagro de Alegre/ES. Prepare-se para muitas emoções, Alegre/ES e toda a região. 🗓️ 16 a 18 de agosto.📍 Alegre/ES. Mais uma vez, vamos fazer história @expoagro.alegre #CRTR o Circuito de Rodeio que mais cresce no estado do Espírito Santo.' },
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
    goToAgenda() {
      this.$router.push('/agenda');
    }
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
