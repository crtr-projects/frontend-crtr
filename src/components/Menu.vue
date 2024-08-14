<template>
    <div ref="menuWrapper">
      <button @click="toggleMenu" class="menu-button">
        ☰
      </button>
      <nav :class="{ 'open': isMenuOpen }" class="menu">
        <div class="logo-container">
          <img src="../assets/image.png" alt="Logo" class="logo" />
        </div>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><a href="/agenda">Agenda CRTR</a></li>
          <li><a href="/">Temporada 2024</a></li>
          <li><a href="/">Ranking</a></li>
          <li><a href="/">Lives</a></li>
          <li><a href="/">Informações</a></li>
        </ul>
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
  
  <style src="./Menu.css" scoped></style>
  