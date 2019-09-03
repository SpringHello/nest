import Router from 'vue-router';
import Home from '../page/Home';

export default () => {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: '',
        component: Home,
      },
    ],
  });
};
