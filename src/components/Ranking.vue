<template>
  <div class="ranking-container">
    <h1 class="ranking-title">Ranking dos Competidores CRTR - 2024</h1>
    <p class="ranking-highlight">Confira o nosso ranking de competidores e suas pontuações atualizadas!</p>
    <table class="ranking-table">
      <thead>
        <tr>
          <th>Posição</th>
          <th>Nome</th>
          <th>Pontuação</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(competidor, index) in competidores" :key="index" :class="index % 2 === 0 ? 'black-row' : 'red-row'">
          <td>{{ index + 1 }}</td>
          <td>{{ competidor.nome }}</td>
          <td>{{ competidor.pontuacao }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  data() {
    return {
      competidores: [
        { nome: 'Competidor 1', pontuacao: '150' },
        { nome: 'Competidor 2', pontuacao: '140' },
        { nome: 'Competidor 3', pontuacao: '130' },
        { nome: 'Competidor 4', pontuacao: '120' },
        { nome: 'Competidor 5', pontuacao: '110' },
        { nome: 'Competidor 6', pontuacao: '100' },
        // Adicione mais competidores conforme necessário
      ],
    };
  },
};
</script>

<style src="../components/Ranking.css" scoped></style>
