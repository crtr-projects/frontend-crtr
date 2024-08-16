import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';  // Importa a store
import './assets/main.css';   // Importe o CSS global

createApp(App)
  .use(router)
  .use(store)                 // Usa a store
  .mount('#app');
