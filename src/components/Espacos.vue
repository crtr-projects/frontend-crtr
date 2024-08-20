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
      <div class="logo-row" v-for="(logoRow, rowIndex) in logosChunked" :key="rowIndex">
        <div class="logo-placeholder" v-for="(logo, index) in logoRow" :key="index">
          <img :src="logo.resolvedImage" alt="Logo do Parceiro" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import parceiros from '../mocks/parceirosMocks.json';

export default {
  name: 'Espacos',
  data() {
    return {
      logos: this.resolveImages(parceiros), // Array de logos carregadas do JSON
    };
  },
  computed: {
    logosChunked() {
      // Divide as logos em grupos de 4 para exibição em duas linhas
      return this.chunkArray(this.logos, 4);
    }
  },
  methods: {
    resolveImages(parceiros) {
      return parceiros.map(parceiro => ({
        ...parceiro,
        resolvedImage: new URL(`../assets/parceiros/${parceiro.image}`, import.meta.url).href
      }));
    },
    chunkArray(array, size) {
      const result = [];
      for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size));
      }
      return result;
    }
  }
};
</script>

<style src="../components/Espacos.css" scoped></style>
