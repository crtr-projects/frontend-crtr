<template>
  <div id="app">
    <Menu />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Footer,
  },
};
</script>

<style scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  color: #333;
  margin: 0;
  padding: 0;
  min-height: 100vh; /* Garante que o conteúdo ocupe toda a altura da tela */
  display: flex;
  flex-direction: column; /* Alinha os itens verticalmente */
}

main {
  flex: 1; /* Faz o conteúdo principal crescer para preencher o espaço disponível */
}
</style>
