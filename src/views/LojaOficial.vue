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
          <img :src="product.image" alt="Produto" class="product-image" />
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
          <img :src="product.image" alt="Produto" class="product-image" />
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
import { mapActions } from 'vuex';
import ProdutosCarrossel from '../components/ProdutosCarrossel.vue';

export default {
  name: 'LojaOficial',
  components: {
    ProdutosCarrossel,
  },
  data() {
    return {
      isListView: false, // Inicialmente em modo de grade
    };
  },
  computed: {
    produtos() {
      return this.$store.getters['produtos/getProdutos'];
    },
  },
  methods: {
    toggleView() {
      this.isListView = !this.isListView;
    },
  },
  created() {
    // Simulação de carregamento de produtos
    this.$store.dispatch('produtos/atualizarProdutos', [
      { name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100,00', image: '../src/assets/produtos/copo.png' },
      { name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100,00', image: '../src/assets/produtos/bone.png' },
      { name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100,00', image: '../src/assets/produtos/moletom.png' }
    ]);
  },
};
</script>


<style src="../views/LojaOficial.css" scoped></style>
