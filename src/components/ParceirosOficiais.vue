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

  import sumetalLogo from '../assets/parceiros/sumetal.png';
  import velhosBoiadeiros from '../assets/parceiros/velhos-boiadeiros.png';
  import camargo from '../assets/parceiros/camargo.png';
  import lifeWestern from '../assets/parceiros/life-western.png';

  export default {
    name: 'ParceirosOficiais',
    data() {
      return {
        whatsappLink: 'https://wa.me/27996253020', // Link do WhatsApp
        parceiros: [
          { nome: 'SUMETAL', logo: sumetalLogo },
          { nome: 'VELHOS BOIADEIROS', logo: velhosBoiadeiros },
          { nome: 'CAMARGO COMUNICACÃO VISUAL', logo: camargo },
          { nome: 'LIFE WESTERN', logo: lifeWestern },
        ]
      };
    },
  };
  </script>

  <style src="../components/ParceirosOficiais.css" scoped></style>
