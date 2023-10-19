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
  // log the error for debugging
  console.error(`INSTANCE: ${instance} - ERROR:${err} - INFO: ${info}`);

  // TO DO when the app grows up:
  // - Send this error to an error tracking service like Sentry.
  // - ?Display a user-friendly error message to your users.
  // - ?Or conditionally handle different kinds of errors based on the error message or type.
};

app.mount('#app');
