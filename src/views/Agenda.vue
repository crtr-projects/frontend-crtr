<template>
    <div class="agenda">
      <h1>Calendário de Eventos</h1>
      <p>Bem-vindo à página de Agenda. Aqui você encontrará todos os eventos e atividades programadas.</p>
      
      <!-- Lista de eventos com imagens -->
      <div class="events-list">
        <div class="event">
          <img src="../assets/eventos/image.png" alt="Evento 1" class="event-image" />
          <div class="event-details">
            <h2>Rodeio Fest Show</h2>
            <p>A ARENA VAI TREMER!! 🔥
              <br> O circuito de rodeio que mais cresce no estado do Espírito Santo está chegando com a 9ª Etapa da temporada 2024.Prepare-se para muita emoção e adrenalina na arena do II Rodeio Fest Show.
              <br> 🗓️ 23 a 25 de agosto.
              <br> 📍 Ecoporanga/ES.
              <br> Mais uma vez, vamos fazer história Ecoporanga/ES.</p>
          </div>
        </div>
        <div class="event">
          <img src="../assets/eventos/image2.png" alt="Evento 2" class="event-image" />
          <div class="event-details">
            <h2>Expo Agro Castelo</h2>
            <p>Vem aí a 33ª EXPOAGRO de Castelo/ES e com ela a 14ª etapa da @fecar_es 
              <br> Prepare-se Castelo/ES e toda a região, serão 04 dias de muita emoção e adrenalina dentro da arena do circuito de rodeio que mais cresce no estado do Espírito Santo. 🚀🤠
              <br> 🗓️ 01 a 04 de Agosto.
              <br> 📍 Castelo/ES.
              <br> Mais uma vez, vamos fazer história @expoagrodecastelo2024</p>
          </div>
        </div>
        <!-- Adicione mais eventos conforme necessário -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Agenda',
  };
  </script>
  
  <style src="./Agenda.css"></style>
  