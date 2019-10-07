import Vue from "vue";
import App from "./App.vue";
// 实现按需加载
import { Test } from "./index";

Vue.config.productionTip = false;
Vue.use(Test);

new Vue({
  render: h => h(App)
}).$mount("#app");
