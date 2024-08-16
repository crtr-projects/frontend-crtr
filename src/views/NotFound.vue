<template>
  <div class="page-wrapper">
    <main class="content">
      <div class="not-found">
        <h1>404</h1>
        <p>Página Não Encontrada</p>
        <router-link to="/">Voltar para a Página Inicial</router-link>
      </div>
    </main>
    <Footer /> <!-- Inclua o componente Footer aqui -->
  </div>
</template>

<script>
import Footer from '../components/Footer.vue'; // Importa o componente Footer

export default {
  name: 'NotFound',
  components: {
  },
};
</script>

<style src="../views/NotFound.css"></style>
