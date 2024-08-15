<template>
  <div class="loja-container">
    <!-- Botão para alternar a visualização -->
    <button @click="toggleView" class="toggle-button">
      {{ isListView ? 'Ver em Grade' : 'Ver em Lista' }}
    </button>
    
    <!-- Contêiner de produtos -->
    <div :class="['products-container', { 'list-view': isListView }]">
      <!-- Lista de produtos -->
      <div v-if="!isListView" class="products-grid">
        <div v-for="(product, index) in products" :key="index" class="product-card">
          <img :src="product.image" alt="Produto" class="product-image" />
          <div class="product-info">
            <h3 class="product-name">{{ product.name }}</h3>
            <p class="product-description">{{ product.description }}</p>
            <p class="product-price">{{ product.price }}</p>
            <button class="add-to-cart-button">Adicionar à Sacola</button>
          </div>
        </div>
      </div>
      <!-- Lista de produtos -->
      <ul v-if="isListView" class="products-list">
        <li v-for="(product, index) in products" :key="index" class="product-list-item">
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
export default {
  name: 'LojaOficial',
  data() {
    return {
      isListView: false, // Inicialmente em modo de grade
      products: [
        { name: 'Produto 1', description: 'Descrição do Produto 1', price: 'R$ 100,00', image: 'path/to/product1.jpg' },
        { name: 'Produto 2', description: 'Descrição do Produto 2', price: 'R$ 150,00', image: 'path/to/product2.jpg' },
        { name: 'Produto 3', description: 'Descrição do Produto 3', price: 'R$ 200,00', image: 'path/to/product3.jpg' },
        { name: 'Produto 4', description: 'Descrição do Produto 4', price: 'R$ 250,00', image: 'path/to/product4.jpg' },
        { name: 'Produto 5', description: 'Descrição do Produto 5', price: 'R$ 300,00', image: 'path/to/product5.jpg' },
      ],
    };
  },
  methods: {
    toggleView() {
      this.isListView = !this.isListView;
    },
  },
};
</script>

<style src="../views/LojaOficial.css" scoped></style>
