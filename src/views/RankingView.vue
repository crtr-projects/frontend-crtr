<template>
  <div class="ranking-view-container">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      expandedYears: [],  // Agora usamos um array para armazenar múltiplos anos expandidos
      availableYears: ['2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'],
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
competidores2022: [
  { nome: 'Competidor Alpha', pontuacao: '155' },
  { nome: 'Competidor Beta', pontuacao: '145' },
  { nome: 'Competidor Gamma', pontuacao: '140' },
  { nome: 'Competidor Delta', pontuacao: '135' },
  { nome: 'Competidor Epsilon', pontuacao: '130' },
  { nome: 'Competidor Zeta', pontuacao: '125' },
  { nome: 'Competidor Eta', pontuacao: '120' },
  { nome: 'Competidor Theta', pontuacao: '115' },
  { nome: 'Competidor Iota', pontuacao: '110' },
  { nome: 'Competidor Kappa', pontuacao: '105' },
],
competidores2021: [
  { nome: 'Competidor Uno', pontuacao: '165' },
  { nome: 'Competidor Dos', pontuacao: '155' },
  { nome: 'Competidor Tres', pontuacao: '150' },
  { nome: 'Competidor Cuatro', pontuacao: '145' },
  { nome: 'Competidor Cinco', pontuacao: '140' },
  { nome: 'Competidor Seis', pontuacao: '135' },
  { nome: 'Competidor Siete', pontuacao: '130' },
  { nome: 'Competidor Ocho', pontuacao: '125' },
  { nome: 'Competidor Nueve', pontuacao: '120' },
  { nome: 'Competidor Diez', pontuacao: '115' },
],
competidores2020: [
  { nome: 'Competidor Red', pontuacao: '170' },
  { nome: 'Competidor Blue', pontuacao: '160' },
  { nome: 'Competidor Green', pontuacao: '155' },
  { nome: 'Competidor Yellow', pontuacao: '150' },
  { nome: 'Competidor Purple', pontuacao: '145' },
  { nome: 'Competidor Orange', pontuacao: '140' },
  { nome: 'Competidor Pink', pontuacao: '135' },
  { nome: 'Competidor Brown', pontuacao: '130' },
  { nome: 'Competidor Black', pontuacao: '125' },
  { nome: 'Competidor White', pontuacao: '120' },
],
competidores2019: [
  { nome: 'Competidor Iron', pontuacao: '175' },
  { nome: 'Competidor Bronze', pontuacao: '165' },
  { nome: 'Competidor Silver', pontuacao: '160' },
  { nome: 'Competidor Gold', pontuacao: '155' },
  { nome: 'Competidor Platinum', pontuacao: '150' },
  { nome: 'Competidor Diamond', pontuacao: '145' },
  { nome: 'Competidor Ruby', pontuacao: '140' },
  { nome: 'Competidor Sapphire', pontuacao: '135' },
  { nome: 'Competidor Emerald', pontuacao: '130' },
  { nome: 'Competidor Topaz', pontuacao: '125' },
],
competidores2018: [
  { nome: 'Competidor Ace', pontuacao: '180' },
  { nome: 'Competidor King', pontuacao: '170' },
  { nome: 'Competidor Queen', pontuacao: '165' },
  { nome: 'Competidor Jack', pontuacao: '160' },
  { nome: 'Competidor Joker', pontuacao: '155' },
  { nome: 'Competidor Bishop', pontuacao: '150' },
  { nome: 'Competidor Knight', pontuacao: '145' },
  { nome: 'Competidor Rook', pontuacao: '140' },
  { nome: 'Competidor Pawn', pontuacao: '135' },
  { nome: 'Competidor Castle', pontuacao: '130' },
],
competidores2017: [
  { nome: 'Competidor North', pontuacao: '185' },
  { nome: 'Competidor South', pontuacao: '175' },
  { nome: 'Competidor East', pontuacao: '170' },
  { nome: 'Competidor West', pontuacao: '165' },
  { nome: 'Competidor Central', pontuacao: '160' },
  { nome: 'Competidor Northwest', pontuacao: '155' },
  { nome: 'Competidor Northeast', pontuacao: '150' },
  { nome: 'Competidor Southwest', pontuacao: '145' },
  { nome: 'Competidor Southeast', pontuacao: '140' },
  { nome: 'Competidor Center', pontuacao: '135' },
],
competidores2016: [
  { nome: 'Competidor Alpha', pontuacao: '190' },
  { nome: 'Competidor Beta', pontuacao: '180' },
  { nome: 'Competidor Gamma', pontuacao: '175' },
  { nome: 'Competidor Delta', pontuacao: '170' },
  { nome: 'Competidor Epsilon', pontuacao: '165' },
  { nome: 'Competidor Zeta', pontuacao: '160' },
  { nome: 'Competidor Eta', pontuacao: '155' },
  { nome: 'Competidor Theta', pontuacao: '150' },
  { nome: 'Competidor Iota', pontuacao: '145' },
  { nome: 'Competidor Kappa', pontuacao: '140' },
],
competidores2015: [
  { nome: 'Competidor Omega', pontuacao: '195' },
  { nome: 'Competidor Alpha', pontuacao: '185' },
  { nome: 'Competidor Beta', pontuacao: '180' },
  { nome: 'Competidor Gamma', pontuacao: '175' },
  { nome: 'Competidor Delta', pontuacao: '170' },
  { nome: 'Competidor Epsilon', pontuacao: '165' },
  { nome: 'Competidor Zeta', pontuacao: '160' },
  { nome: 'Competidor Eta', pontuacao: '155' },
  { nome: 'Competidor Theta', pontuacao: '150' },
  { nome: 'Competidor Iota', pontuacao: '145' },
],
    };
  },
  methods: {
    toggleAccordion(year) {
      if (this.isYearExpanded(year)) {
        this.expandedYears = this.expandedYears.filter(y => y !== year); // Fecha o acordeão se já estiver aberto
      } else {
        this.expandedYears.push(year); // Adiciona o ano ao array para abrir o acordeão
      }
    },
    isYearExpanded(year) {
      return this.expandedYears.includes(year); // Verifica se o ano está no array de anos expandidos
    },
    getCompetidores(year) {
      return year === '2024' ? this.competidores2024 : this.competidores2023;
    }
  },
};
</script>

<!-- Importando o CSS separado -->
<style src="../views/RankingView.css"></style>
