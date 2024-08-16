<template>
  <!-- Estrutura do HTML do banner -->
  <div class="instagram-banner">
    <div class="banner-content">
      <!-- Texto incentivando os usuários a seguir no Instagram -->
      <p class="siga-nos">🚀 <span class="highlight">Acompanhe nossas aventuras!</span> 🌟</p>
      <p class="description">
        Estamos compartilhando as novidades mais quentes, bastidores exclusivos e promoções imperdíveis! 
        Não fique de fora e junte-se à nossa comunidade. Escaneie o QR Code abaixo e siga-nos no Instagram!
      </p>
      <!-- Link para o Instagram envolvendo a imagem -->
      <a href="https://www.instagram.com/circuitotrproducoesoficial?utm_source=qr" target="_blank">
        <img src="../assets/logos/instagram-logo.png" alt="QR Code para seguir no Instagram" class="qr-code" />
      </a>
    </div>
  </div>
</template>

<script>
/* Importa o arquivo CSS que contém os estilos do banner */
import '../components/InstagramBanner.css';

export default {
  name: "InstagramBanner", // Nome do componente
};
</script>
