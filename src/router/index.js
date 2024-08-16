import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Agenda from '../views/Agenda.vue';
import NotFound from '../views/NotFound.vue';
import GaleriaView from '../views/GaleriaView.vue';
import LojaOficial from '../views/LojaOficial.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/agenda', component: Agenda },
  { path: '/galeria', component: GaleriaView },
  { path: '/loja', component: LojaOficial },
  { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
