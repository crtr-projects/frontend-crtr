<template>
  <div id="app">
    <Menu />
    <Carousel />
    <buttons />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue';
import Carousel from './components/Carousel.vue';
import Buttons from './components/Buttons.vue';


export default {
  name: 'App',
  components: {
    Menu,
    Carousel,
    Buttons,
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
