import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import filters from './filters';

Vue.config.productionTip = false;

new Vue({
  router,
  filters,
  render: h => h(App)
}).$mount("#app");
