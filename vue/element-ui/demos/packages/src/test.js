export default {
  name: "MyTest",
  componentName: "MyTest",
  render(h) {
    return h(
      "div",
      {
        class: "my-test"
      },
      this.$slots.default
    );
  }
};
