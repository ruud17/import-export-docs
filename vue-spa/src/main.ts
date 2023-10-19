import './assets/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import vuetify from './plugins/vuetify';

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vuetify);

app.config.errorHandler = (err, instance, info) => {
  // report error to tracking services
};

app.mount('#app');
