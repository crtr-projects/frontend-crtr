<template>
  <div class="ranking-container">
    <h1 class="ranking-title">Ranking dos Competidores CRTR</h1>
    <p class="ranking-highlight">Confira o nosso ranking de competidores e suas pontuações atualizadas!</p>

    <!-- Menu Suspenso para Selecionar o Ano -->
    <div class="ranking-year-selector">
      <select v-model="selectedYear">
        <option v-for="year in availableYears" :key="year" :value="year">
          {{ year }}
        </option>
      </select>
    </div>

    <!-- Renderiza a tabela correspondente ao ano selecionado -->
    <div v-if="selectedYear">
      <table v-if="selectedYear === '2024'" class="ranking-table">
        <!-- Tabela para 2024 -->
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(competidor, index) in competidores2024" :key="index" :class="index % 2 === 0 ? 'black-row' : 'red-row'">
            <td>{{ index + 1 }}</td>
            <td>{{ competidor.nome }}</td>
            <td>{{ competidor.pontuacao }}</td>
          </tr>
        </tbody>
      </table>

      <table v-if="selectedYear === '2023'" class="ranking-table">
        <!-- Tabela para 2023 -->
        <thead>
          <tr>
            <th>Posição</th>
            <th>Nome</th>
            <th>Pontuação</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(competidor, index) in competidores2023" :key="index" :class="index % 2 === 0 ? 'black-row' : 'red-row'">
            <td>{{ index + 1 }}</td>
            <td>{{ competidor.nome }}</td>
            <td>{{ competidor.pontuacao }}</td>
          </tr>
        </tbody>
      </table>

      <!-- Adicione outras tabelas para outros anos aqui -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedYear: '2024', // Ano inicial selecionado
      availableYears: ['2024', '2023'], // Anos disponíveis no menu suspenso
      competidores2024: [
        { nome: 'Competidor 1', pontuacao: '150' },
        { nome: 'Competidor 2', pontuacao: '140' },
        // Outros competidores...
      ],
      competidores2023: [
        { nome: 'Competidor A', pontuacao: '160' },
        { nome: 'Competidor B', pontuacao: '130' },
        // Outros competidores...
      ],
    };
  },
};
</script>

<style src="../components/Ranking.css" scoped></style>
