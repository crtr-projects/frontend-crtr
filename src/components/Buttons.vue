<template>
    <div class="action-buttons">
      <button v-for="(button, index) in buttons" :key="index" class="action-button">
        {{ button.label }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ActionButtons',
    data() {
      return {
        buttons: [
          { label: 'Ação 1' },
          { label: 'Ação 2' },
          { label: 'Ação 3' },
          { label: 'Ação 4' },
          { label: 'Ação 5' },
          { label: 'Ação 6' },
          { label: 'Ação 7' },
          { label: 'Ação 8' },
        ],
      };
    },
  };
  </script>
  
  <style src="./Buttons.css" scoped></style>
  