import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTableCells, faGrip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import './style.css';
import App from './App.vue';

library.add(faTableCells, faGrip);

const app = createApp(App);
app.component('FontAwesomeIcon', FontAwesomeIcon);
app.mount('#app');