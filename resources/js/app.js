require('./bootstrap');

import { createApp } from 'vue';
import i18n from '~/plugins/i18n';
import Cookies from 'js-cookie';
import App from './App.vue';

const app = createApp(App);

app
    .use(i18n)
    .mount('#app');