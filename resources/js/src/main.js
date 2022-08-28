import '@resources/sass/app.scss';
import axios from 'axios'
import { createApp } from 'vue';
import router from '@/router';
import store from '@/store';
import App from './App.vue';

axios.defaults.withCredentials = true;

 const app = createApp(App);
 app.use(router);
 app.use(store);
 app.mount('#app');
