import createApp from './app';
import createRouter from './router';

const { app } = createApp();
const router = createRouter();
app.$mount('#app');
