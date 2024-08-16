// Importa as funções necessárias para criar o roteamento e definir o histórico
import { createRouter, createWebHistory } from 'vue-router';

// Importa as views que serão utilizadas como componentes em cada rota
import Home from '../views/Home.vue';
import Agenda from '../views/Agenda.vue';
import NotFound from '../views/NotFound.vue';
import GaleriaView from '../views/GaleriaView.vue';
import LojaOficial from '../views/LojaOficial.vue';

// Define as rotas da aplicação
const routes = [
  { path: '/', component: Home },                // Rota para a página inicial
  { path: '/agenda', component: Agenda },         // Rota para a página de Agenda
  { path: '/galeria', component: GaleriaView },   // Rota para a página de Galeria de Fotos
  { path: '/loja', component: LojaOficial },      // Rota para a página da Loja Oficial
  { path: '/:pathMatch(.*)*', component: NotFound }, // Rota para qualquer caminho não encontrado (404)
];

// Cria o roteador da aplicação
const router = createRouter({
  history: createWebHistory(),  // Define o tipo de histórico a ser usado (HTML5 history mode)
  routes,                       // Associa as rotas definidas acima ao roteador

  // Define o comportamento do scroll ao navegar entre as rotas
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;  // Se houver uma posição salva, retorna para ela (ex.: após usar o botão "Voltar" do navegador)
    } else {
      return { top: 0 };     // Caso contrário, rola para o topo da página ao mudar de rota
    }
  },
});

// Exporta o roteador para ser usado na aplicação
export default router;
