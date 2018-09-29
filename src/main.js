import Vue from "vue";
import App from "./App";

Vue.config.productionTip = false;
App.mpType = "app"; //为了与后面要讲的小程序页面组件所区分开来

const app = new Vue(App);
app.$mount();

export default {
  config: {}
};
