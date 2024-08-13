<template>
  <div id="app">
    <Menu />
    <Carousel />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Carousel from './components/Carousel.vue';

export default {
  name: 'App',
  components: {
    Menu,
    Carousel,
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
}
</style>
