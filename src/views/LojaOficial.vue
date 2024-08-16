<template>
  <div class="loja-container">
    <!-- Botão para alternar a visualização -->
    <button @click="toggleView" class="toggle-button">
      {{ isListView ? 'Ver em Grade' : 'Ver em Lista' }}
    </button>

    <!-- Contêiner de produtos -->
    <div :class="['products-container', { 'list-view': isListView }]">
      <!-- Modo de visualização em grade -->
      <div v-if="!isListView" class="products-grid">
        <div v-for="(product, index) in produtos" :key="index" class="product-card">
          <img :src="product.resolvedImage" alt="Produto" class="product-image" />
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">{{ product.price }}</p>
            <button class="add-to-cart-button">Adicionar à Sacola</button>
          </div>
        </div>
      </div>
      <!-- Modo de visualização em lista -->
      <ul v-if="isListView" class="products-list">
        <li v-for="(product, index) in produtos" :key="index" class="product-list-item">
          <img :src="product.resolvedImage" alt="Produto" class="product-image" />
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">{{ product.price }}</p>
            <button class="add-to-cart-button">Adicionar à Sacola</button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import produtosData from '../mocks/produtosMocks.json';

export default {
  name: 'LojaOficial',
  data() {
    return {
      isListView: false, // Inicialmente em modo de grade
      produtos: [] // Inicialmente vazio
    };
  },
  methods: {
    toggleView() {
      this.isListView = !this.isListView;
    },
    resolveImages(produtos) {
      return produtos.map(product => ({
        ...product,
        resolvedImage: new URL(`../assets/produtos/${product.image}`, import.meta.url).href
      }));
    }
  },
  created() {
    // Carregando os produtos do arquivo JSON e resolvendo os caminhos das imagens
    this.produtos = this.resolveImages(produtosData);
  }
};
</script>

<style src="../views/LojaOficial.css" scoped></style>
