<template>
  <div class="carrossel-container">
    <!-- Contêiner principal do carrossel -->
    <div class="carrossel">
      <!-- Loop para exibir todos os produtos no carrossel -->
      <div v-for="(product, index) in produtos" :key="index" class="carrossel-item">
        <!-- Imagem do produto -->
        <img :src="product.image" :alt="product.name" />
        <!-- Informações do produto -->
        <div class="product-info">
          <h3>{{ product.name }}</h3>
          <p>{{ product.description }}</p>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProdutosCarrossel',
  computed: {
    // Mapeia o getter para acessar todos os produtos
    ...mapGetters('produtos', ['getProdutos']),
    produtos() {
      return this.getProdutos;
    },
  },
};
</script>

<style src="../components/ProdutosCarrossel.css" scoped></style>
