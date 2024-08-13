<template>
    <div>
      <button @click="toggleMenu" class="menu-button">
        ☰
      </button>
      <nav :class="{ 'open': isMenuOpen }" class="menu">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
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
    },
  };
  </script>
  
  <style src="./Menu.css" scoped></style>
  