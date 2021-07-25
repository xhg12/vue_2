// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
// import VueResource from "vue-resource";
// //声明使用该插件
// Vue.use(VueResource);
//定义一个事件总线对象
Vue.prototype.$bus = new Vue();
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
