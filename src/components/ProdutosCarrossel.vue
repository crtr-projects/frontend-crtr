<template>
  <div class="carrossel">
    <div class="carrossel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carrossel-slide" v-for="(chunk, chunkIndex) in chunkedProducts" :key="chunkIndex">
        <div class="produto-frame" v-for="(produto, index) in chunk" :key="index">
          <img :src="produto.image" alt="Produto" class="produto-imagem" />
          <div class="produto-info">
            <h3>{{ produto.name }}</h3>
            <p>{{ produto.description }}</p>
            <p>{{ produto.price }}</p>
            <button class="add-to-cart">Adicionar à Sacola</button>
          </div>
        </div>
      </div>
    </div>
    <button @click="prevSlide" class="carrossel-control prev">&#10094;</button>
    <button @click="nextSlide" class="carrossel-control next">&#10095;</button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ProdutosCarrossel',
  computed: {
    ...mapGetters('produtos', ['getProdutos']),
    produtos() {
      return this.getProdutos;
    },
    chunkedProducts() {
      const result = [];
      for (let i = 0; i < this.produtos.length; i += this.itemsPerSlide) {
        result.push(this.produtos.slice(i, i + this.itemsPerSlide));
      }
      return result;
    },
  },
  data() {
    return {
      currentIndex: 0,
      itemsPerSlide: 6,
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.chunkedProducts.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.chunkedProducts.length) % this.chunkedProducts.length;
    },
  },
};
</script>

<style src="../components/ProdutosCarrossel.css" scoped></style>
