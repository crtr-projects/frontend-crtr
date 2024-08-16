import { createStore } from 'vuex';
import produtos from './modules/produtos'; // Importa o módulo produtos

export default createStore({
  modules: {
    produtos, // Registra o módulo produtos
  },
});
