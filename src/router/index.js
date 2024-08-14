import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Agenda from '../views/Agenda.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/agenda', component: Agenda },
  // Outras rotas
  { path: '/:pathMatch(.*)*', component: NotFound }, // Captura todas as rotas não encontradas
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
