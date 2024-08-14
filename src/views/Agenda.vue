<template>
    <div class="agenda">
      <h1>Calendário de Eventos</h1>
      <p>Bem-vindo à página de Agenda. Aqui você encontrará todos os eventos e atividades programadas.</p>
      
      <!-- Lista de eventos com imagens -->
      <div class="events-list">
        <div class="event">
          <img src="../assets/eventos/image.png" alt="Evento 1" class="event-image" />
          <div class="event-details">
            <h2>Evento 1</h2>
            <p>Descrição do Evento 1.</p>
          </div>
        </div>
        <div class="event">
          <img src="../assets/eventos/image2.png" alt="Evento 2" class="event-image" />
          <div class="event-details">
            <h2>Evento 2</h2>
            <p>Descrição do Evento 2.</p>
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
  