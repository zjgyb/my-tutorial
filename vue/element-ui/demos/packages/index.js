import Test from "./src/test";

// 按需加载时使用
Test.install = function(Vue) {
  Vue.component(Test.name, Test);
};

export default Test;
