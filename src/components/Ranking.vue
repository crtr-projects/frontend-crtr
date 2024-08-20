<template>
  <div class="ranking-view-container-menu">
    <div class="ranking-accordion">
      <div v-for="year in availableYears" :key="year" class="accordion-item">
        <button 
          class="accordion-button"
          :aria-expanded="isYearExpanded(year)"
          @click="toggleAccordion(year)"
        >
          Ranking {{ year }}
          <span :class="['accordion-icon', isYearExpanded(year) ? 'open' : '']">
            &#9660;
          </span>
        </button>
        <div 
          class="accordion-content"
          :style="{ maxHeight: isYearExpanded(year) ? '500px' : '0' }"
        >
          <table class="ranking-table">
            <thead>
              <tr>
                <th>Posição</th>
                <th>Nome</th>
                <th>Pontuação</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(competidor, index) in getCompetidores(year)" :key="index" :class="index % 2 === 0 ? 'black-row' : 'red-row'">
                <td>{{ index + 1 }}</td>
                <td>{{ competidor.nome }}</td>
                <td>{{ competidor.pontuacao }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Botão "Veja mais" -->
    <button class="more-button" @click="goToRankingView">Veja mais</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedYears: [],
      availableYears: ['2024', '2023'],
competidores2024: [
  { nome: 'Competidor 1', pontuacao: '150' },
  { nome: 'Competidor 2', pontuacao: '140' },
  { nome: 'Competidor 3', pontuacao: '135' },
  { nome: 'Competidor 4', pontuacao: '130' },
  { nome: 'Competidor 5', pontuacao: '125' },
  { nome: 'Competidor 6', pontuacao: '120' },
  { nome: 'Competidor 7', pontuacao: '115' },
  { nome: 'Competidor 8', pontuacao: '110' },
  { nome: 'Competidor 9', pontuacao: '105' },
  { nome: 'Competidor 10', pontuacao: '100' },
],
competidores2023: [
  { nome: 'Competidor A', pontuacao: '160' },
  { nome: 'Competidor B', pontuacao: '150' },
  { nome: 'Competidor C', pontuacao: '145' },
  { nome: 'Competidor D', pontuacao: '140' },
  { nome: 'Competidor E', pontuacao: '135' },
  { nome: 'Competidor F', pontuacao: '130' },
  { nome: 'Competidor G', pontuacao: '125' },
  { nome: 'Competidor H', pontuacao: '120' },
  { nome: 'Competidor I', pontuacao: '115' },
  { nome: 'Competidor J', pontuacao: '110' },
],
    };
  },
  methods: {
    toggleAccordion(year) {
      if (this.isYearExpanded(year)) {
        this.expandedYears = this.expandedYears.filter(y => y !== year);
      } else {
        this.expandedYears.push(year);
      }
    },
    isYearExpanded(year) {
      return this.expandedYears.includes(year);
    },
    getCompetidores(year) {
      return year === '2024' ? this.competidores2024 : this.competidores2023;
    },
    goToRankingView() {
      this.$router.push('/ranking');
    }
  },
};
</script>

<style src="../views/RankingView.css" scoped></style>
