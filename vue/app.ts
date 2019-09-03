import { Vue, Provide } from 'vue-property-decorator';
import createRouter from './router';
import App from './page/App.vue';
//  context：请求上下文

export default function() {
  const router = createRouter();
  const app = new Vue({
    router,
    render(h) {
      return h(App);
    },
  });
}
