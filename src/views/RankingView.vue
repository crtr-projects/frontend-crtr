<template>
    <div class="ranking-view-container">
      <Ranking />
    </div>
  </template>
  
  <script>
  import Ranking from '../components/Ranking.vue';
  
  export default {
    name: 'RankingView',
    components: {
      Ranking,
    },
  };
  </script>
  
  <style src="../views/RankingView.css" scoped></style>
  