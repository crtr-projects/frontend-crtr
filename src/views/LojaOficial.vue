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
        <div v-for="(product, index) in produtos" :key="index" class="product-card" @click="openProductModal(product)">
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
        <li v-for="(product, index) in produtos" :key="index" class="product-list-item" @click="openProductModal(product)">
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

    <!-- Modal de Detalhes do Produto -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeProductModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeProductModal">X</button>
        <img :src="selectedProduct?.resolvedImage" alt="Produto" class="modal-image" />
        <h3>{{ selectedProduct?.name }}</h3>
        <p>{{ selectedProduct?.description }}</p>
        <p>{{ selectedProduct?.price }}</p>
        <button class="add-to-cart-button">Adicionar à Sacola</button>
      </div>
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
      produtos: [], // Inicialmente vazio
      isModalOpen: false, // Controle de exibição do modal
      selectedProduct: null // Produto selecionado para exibir no modal
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
    },
    openProductModal(product) {
      this.selectedProduct = product;
      this.isModalOpen = true;
    },
    closeProductModal() {
      this.isModalOpen = false;
      this.selectedProduct = null;
    }
  },
  created() {
    // Carregando os produtos do arquivo JSON e resolvendo os caminhos das imagens
    this.produtos = this.resolveImages(produtosData);
  }
};
</script>

<style src="../views/LojaOficial.css" scoped></style>
