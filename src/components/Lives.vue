<template>
  <div class="lives-container">
    <h2 class="lives-title">Transmissões AO VIVO</h2>
    <h2 class="lives-description">Aqui você Acompanha em tempo real os nossos eventos de cada etapa da CRTR !</h2>
    <div class="live-grid">
      <div v-for="(live, index) in lives" :key="index" class="live-item" @click="openLive(live)">
        <img :src="live.thumbnail" alt="Live thumbnail" class="live-thumbnail" />
        <div class="live-info">
          <p class="live-title">{{ live.title }}</p>
          <p class="live-status">AO VIVO</p>
        </div>
      </div>
    </div>

    <!-- Modal para exibir o vídeo ao vivo -->
    <div v-if="isModalOpen" class="live-modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button @click="closeModal" class="close-modal">×</button>
        <iframe 
          :src="currentLiveUrl" 
          title="Live Video" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import live1 from '../assets/lives/live-VNI-domingo.png';
import live2 from '../assets/lives/live-LT-domingo.png';

export default {
  name: 'Lives',
  data() {
    return {
      lives: [
        { title: '22ª FESTA DE RODEIO DE VENDA NOVA DO IMIGRANTE - DOMINGO', thumbnail: live1, videoUrl: 'https://www.youtube.com/embed/BgfDHQw79kQ' },
        { title: '36 ANOS DE LARANJA DA TERRA - DOMINGO', thumbnail: live2, videoUrl: 'https://www.youtube.com/embed/wrtFyj1itc4' },
      ],
      isModalOpen: false,
      currentLiveUrl: '',
    };
  },
  methods: {
    openLive(live) {
      this.currentLiveUrl = live.videoUrl;
      this.isModalOpen = true;
    },
    closeModal() {
      this.isModalOpen = false;
      this.currentLiveUrl = '';
    },
  },
};
</script>

<style src="../components/Lives.css" scoped></style>
