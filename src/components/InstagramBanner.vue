<template>
    <!-- Estrutura do HTML do banner -->
    <div class="instagram-banner">
      <div class="banner-content">
        <!-- Texto incentivando os usuários a seguir no Instagram -->
        <p>Siga-nos no Instagram!</p>
        <!-- Imagem do QR Code -->
        <img src="../assets/logos/instagram-logo.svg" alt="QR Code para seguir no Instagram" class="qr-code" />
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
  