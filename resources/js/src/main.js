import '@resources/sass/app.scss';
import { createApp } from 'vue';
import router from '@/router/routes.js';
import App from './App.vue';


 const app = createApp(App);
 app.use(router);
 app.mount('#app');
