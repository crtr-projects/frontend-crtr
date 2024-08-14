<template>
    <!-- Estrutura do HTML do banner -->
    <div class="instagram-banner">
      <div class="banner-content">
        <!-- Texto incentivando os usuários a seguir no Instagram -->
        <p>Siga-nos no Instagram!</p>
        <!-- Imagem do QR Code -->
        <img :src="qrCodeSrc" alt="QR Code para seguir no Instagram" class="qr-code" />
      </div>
    </div>
  </template>
  
  <script>
  /* Importa o arquivo CSS que contém os estilos do banner */
  import '../components/InstagramBanner.css';
  
  export default {
    name: "InstagramBanner", // Nome do componente
    props: {
      /* 
      Define uma prop chamada `qrCodeSrc`, que espera uma string.
      Essa prop é utilizada para definir o caminho da imagem do QR Code.
      */
      qrCodeSrc: {
        type: String,
        required: true // Indica que a prop é obrigatória
      }
    }
  };
  </script>
  