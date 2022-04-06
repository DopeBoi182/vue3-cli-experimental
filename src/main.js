import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'jquery/src/jquery.js';
import 'bootstrap3';
import './assets/css/mine.css'

window.axios = require('axios');

createApp(App).use(router).mount('#app')
