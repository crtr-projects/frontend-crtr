<template>
    <div class="parceiros-oficiais">
      <!-- Título centralizado -->
      <h2 class="titulo">Parceiros Oficiais</h2>

      <!-- Logos dos parceiros -->
      <div class="parceiros-grid">
        <div class="parceiro-item" v-for="(parceiro, index) in parceiros" :key="index">
          <img :src="parceiro.logo" alt="Logo do Parceiro" class="parceiro-logo"/>
          <p class="parceiro-nome">{{ parceiro.nome }}</p>
        </div>
      </div>

      <!-- Logo do WhatsApp no canto direito inferior -->
      <a :href="whatsappLink" class="whatsapp-logo">
        <img src="../assets/logos/whatsapp-logo.svg" alt="WhatsApp" />
      </a>
    </div>
  </template>

  <script>
  export default {
    name: 'ParceirosOficiais',
    data() {
      return {
        whatsappLink: 'https://wa.me/yourwhatsappnumber', // Link do WhatsApp
        parceiros: [
          { nome: 'BMW', logo: '../' },
          { nome: 'MERCEDEZ', logo: 'path/to/parceiro2-logo.jpg' },
          { nome: 'APPLE', logo: 'path/to/parceiro3-logo.jpg' },
          { nome: 'BEER DAY', logo: 'path/to/parceiro4-logo.jpg' },
          { nome: 'GOOGLE', logo: 'path/to/parceiro5-logo.jpg' },
          // Adicione mais parceiros conforme necessário
        ],
      };
    },
  };
  </script>

  <style src="../components/ParceirosOficiais.css" scoped></style>
