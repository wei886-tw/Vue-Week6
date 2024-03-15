import 'bootstrap/scss/bootstrap.scss';
import * as Vue from 'vue'; // in Vue 3
import axios from 'axios';
import VueAxios from 'vue-axios';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);


app.mount('#app');
