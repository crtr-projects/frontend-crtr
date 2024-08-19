<template>
  <div class="carrossel-container">
    <div class="carrossel">
      <div v-for="(product, index) in produtos" :key="index" class="produto-frame">
        <!-- A imagem agora é renderizada diretamente a partir do atributo `resolvedImage` -->
        <img :src="product.resolvedImage" :alt="product.name" class="produto-imagem" />
        <div class="produto-info">
          <h3 class="produto-nome">{{ product.name }}</h3>
          <p class="produto-preco">{{ product.price }}</p>
        </div>
        <button class="add-to-cart">Adicionar à sacola</button>
      </div>
    </div>
  </div>
</template>

<script>
import produtosData from '@/mocks/produtosMocks.json';

export default {
  name: 'ProdutosCarrossel',
  data() {
    return {
      produtos: this.resolveImages(produtosData)
    };
  },
  methods: {
    resolveImages(produtos) {
      const resolvedProducts = produtos.map(product => ({
        ...product,
        resolvedImage: new URL(`../assets/produtos/${product.image}`, import.meta.url).href
      }));
      return [...resolvedProducts, ...resolvedProducts]; // Duplica os produtos para um scroll infinito
    }
  }
};
</script>

<style src="../components/ProdutosCarrossel.css" scoped></style>
