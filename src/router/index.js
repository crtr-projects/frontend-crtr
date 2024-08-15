import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';               // Importa a view Home
import Agenda from '../views/Agenda.vue';           // Importa a view Agenda
import NotFound from '../views/NotFound.vue';       // Importa a view NotFound
import GaleriaView from '../views/GaleriaView.vue'; // Importa a view GaleriaView
import LojaOficial from '../views/LojaOficial.vue'; // Importa a nova view LojaOficial

const routes = [
  { path: '/', component: Home },                 // Rota para a página inicial
  { path: '/agenda', component: Agenda },         // Rota para a página de Agenda
  { path: '/galeria', component: GaleriaView },   // Rota para a nova view GaleriaView
  { path: '/loja', component: LojaOficial },      // Rota para a nova view LojaOficial
  { path: '/:pathMatch(.*)*', component: NotFound }, // Captura todas as rotas não encontradas
];

const router = createRouter({
  history: createWebHistory(),  // Usa o histórico da web para navegação
  routes,                      // Define as rotas
});

export default router;
