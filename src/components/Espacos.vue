<template>
    <div class="espacos">
      <div class="espacos-text">
        <p>
          Os Espaços VIP são áreas exclusivas de camarotes dentro do Estádio de Rodeios que você pode desfrutar de uma experiência diferente.
          <br />
          <a href="/informacoes" class="saiba-mais-link">Clique e saiba mais</a>
        </p>
      </div>
      <div class="espacos-logos">
        <div class="logo-row" v-for="row in 2" :key="row">
          <div class="logo-placeholder" v-for="index in 4" :key="index">
            <!-- Campo para adicionar logo futuramente -->
            <img :src="`/assets/logos/logo${(row - 1) * 4 + index}.png`" alt="Logo do Parceiro" v-if="logos[(row - 1) * 4 + index - 1]" />
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Espacos',
    data() {
      return {
        logos: Array(8).fill(''), // Array inicial para 8 logos
      };
    },
  };
  </script>
  
  <style src="../components/Espacos.css" scoped></style>
  