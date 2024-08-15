<template>
    <div class="carrossel">
      <!-- Carrossel de Produtos -->
      <div class="carrossel-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
        <div class="produto-frame" v-for="(produto, index) in produtos" :key="index">
          <img :src="produto.imagem" alt="Produto" class="produto-imagem"/>
          <div class="produto-info">
            <h3>{{ produto.nome }}</h3>
            <p>{{ produto.descricao }}</p>
            <p>{{ produto.preco }}</p>
            <button class="add-to-cart">Adicionar à Sacola</button>
          </div>
        </div>
      </div>
      <button @click="prevSlide" class="carrossel-control prev">&#10094;</button>
      <button @click="nextSlide" class="carrossel-control next">&#10095;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProdutosCarrossel',
    data() {
      return {
        currentIndex: 0,
        produtos: [
          { nome: 'Produto 1', descricao: 'Descrição do Produto 1', preco: 'R$ 99,90', imagem: 'path/to/imagem1.jpg' },
          { nome: 'Produto 2', descricao: 'Descrição do Produto 2', preco: 'R$ 79,90', imagem: 'path/to/imagem2.jpg' },
          { nome: 'Produto 3', descricao: 'Descrição do Produto 3', preco: 'R$ 89,90', imagem: 'path/to/imagem3.jpg' },
          { nome: 'Produto 4', descricao: 'Descrição do Produto 4', preco: 'R$ 69,90', imagem: 'path/to/imagem4.jpg' },
          { nome: 'Produto 5', descricao: 'Descrição do Produto 5', preco: 'R$ 59,90', imagem: 'path/to/imagem5.jpg' },
        ],
      };
    },
    methods: {
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % Math.ceil(this.produtos.length / 2);
      },
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + Math.ceil(this.produtos.length / 2)) % Math.ceil(this.produtos.length / 2);
      },
    },
  };
  </script>
  
  <style src="../components/ProdutosCarrossel.css"></style> <!-- Importação do CSS -->
  