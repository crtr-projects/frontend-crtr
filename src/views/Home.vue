<template>
    <div>
      <Carousel />
      <Buttons />
      <YouTubePreview />
    </div>
  </template>
  
  <script>
  import Carousel from '../components/Carousel.vue';
  import Buttons from '../components/Buttons.vue';
  import YouTubePreview from '../components/YouTubePreview.vue';
  
  export default {
    name: 'Home',
    components: {
        Carousel,
        Buttons,
        YouTubePreview,
    },

    name: 'Home',
  };
  </script>

<style src="./Home.css"></style>

  