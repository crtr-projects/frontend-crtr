<template>
  <div class="ranking-view-container">
    <div class="ranking-accordion">
      <div v-for="year in availableYears" :key="year" class="accordion-item">
        <button 
          class="accordion-button"
          :aria-expanded="expandedYear === year"
          @click="toggleAccordion(year)"
        >
          Ranking {{ year }}
          <span :class="['accordion-icon', expandedYear === year ? 'open' : '']">
            &#9660;
          </span>
        </button>
        <div 
          class="accordion-content"
          :style="{ maxHeight: expandedYear === year ? '500px' : '0' }"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedYear: null,
      availableYears: ['2024', '2023'],
      competidores2024: [
        { nome: 'Competidor 1', pontuacao: '150' },
        { nome: 'Competidor 2', pontuacao: '140' },
      ],
      competidores2023: [
        { nome: 'Competidor A', pontuacao: '160' },
        { nome: 'Competidor B', pontuacao: '130' },
      ],
    };
  },
  methods: {
    toggleAccordion(year) {
      this.expandedYear = this.expandedYear === year ? null : year;
    },
    getCompetidores(year) {
      return year === '2024' ? this.competidores2024 : this.competidores2023;
    }
  },
};
</script>

<!-- Importando o CSS separado -->
<style src="../views/RankingView.css"></style>
