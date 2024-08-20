<template>
  <div ref="menuWrapper" class="menu-wrapper">
    <!-- Botão de abrir o menu -->
    <button @click="toggleMenu" class="menu-button">
      ☰
    </button>
    
    <!-- Navegação principal -->
    <nav :class="{ 'open': isMenuOpen }" class="menu">
      <div class="logo-container">
        <router-link to="/">
          <img src="../assets/logo-whatsapp.jpg" alt="Logo" class="logo" />
        </router-link>
      </div>
      
      <!-- Links do menu -->
      <ul>
        <li><router-link to="/" @click.native="closeMenu">Home</router-link></li>
        <li><router-link to="/agenda" @click.native="closeMenu">Agenda CRTR</router-link></li>
        <li><router-link to="/loja" @click.native="closeMenu">Loja Oficial</router-link></li>
        <li><router-link to="/galeria" @click.native="closeMenu">Galeria de Fotos</router-link></li>
        <li><router-link to="/2024" @click.native="closeMenu">Temporada 2024</router-link></li>
        <li><router-link to="/ranking" @click.native="closeMenu">Ranking</router-link></li>
        <li><router-link to="/lives" @click.native="closeMenu">Lives</router-link></li>
        <li><router-link to="/informacoes" @click.native="closeMenu">Informações</router-link></li>
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
    closeMenu() {
      this.isMenuOpen = false;
    },
    handleClickOutside(event) {
      const menuWrapper = this.$refs.menuWrapper;
      if (menuWrapper && !menuWrapper.contains(event.target) && this.isMenuOpen) {
        this.closeMenu();
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
