<template>
  <div>
    <Carousel />
    <Buttons />
    <YouTubePreview />
    <InstagramBanner qrCodeSrc="path/para/seu/qrcode.png" />
    <UltimasNovidades />
    <Espacos /> <!-- Coloca o componente Espaços acima da Galeria -->
    <Galeria /> <!-- Coloca o componente Galeria abaixo do Espaços -->
    <ProdutosCarrossel /> <!-- Novo carrossel de produtos -->
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import Buttons from '../components/Buttons.vue';
import YouTubePreview from '../components/YouTubePreview.vue';
import InstagramBanner from '../components/InstagramBanner.vue';
import UltimasNovidades from '../components/UltimasNovidades.vue';
import Galeria from '../components/Galeria.vue'; // Importa o componente Galeria
import Espacos from '../components/Espacos.vue'; // Importa o componente Espaços
import ProdutosCarrossel from '../components/ProdutosCarrossel.vue'; // Importa o novo carrossel de produtos

export default {
  name: 'Home',
  components: {
    Carousel,
    Buttons,
    YouTubePreview,
    InstagramBanner,
    UltimasNovidades,
    Galeria,  // Adiciona o componente Galeria
    Espacos,  // Adiciona o componente Espaços
    ProdutosCarrossel,  // Adiciona o novo componente de carrossel de produtos
  }
};
</script>

<!-- Importa o arquivo CSS que contém os estilos específicos para a página Home -->
<style src="../views/Home.css"></style>
