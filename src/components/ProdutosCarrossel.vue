<template>
  <div class="carrossel-container">
    <!-- Título e Texto Chamativo -->
    <div class="carrossel-header">
      <h1 class="carrossel-title">Confira Nossos Produtos Imperdíveis!</h1>
      <p class="carrossel-description">Navegue pela nossa loja e descubra ofertas incríveis e produtos da CRTR que você não pode perder. Clique em qualquer item para ver mais detalhes!</p>
    </div>

    <div class="carrossel" @mouseover="stopScroll" @mouseleave="startScroll">
      <div v-for="(product, index) in produtos" :key="index" class="produto-frame" @click="openProductModal(product)">
        <img :src="product.resolvedImage" :alt="product.name" class="produto-imagem" />
        <div class="produto-info">
          <h3 class="produto-nome">{{ product.name }}</h3>
          <p class="produto-preco">{{ product.price }}</p>
        </div>
        <button class="add-to-cart">Comprar Agora</button>
      </div>
    </div>

    <button class="more-button" @click="goToLojaOficial">Ir a loja</button>

    <!-- Modal de Detalhes do Produto -->
    <div v-if="isModalOpen" class="modal-overlay" @click="closeProductModal">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeProductModal">X</button>

        <!-- Botão Anterior -->
        <button class="nav-button left-button" @click="prevProduct">‹</button>
        
        <img :src="selectedProduct?.resolvedImage" alt="Produto" class="modal-image" />
        <h3>{{ selectedProduct?.name }}</h3>
        <p>{{ selectedProduct?.price }}</p>
        <button class="add-to-cart-button">Comprar Agora</button>
        
        <!-- Botão Próximo -->
        <button class="nav-button right-button" @click="nextProduct">›</button>
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
      produtos: this.resolveImages(produtosData),
      isScrolling: true, // Controle do scroll automático
      isModalOpen: false, // Controle de exibição do modal
      selectedProduct: null, // Produto selecionado para exibir no modal
      selectedIndex: 0, // Índice do produto selecionado
    };
  },
  methods: {
    resolveImages(produtos) {
      const resolvedProducts = produtos.map(product => ({
        ...product,
        resolvedImage: new URL(`../assets/produtos/${product.image}`, import.meta.url).href
      }));
      return [...resolvedProducts, ...resolvedProducts]; // Duplica os produtos para um scroll infinito
    },
    stopScroll() {
      this.isScrolling = false; // Para o scroll automático
    },
    startScroll() {
      this.isScrolling = true; // Retoma o scroll automático
    },
    openProductModal(product) {
      this.selectedIndex = this.produtos.indexOf(product);
      this.selectedProduct = product;
      this.isModalOpen = true;
    },
    closeProductModal() {
      this.isModalOpen = false;
      this.selectedProduct = null;
    },
    goToLojaOficial() {
      this.$router.push('/loja'); // Redireciona para a rota da loja
    },
    prevProduct() {
      if (this.selectedIndex > 0) {
        this.selectedIndex--;
      } else {
        this.selectedIndex = this.produtos.length - 1;
      }
      this.selectedProduct = this.produtos[this.selectedIndex];
    },
    nextProduct() {
      if (this.selectedIndex < this.produtos.length - 1) {
        this.selectedIndex++;
      } else {
        this.selectedIndex = 0;
      }
      this.selectedProduct = this.produtos[this.selectedIndex];
    }
  }
};
</script>

<style src="../components/ProdutosCarrossel.css" scoped></style>
