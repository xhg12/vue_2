//引入Vue
import Vue from "vue";
//引入vue-router
import VueRouter from "vue-router";
//声明使用路由
Vue.use(VueRouter);
//引入routs
import routes from "./routes";
//创建路由对象，并暴露出去
export default new VueRouter({
  mode: "history", //history--地址栏中没有#   hash--地址栏中有#
  routes
});
