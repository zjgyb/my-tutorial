import Vue from "vue";
import Test from "../packages/test";

Vue.component(Test.name, Test);

// 按需加载
export {
  Test
}