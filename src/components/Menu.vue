<template>
  <div ref="menuWrapper">
    <!-- Botão de abrir o menu -->
    <button @click="toggleMenu" class="menu-button">
      ☰
    </button>
    
    <!-- Navegação principal -->
    <nav :class="{ 'open': isMenuOpen }" class="menu">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="Logo" class="logo" />
      </div>
      
      <!-- Links do menu -->
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/agenda">Agenda CRTR</router-link></li>
        <li><router-link to="/loja">Loja Oficial</router-link></li>
        <li><router-link to="/galeria">Galeria de Fotos</router-link></li> <!-- Novo link para a Galeria -->
        <li><a href="/">Temporada 2024</a></li>
        <li><a href="/">Ranking</a></li>
        <li><a href="/">Lives</a></li>
        <li><a href="/">Informações</a></li>
      </ul>
      
      <!-- Botão de fechar o menu -->
      <button @click="toggleMenu" class="close-button">×</button>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    handleClickOutside(event) {
      const menuWrapper = this.$refs.menuWrapper;
      if (menuWrapper && !menuWrapper.contains(event.target) && this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style src="../components/Menu.css" scoped></style>
